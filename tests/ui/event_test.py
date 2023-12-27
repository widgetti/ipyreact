import playwright.sync_api
import traitlets
from IPython.display import display

import ipyreact


class ButtonWithHandler(ipyreact.ReactWidget):
    label = traitlets.Unicode("Click me").tag(sync=True)
    _esm = """
        import * as React from "react";
        export default function({on_click, label}) {
            return <button className="event-button" onClick={() => on_click()}>
                {label}
            </button>
        };
    """

    def event_on_click(self):
        self.label = "Clicked"


def test_event(solara_test, page_session: playwright.sync_api.Page):
    b = ButtonWithHandler()
    display(b)
    button = page_session.locator(".event-button")
    button.click()
    page_session.locator(".event-button >> text=Clicked").wait_for()
    assert b.label == "Clicked"
