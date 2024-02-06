import threading
from typing import Dict

import traitlets
from ipywidgets import DOMWidget
from traitlets import Unicode

from ._frontend import module_name, module_version

_effective_import_map: Dict = {}
_import_map_widget = None
_lock = threading.Lock()


class ImportMap(DOMWidget):
    _model_name = Unicode("ImportMap").tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode("ImportMapView").tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    import_map = traitlets.Dict({}).tag(sync=True)


def define_import_map(imports={}, scopes={}):
    """Define the import map for ESM modules.

    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap

    Example:

    ```python
    import ipyreact
    ipyreact.define_import_map(
        imports={
            "canvas-confetti": "https://esm.sh/canvas-confetti@1.6.0",
        }
    )
    ```

    Now you can import the module `canvas-confetti` in your ESM modules.

    ```javascript
    import { confetti } from "canvas-confetti";
    ...
    ```

    """
    global _effective_import_map
    _effective_import_map = {
        "imports": {**_effective_import_map.get("imports", {}), **imports},
        "scopes": {**_effective_import_map.get("scopes", {}), **scopes},
    }
    _update_import_map()


def _get_import_map_widget():
    global _import_map_widget
    with _lock:
        if _import_map_widget is None:
            _import_map_widget = ImportMap(import_map=_effective_import_map)
        return _import_map_widget


def _update_import_map():
    _get_import_map_widget().import_map = _effective_import_map


# still for backwards compatibility
define_import_map(
    {
        "@mui/material": "https://esm.sh/@mui/material@5.11.10?external=react,react-dom",
        "@mui/material/": "https://esm.sh/@mui/material@5.11.10&external=react,react-dom/",
        "@mui/icons-material/": "https://esm.sh/@mui/icons-material/?external=react,react-dom",
        "canvas-confetti": "https://esm.sh/canvas-confetti@1.6.0?external=react,react-dom",
    }
)
