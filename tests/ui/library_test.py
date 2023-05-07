import ipyreact
import playwright.sync_api
from IPython.display import display

code = \
"""
import Button from '@mui/material/Button';
import * as React from "react"; 

export default function({value, set_value, debug}) {
    return <Button variant="contained" onClick={() => set_value(value + 1)}>
        {value || 0} times
    </Button>
};
"""

def test_material_ui(solara_test, assert_solara_snapshot, page_session: playwright.sync_api.Page):
    class Button(ipyreact.ReactWidget):
        _esm = code
    b = Button()
    display(b)

    button = page_session.locator("text=0 times")
    button.click()
    button = page_session.locator("text=1 times")
    button.wait_for()
    page_session.wait_for_timeout(300)  # wait for animation
    assert_solara_snapshot(button.screenshot())
