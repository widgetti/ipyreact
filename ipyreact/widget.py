#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Maarten A. Breddels.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from pathlib import Path

import anywidget
from ipywidgets import DOMWidget
from traitlets import Any, Bool, Dict, Int, Unicode

from ._frontend import module_name, module_version

HERE = Path(__file__).parent


class ReactWidget(anywidget.AnyWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('ReactModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('ReactView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    value = Any(None, allow_none=True).tag(sync=True)
    debug = Bool(False).tag(sync=True)
    name = Unicode(None, allow_none=True).tag(sync=True)
    react_version = Int(18).tag(sync=True)
    _cdn = Unicode("https://esm.sh/").tag
    _import_map = Dict({}).tag(sync=True)
    _import_map_default = {
        "imports": {
            "@mui/material/": "https://esm.sh/@mui/material@5.11.10/",
            "@mui/icons-material/": "https://esm.sh/@mui/icons-material/",
            "canvas-confetti": "https://esm.sh/canvas-confetti@1.6.0",
        },
        "scopes": {
        },
    }
    _esm = HERE / Path("basic.tsx")

    def __init__(self, **kwargs) -> None:
        _import_map = kwargs.pop("_import_map", {})
        _import_map = {
            "imports": {
                **self._import_map_default["imports"],
                **_import_map.get("imports", {})
            },
            "scopes": {
                **self._import_map_default["scopes"],
                **_import_map.get("scopes", {})
            },
        }
        kwargs["_import_map"] = _import_map
        super().__init__(**kwargs)

