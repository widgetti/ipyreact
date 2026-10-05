from pathlib import Path

import pytest

import ipyreact


def test_define_module_url():
    module = ipyreact.define_module("t-url", url="/static/bundle.mjs")
    assert module.url == "/static/bundle.mjs"
    assert module.code == ""


def test_define_module_code():
    module = ipyreact.define_module("t-code", code="export default 1")
    assert module.code == "export default 1"
    assert module.url is None


def test_define_module_path(tmp_path: Path):
    file = tmp_path / "bundle.mjs"
    file.write_text("export default 2")
    module = ipyreact.define_module("t-path", file)
    assert module.code == "export default 2"


def test_define_module_str_is_deprecated_code():
    with pytest.warns(DeprecationWarning, match="code="):
        module = ipyreact.define_module("t-str", "export default 3")
    assert module.code == "export default 3"


def test_define_module_exactly_one():
    with pytest.raises(TypeError, match="exactly one"):
        ipyreact.define_module("t-none")
    with pytest.raises(TypeError, match="exactly one"):
        ipyreact.define_module("t-both", Path("x"), code="y")


def test_define_module_dependencies():
    ipyreact.define_module("t-deps-a", code="export default 1")
    module = ipyreact.define_module("t-deps-b", code="export default 2", dependencies=["t-deps-a"])
    assert module.dependencies == ["t-deps-a"]
    module = ipyreact.define_module("t-deps-c", code="export default 3", dependencies=[])
    assert module.dependencies == []


def test_define_module_skips_closed_dependencies():
    ipyreact.define_module("t-closed-a", code="export default 1").close()
    module = ipyreact.define_module("t-closed-b", code="export default 2")
    assert "t-closed-a" not in module.dependencies


def test_define_module_redefine_keeps_dependencies():
    a = ipyreact.define_module("t-redef-a", code="export default 1")
    b = ipyreact.define_module("t-redef-b", code="export default 2")
    assert "t-redef-a" in b.dependencies
    # re-running the cell updates the live widgets, without a cycle
    assert ipyreact.define_module("t-redef-a", code="export default 3") is a
    assert a.code == "export default 3"
    assert "t-redef-b" not in a.dependencies
    assert ipyreact.define_module("t-redef-b", url="/static/b.mjs") is b
    assert b.url == "/static/b.mjs"
    assert b.code == ""
    # a closed widget is recreated with the dependencies of its first definition
    a.close()
    a2 = ipyreact.define_module("t-redef-a", code="export default 4")
    assert a2 is not a
    assert a2.dependencies == a.dependencies
    assert ipyreact.define_module("t-redef-a", code="export default 5", dependencies=[]).dependencies == []
