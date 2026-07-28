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


def test_module_recreated_widget_hot_reload(solara_test, page_session: playwright.sync_api.Page):
    # A *new* module widget for a name that is already registered must win
    # over the module the registry still holds. Solara closes the per-kernel
    # module widgets on a hot reload (a trait update on a closed widget never
    # reaches the browser) and creates fresh ones, so without invalidating,
    # consumers rendered afterwards keep resolving the previous module.
    from solara.server import esm, kernel_context

    ipyreact.define_module("recreate-module", code_template % 1)
    display(ipyreact.ValueWidget(_module="recreate-module", _type="Label"))
    page_session.locator(".hot-widget >> text=version 1").wait_for()

    # what context.restart() does to the module widgets on a hot reload
    kernel_id = kernel_context.get_current_context().id
    esm._modules_added_per_kernel[kernel_id]["recreate-module"].close()

    ipyreact.define_module("recreate-module", code_template % 2)
    display(ipyreact.ValueWidget(_module="recreate-module", _type="Label"))
    page_session.locator(".hot-widget >> text=version 2").wait_for()
