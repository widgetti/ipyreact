from pathlib import Path

import playwright.sync_api
from solara import display

HERE = Path(__file__).parent


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


# def test_threejs_fiber(ipywidgets_runner, page_session: playwright.sync_api.Page, assert_solara_snapshot):
#     bundle_path = HERE.parent.parent / "examples/threejs-fiber/threejs-fiber.bundle.js"
#     bundle_path_copy = bundle_path

#     def kernel_code(bundle_path=None):
#         from pathlib import Path

#         import ipyreact

#         if bundle_path is None:
#             # this only happens in solara
#             bundle_path = str(bundle_path_copy)  # type: ignore

#         ipyreact.define_module("threejs-fiber", Path(bundle_path))
#         # import ipyreact.importmap

#         # ipyreact.importmap._import_map_widget = None
#         # ipyreact.importmap._update_import_map()

#         class BoxWidget(ipyreact.Widget):
#             _esm = """
#                 import React, { useRef, useState } from "react"
#                 import { Canvas, useFrame, useThree } from 'threejs-fiber'
#                 import { OrbitControls } from "threejs-fiber";

#                 export default function Box({position, color}) {
#                 const ref = useRef()
#                 useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

#                 return (
#                     <mesh position={position} ref={ref}>
#                     <boxGeometry args={[1, 1, 1]} attach="geometry" />
#                     <meshPhongMaterial color={color} attach="material" />
#                     </mesh>
#                 )
#                 }

#             """

#         import solara

#         @solara.component
#         def Box(position, color, props={}, events={}, children=[]):
#             return BoxWidget.element(
#                 props={**props, **dict(color=color, position=position)},
#                 events=events,
#                 children=children,
#             )

#         @solara.component
#         def Canvas(props={}, events={}, children=[]):
#             return ipyreact.Widget.element(
#                 props=props,
#                 events=events,
#                 children=children,
#                 _type="Canvas",
#                 _module="threejs-fiber",
#             )

#         @solara.component
#         def OrbitControls(props={}, events={}, children=[]):
#             return ipyreact.Widget.element(
#                 _type="OrbitControls",
#                 _module="threejs-fiber",
#                 props=props,
#                 events=events,
#                 children=children,
#             )

#         @solara.component
#         def DirectionalLight(props={}, events={}, children=[]):
#             # starts with a lower case, should be available globally, so we don't need to pass
#             # _module="threejs-fiber"
#             return ipyreact.Widget.element(_type="directionalLight", props=props, events=events, children=children)

#         @solara.component
#         def Div(style={}, props={}, events={}, children=[]):
#             # we use a ipyreact based div to avoid an extra wrapper div which will affect layout
#             return ipyreact.Widget.element(_type="div", props={**props, **dict(style=style)}, children=children, events=events)

#         boxes = solara.reactive(
#             [
#                 ([-1, 0, 3], "#18a36e"),
#                 ([1, 0, 3], "#f56f42"),
#             ]
#         )

#         @solara.component
#         def Page():
#             with Div(style={"height": "600px"}):
#                 # a canvas fill the available space, so we add a parent div with height
#                 with Canvas():
#                     for position, color in boxes.value:
#                         Box(position=position, color=color)
#                     OrbitControls()
#                     DirectionalLight(props=dict(color="#ffffff", intensity=1, position=[-1, 2, 4]))

#         display(Page())

#     ipywidgets_runner(kernel_code, locals=dict(bundle_path=str(bundle_path)))
#     page_session.locator(".jupyter-react-widget >> canvas").wait_for()
