// Copyright (c) Maarten A. Breddels
// Distributed under the terms of the Modified BSD License.

import {
  WidgetModel,
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
  unpack_models,
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
import { ErrorBoundary, JupyterWidget } from "./components";
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

const moduleResolveFunctions: any = {};
const modules: any = {};

function provideModule(moduleName: string, module: any) {
  if (moduleResolveFunctions[moduleName]) {
    moduleResolveFunctions[moduleName](module);
  } else {
    modules[moduleName] = Promise.resolve(module);
  }
}

function requestModule(moduleName: string) {
  if (!modules[moduleName]) {
    modules[moduleName] = new Promise(
      (resolve) => (moduleResolveFunctions[moduleName] = resolve),
    );
  }
  return modules[moduleName];
}

let importMapConfigurationResolver: any = null;
let importMapConfigurationPromise: any = null;

function provideImportMapConfiguration() {
  if (importMapConfigurationResolver) {
    importMapConfigurationResolver();
  } else {
    importMapConfigurationPromise = Promise.resolve();
  }
}

function requestImportMapConfiguration() {
  if (!importMapConfigurationPromise) {
    importMapConfigurationPromise = new Promise((resolve) => {
      importMapConfigurationResolver = resolve;
    });
  }
}

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

// function autoExternalReactResolve(
//   id: string,
//   parentUrl: string,
//   resolve: (arg0: any, arg1: any) => any,
// ) {
//   const shipsWith =
//     id == "react" ||
//     id == "react-dom" ||
//     id == "react/jsx-runtime" ||
//     id == "react-dom/client" ||
//     id == "react-reconciler" ||
//     id == "react-reconciler/constants";
//   const alreadyPatched = parentUrl.includes("?external=react,react-dom");
//   const parentIsEsmSh = parentUrl.startsWith("https://esm.sh/");
//   const isBlob = id.startsWith("blob:");
//   if (!shipsWith && !id.includes("://") && !parentIsEsmSh) {
//     id = "https://esm.sh/" + id;
//   }
//   if (!shipsWith && !alreadyPatched && !isBlob) {
//     id = id + "?external=react,react-dom";
//   }
//   return resolve(id, parentUrl);
// }

// @ts-ignore
window.esmsInitOptions = {
  shimMode: true,
  mapOverrides: true,
  // resolve: (
  //   id: string,
  //   parentUrl: string,
  //   resolve: (id: string, parentUrl: string) => any,
  // ) => autoExternalReactResolve(id, parentUrl, resolve),
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

class ComponentData {
  component: any;
  key: string;

  constructor(component: any, key: string) {
    this.component = component;
    this.key = key;
  }

  asElement(view: DOMWidgetView) {
    return React.createElement(this.component, { view, key: this.key });
  }
}

const widgetToReactComponent = async (widget: WidgetModel) => {
  if (widget instanceof ReactModel) {
    return new ComponentData(await widget.component, widget.model_id);
  } else {
    return new ComponentData(
      ({ view }: { view: DOMWidgetView }) => JupyterWidget({ widget, view }),
      widget.model_id,
    );
  }
};

const entriesToObj = (acc: any, [key, value]: any[]) => {
  acc[key] = value;
  return acc;
};

async function replaceWidgetWithComponent(
  data: any,
  get_model: (model_id: string) => Promise<WidgetModel>,
): Promise<any> {
  const type = typeof data;
  if (type === "string" && data.startsWith("IPY_MODEL_")) {
    const modelId = data.substring("IPY_MODEL_".length);
    const model = await get_model(modelId);
    return widgetToReactComponent(model);
  }
  if (
    ["string", "number", "boolean", "bigint"].includes(type) ||
    data == null
  ) {
    return data;
  }
  if (data instanceof WidgetModel) {
    return widgetToReactComponent(data);
  }
  if (Array.isArray(data)) {
    return Promise.all(
      data.map(async (d) => replaceWidgetWithComponent(d, get_model)),
    );
  }

  return (
    await Promise.all(
      Object.entries(data).map(async ([key, value]) => [
        key,
        await replaceWidgetWithComponent(value, get_model),
      ]),
    )
  ).reduce(entriesToObj, {});
}

function replaceComponentWithElement(data: any, view: DOMWidgetView): any {
  const type = typeof data;
  if (
    ["string", "number", "boolean", "bigint"].includes(type) ||
    data == null
  ) {
    return data;
  }
  if (data instanceof ComponentData) {
    return data.asElement(view);
  }
  if (Array.isArray(data)) {
    return data.map((d) => replaceComponentWithElement(d, view));
  }
  const entriesToObj = (acc: any, [key, value]: any[]) => {
    acc[key] = value;
    return acc;
  };
  return Object.entries(data)
    .map(([key, value]) => [key, replaceComponentWithElement(value, view)])
    .reduce(entriesToObj, {});
}

export class Module extends WidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: Module.model_name,
      _model_module: Module.model_module,
      _model_module_version: Module.model_module_version,
      _view_name: Module.view_name,
      _view_module: Module.view_module,
      _view_module_version: Module.view_module_version,
    };
  }
  initialize(attributes: any, options: any): void {
    super.initialize(attributes, options);
    this.addModule();
  }
  destroy(options?: any): any {
    if (this.codeUrl) {
      URL.revokeObjectURL(this.codeUrl);
    }
    return super.destroy(options);
  }
  async updateImportMap() {
    await ensureImportShimLoaded();
    await requestImportMapConfiguration();
    const reactImportMap = ensureReactSetup(this.get("react_version"));
    const importMap = {
      imports: {
        ...reactImportMap,
      },
    };
    importShim.addImportMap(importMap);
  }
  async addModule() {
    const code = this.get("code");
    try {
      let name = this.get("name");
      if (this.codeUrl) {
        URL.revokeObjectURL(this.codeUrl);
      }
      this.codeUrl = URL.createObjectURL(
        new Blob([code], { type: "text/javascript" }),
      );
      let dependencies = this.get("dependencies") || [];
      this.set(
        "status",
        "Waiting for dependencies: " + dependencies.join(", "),
      );
      await Promise.all(dependencies.map((x: any) => requestModule(x)));
      await ensureImportShimLoaded();
      await this.updateImportMap();
      this.set("status", "Loading module...");
      let module = await importShim(this.codeUrl);
      importShim.addImportMap({ imports: { [name]: this.codeUrl } });
      this.set("status", "Loaded module!");
      provideModule(name, module);
    } catch (e) {
      console.error(e);
      this.set("status", "Error loading module: " + e);
    }
  }

  static model_name = "Module";
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = "ModuleView"; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
  private codeUrl: string | null;
}

export class ModuleView extends DOMWidgetView {
  private root: Root | null = null;

  async render() {
    this.el.classList.add("jupyter-react-widget");
    this.root = ReactDOMClient.createRoot(this.el);
    const Component = () => {
      const [status, setStatus] = useState(this.model.get("status"));
      useEffect(() => {
        this.listenTo(this.model, "change:status", () => {
          setStatus(this.model.get("status"));
        });
        return () => {
          this.stopListening(this.model, "change:status");
        };
      }, []);
      const name = this.model.get("name");
      return (
        <div>
          {name} status: {status}
        </div>
      );
    };
    this.root.render(<Component></Component>);
  }

  remove() {
    this.root?.unmount();
  }
}

export class ImportMap extends WidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ImportMap.model_name,
      _model_module: ImportMap.model_module,
      _model_module_version: ImportMap.model_module_version,
      _view_name: ImportMap.view_name,
      _view_module: ImportMap.view_module,
      _view_module_version: ImportMap.view_module_version,
      import_map: {
        imports: {},
        scopes: {},
      },
    };
  }
  initialize(attributes: any, options: any): void {
    super.initialize(attributes, options);
    this.updateImportMap();
    this.on("change:import_map", () => {
      this.updateImportMap();
    });
  }
  destroy(options?: any): any {
    this.off("change:import_map");
    return super.destroy(options);
  }
  async updateImportMap() {
    await ensureImportShimLoaded();
    const importMapWidget = this.get("import_map");
    const importMap = {
      imports: {
        ...importMapWidget.imports,
      },
      scopes: {
        ...importMapWidget.scopes,
      },
    };
    importShim.addImportMap(importMap);
    provideImportMapConfiguration();
  }

  static model_name = "ImportMap";
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = "ImportMap"; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class ImportMapView extends DOMWidgetView {
  private root: Root | null = null;

  async render() {
    this.el.classList.add("jupyter-react-widget");
    this.root = ReactDOMClient.createRoot(this.el);
    const Component = () => {
      const [importMap, setImportMap] = useState(this.model.get("import_map"));
      useEffect(() => {
        this.listenTo(this.model, "change:import_map", () => {
          setImportMap(this.model.get("import_map"));
        });
        return () => {
          this.stopListening(this.model, "change:import_map");
        };
      }, []);
      const importMapJson = JSON.stringify(importMap, null, 2);
      return (
        <pre>
          importmap:
          {importMapJson}
        </pre>
      );
    };
    this.root.render(<Component></Component>);
  }

  remove() {
    this.root?.unmount();
  }
}

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
    await requestImportMapConfiguration();
    const reactImportMap = ensureReactSetup(this.get("_react_version"));
    const importMap = {
      imports: {
        ...reactImportMap,
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
    let _dependencies = this.get("_dependencies") || [];
    await Promise.all(_dependencies.map((x: any) => requestModule(x)));
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

    const get_model = this.widget_manager.get_model.bind(this.widget_manager);
    let initialChildrenComponents = await replaceWidgetWithComponent(
      { children: this.get("children") },
      get_model,
    );
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
    const initialModelProps = await replaceWidgetWithComponent(
      this.get("props"),
      get_model,
    );
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
      const [childrenComponents, setChildrenComponents] = useState(
        initialChildrenComponents,
      );
      const updateChildren = () => {
        console.log("update children");
        this.enqueue(async () => {
          setChildrenComponents(
            await replaceWidgetWithComponent(
              { children: this.get("children") },
              get_model,
            ),
          );
        });
      };
      const [modelProps, setModelProps] = useState(initialModelProps);
      const updateModelProps = () => {
        this.enqueue(async () => {
          setModelProps(
            await replaceWidgetWithComponent(this.get("props"), get_model),
          );
        });
      };
      useEffect(() => {
        this.listenTo(this, "change:props", updateModelProps);
        this.listenTo(this, "change:children", updateChildren);
        for (const key of Object.keys(this.attributes)) {
          if (isSpecialProp(key)) {
            continue;
          }
          this.listenTo(this, `change:${key}`, updateChildren);
        }
        return () => {
          this.stopListening(this, "change:props", updateModelProps);
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
      // for (const key of Object.keys(modelProps)) {
      //   if(formatterModules[key]) {
      //     modelProps[key] = formatterModules[key].py2js(modelProps[key]);
      //   }
      // }
      // console.log("children", children);
      const childrenProps = replaceComponentWithElement(
        childrenComponents,
        view,
      );
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
        ...replaceComponentWithElement(modelProps, view),
        ...backboneProps,
        ...parentProps,
        ...events,
        ...childrenProps,
      };

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
