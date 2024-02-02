# ipyreact

React for ipywidgets that just works. No webpack, no npm, no hassle. Just write jsx, tsx and python.

Build on top of [AnyWidget](https://anywidget.dev/).

## Why

Ipyreact adds composability, allowing you to add children to your widget, which will render the whole react tree in
a single react context, without adding extra divs or creating a new react context.

This allows wrapping libraries such as [Material UI](https://mui.com/), [Ant Design](https://ant.design/) and even
[React-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction).

## Tutorial

This tutorial will walk you through the steps of building a complete ipywidget with react.

[![JupyterLight](https://jupyterlite.rtfd.io/en/latest/_static/badge.svg)](https://widgetti.github.io/ipyreact/lab/?path=full_tutorial.ipynb)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/widgetti/ipyreact/HEAD?labpath=examples%2Ffull_tutorial.ipynb)

Just click the JupyterLite or Binder link to start the interactive walkthrough.

## Goals

- Take any [Material UI example](https://mui.com/material-ui/react-rating/), copy/paste the code, and it should work in Jupyter Notebook, Jupyter Lab, Voila, and more specifically, [Solara](https://github.com/widgetti/solara).
- Wrap a library such as [Ant Design](https://ant.design/) giving the options to customize any JSON<->JavaScript Object (de)serialization, such as the [DatePicker](https://ant.design/components/date-picker) which uses a dayjs object internally, which cannot be serialized over the wire to Python.
- Compose widgets together to form a single react tree, with the same react context (e.g. useContext).

## Examples

### Inline code

```python
import ipyreact


class ConfettiWidget(ipyreact.ValueWidget):
    _esm = """
    import confetti from "canvas-confetti";
    import * as React from "react";

    export default function({value, setValue}) {
        return <button onClick={() => confetti() && setValue(value + 1)}>
            {value || 0} times confetti
        </button>
    };"""
ConfettiWidget()
```

![initial-30-fps-compressed](https://user-images.githubusercontent.com/1765949/233469170-c659b670-07f5-4666-a201-80dea01ebabe.gif)

(_NOTE: in the recording we used on_value, we now use setValue_)

### Hot reloading

Create a tsx file:

```tsx
// confetti.tsx
import confetti from "canvas-confetti";
import * as React from "react";

export default function ({ value, setValue }) {
  return (
    <button onClick={() => confetti() && setValue(value + 1)}>
      {value || 0} times confetti
    </button>
  );
}
```

And use it in your python code:

```python
import ipyreact
import pathlib


class ConfettiWidget(ipyreact.ValueWidget):
    _esm = pathlib.Path("confetti.tsx")

ConfettiWidget()
```

Now edit, save, and see the changes in your browser/notebook.

![hot-reload-compressed](https://user-images.githubusercontent.com/1765949/233470113-b2aa9284-71b9-44f0-bd52-906a08b06e14.gif)

(_NOTE: in the recording we used on_value, we now use setValue_)

### IPython magic

First load the ipyreact extension:

```python
%load_ext ipyreact
```

Then use the `%%react` magic to directly write jsx/tsx in your notebook:

```tsx
%%react
import confetti from "canvas-confetti";
import * as React from "react";

export default function({value, setValue}) {
    return <button onClick={() => confetti() && setValue(value + 1)}>
        {value || 0} times confetti
    </button>
};
```

Access the underlying widget with the name `_last_react_widget` (e.g. `_last_react_widget.value` contains the number of clicks):

![magic-optimized](https://user-images.githubusercontent.com/1765949/233471041-62e807d6-c16d-4fc5-af5d-13c0acb2c677.gif)

(_NOTE: in the recording we used on_value, we now use setValue_)

## Installation

You can install using `pip`:

```bash
pip install ipyreact
```

## Usage

### Summary

- The `ValueWidget` has an `value` trait, which is a `traitlets.Any` trait. Use this to pass data to your react component, or to get data back from your react component (since it inherits from ipywidgets.ValueWidget it
  can be used in combination with ipywidgets' [interact](https://ipywidgets.readthedocs.io/en/latest/examples/Using%20Interact.html)).
- The `ipyreact.Widget` does not have the `value` trait.
- All traits are added as props to your react component (e.g. `{value, setValue...}` pairs in the example above.
- For every trait `ipyreact` automatically provides a `set<Traitname>` callback, which you can use to set the trait value from your react component (e.g. `setValue` in the example above). (_Note: we used `on_value` before, this is now deprecated_)
- Props can de passed as `Widget(props={"title": "My title"})`, and contrary to a trait, will not add a `setTitle` callable to the props.
- Children can be passed using `Widget(children=['text', or_widget])` supporting text, widgets, and un-interrupted rendering of ipyreact widgets.
- Your code gets transpiled using [sucrase](https://github.com/alangpierce/sucrase) in the frontend, no bundler needed.
- Your code should be written in ES modules.
- Set `_debug=True` to get more debug information in the browser console.
- Make sure you export a default function from your module (e.g. `export default function MyComponent() { ... }`). This is the component that will be rendered.
- Pass `events={"onClick": handler}` to the constructor or add a method with the name `event_onClick(self, data=None)` to add a `onClick` callback to your props.

### Built in components

You do not need to provide the module code to create a custom component, ipyreact supports the same API as [React's createElement](https://react.dev/reference/react/createElement)
allowing creation of buttons for instance.

```python
import ipyreact
ipyreact.Widget(_type="button", children=["click me"])
```

Note that in addition to all native browser elements, also web components are supported.

### Children

As shown in the above example, we also support children, which supports a list of strings (text), `ipyreact.Widget` widgets that will be rendered as an uninterrupted react tree, or
any other `ipywidgets`

```python
import ipyreact
import ipywidgets as widgets
ipyreact.Widget(_type="div", children=[
    "normal text",
    ipyreact.Widget(_type="button", children=["nested react widgets"]),
    widgets.FloatSlider(description="regular ipywidgets")
])
```

[![JupyterLight](https://jupyterlite.rtfd.io/en/latest/_static/badge.svg)](https://widgetti.github.io/ipyreact/lab/?path=children.ipynb)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/widgetti/ipyreact/HEAD?labpath=examples%2Fchildren.ipynb)

### Events

Events can be passed via the event argument. In this case `onClick` will be added as a prop to the button element.

```python
import ipyreact
ipyreact.Widget(_type="button", children=["click me"], events={"onClick": print})
```

Subclasses can also add an `event_onClick` method, which will also add a `onClick` event handler to the props.

[![JupyterLight](https://jupyterlite.rtfd.io/en/latest/_static/badge.svg)](https://widgetti.github.io/ipyreact/lab/?path=events.ipynb)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/widgetti/ipyreact/HEAD?labpath=examples%2Fevents.ipynb)

### Importing external modules

Writing JSX code without having to compile/bundle is great, but so is using external libraries.

Ipyreact uses ES modules, which allows native importing of external libraries when written as an ES module.
In the example below, we use https://esm.sh/ which exposes many JS libraries as ES modules that
we can directly import.

```python
import ipyreact

ipyreact.ValueWidget(
    _esm="""
    import confetti from "https://esm.sh/canvas-confetti@1.6.0";
    import * as React from "react";

    export default function({value, setValue}) {
        return <button onClick={() => confetti() && setValue(value + 1)}>
            {value || 0} times confetti
        </button>
    };
    """
)
```

### Import maps

However, the above code now has a direct link to "https://esm.sh/canvas-confetti@1.6.0" which makes the code very specific to esm.sh.

To address this, we also support [import maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) to
write code more independant of where the modules come from.
For every widget, you can provide an `_import_map`, which is a dictionary of module names to urls or other modules. By default we support `react` and `react-dom` which is prebundled.

Apart from `react`, the default we provide is:

```python
_import_map = {
    "imports": {
        "@mui/material/": "https://esm.sh/@mui/material@5.11.10/",
        "@mui/icons-material/": "https://esm.sh/@mui/icons-material/",
        "canvas-confetti": "https://esm.sh/canvas-confetti@1.6.0",
    },
    "scopes": {
    },
}
```

Which means we can now write our ConfettiButton as:

```python
import ipyreact

ipyreact.ValueWidget(
    _esm="""
    import confetti from "confetti";
    import * as React from "react";

    export default function({value, setValue}) {
        return <button onClick={() => confetti() && setValue(value + 1)}>
            {value || 0} times confetti
        </button>
    };
    """,
    # note that this import_map is already part of the default
    _import_map={
        "imports": {
            "confetti": "https://esm.sh/canvas-confetti@1.6.0",
        },

    }
)
```

And it also means we can copy paste _most_ of the examples from [mui](https://mui.com/)

```tsx
%%react -n my_widget -d
import Button from "@mui/material/Button";
import confetti from "canvas-confetti";
import * as React from "react";

export default function({ value, setValue}) {
  console.log("value=", value);
  return (
    <Button
      variant="contained"
      onClick={() => confetti() && setValue(value + 1)}
    >
      {value || 0} times confetti
    </Button>
  );
}
```

We use the https://github.com/guybedford/es-module-shims shim to the browser page for the import maps functionality.
This also means that although import maps can be configured per widget, they configuration of import maps is global.

## Development Installation

Create a dev environment:

```bash
conda create -n ipyreact-dev -c conda-forge nodejs yarn python jupyterlab
conda activate ipyreact-dev
```

Install the python. This will also build the TS package.

```bash
pip install -e ".[test, examples, dev]"
pre-commit install
```

When developing your extensions, you need to manually enable your extensions with the
notebook / lab frontend. For lab, this is done by the command:

```
jupyter labextension develop --overwrite .
yarn run build
```

For classic notebook, you need to run:

```
jupyter nbextension install --sys-prefix --symlink --overwrite --py ipyreact
jupyter nbextension enable --sys-prefix --py ipyreact
```

Note that the `--symlink` flag doesn't work on Windows, so you will here have to run
the `install` command every time that you rebuild your extension. For certain installations
you might also need another flag instead of `--sys-prefix`, but we won't cover the meaning
of those flags here.

### How to see your changes

#### Typescript:

If you use JupyterLab to develop then you can watch the source directory and run JupyterLab at the same time in different
terminals to watch for changes in the extension's source and automatically rebuild the widget.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
yarn run watch
# Run JupyterLab in another terminal
jupyter lab
```

After a change wait for the build to finish and then refresh your browser and the changes should take effect.

#### Python:

If you make a change to the python code then you will need to restart the notebook kernel to have it take effect.
