import numpy as np
import playwright.sync_api
from IPython.display import display

import ipyreact

code = """
import {Button} from '@mui/material';
import * as React from "react";

export default function({floatArrayDataView}) {
    const floatArray = new Float32Array(floatArrayDataView.buffer);
    console.log({floatArray, floatArrayDataView});
    return <div>{`v:${floatArray[0]}`}</div>
};
"""


def test_material_ui(solara_test, assert_solara_snapshot, page_session: playwright.sync_api.Page):
    class SerializeTest(ipyreact.ReactWidget):
        _esm = code

    ar = np.array([42.0], dtype=np.float32)
    b = SerializeTest(props={"floatArrayDataView": memoryview(ar)})
    display(b)

    page_session.locator("text=42").wait_for()
