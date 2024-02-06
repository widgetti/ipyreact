from pathlib import Path
from typing import List, Union

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
    code = Unicode(allow_none=False).tag(sync=True)
    dependencies = traitlets.List(Unicode(), allow_none=True).tag(sync=True)
    status = Unicode(allow_none=True).tag(sync=True)
    react_version = Int(18).tag(sync=True)

    @default("dependencies")
    def _default_dependencies(self):
        return [k for k in get_module_names() if k != self.name]


def get_module_names():
    return _standard_dependencies


def define_module(name, module: Union[str, Path]):
    """Register a ES module under a name.

    Parameters
    ----------
    name: str
        Name of the es module to register
    module: str | Path
        The module code to register
    """
    _standard_dependencies.append(name)
    return Module(code=module if not isinstance(module, Path) else module.read_text(), name=name)
