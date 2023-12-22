import ipyreact


def test_create():
    class Counter(ipyreact.ReactWidget):
        _esm = """
        import * as React from "react";

        export default function({value, set_value, debug}) {
            return <button class="confetti-widget" onClick={() => set_value(value + 1)}>
                {value || 0} clicks
            </button>
        };"""

    Counter()
