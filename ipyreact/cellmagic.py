from IPython.core.magic import (
    Magics,
    cell_magic,
    magics_class,
    needs_local_scope,
)
from IPython.core.magic_arguments import argument, magic_arguments, parse_argstring
from IPython.display import display

from . import widget


@magics_class
class ReactMagics(Magics):
    @needs_local_scope
    @magic_arguments()
    @argument(
        "-n",
        "--name",
        type=str,
        default="_last_react_widget",
        help=(
            "Name of the widget variable injected into the local namespace"
            " (default = _last_react_widget)."
        ),
    )
    @argument(
        "-d",
        "--debug",
        action="store_true",
        default=False,
        help="Show debug information in the JS console.",
    )
    @argument(
        "-c",
        "--cleanup",
        action="store_true",
        default=False,
        help="Destroy the previous widget before creating a new one.",
    )
    @cell_magic
    def react(self, line, cell, local_ns):
        """Excute react code in a cell.

        Example:
            %%react -n my_widget -d
            import {Button} from '@mui/material';
            import confetti from "canvas-confetti";
            import * as React from "react";

            export default function({value, on_value, debug}) {
              if(debug) {
                console.log("value=", value, on_value);
              }
              return (
                <Button
                  variant="contained"
                  onClick={() => confetti() && on_value(value + 1)}
                >
                  {value || 0} times confetti
                </Button>
              );
            }
        """
        args = parse_argstring(ReactMagics.react, line)
        if args.cleanup and args.name in local_ns:
            local_ns[args.name].close()
        code = self.shell.transform_cell(cell)

        class Widget(widget.ReactWidget):
            _esm = code

        react_widget = Widget(_esm=code, debug=args.debug)
        local_ns[args.name] = react_widget
        display(react_widget)


def load_ipython_extension(ipython):
    """
    Use `%load_ext ipyreact`
    """
    ipython.register_magics(ReactMagics)
