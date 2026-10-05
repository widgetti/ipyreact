import warnings
from pathlib import Path
from typing import Dict, List, Optional, Union

import traitlets
from ipywidgets import DOMWidget
from traitlets import Int, Unicode, default

from ._frontend import module_name, module_version

_standard_dependencies: List[str] = []
# the latest widget per name, a closed one provides nothing to depend on
_module_widgets: Dict[str, "Module"] = {}
# like solara, a name keeps the dependencies it was first defined with, so a
# redefinition cannot pick up later modules and form a cycle (a->[b], b->[a])
_module_dependencies: Dict[str, List[str]] = {}


class Module(DOMWidget):
    _model_name = Unicode("Module").tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode("ModuleView").tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    name = Unicode(allow_none=False).tag(sync=True)
    code = Unicode("").tag(sync=True)
    # when set, the module is imported from this url instead of shipping the
    # code over the widget model (e.g. a bundle served from a static dir)
    url = Unicode(None, allow_none=True).tag(sync=True)
    dependencies = traitlets.List(Unicode(), allow_none=True).tag(sync=True)
    status = Unicode(allow_none=True).tag(sync=True)
    react_version = Int(18).tag(sync=True)

    @default("dependencies")
    def _default_dependencies(self):
        return [k for k in get_module_names() if k != self.name and _is_live(k)]


def _is_live(name):
    widget = _module_widgets.get(name)
    return widget is None or widget.comm is not None


def get_module_names():
    return _standard_dependencies


def define_module(
    name,
    module: Union[str, Path, None] = None,
    *,
    code: Optional[str] = None,
    url: Optional[str] = None,
    dependencies: Optional[List[str]] = None,
):
    """Register a ES module under a name.

    Parameters
    ----------
    name: str
        Name of the es module to register
    module: Path
        Path to the module source on disk
    code: str
        The module source as a string
    url: str
        A url the module is served from (e.g. a bundle in the app's
        static dir)
    dependencies: list of str
        Module names to wait for before loading. Defaults to the
        dependencies of the first definition of this name, else to the live
        modules defined earlier in this process.
    """
    if sum(x is not None for x in (module, code, url)) != 1:
        raise TypeError("pass exactly one of module (a Path), code or url")
    if isinstance(module, str):
        # the pre-0.6 API: a plain str was module code
        warnings.warn(
            "passing module code as a plain str is deprecated, use code=... (or url=... for a url)",
            DeprecationWarning,
            stacklevel=2,
        )
        code = module
        module = None
    if code is None and url is None:
        assert module is not None
        code = module.read_text(encoding="utf8")
    widget = _module_widgets.get(name)
    if widget is not None and widget.comm is not None:
        # redefining updates the live widget, like solara does: a second
        # widget would get the modules defined after the first as
        # dependencies, and wait for them forever (a->[b], b->[a])
        with widget.hold_sync():
            widget.url = url
            widget.code = code or ""
            if dependencies is not None:
                widget.dependencies = dependencies
        return widget
    if dependencies is None:
        dependencies = _module_dependencies.get(name)
    if name not in _standard_dependencies:
        _standard_dependencies.append(name)
    kwargs = {} if dependencies is None else {"dependencies": dependencies}
    widget = Module(code=code or "", url=url, name=name, **kwargs)
    _module_dependencies.setdefault(name, widget.dependencies)
    _module_widgets[name] = widget
    return widget
