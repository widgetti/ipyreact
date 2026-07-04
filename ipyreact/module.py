import warnings
from pathlib import Path
from typing import List, Optional, Union

import traitlets
from ipywidgets import DOMWidget
from traitlets import Int, Unicode, default

from ._frontend import module_name, module_version

_standard_dependencies: List[str] = []


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
        return [k for k in get_module_names() if k != self.name]


def get_module_names():
    return _standard_dependencies


def define_module(name, module: Union[str, Path, None] = None, *, code: Optional[str] = None, url: Optional[str] = None):
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
    _standard_dependencies.append(name)
    if url is not None:
        return Module(url=url, name=name)
    if code is None:
        assert module is not None
        code = module.read_text(encoding="utf8")
    return Module(code=code, name=name)
