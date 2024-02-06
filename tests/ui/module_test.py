import playwright.sync_api
from solara import display


def test_module(ipywidgets_runner, page_session: playwright.sync_api.Page, assert_solara_snapshot):
    def kernel_code():
        import ipyreact

        ipyreact.define_module(
            "my-module",
            """
        import * as React from "react";

        export function ClickButton({value, setValue}) {
            return React.createElement("button", {
                className: "counter-widget",
                onClick: () => setValue(value + 1),
                children: [`${value|| 0} clicks`],
            })
        };
        """,
        )

        b = ipyreact.ValueWidget(_module="my-module", _type="ClickButton")
        display(b)

    ipywidgets_runner(kernel_code)
    counter = page_session.locator(".counter-widget")
    counter.click()
    page_session.locator("text=1 clicks").wait_for()
