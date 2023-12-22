// Entry point for the notebook bundle containing custom model definitions.
//
define(function () {
  "use strict";

  window["requirejs"].config({
    map: {
      "*": {
        "@widgetti/jupyter-react": "nbextensions/jupyter-react/index",
        // 'jupyter-react16': 'nbextensions/ipyreact/index16',
      },
    },
  });
  // Export the required load_ipython_extension function
  return {
    load_ipython_extension: function () {
      require(["notebook/js/codecell"], function (codecell) {
        codecell.CodeCell.options_default.highlight_modes[
          "text/typescript-jsx"
        ] = { reg: [/^%%(ipy)?react/] };
        IPython.notebook.events.one("kernel_ready.Kernel", function () {
          IPython.notebook.get_cells().map(function (cell) {
            if (cell.cell_type == "code") {
              cell.auto_highlight();
            }
          });
        });
      });
    },
  };
});
