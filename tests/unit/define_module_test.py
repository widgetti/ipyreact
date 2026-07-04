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
