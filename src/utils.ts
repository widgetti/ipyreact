import { transform } from 'sucrase';

const muiStyleFix = `
// This is a specific 'fix' for the notebook only, since its fontsize is non-16
import React from 'react';
// import PropTypes from 'prop-types';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 10,
    useNextVariants: true,
},
});

function FontSizeTheme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Typography component="span">{children}</Typography>
        </ThemeProvider>
    );
}

// FontSizeTheme.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export
function styleWrapper(element) {
    if(window.Jupyter) {
        return <FontSizeTheme>{element}</FontSizeTheme>;
    } else {
        return element;
    }
}
`

export async function setUpMuiFixModule() {
  const code = transform(muiStyleFix, {transforms: ["jsx", "typescript"], filePath: "muifix.tsx"}).code;
  let url = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
  // @ts-ignore
  return await importShim(url);
}




export async function setUpReact16ESM() {
    let urlReact = URL.createObjectURL(
      new Blob([`
      let r = window.React16FromIpyReact;
      const Children = r.Children;
      const Component = r.Component;
      const Fragment = r.Fragment;
      const Profiler = r.Profiler;
      const PureComponent = r.PureComponent;
      const StrictMode = r.StrictMode;
      const Suspense = r.Suspense;
      const cloneElement = r.cloneElement;
      const createContext = r.createContext;
      const createElement = r.createElement;
      const createFactory = r.createFactory;
      const createRef = r.createRef;
      const forwardRef = r.forwardRef;
      const isValidElement = r.isValidElement;
      const lazy = r.lazy;
      const memo = r.memo;
      const startTransition = r.startTransition;
      const unstable_act = r.unstable_act;
      const useCallback = r.useCallback;
      const useContext = r.useContext;
      const useDebugValue = r.useDebugValue;
      const useDeferredValue = r.useDeferredValue;
      const useEffect = r.useEffect;
      const useId = r.useId;
      const useImperativeHandle = r.useImperativeHandle;
      const useInsertionEffect = r.useInsertionEffect;
      const useLayoutEffect = r.useLayoutEffect;
      const useMemo = r.useMemo;
      const useReducer = r.useReducer;
      const useRef = r.useRef;
      const useState = r.useState;
      const useSyncExternalStore = r.useSyncExternalStore;
      const useTransition = r.useTransition;
      const version = r.version;
      const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  
      export default r.default;
      export {
        Children,
        Component,
        Fragment,
        Profiler,
        PureComponent,
        StrictMode,
        Suspense,
        cloneElement,
        createContext,
        createElement,
        createFactory,
        createRef,
        forwardRef,
        isValidElement,
        lazy,
        memo,
        startTransition,
        unstable_act,
        useCallback,
        useContext,
        useDebugValue,
        useDeferredValue,
        useEffect,
        useId,
        useImperativeHandle,
        useInsertionEffect,
        useLayoutEffect,
        useMemo,
        useReducer,
        useRef,
        useState,
        useSyncExternalStore,
        useTransition,
        version,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      };`
    ], { type: "text/javascript" }),
    );
    let urlReactDom = URL.createObjectURL(
        new Blob([`
        let r = window.ReactDOM16FromIpyReact;
        const createPortal = r.createPortal;
        const createRoot = r.createRoot;
        const findDOMNode = r.findDOMNode;
        const flushSync = r.flushSync;
        const hydrate = r.hydrate;
        const hydrateRoot = r.hydrateRoot;
        const render = r.render;
        const unmountComponentAtNode = r.unmountComponentAtNode;
        const unstable_batchedUpdates = r.unstable_batchedUpdates;
        const unstable_renderSubtreeIntoContainer = r.unstable_renderSubtreeIntoContainer;
        const version = r.version;
        const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        export default r.default;
        export {
            createPortal,
            createRoot,
            findDOMNode,
            flushSync,
            hydrate,
            hydrateRoot,
            render,
            unmountComponentAtNode,
            unstable_batchedUpdates,
            unstable_renderSubtreeIntoContainer,
            version,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        };`
        ], { type: "text/javascript" }),
    );
    return {urlReact, urlReactDom};
  }


export async function setUpReact18ESM() {
    let urlReact = URL.createObjectURL(
      new Blob([`
      let r = window.React18FromIpyReact;
      const Children = r.Children;
      const Component = r.Component;
      const Fragment = r.Fragment;
      const Profiler = r.Profiler;
      const PureComponent = r.PureComponent;
      const StrictMode = r.StrictMode;
      const Suspense = r.Suspense;
      const cloneElement = r.cloneElement;
      const createContext = r.createContext;
      const createElement = r.createElement;
      const createFactory = r.createFactory;
      const createRef = r.createRef;
      const forwardRef = r.forwardRef;
      const isValidElement = r.isValidElement;
      const lazy = r.lazy;
      const memo = r.memo;
      const startTransition = r.startTransition;
      const unstable_act = r.unstable_act;
      const useCallback = r.useCallback;
      const useContext = r.useContext;
      const useDebugValue = r.useDebugValue;
      const useDeferredValue = r.useDeferredValue;
      const useEffect = r.useEffect;
      const useId = r.useId;
      const useImperativeHandle = r.useImperativeHandle;
      const useInsertionEffect = r.useInsertionEffect;
      const useLayoutEffect = r.useLayoutEffect;
      const useMemo = r.useMemo;
      const useReducer = r.useReducer;
      const useRef = r.useRef;
      const useState = r.useState;
      const useSyncExternalStore = r.useSyncExternalStore;
      const useTransition = r.useTransition;
      const version = r.version;
      const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  
      export default r.default;
      export {
        Children,
        Component,
        Fragment,
        Profiler,
        PureComponent,
        StrictMode,
        Suspense,
        cloneElement,
        createContext,
        createElement,
        createFactory,
        createRef,
        forwardRef,
        isValidElement,
        lazy,
        memo,
        startTransition,
        unstable_act,
        useCallback,
        useContext,
        useDebugValue,
        useDeferredValue,
        useEffect,
        useId,
        useImperativeHandle,
        useInsertionEffect,
        useLayoutEffect,
        useMemo,
        useReducer,
        useRef,
        useState,
        useSyncExternalStore,
        useTransition,
        version,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      };`
    ], { type: "text/javascript" }),
    );
    let urlReactDom = URL.createObjectURL(
        new Blob([`
        let r = window.ReactDOM18FromIpyReact;
        const createPortal = r.createPortal;
        const createRoot = r.createRoot;
        const findDOMNode = r.findDOMNode;
        const flushSync = r.flushSync;
        const hydrate = r.hydrate;
        const hydrateRoot = r.hydrateRoot;
        const render = r.render;
        const unmountComponentAtNode = r.unmountComponentAtNode;
        const unstable_batchedUpdates = r.unstable_batchedUpdates;
        const unstable_renderSubtreeIntoContainer = r.unstable_renderSubtreeIntoContainer;
        const version = r.version;
        const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        export default r.default;
        export {
            createPortal,
            createRoot,
            findDOMNode,
            flushSync,
            hydrate,
            hydrateRoot,
            render,
            unmountComponentAtNode,
            unstable_batchedUpdates,
            unstable_renderSubtreeIntoContainer,
            version,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        };`
        ], { type: "text/javascript" }),
    );
    return {urlReact, urlReactDom};
  }

export async function loadScript(type: string, src: string) {
    const script = document.createElement("script")
    script.type = type
    script.src = src
    script.defer = true
    document.head.appendChild(script)
    return new Promise<void>((resolve, reject) => {
      script.onload = () => {
        resolve()
      }
      script.onerror = () => {
        reject()
      }
    })
  }

