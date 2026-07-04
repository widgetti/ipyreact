import playwright.sync_api
from solara import display

import ipyreact

code_template = """
import * as React from "react";

export function Label() {
    return React.createElement("div", {className: "hot-widget"}, "version %d");
};
"""


def test_module_code_hot_reload(solara_test, page_session: playwright.sync_api.Page):
    # Redefining a module must reach the browser: under solara's server,
    # define_module updates the existing per-kernel Module widget's `code`
    # trait, so the frontend has to re-import on change:code and hand the
    # fresh module to consumers created afterwards.
    ipyreact.define_module("hot-reload-module", code_template % 1)
    display(ipyreact.ValueWidget(_module="hot-reload-module", _type="Label"))
    page_session.locator(".hot-widget >> text=version 1").wait_for()

    ipyreact.define_module("hot-reload-module", code_template % 2)
    display(ipyreact.ValueWidget(_module="hot-reload-module", _type="Label"))
    page_session.locator(".hot-widget >> text=version 2").wait_for()
