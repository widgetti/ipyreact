// Copyright (c) Maarten A. Breddels
// Distributed under the terms of the Modified BSD License.

import {
  WidgetModel,
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
  unpack_models,
  WidgetView,
} from "@jupyter-widgets/base";

import * as React from "react";
import { useEffect, useState } from "react";
import * as ReactJsxRuntime from "react/jsx-runtime";
import * as ReactReconcilerContants from "react-reconciler/constants";
import * as ReactReconciler from "react-reconciler";
import * as ReactDOM from "react-dom";
// @ts-ignore
import * as ReactDOMClient from "react-dom/client";
// @ts-ignore
import "../css/widget.css";
import { eventToObject, expose, loadScript, setUpMuiFixModule } from "./utils";
import { MODULE_NAME, MODULE_VERSION } from "./version";
// import * as Babel from '@babel/standalone';
// TODO: find a way to ship es-module-shims with the widget
// @ts-ignore
// import 'es-module-shims';
import { transform } from "sucrase";
import { ErrorBoundary } from "./components";
import { Root } from "react-dom/client";
import { ModelDestroyOptions } from "backbone";

declare function importShim<Default, Exports extends object>(
  specifier: string,
  parentUrl?: string,
): Promise<{ default: Default } & Exports>;

declare namespace importShim {
  const resolve: (id: string, parentURL?: string) => string;
  const addImportMap: (importMap: Partial<any>) => void;
  const getImportMap: () => any;
}

// interface Window {
//   esmsInitOptions?: any;
//   importShim: typeof importShim;
// }

// @ts-ignore
// const react16Code = require('!!raw-loader!./react16.js');
// import react16Code from 'raw-loader!./react16.mjs';
// console.log(react16Code)

// this will do for now
let importShimLoaded: any = null;
async function ensureImportShimLoaded() {
  if (importShimLoaded == null) {
    importShimLoaded = loadScript(
      "module",
      "https://ga.jspm.io/npm:es-module-shims@1.7.0/dist/es-module-shims.js",
    );
  }
  return await importShimLoaded;
}

function autoExternalReactResolve(
  id: string,
  parentUrl: string,
  resolve: (arg0: any, arg1: any) => any,
) {
  const shipsWith =
    id == "react" ||
    id == "react-dom" ||
    id == "react/jsx-runtime" ||
    id == "react-dom/client" ||
    id == "react-reconciler" ||
    id == "react-reconciler/constants";
  const alreadyPatched = parentUrl.includes("?external=react,react-dom");
  const parentIsEsmSh = parentUrl.startsWith("https://esm.sh/");
  const isBlob = id.startsWith("blob:");
  if (!shipsWith && !id.includes("://") && !parentIsEsmSh) {
    id = "https://esm.sh/" + id;
  }
  if (!shipsWith && !alreadyPatched && !isBlob) {
    id = id + "?external=react,react-dom";
  }
  return resolve(id, parentUrl);
}

// @ts-ignore
window.esmsInitOptions = {
  shimMode: true,
  mapOverrides: true,
  resolve: (
    id: string,
    parentUrl: string,
    resolve: (id: string, parentUrl: string) => any,
  ) => autoExternalReactResolve(id, parentUrl, resolve),
};

let react18ESMUrls: any = null;
let react16ESMUrls: any = null;

function ensureReactSetup(version: number) {
  if (version == 18) {
    if (react18ESMUrls == null) {
      react18ESMUrls = {
        react: expose(React),
        "react-dom": expose(ReactDOM),
        "react/jsx-runtime": expose(ReactJsxRuntime),
        "react-dom/client": expose(ReactDOMClient),
        "react-reconciler": expose(ReactReconciler),
        "react-reconciler/constants": expose(ReactReconcilerContants),
      };
    }
    return react18ESMUrls;
  } else if (version == 16) {
    if (react16ESMUrls == null) {
      // react16ESMUrls = {urlReact: expose(React16), urlReactDom: expose(ReactDOM16)};
    }
    return react16ESMUrls;
  }
}

const widgetToReactComponent = async (widget: WidgetModel) => {
  const WidgetRenderHOC = (widget: WidgetModel) => {
    return ({ view }: { view: WidgetView | null }) => {
      return <div>widget placeholder</div>;
    };
  };
  if (widget instanceof ReactModel) {
    return await widget.component;
    // const el = <ChildComponent view={rootView}></ChildComponent>;
    // return el;
  } else if (typeof widget === "string") {
    return () => widget;
  } else {
    const ChildComponent = WidgetRenderHOC(widget);
    return ChildComponent;
  }
};

export class ReactModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ReactModel.model_name,
      _model_module: ReactModel.model_module,
      _model_module_version: ReactModel.model_module_version,
      _view_name: ReactModel.view_name,
      _view_module: ReactModel.view_module,
      _view_module_version: ReactModel.view_module_version,
    };
    // TODO: ideally, we only compile code in the widget model, but the react hooks are
    // super convenient.
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    children: { deserialize: unpack_models as any },
  };

  initialize(attributes: any, options: any): void {
    super.initialize(attributes, options);
    this.component = new Promise((resolve, reject) => {
      this.resolveComponent = resolve;
      this.rejectComponent = reject;
    });
    this.queue = Promise.resolve();
    this.on("change:_import_map", async () => {
      this.enqueue(async () => {
        // chain these updates, so they are executed in order
        await this.updateComponentToWrap();
      });
    });
    this.on("change:_esm", async () => {
      this.enqueue(async () => {
        this.compileCode();
        await this.updateComponentToWrap();
      });
    });
    this.on("change:_module change:_type", async () => {
      this.enqueue(async () => {
        await this.updateImportMap();
        await this.updateComponentToWrap();
      });
    });
    this._initialSetup();
  }
  enqueue(fn: () => Promise<any>) {
    // this makes sure that callbacks and _initialSetup are executed in order
    // and not in parallel, which can lead to race conditions
    this.queue = this.queue.then(async () => {
      await fn();
    });
    return this.queue;
  }
  async _initialSetup() {
    await this.enqueue(async () => {
      await this.updateImportMap();
      this.compileCode();
      try {
        let component: any = await this.createWrapperComponent();
        this.resolveComponent(component);
      } catch (e) {
        console.error(e);
        this.rejectComponent(e);
      }
    });
    // await this.createComponen();
  }
  async updateImportMap() {
    await ensureImportShimLoaded();
    const reactImportMap = ensureReactSetup(this.get("_react_version"));
    const importMapWidget = this.get("_import_map");
    const importMap = {
      imports: {
        ...reactImportMap,
        ...importMapWidget["imports"],
      },
      scopes: {
        ...importMapWidget["scopes"],
      },
    };
    importShim.addImportMap(importMap);
  }
  compileCode() {
    // using babel is a bit of an art, so leaving this code for if we
    // want to switch back to babel. However, babel is very large compared
    // to sucrase
    // Babel.registerPreset("my-preset", {
    //   presets: [
    //     [Babel.availablePresets["react"]],
    //     // [Babel.availablePresets["typescript"], { allExtensions: true }],
    //   ]
    // });
    // Babel.registerPlugin("importmap", pluginImport());
    const code = this.get("_esm");
    this.compileError = null;
    if (!code) {
      this.compiledCode = null;
      return;
    }
    if (this.get("_debug")) {
      console.log("original code:\n", code);
    }
    try {
      // using babel:
      // return Babel.transform(code,  { presets: ["react", "es2017"], plugins: ["importmap"] }).code;
      // using sucrase:
      this.compiledCode = transform(code, {
        transforms: ["jsx", "typescript"],
        filePath: "test.tsx",
      }).code;
      if (this.get("_debug")) {
        console.log("compiledCode:\n", this.compiledCode);
      }
    } catch (e) {
      console.error(e);
      this.compileError = e;
    }
  }
  async updateComponentToWrap() {
    try {
      let component: any = await this.createComponentToWrap();
      this.currentComponentToWrapOrError = component;
      this.trigger("component", component);
    } catch (e) {
      console.error(e);
      this.trigger("component", e);
    }
  }
  async createComponentToWrap() {
    let moduleName = this.get("_module");
    let type = this.get("_type");
    if (this.compileError) {
      return () => <pre>{this.compileError.message}</pre>;
    } else {
      let module: any = null;
      // html element like div or button
      if (!moduleName && !this.compiledCode && type) {
        return type;
      }

      if (!this.compiledCode && !moduleName && !type) {
        return () => (
          <div>no component provided, pass _esm, or _module and _type</div>
        );
      } else if (this.compiledCode) {
        if (this.codeUrl) {
          URL.revokeObjectURL(this.codeUrl);
        }
        this.codeUrl = URL.createObjectURL(
          new Blob([this.compiledCode], { type: "text/javascript" }),
        );
        module = await importShim(this.codeUrl);
        if (!module) {
          return () => <div>error loading module</div>;
        }
      } else {
        module = await importShim(moduleName);
        if (!module) {
          return () => <div>no module found with name {moduleName}</div>;
        }
      }
      let component = module[type || "default"];
      if (!component) {
        if (type) {
          return () => (
            <div>
              no component found in module {moduleName} (with name {type})
            </div>
          );
        } else {
          return () => (
            <div>
              no component found in module {moduleName} (it should be exported
              as default)
            </div>
          );
        }
      } else {
        if (this.compiledCode) {
          const needsMuiFix = this.compiledCode.indexOf("@mui") !== -1;
          if (needsMuiFix) {
            let muiFix = await setUpMuiFixModule();
            const componentToWrap = component;
            // console.log("muiFix", muiFix);
            // @ts-ignore
            component = (props: any) => {
              // console.log("component wrapper fix", props)
              // return componentToWrap(props);
              return muiFix.styleWrapper(componentToWrap(props));
            };
          }
        }
        return component;
      }
    }
  }
  async createWrapperComponent() {
    // we wrap the component in a wrapper that puts in all the props from the
    // widget model, and handles events, etc
    const childrenToReactComponents = async (view: any) => {
      let childrenWidgets: Array<WidgetModel> = this.get("children");
      return await Promise.all(
        childrenWidgets.map(
          async (child: any) => await widgetToReactComponent(child),
        ),
      );
    };

    let initialChildrenComponents = await childrenToReactComponents(null);
    // const resolveFormatters = async () => {
    //   let formatterDict = this.get("formatters") || {};
    //   let formatterModules : any = {};
    //   for (const key of Object.keys(formatterDict)) {
    //       // @ts-ignore
    //       let module = await importShim(formatterDict[key]);
    //       formatterModules[key] = module;
    //   }
    //   return formatterModules;
    // }

    // let formatterModules = await resolveFormatters();
    // console.log("formatterModules", formatterModules);

    try {
      this.currentComponentToWrapOrError = await this.createComponentToWrap();
    } catch (e) {
      this.currentComponentToWrapOrError = e;
    }

    const isSpecialProp = (key: string) => {
      const specialProps = [
        "children",
        "props",
        "tabbable",
        "layout",
        "tooltip",
      ];
      if (specialProps.find((x) => x === key)) {
        return true;
      }
      if (key.startsWith("_")) {
        return true;
      }
      return false;
    };

    const WrapperComponent = ({ view, ...parentProps }: { view: any }) => {
      const [component, setComponent] = useState(
        () => this.currentComponentToWrapOrError,
      );
      React.useEffect(() => {
        this.listenTo(this, "component", (component) => {
          console.log("set component", component);
          setComponent(() => component);
        });
        return () => {
          this.stopListening(this, "component");
        };
      }, []);
      const setForceRerenderCounter = useState(0)[1];
      const forceRerender = () => {
        console.log(
          "force rerender",
          name,
          this.get("props"),
          this.previous("props"),
        );
        setForceRerenderCounter((x) => x + 1);
      };
      const [childrenComponents, setChildrenComponents] = useState(
        initialChildrenComponents,
      );
      const updateChildren = () => {
        console.log("update children");
        this.enqueue(async () => {
          setChildrenComponents(await childrenToReactComponents(view));
        });
      };
      useEffect(() => {
        this.listenTo(this, "change:props", forceRerender);
        this.listenTo(this, "change:children", updateChildren);
        for (const key of Object.keys(this.attributes)) {
          if (isSpecialProp(key)) {
            continue;
          }
          this.listenTo(this, `change:${key}`, updateChildren);
        }
        return () => {
          this.stopListening(this, "change:props", forceRerender);
          this.stopListening(this, "change:children", updateChildren);
          for (const key of Object.keys(this.attributes)) {
            if (isSpecialProp(key)) {
              continue;
            }
            this.stopListening(this, `change:${key}`, updateChildren);
          }
        };
      }, []);
      const events: any = {};
      for (const event_name of this.attributes["_event_names"]) {
        const handler = (value: any, buffers: any) => {
          if (buffers) {
            const validBuffers =
              buffers instanceof Array && buffers[0] instanceof ArrayBuffer;
            if (!validBuffers) {
              console.warn("second argument is not an BufferArray[View] array");
              buffers = undefined;
            }
          }
          const saveValue = eventToObject(value);
          console.log("sending", event_name, saveValue, view);
          this.send(
            { event_name, data: saveValue },
            this.callbacks(view),
            buffers,
          );
        };
        events[event_name] = handler;
      }
      // React.createElement('div', {"aria-activedescendant": "foo"}})
      // <div aria-activedescendant="foo"></div>
      const modelProps = { ...this.get("props") };
      // for (const key of Object.keys(modelProps)) {
      //   if(formatterModules[key]) {
      //     modelProps[key] = formatterModules[key].py2js(modelProps[key]);
      //   }
      // }
      // console.log("children", children);
      let children = childrenComponents.map((ChildComponent: any) => {
        return <ChildComponent view={view}></ChildComponent>;
      });
      const childrenProps = children.length > 0 ? { children: children } : {};
      // useEffect(() => {
      //   // force render every 2 seconds
      //   const interval = setInterval(() => {
      //     forceRerender();
      //   }, 2000);
      //   return () => {
      //     clearInterval(interval);
      //   }
      // }, []);
      //const [r//]
      const backboneProps: any = {};
      for (const key of Object.keys(this.attributes)) {
        if (isSpecialProp(key)) {
          continue;
        }
        backboneProps[key] = this.get(key);
        backboneProps["set" + key.charAt(0).toUpperCase() + key.slice(1)] = (
          value: any,
        ) => {
          this.set(key, value);
          // this.touch();
          this.save_changes(this.callbacks(view));
        };
      }

      const props = {
        ...modelProps,
        ...backboneProps,
        ...parentProps,
        ...events,
        ...childrenProps,
      };
      console.log("props", props, children, component);
      if (component instanceof Error) {
        throw component;
      }
      return React.createElement(component, props);
    };
    return WrapperComponent;
  }
  destroy(options?: ModelDestroyOptions | undefined): false | JQueryXHR {
    if (this.codeUrl) {
      URL.revokeObjectURL(this.codeUrl);
    }
    return super.destroy(options);
  }
  public component: Promise<any>;
  private resolveComponent: (value: any) => void;
  private rejectComponent: (value: any) => void;
  private compiledCode: string | null = null;
  private compileError: any | null = null;
  private codeUrl: string | null = null;
  // this used so that the WrapperComponent can be rendered synchronously,
  private currentComponentToWrapOrError: any = null;
  private queue: Promise<any>;

  static model_name = "ReactModel";
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = "ReactView"; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class ReactView extends DOMWidgetView {
  private root: Root | null = null;

  async render() {
    this.el.classList.add("jupyter-react-widget");
    // using babel is a bit of an art, so leaving this code for if we
    this.root = ReactDOMClient.createRoot(this.el);
    const Component: any = await (this.model as ReactModel).component;
    this.root.render(
      <ErrorBoundary>
        <Component view={this}></Component>
      </ErrorBoundary>,
    );
  }

  remove() {
    this.root?.unmount();
  }
}
