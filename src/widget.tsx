// Copyright (c) Maarten A. Breddels
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers
} from '@jupyter-widgets/base';

import * as React from 'react';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
// @ts-ignore
import * as ReactDOMClient from 'react-dom/client';
// @ts-ignore
import '../css/widget.css';
import { loadScript, setUpMuiFixModule, setUpReact16ESM, setUpReact18ESM } from './utils';
import { MODULE_NAME, MODULE_VERSION } from './version';
// import * as Babel from '@babel/standalone';
// TODO: find a way to ship es-module-shims with the widget
// @ts-ignore
// import 'es-module-shims';
import { transform } from 'sucrase';
import { ErrorBoundary } from './components';


// @ts-ignore
// const react16Code = require('!!raw-loader!./react16.js');
// import react16Code from 'raw-loader!./react16.mjs';
// console.log(react16Code)


// this will do for now
let importShimLoaded : any = null;
async function ensureImportShimLoaded() {
  if(importShimLoaded == null) {
    importShimLoaded = loadScript("module", "https://ga.jspm.io/npm:es-module-shims@1.7.0/dist/es-module-shims.js")
  }
  return await importShimLoaded;
}

function autoExternalReactResolve(id: string, parentUrl: string, resolve: (arg0: any, arg1: any) => any) {
  const shipsWith = (id == "react") || (id == "react-dom");
  const alreadyPatched = parentUrl.includes("?external=react,react-dom");
  const parentIsEsmSh = parentUrl.startsWith("https://esm.sh/");
  const isBlob = id.startsWith("blob:");
  if(!shipsWith && !id.includes("://") && !parentIsEsmSh) {
    id = "https://esm.sh/" + id;
  }
  if(!shipsWith && !alreadyPatched && !isBlob) {
    id = id + "?external=react,react-dom";
  }
  // console.log("resolve", id, parentUrl, resolve)
  return resolve(id, parentUrl);
}

// @ts-ignore
window.esmsInitOptions = { shimMode: true,
  resolve: (id: string, parentUrl: string, resolve: (id: string, parentUrl: string) => any) => autoExternalReactResolve(id, parentUrl, resolve)
}

let react18ESMUrls : any = null;
let react16ESMUrls : any = null;

async function ensureReactSetup(version: number) {
  if(version == 18) {
    if(react18ESMUrls == null) {
      react18ESMUrls = setUpReact18ESM();
    }
    return await react18ESMUrls;
  } else if(version == 16) {
    if(react16ESMUrls == null) {
      react16ESMUrls = setUpReact16ESM();
    }
    return await react16ESMUrls;
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
      value: null,
    };
    // TODO: ideally, we only compile code in the widget model, but the react hooks are
    // super convenient.
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  };

  static model_name = 'ReactModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ReactView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}


export class ReactView extends DOMWidgetView {
  render() {
    // @ts-ignore
    window.React18FromIpyReact = React;
    // @ts-ignore
    // window.React16FromIpyReact = React16;
    // @ts-ignore
    window.ReactDOM18FromIpyReact = ReactDOM;
    // @ts-ignore
    // window.ReactDOM16FromIpyReact = ReactDOM16;
    this.el.classList.add('jupyter-react-widget');
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

    // @ts-ignore
    // const React : any = {
    //   16: React16,
    //   18: React18,
    // }[this.model.get("react_version")];



    const Component = () => {
      // @ts-ignore
      // @ts-ignore
      const [_, setCounter] = useState(0);
      const forceRerender = () => {
        setCounter((x) => x + 1);
      }
      useEffect(() => {
        this.listenTo(this.model, 'change', forceRerender);
      }, []);

      const compiledCode : string | Error = React.useMemo(() => {
        const code = this.model.get('_esm');
        if(this.model.get("debug")) {
          console.log("original code:\n", code);
        }
        try {
          // using babel:
          // return Babel.transform(code,  { presets: ["react", "es2017"], plugins: ["importmap"] }).code;
          // using sucrase:
          let compiledCode = transform(code, {transforms: ["jsx", "typescript"], filePath: "test.tsx"}).code;
          if(this.model.get("debug")) {
            console.log("compiledCode:\n", compiledCode);
          }
          return compiledCode;
        } catch (e) {
          return e;
        }
      }, [this.model.get('_esm')])
      const props : any = {}
      for (const event_name of this.model.attributes["_event_names"]) {
        const handler = (value : any, buffers : any) => {
          if (buffers) {
              const validBuffers = buffers instanceof Array &&
                  buffers[0] instanceof ArrayBuffer;
              if (!validBuffers) {
                  console.warn('second argument is not an BufferArray[View] array')
                  buffers = undefined;
              }
          }
          this.model.send(
            {event_name, data: value},
            this.model.callbacks(this),
            buffers,
          );
        }
        props["on_" + event_name] = handler;
      }
      for (const key of Object.keys(this.model.attributes)) {
        props[key] = this.model.get(key);
        props["on_" + key] = (value: any) => {
          console.warn(`on_${key} is deprecated, use set_${key} instead`);
          this.model.set(key, value);
          this.touch();
        };
        props["set_" + key] = (value: any) => {
          this.model.set(key, value);
          this.touch();
        };
      }
      const [scope, setScope] = React.useState(null as any | Error);
      const [muiFix, setMuiFix] = React.useState(null as any | Error);

      React.useEffect(() => {
        let url : string | null = null;
        (async () => {
          if (compiledCode instanceof Error) {
            setScope(compiledCode);
            return;
          }
          const {urlReact, urlReactDom} = await ensureReactSetup(this.model.get("react_version"));
          await ensureImportShimLoaded();
          let finalCode = compiledCode;
          // @ts-ignore
          const importMapWidget = this.model.get("_import_map");
          const importMap = {
            "imports": {
              "react": urlReact,
              "react-dom": urlReactDom,
              ...importMapWidget["imports"]
            },
            "scopes": importMapWidget["scopes"]
          };
          // @ts-ignore
          importShim.addImportMap(importMap);
          const needsMuiFix = compiledCode.indexOf("@mui") !== -1;
          if(needsMuiFix) {
            setMuiFix(await setUpMuiFixModule());
          }
          url = URL.createObjectURL(
            new Blob([finalCode], { type: "text/javascript" }),
          );
          try{
            // @ts-ignore
            let module = await importShim(url);
            let name = this.model.get("name");
            if(name && name.length > 0) {
              // @ts-ignore
              importShim.addImportMap({"imports": {[name]: url}});
            }
            setScope(module);
            } catch (e) {
            setScope(e);
          }
        })();
        return () => {
          if(url) {
            URL.revokeObjectURL(url);
          }
        }
    }, [compiledCode]);

      if (!scope) {
        return <div>Loading...</div>;
      } else {
        if(scope instanceof Error) {
          return <pre>{scope.message}</pre>;
        } else {
          if(scope.default === undefined) {
            return <div>Missing default component</div>;
          } else {
            if(this.model.get("debug")) {
              console.log("props", props);
            }
            // @ts-ignore
            let el = React.createElement(scope.default, props)
            // check if @mui string is in compiledCode
            // if so, we need to wrap the element in a style wrapper
            // @ts-ignore
            const needsMuiFix = compiledCode.indexOf("@mui") !== -1;
            if(this.model.get("debug")) {
              console.log("needsMuiFix", needsMuiFix);
            }
            if(needsMuiFix) {
              el = muiFix.styleWrapper(el);
            }
            return el;
            
          }
        }
      }
    }
    if(this.model.get("react_version") === 18) {
      const root = ReactDOMClient.createRoot(this.el);
      root.render(<ErrorBoundary><Component></Component></ErrorBoundary>);
      } else {
        // @ts-ignore
        // ReactDOM16.render(<Component></Component>, this.el);
      
    }
  }
}
