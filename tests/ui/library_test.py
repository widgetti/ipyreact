import playwright.sync_api
from IPython.display import display

code = """
import {Button} from '@mui/material';
import * as React from "react";

export default function({value, setValue, debug}) {
    return <Button variant="contained" onClick={() => setValue(value + 1)}>
        {value || 0} times
    </Button>
};
"""


def test_material_ui(solara_test, assert_solara_snapshot, page_session: playwright.sync_api.Page):
    # this can be removed if solara adds support to ipyreact/ipyesm
    import ipyreact.importmap

    ipyreact.importmap._import_map_widget = None
    ipyreact.importmap._update_import_map()

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
