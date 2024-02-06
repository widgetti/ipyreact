#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Maarten A. Breddels.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

import typing as t
import warnings
from pathlib import Path

import anywidget
from ipywidgets import ValueWidget as ValueWidgetClassic
from ipywidgets import Widget, widget_serialization
from traitlets import Any, Bool, Dict, Int, List, Unicode, default, observe

from ._frontend import module_name, module_version

HERE = Path(__file__).parent


class Widget(anywidget.AnyWidget):
    """TODO: Add docstring here"""

    _model_name = Unicode("ReactModel").tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode("ReactView").tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    props = Dict({}, allow_none=True).tag(sync=True, **widget_serialization)
    children = List(t.cast(t.List[t.Union[Widget, str]], [])).tag(sync=True, **widget_serialization)

    # this stays on the python side
    events = Dict({})
    # this is send of the frontend (keys of events)
    _event_names = List(Unicode(), allow_none=True).tag(sync=True)
    _debug = Bool(False).tag(sync=True)
    _type = Unicode(None, allow_none=True).tag(sync=True)
    _dependencies = List(Unicode(), allow_none=True).tag(sync=True)
    _module = Unicode(None, allow_none=True).tag(sync=True)
    _react_version = Int(18).tag(sync=True)
    _cdn = Unicode("https://esm.sh/").tag

    # anywidget doesn't like if _esm isn't there
    _esm = ""

    def __init__(self, **kwargs) -> None:
        _esm = kwargs.pop("_esm", None)
        if _esm is not None:
            extra_traits = {}
            if isinstance(_esm, str):
                extra_traits["_esm"] = Unicode(str(_esm)).tag(sync=True)
            elif isinstance(_esm, Path):
                from anywidget._util import try_file_contents

                self._esm = try_file_contents(_esm)

            self.add_traits(**extra_traits)
        _ignore = ["on_msg", "on_displayed", "on_trait_change", "on_widget_constructed"]
        events = kwargs.pop("events", {})
        for method_name in dir(self):
            if method_name.startswith("event_") and method_name not in _ignore:
                event_name = method_name[len("event_") :]
                method = getattr(self, method_name)
                if method_name not in events:
                    events[event_name] = method
        _event_names = list(events)
        super().__init__(**{"_event_names": _event_names, "events": events, **kwargs})
        self.on_msg(self._handle_event)

    def _handle_event(self, _, content, buffers):
        if "event_name" in content.keys():
            event_name = content.get("event_name", "")
            data = content.get("data", {})
            event_hander = self.events.get(event_name, None)
            if event_hander is None:
                return
            if "data" not in content:
                event_hander()
            else:
                if buffers:
                    event_hander(data, buffers)
                else:
                    event_hander(data)

    @observe("events")
    def _events(self, change):
        self.event_names = list(change["new"].keys())

    @default("_dependencies")
    def _default_dependencies(self):
        import ipyreact.module

        return ipyreact.module.get_module_names()


class ValueWidget(Widget, ValueWidgetClassic):
    # the ValueWidget from ipywidgets does not add sync=True to the value trait
    value = Any(help="The value of the widget.").tag(sync=True)


# this is deprecated
class ReactWidget(ValueWidget):
    _esm = HERE / Path("basic.tsx")

    def __init__(self, **kwargs) -> None:
        warnings.warn(
            "ReactWidget is deprecated, use Widget or ValueWidget instead", DeprecationWarning
        )
        super().__init__(**kwargs)
