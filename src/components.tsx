import React from "react";
import { DOMWidgetView, WidgetModel } from "@jupyter-widgets/base";
import * as base from "@jupyter-widgets/base";

const JupyterPhosphorWidget =
  base.JupyterPhosphorWidget || base.JupyterLuminoWidget;

export class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {}

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      // @ts-ignore
      const error = this.state.error.message;
      return (
        <div>
          <h1>Error</h1>;<pre>{error}</pre>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }
    // @ts-ignore
    return this.props.children;
  }
}

export function JupyterWidget({
  widget,
  view,
}: {
  widget: WidgetModel;
  view: DOMWidgetView;
}) {
  const [element, setElement] = React.useState<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    /* Copied from ipyvue:
       https://github.com/widgetti/ipyvue/blob/d307dbdceaa05f01fe22be57d157d02c9ee8fbdf/js/src/VueRenderer.js#L11 */
    let currentView: any = null;
    let destroyed = false;

    if (element != null) {
      view.create_child_view(widget).then((newView) => {
        currentView = newView;

        // since create view is async, the component instance might be destroyed before the view is created
        if (!destroyed) {
          element.innerHTML = "";
          if (
            JupyterPhosphorWidget &&
            // @ts-ignore
            (newView.pWidget || newView.luminoWidget || newView.lmWidget)
          ) {
            JupyterPhosphorWidget.attach(
              // @ts-ignore
              newView.pWidget || newView.luminoWidget || newView.lmWidget,
              element,
            );
          } else {
            // @ts-ignore
            console.error(
              "Could not attach widget to DOM using Lumino or Phosphor. Fallback to normal DOM attach",
              JupyterPhosphorWidget,
              newView,
            );
            element.appendChild(newView.el);
          }
        } else {
          currentView.remove();
        }
      });
    }
    return () => {
      if (currentView) {
        // In order to avoid an error in phosphor, we add the node to the body before removing it.
        // (current.remove triggers a phosphor detach)
        // To be sure we do not cause any flickering, we hide the node before moving it.
        const widget =
          currentView.pWidget ||
          currentView.luminoWidget ||
          currentView.lmWidget;
        widget.node.style.display = "none";
        document.body.appendChild(widget.node);
        currentView.remove();
      } else {
        destroyed = true;
      }
    };
  }, [element, widget.cid]);

  return <div ref={setElement}>widget placeholder</div>;
}
