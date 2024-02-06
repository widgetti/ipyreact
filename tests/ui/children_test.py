import ipywidgets
import playwright.sync_api
from solara import display

import ipyreact


def test_children_text(solara_test, page_session: playwright.sync_api.Page):
    def on_click(event_data):
        b.children = ["Clicked"]

    b = ipyreact.Widget(
        _type="button",
        events={"onClick": on_click},
        children=["Click me"],
        props={"class": "test-button"},
    )

    display(b)
    button = page_session.locator(".test-button")
    button.click()
    page_session.locator(".test-button >> text=Clicked").wait_for()


def test_children_react(solara_test, page_session: playwright.sync_api.Page):
    def on_click(event_data):
        b.children = [
            ipyreact.Widget(
                _type="span", props={"className": "test-span"}, children=["direct child"]
            )
        ]

    b = ipyreact.Widget(
        _type="button",
        events={"onClick": on_click},
        children=["Click me"],
        props={"className": "test-button"},
    )

    display(b)
    button = page_session.locator(".test-button")
    button.click()
    # direct child, not a grandchild (e.g. extra div around it)
    page_session.locator(".test-button > .test-span").wait_for()


def test_children_ipywidgets(solara_test, page_session: playwright.sync_api.Page):
    def on_click(event_data):
        html = ipywidgets.HTML(value="not a direct child")
        html.add_class("test-html")
        b.children = [html]

    b = ipyreact.Widget(
        _type="button",
        events={"onClick": on_click},
        children=["Click me"],
        props={"className": "test-button"},
    )

    display(b)
    button = page_session.locator(".test-button")
    button.click()
    # not per se a direct child
    page_session.locator(".test-button >> .test-html").wait_for()
