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
        b.children = [ipyreact.Widget(_type="span", props={"className": "test-span"}, children=["direct child"])]

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


def test_update_children_after_create(solara_test, page_session: playwright.sync_api.Page):
    b = ipyreact.Widget(
        _type="button",
        children=["Initial"],
        props={"class": "test-button"},
    )
    b.children = ["Updated"]

    display(b)
    page_session.locator(".test-button >> text=Updated").wait_for()


def test_update_props_after_create(solara_test, page_session: playwright.sync_api.Page):
    b = ipyreact.Widget(
        _type="button",
        children=["Button"],
        props={"class": "test-button-initial"},
    )
    b.props = {"class": "test-button-updated"}

    display(b)
    page_session.locator(".test-button-updated >> text=Button").wait_for()


def test_error_module(solara_test, page_session: playwright.sync_api.Page):
    b = ipyreact.Widget(
        _type="Foo",
        _module="bar",
        children=["should not be shown"],
    )
    display(b)
    page_session.locator("text=Unable to resolve specifier").wait_for()


def test_error_type(solara_test, page_session: playwright.sync_api.Page):
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

    b = ipyreact.ValueWidget(_module="my-module", _type="ClickButtonMistyped")
    display(b)
    page_session.locator("text=no component ClickButtonMistyped found in module my-module").wait_for()
