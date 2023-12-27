import playwright.sync_api
from IPython.display import display


def test_widget_ipyreact(
    ipywidgets_runner, page_session: playwright.sync_api.Page, assert_solara_snapshot
):
    def kernel_code():
        import ipyreact

        class Counter(ipyreact.ReactWidget):
            _esm = """
            import * as React from "react";

            export default function({value, setValue, debug}) {
                return <button class="counter-widget" onClick={() => setValue(value + 1)}>
                    {value || 0} clicks
                </button>
            };"""

        c = Counter()
        display(c)

    ipywidgets_runner(kernel_code)
    counter = page_session.locator(".counter-widget")
    counter.click()
    page_session.locator("text=1 clicks").wait_for()
    assert_solara_snapshot(counter.screenshot())
