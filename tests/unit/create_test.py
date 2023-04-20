import ipyreact

def test_create():
    class Counter(ipyreact.ReactWidget):
        _esm = """
        import * as React from "react";

        export default function({value, on_value, debug}) {
            return <button class="confetti-widget" onClick={() => on_value(value + 1)}>
                {value || 0} clicks
            </button>
        };"""
    c = Counter()