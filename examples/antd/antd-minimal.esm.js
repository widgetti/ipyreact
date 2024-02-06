var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __copyProps = (to, from2, except, desc) => {
  if ((from2 && typeof from2 === "object") || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from2[key],
          enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod,
  )
);

// ../node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../node_modules/classnames/index.js"(exports, module2) {
    (function () {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames23() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames23.apply(null, arg);
        }
        if (
          arg.toString !== Object.prototype.toString &&
          !arg.toString.toString().includes("[native code]")
        ) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames23.default = classNames23;
        module2.exports = classNames23;
      } else if (
        typeof define === "function" &&
        typeof define.amd === "object" &&
        define.amd
      ) {
        define("classnames", [], function () {
          return classNames23;
        });
      } else {
        window.classNames = classNames23;
      }
    })();
  },
});

// ../node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js"(
    exports,
  ) {
    "use strict";
    if (true) {
      (function () {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_PROFILER_TYPE ||
            enableDebugTracing ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            enableLegacyHidden ||
            type === REACT_OFFSCREEN_TYPE ||
            enableScopeAPI ||
            enableCacheElement ||
            enableTransitionTracing
          ) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (
              type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE ||
              type.getModuleId !== void 0
            ) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment8 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"](
                "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.",
              );
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"](
                "The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.",
              );
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return (
            typeof object === "object" &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment4(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo2(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment8;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment4;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo2;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  },
});

// ../node_modules/rc-util/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../node_modules/rc-util/node_modules/react-is/index.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_is_development();
    }
  },
});

// ../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}

// ../node_modules/rc-resize-observer/es/index.js
import * as React7 from "react";

// ../node_modules/rc-util/es/Children/toArray.js
var import_react_is = __toESM(require_react_is());
import React from "react";
function toArray(children) {
  var option =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var ret = [];
  React.Children.forEach(children, function (child) {
    if ((child === void 0 || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0, import_react_is.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

// ../node_modules/rc-util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;

// ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o2) {
            return typeof o2;
          }
        : function (o2) {
            return o2 &&
              "function" == typeof Symbol &&
              o2.constructor === Symbol &&
              o2 !== Symbol.prototype
              ? "symbol"
              : typeof o2;
          }),
    _typeof(o)
  );
}

// ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}

// ../node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), true).forEach(function (r2) {
          _defineProperty(e, r2, t[r2]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach(function (r2) {
            Object.defineProperty(
              e,
              r2,
              Object.getOwnPropertyDescriptor(t, r2),
            );
          });
  }
  return e;
}

// ../node_modules/rc-util/es/Dom/findDOMNode.js
import React2 from "react";
import ReactDOM from "react-dom";
function isDOM(node2) {
  return node2 instanceof HTMLElement || node2 instanceof SVGElement;
}
function findDOMNode(node2) {
  if (isDOM(node2)) {
    return node2;
  }
  if (node2 instanceof React2.Component) {
    return ReactDOM.findDOMNode(node2);
  }
  return null;
}

// ../node_modules/rc-util/es/ref.js
var import_react_is2 = __toESM(require_react_is());
import { isValidElement } from "react";

// ../node_modules/rc-util/es/hooks/useMemo.js
import * as React3 from "react";
function useMemo(getValue2, condition, shouldUpdate) {
  var cacheRef = React3.useRef({});
  if (
    !("value" in cacheRef.current) ||
    shouldUpdate(cacheRef.current.condition, condition)
  ) {
    cacheRef.current.value = getValue2();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}

// ../node_modules/rc-util/es/ref.js
function fillRef(ref, node2) {
  if (typeof ref === "function") {
    ref(node2);
  } else if (_typeof(ref) === "object" && ref && "current" in ref) {
    ref.current = node2;
  }
}
function composeRef() {
  for (
    var _len = arguments.length, refs = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(function (ref) {
    return ref;
  });
  if (refList.length <= 1) {
    return refList[0];
  }
  return function (node2) {
    refs.forEach(function (ref) {
      fillRef(ref, node2);
    });
  };
}
function useComposeRef() {
  for (
    var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    refs[_key2] = arguments[_key2];
  }
  return useMemo(
    function () {
      return composeRef.apply(void 0, refs);
    },
    refs,
    function (prev2, next2) {
      return (
        prev2.length !== next2.length ||
        prev2.every(function (ref, i) {
          return ref !== next2[i];
        })
      );
    },
  );
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type = (0, import_react_is2.isMemo)(nodeOrComponent)
    ? nodeOrComponent.type.type
    : nodeOrComponent.type;
  if (
    typeof type === "function" &&
    !(
      (_type$prototype = type.prototype) !== null &&
      _type$prototype !== void 0 &&
      _type$prototype.render
    )
  ) {
    return false;
  }
  if (
    typeof nodeOrComponent === "function" &&
    !(
      (_nodeOrComponent$prot = nodeOrComponent.prototype) !== null &&
      _nodeOrComponent$prot !== void 0 &&
      _nodeOrComponent$prot.render
    )
  ) {
    return false;
  }
  return true;
}

// ../node_modules/rc-resize-observer/es/SingleObserver/index.js
import * as React6 from "react";

// ../node_modules/rc-resize-observer/es/Collection.js
import * as React4 from "react";
var CollectionContext = /* @__PURE__ */ React4.createContext(null);
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = React4.useRef(0);
  var resizeInfosRef = React4.useRef([]);
  var onCollectionResize = React4.useContext(CollectionContext);
  var onResize2 = React4.useCallback(
    function (size, element, data) {
      resizeIdRef.current += 1;
      var currentId = resizeIdRef.current;
      resizeInfosRef.current.push({
        size,
        element,
        data,
      });
      Promise.resolve().then(function () {
        if (currentId === resizeIdRef.current) {
          onBatchResize === null ||
            onBatchResize === void 0 ||
            onBatchResize(resizeInfosRef.current);
          resizeInfosRef.current = [];
        }
      });
      onCollectionResize === null ||
        onCollectionResize === void 0 ||
        onCollectionResize(size, element, data);
    },
    [onBatchResize, onCollectionResize],
  );
  return /* @__PURE__ */ React4.createElement(
    CollectionContext.Provider,
    {
      value: onResize2,
    },
    children,
  );
}

// ../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var MapShim = (function () {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex2(arr, key) {
    var result = -1;
    arr.some(function (entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return (
    /** @class */
    (function () {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function () {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true,
      });
      class_1.prototype.get = function (key) {
        var index2 = getIndex2(this.__entries__, key);
        var entry = this.__entries__[index2];
        return entry && entry[1];
      };
      class_1.prototype.set = function (key, value) {
        var index2 = getIndex2(this.__entries__, key);
        if (~index2) {
          this.__entries__[index2][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      class_1.prototype.delete = function (key) {
        var entries = this.__entries__;
        var index2 = getIndex2(entries, key);
        if (~index2) {
          entries.splice(index2, 1);
        }
      };
      class_1.prototype.has = function (key) {
        return !!~getIndex2(this.__entries__, key);
      };
      class_1.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    })()
  );
})();
var isBrowser =
  typeof window !== "undefined" &&
  typeof document !== "undefined" &&
  window.document === document;
var global$1 = (function () {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
})();
var requestAnimationFrame$1 = (function () {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1e3 / 60);
  };
})();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false,
    trailingCall = false,
    lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = [
  "top",
  "right",
  "bottom",
  "left",
  "width",
  "height",
  "size",
  "weight",
];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController =
  /** @class */
  (function () {
    function ResizeObserverController2() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    ResizeObserverController2.prototype.addObserver = function (observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      }
      if (!this.connected_) {
        this.connect_();
      }
    };
    ResizeObserverController2.prototype.removeObserver = function (observer) {
      var observers2 = this.observers_;
      var index2 = observers2.indexOf(observer);
      if (~index2) {
        observers2.splice(index2, 1);
      }
      if (!observers2.length && this.connected_) {
        this.disconnect_();
      }
    };
    ResizeObserverController2.prototype.refresh = function () {
      var changesDetected = this.updateObservers_();
      if (changesDetected) {
        this.refresh();
      }
    };
    ResizeObserverController2.prototype.updateObservers_ = function () {
      var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
      });
      activeObservers.forEach(function (observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    ResizeObserverController2.prototype.connect_ = function () {
      if (!isBrowser || this.connected_) {
        return;
      }
      document.addEventListener("transitionend", this.onTransitionEnd_);
      window.addEventListener("resize", this.refresh);
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true,
        });
      } else {
        document.addEventListener("DOMSubtreeModified", this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    };
    ResizeObserverController2.prototype.disconnect_ = function () {
      if (!isBrowser || !this.connected_) {
        return;
      }
      document.removeEventListener("transitionend", this.onTransitionEnd_);
      window.removeEventListener("resize", this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener("DOMSubtreeModified", this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    ResizeObserverController2.prototype.onTransitionEnd_ = function (_a) {
      var _b = _a.propertyName,
        propertyName = _b === void 0 ? "" : _b;
      var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
      });
      if (isReflowProperty) {
        this.refresh();
      }
    };
    ResizeObserverController2.getInstance = function () {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController2();
      }
      return this.instance_;
    };
    ResizeObserverController2.instance_ = null;
    return ResizeObserverController2;
  })();
var defineConfigurable = function (target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true,
    });
  }
  return target;
};
var getWindowOf = function (target) {
  var ownerGlobal =
    target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function (size, position2) {
    var value = styles["border-" + position2 + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position2 = positions_1[_i];
    var value = styles["padding-" + position2];
    paddings[position2] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth,
    clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width),
    height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = (function () {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function (target) {
    return (
      target instanceof getWindowOf(target).SVGElement &&
      typeof target.getBBox === "function"
    );
  };
})();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x,
    y = _a.y,
    width = _a.width,
    height = _a.height;
  var Constr =
    typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x,
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var ResizeObservation =
  /** @class */
  (function () {
    function ResizeObservation2(target) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    ResizeObservation2.prototype.isActive = function () {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return (
        rect.width !== this.broadcastWidth ||
        rect.height !== this.broadcastHeight
      );
    };
    ResizeObservation2.prototype.broadcastRect = function () {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };
    return ResizeObservation2;
  })();
var ResizeObserverEntry =
  /** @class */
  (function () {
    function ResizeObserverEntry2(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);
      defineConfigurable(this, { target, contentRect });
    }
    return ResizeObserverEntry2;
  })();
var ResizeObserverSPI =
  /** @class */
  (function () {
    function ResizeObserverSPI2(callback, controller, callbackCtx) {
      this.activeObservations_ = [];
      this.observations_ = new MapShim();
      if (typeof callback !== "function") {
        throw new TypeError(
          "The callback provided as parameter 1 is not a function.",
        );
      }
      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    ResizeObserverSPI2.prototype.observe = function (target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (observations.has(target)) {
        return;
      }
      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this);
      this.controller_.refresh();
    };
    ResizeObserverSPI2.prototype.unobserve = function (target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (!observations.has(target)) {
        return;
      }
      observations.delete(target);
      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    ResizeObserverSPI2.prototype.disconnect = function () {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    ResizeObserverSPI2.prototype.gatherActive = function () {
      var _this = this;
      this.clearActive();
      this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    ResizeObserverSPI2.prototype.broadcastActive = function () {
      if (!this.hasActive()) {
        return;
      }
      var ctx = this.callbackCtx_;
      var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(
          observation.target,
          observation.broadcastRect(),
        );
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    ResizeObserverSPI2.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    };
    ResizeObserverSPI2.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI2;
  })();
var observers =
  typeof WeakMap !== "undefined"
    ? /* @__PURE__ */ new WeakMap()
    : new MapShim();
var ResizeObserver2 =
  /** @class */
  (function () {
    function ResizeObserver4(callback) {
      if (!(this instanceof ResizeObserver4)) {
        throw new TypeError("Cannot call a class as a function.");
      }
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }
    return ResizeObserver4;
  })();
["observe", "unobserve", "disconnect"].forEach(function (method) {
  ResizeObserver2.prototype[method] = function () {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index = (function () {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver2;
})();
var ResizeObserver_es_default = index;

// ../node_modules/rc-resize-observer/es/utils/observerUtil.js
var elementListeners = /* @__PURE__ */ new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null ||
      _elementListeners$get === void 0 ||
      _elementListeners$get.forEach(function (listener) {
        return listener(target);
      });
  });
}
var resizeObserver = new ResizeObserver_es_default(onResize);
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, /* @__PURE__ */ new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}

// ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// ../node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false,
  });
  return Constructor;
}

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
  return _setPrototypeOf(o, p);
}

// ../node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false,
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

// ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
  return _getPrototypeOf(o);
}

// ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch (t2) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}

// ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self2;
}

// ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self2, call2) {
  if (call2 && (_typeof(call2) === "object" || typeof call2 === "function")) {
    return call2;
  } else if (call2 !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  }
  return _assertThisInitialized(self2);
}

// ../node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

// ../node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js
import * as React5 from "react";
var DomWrapper = /* @__PURE__ */ (function (_React$Component) {
  _inherits(DomWrapper3, _React$Component);
  var _super = _createSuper(DomWrapper3);
  function DomWrapper3() {
    _classCallCheck(this, DomWrapper3);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper3, [
    {
      key: "render",
      value: function render2() {
        return this.props.children;
      },
    },
  ]);
  return DomWrapper3;
})(React5.Component);

// ../node_modules/rc-resize-observer/es/SingleObserver/index.js
function SingleObserver(props, ref) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = React6.useRef(null);
  var wrapperRef = React6.useRef(null);
  var onCollectionResize = React6.useContext(CollectionContext);
  var isRenderProps = typeof children === "function";
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  var sizeRef = React6.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1,
  });
  var canRef =
    !isRenderProps &&
    /* @__PURE__ */ React6.isValidElement(mergedChildren) &&
    supportRef(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = useComposeRef(originRef, elementRef);
  var getDom = function getDom2() {
    var _elementRef$current;
    return (
      findDOMNode(elementRef.current) || // Support `nativeElement` format
      (elementRef.current && _typeof(elementRef.current) === "object"
        ? findDOMNode(
            (_elementRef$current = elementRef.current) === null ||
              _elementRef$current === void 0
              ? void 0
              : _elementRef$current.nativeElement,
          )
        : null) ||
      findDOMNode(wrapperRef.current)
    );
  };
  React6.useImperativeHandle(ref, function () {
    return getDom();
  });
  var propsRef = React6.useRef(props);
  propsRef.current = props;
  var onInternalResize = React6.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize2 = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (
      sizeRef.current.width !== fixedWidth ||
      sizeRef.current.height !== fixedHeight ||
      sizeRef.current.offsetWidth !== offsetWidth ||
      sizeRef.current.offsetHeight !== offsetHeight
    ) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth,
        offsetHeight,
      };
      sizeRef.current = size;
      var mergedOffsetWidth =
        offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight =
        offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = _objectSpread2(
        _objectSpread2({}, size),
        {},
        {
          offsetWidth: mergedOffsetWidth,
          offsetHeight: mergedOffsetHeight,
        },
      );
      onCollectionResize === null ||
        onCollectionResize === void 0 ||
        onCollectionResize(sizeInfo, target, data);
      if (onResize2) {
        Promise.resolve().then(function () {
          onResize2(sizeInfo, target);
        });
      }
    }
  }, []);
  React6.useEffect(
    function () {
      var currentElement = getDom();
      if (currentElement && !disabled) {
        observe(currentElement, onInternalResize);
      }
      return function () {
        return unobserve(currentElement, onInternalResize);
      };
    },
    [elementRef.current, disabled],
  );
  return /* @__PURE__ */ React6.createElement(
    DomWrapper,
    {
      ref: wrapperRef,
    },
    canRef
      ? /* @__PURE__ */ React6.cloneElement(mergedChildren, {
          ref: mergedRef,
        })
      : mergedChildren,
  );
}
var RefSingleObserver = /* @__PURE__ */ React6.forwardRef(SingleObserver);
if (true) {
  RefSingleObserver.displayName = "SingleObserver";
}
var SingleObserver_default = RefSingleObserver;

// ../node_modules/rc-resize-observer/es/index.js
var INTERNAL_PREFIX_KEY = "rc-observer-key";
function ResizeObserver3(props, ref) {
  var children = props.children;
  var childNodes =
    typeof children === "function" ? [children] : toArray(children);
  if (true) {
    if (childNodes.length > 1) {
      warning(
        false,
        "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.",
      );
    } else if (childNodes.length === 0) {
      warning(
        false,
        "`children` of ResizeObserver is empty. Nothing is in observe.",
      );
    }
  }
  return childNodes.map(function (child, index2) {
    var key =
      (child === null || child === void 0 ? void 0 : child.key) ||
      "".concat(INTERNAL_PREFIX_KEY, "-").concat(index2);
    return /* @__PURE__ */ React7.createElement(
      SingleObserver_default,
      _extends({}, props, {
        key,
        ref: index2 === 0 ? ref : void 0,
      }),
      child,
    );
  });
}
var RefResizeObserver = /* @__PURE__ */ React7.forwardRef(ResizeObserver3);
if (true) {
  RefResizeObserver.displayName = "ResizeObserver";
}
RefResizeObserver.Collection = Collection;
var es_default = RefResizeObserver;

// ../node_modules/rc-util/es/omit.js
function omit(obj, fields) {
  var clone = _objectSpread2({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}

// ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

// ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

// ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
}

// ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}

// ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

// ../node_modules/rc-util/es/raf.js
var raf = function raf2(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf2(num) {
  return clearTimeout(num);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
  raf = function raf3(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf3(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf2(callback) {
  var times =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      var realId = raf(function () {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(id);
  return caf(realId);
};
if (true) {
  wrapperRaf.ids = function () {
    return rafIds;
  };
}
var raf_default = wrapperRaf;

// ../node_modules/antd/es/config-provider/index.js
import * as React35 from "react";

// ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

// ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = false;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = true
        );
    } catch (r2) {
      (o = true), (n = r2);
    } finally {
      try {
        if (!f && null != t["return"] && ((u = t["return"]()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}

// ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

// ../node_modules/@emotion/hash/dist/hash.browser.esm.js
function murmur2(str) {
  var h = 0;
  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k =
      (str.charCodeAt(i) & 255) |
      ((str.charCodeAt(++i) & 255) << 8) |
      ((str.charCodeAt(++i) & 255) << 16) |
      ((str.charCodeAt(++i) & 255) << 24);
    k =
      /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + (((k >>> 16) * 59797) << 16);
    k ^= /* k >>> r: */ k >>> 24;
    h =
      /* Math.imul(k, m): */
      ((k & 65535) * 1540483477 +
        (((k >>> 16) * 59797) << 16)) /* Math.imul(h, m): */ ^
      ((h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16));
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h =
        /* Math.imul(h, m): */
        (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16);
  }
  h ^= h >>> 13;
  h =
    /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16);
  return ((h ^ (h >>> 15)) >>> 0).toString(36);
}
var hash_browser_esm_default = murmur2;

// ../node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

// ../node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n);
  }
  var node2 = n;
  while (node2) {
    if (node2 === root) {
      return true;
    }
    node2 = node2.parentNode;
  }
  return false;
}

// ../node_modules/rc-util/es/Dom/dynamicCSS.js
var APPEND_ORDER = "data-rc-order";
var APPEND_PRIORITY = "data-rc-priority";
var MARK_KEY = "rc-util-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from(
    (containerCache.get(container) || container).children,
  ).filter(function (node2) {
    return node2.tagName === "STYLE";
  });
}
function injectCSS(css) {
  var option =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend,
    _option$priority = option.priority,
    priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === "prependQueue";
  var styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    if (isPrependQueue) {
      var existStyle = findStyles(container).filter(function (node2) {
        if (
          !["prepend", "prependQueue"].includes(
            node2.getAttribute(APPEND_ORDER),
          )
        ) {
          return false;
        }
        var nodePriority = Number(node2.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(
          styleNode,
          existStyle[existStyle.length - 1].nextSibling,
        );
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function (node2) {
    return node2.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var option =
    arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(option);
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if (
      (_option$csp = option.csp) !== null &&
      _option$csp !== void 0 &&
      _option$csp.nonce &&
      existNode.nonce !==
        ((_option$csp2 = option.csp) === null || _option$csp2 === void 0
          ? void 0
          : _option$csp2.nonce)
    ) {
      var _option$csp3;
      existNode.nonce =
        (_option$csp3 = option.csp) === null || _option$csp3 === void 0
          ? void 0
          : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

// ../node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js
import { useContext as useContext5 } from "react";

// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

// ../node_modules/rc-util/es/isEqual.js
function isEqual(obj1, obj2) {
  var shallow =
    arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var refSet = /* @__PURE__ */ new Set();
  function deepEqual(a, b) {
    var level =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    var circular = refSet.has(a);
    warning_default(!circular, "Warning: There may be circular references");
    if (circular) {
      return false;
    }
    if (a === b) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    var newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b && _typeof(a) === "object" && _typeof(b) === "object") {
      var keys2 = Object.keys(a);
      if (keys2.length !== Object.keys(b).length) {
        return false;
      }
      return keys2.every(function (key) {
        return deepEqual(a[key], b[key], newLevel);
      });
    }
    return false;
  }
  return deepEqual(obj1, obj2);
}
var isEqual_default = isEqual;

// ../node_modules/@ant-design/cssinjs/es/StyleContext.js
import * as React8 from "react";

// ../node_modules/@ant-design/cssinjs/es/Cache.js
var SPLIT = "%";
function pathKey(keys2) {
  return keys2.join(SPLIT);
}
var Entity = /* @__PURE__ */ (function () {
  function Entity2(instanceId) {
    _classCallCheck(this, Entity2);
    _defineProperty(this, "instanceId", void 0);
    _defineProperty(this, "cache", /* @__PURE__ */ new Map());
    this.instanceId = instanceId;
  }
  _createClass(Entity2, [
    {
      key: "get",
      value: function get2(keys2) {
        return this.opGet(pathKey(keys2));
      },
      /** A fast get cache with `get` concat. */
    },
    {
      key: "opGet",
      value: function opGet(keyPathStr) {
        return this.cache.get(keyPathStr) || null;
      },
    },
    {
      key: "update",
      value: function update(keys2, valueFn) {
        return this.opUpdate(pathKey(keys2), valueFn);
      },
      /** A fast get cache with `get` concat. */
    },
    {
      key: "opUpdate",
      value: function opUpdate(keyPathStr, valueFn) {
        var prevValue = this.cache.get(keyPathStr);
        var nextValue = valueFn(prevValue);
        if (nextValue === null) {
          this.cache.delete(keyPathStr);
        } else {
          this.cache.set(keyPathStr, nextValue);
        }
      },
    },
  ]);
  return Entity2;
})();
var Cache_default = Entity;

// ../node_modules/@ant-design/cssinjs/es/StyleContext.js
var ATTR_TOKEN = "data-token-hash";
var ATTR_MARK = "data-css-hash";
var ATTR_CACHE_PATH = "data-cache-path";
var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
  var cssinjsInstanceId = Math.random().toString(12).slice(2);
  if (typeof document !== "undefined" && document.head && document.body) {
    var styles =
      document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
    var firstChild = document.head.firstChild;
    Array.from(styles).forEach(function (style2) {
      style2[CSS_IN_JS_INSTANCE] =
        style2[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
      if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style2, firstChild);
      }
    });
    var styleHash = {};
    Array.from(
      document.querySelectorAll("style[".concat(ATTR_MARK, "]")),
    ).forEach(function (style2) {
      var hash = style2.getAttribute(ATTR_MARK);
      if (styleHash[hash]) {
        if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          var _style$parentNode;
          (_style$parentNode = style2.parentNode) === null ||
            _style$parentNode === void 0 ||
            _style$parentNode.removeChild(style2);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new Cache_default(cssinjsInstanceId);
}
var StyleContext = /* @__PURE__ */ React8.createContext({
  hashPriority: "low",
  cache: createCache(),
  defaultCache: true,
});
var StyleContext_default = StyleContext;

// ../node_modules/@ant-design/cssinjs/es/theme/ThemeCache.js
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (var i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
var ThemeCache = /* @__PURE__ */ (function () {
  function ThemeCache2() {
    _classCallCheck(this, ThemeCache2);
    _defineProperty(this, "cache", void 0);
    _defineProperty(this, "keys", void 0);
    _defineProperty(this, "cacheCallTimes", void 0);
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  _createClass(ThemeCache2, [
    {
      key: "size",
      value: function size() {
        return this.keys.length;
      },
    },
    {
      key: "internalGet",
      value: function internalGet(derivativeOption) {
        var _cache2, _cache3;
        var updateCallTimes =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : false;
        var cache = {
          map: this.cache,
        };
        derivativeOption.forEach(function (derivative2) {
          if (!cache) {
            cache = void 0;
          } else {
            var _cache;
            cache =
              (_cache = cache) === null ||
              _cache === void 0 ||
              (_cache = _cache.map) === null ||
              _cache === void 0
                ? void 0
                : _cache.get(derivative2);
          }
        });
        if (
          (_cache2 = cache) !== null &&
          _cache2 !== void 0 &&
          _cache2.value &&
          updateCallTimes
        ) {
          cache.value[1] = this.cacheCallTimes++;
        }
        return (_cache3 = cache) === null || _cache3 === void 0
          ? void 0
          : _cache3.value;
      },
    },
    {
      key: "get",
      value: function get2(derivativeOption) {
        var _this$internalGet;
        return (_this$internalGet = this.internalGet(
          derivativeOption,
          true,
        )) === null || _this$internalGet === void 0
          ? void 0
          : _this$internalGet[0];
      },
    },
    {
      key: "has",
      value: function has(derivativeOption) {
        return !!this.internalGet(derivativeOption);
      },
    },
    {
      key: "set",
      value: function set2(derivativeOption, value) {
        var _this = this;
        if (!this.has(derivativeOption)) {
          if (
            this.size() + 1 >
            ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET
          ) {
            var _this$keys$reduce = this.keys.reduce(
                function (result, key) {
                  var _result = _slicedToArray(result, 2),
                    callTimes = _result[1];
                  if (_this.internalGet(key)[1] < callTimes) {
                    return [key, _this.internalGet(key)[1]];
                  }
                  return result;
                },
                [this.keys[0], this.cacheCallTimes],
              ),
              _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1),
              targetKey = _this$keys$reduce2[0];
            this.delete(targetKey);
          }
          this.keys.push(derivativeOption);
        }
        var cache = this.cache;
        derivativeOption.forEach(function (derivative2, index2) {
          if (index2 === derivativeOption.length - 1) {
            cache.set(derivative2, {
              value: [value, _this.cacheCallTimes++],
            });
          } else {
            var cacheValue = cache.get(derivative2);
            if (!cacheValue) {
              cache.set(derivative2, {
                map: /* @__PURE__ */ new Map(),
              });
            } else if (!cacheValue.map) {
              cacheValue.map = /* @__PURE__ */ new Map();
            }
            cache = cache.get(derivative2).map;
          }
        });
      },
    },
    {
      key: "deleteByPath",
      value: function deleteByPath(currentCache, derivatives) {
        var cache = currentCache.get(derivatives[0]);
        if (derivatives.length === 1) {
          var _cache$value;
          if (!cache.map) {
            currentCache.delete(derivatives[0]);
          } else {
            currentCache.set(derivatives[0], {
              map: cache.map,
            });
          }
          return (_cache$value = cache.value) === null ||
            _cache$value === void 0
            ? void 0
            : _cache$value[0];
        }
        var result = this.deleteByPath(cache.map, derivatives.slice(1));
        if ((!cache.map || cache.map.size === 0) && !cache.value) {
          currentCache.delete(derivatives[0]);
        }
        return result;
      },
    },
    {
      key: "delete",
      value: function _delete(derivativeOption) {
        if (this.has(derivativeOption)) {
          this.keys = this.keys.filter(function (item) {
            return !sameDerivativeOption(item, derivativeOption);
          });
          return this.deleteByPath(this.cache, derivativeOption);
        }
        return void 0;
      },
    },
  ]);
  return ThemeCache2;
})();
_defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
_defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);

// ../node_modules/@ant-design/cssinjs/es/theme/Theme.js
var uuid = 0;
var Theme = /* @__PURE__ */ (function () {
  function Theme2(derivatives) {
    _classCallCheck(this, Theme2);
    _defineProperty(this, "derivatives", void 0);
    _defineProperty(this, "id", void 0);
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      warning(
        derivatives.length > 0,
        "[Ant Design CSS-in-JS] Theme should have at least one derivative function.",
      );
    }
    uuid += 1;
  }
  _createClass(Theme2, [
    {
      key: "getDerivativeToken",
      value: function getDerivativeToken(token2) {
        return this.derivatives.reduce(
          function (result, derivative2) {
            return derivative2(token2, result);
          },
          void 0,
        );
      },
    },
  ]);
  return Theme2;
})();

// ../node_modules/@ant-design/cssinjs/es/theme/createTheme.js
var cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}

// ../node_modules/@ant-design/cssinjs/es/util/index.js
var resultCache = /* @__PURE__ */ new WeakMap();
var RESULT_VALUE = {};
function memoResult(callback, deps) {
  var current = resultCache;
  for (var i = 0; i < deps.length; i += 1) {
    var dep = deps[i];
    if (!current.has(dep)) {
      current.set(dep, /* @__PURE__ */ new WeakMap());
    }
    current = current.get(dep);
  }
  if (!current.has(RESULT_VALUE)) {
    current.set(RESULT_VALUE, callback());
  }
  return current.get(RESULT_VALUE);
}
var flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token2) {
  var str = flattenTokenCache.get(token2) || "";
  if (!str) {
    Object.keys(token2).forEach(function (key) {
      var value = token2[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && _typeof(value) === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    flattenTokenCache.set(token2, str);
  }
  return str;
}
function token2key(token2, salt) {
  return hash_browser_esm_default(
    "".concat(salt, "_").concat(flattenToken(token2)),
  );
}
var randomSelectorKey = "random-"
  .concat(Date.now(), "-")
  .concat(Math.random())
  .replace(/\./g, "");
var checkContent = "_bAmBoO_";
function supportSelector(styleStr, handleElement, supportCheck) {
  if (canUseDom()) {
    var _getComputedStyle$con, _ele$parentNode;
    updateCSS(styleStr, randomSelectorKey);
    var _ele = document.createElement("div");
    _ele.style.position = "fixed";
    _ele.style.left = "0";
    _ele.style.top = "0";
    handleElement === null || handleElement === void 0 || handleElement(_ele);
    document.body.appendChild(_ele);
    if (true) {
      _ele.innerHTML = "Test";
      _ele.style.zIndex = "9999999";
    }
    var support = supportCheck
      ? supportCheck(_ele)
      : (_getComputedStyle$con = getComputedStyle(_ele).content) === null ||
          _getComputedStyle$con === void 0
        ? void 0
        : _getComputedStyle$con.includes(checkContent);
    (_ele$parentNode = _ele.parentNode) === null ||
      _ele$parentNode === void 0 ||
      _ele$parentNode.removeChild(_ele);
    removeCSS(randomSelectorKey);
    return support;
  }
  return false;
}
var canLayer = void 0;
function supportLayer() {
  if (canLayer === void 0) {
    canLayer = supportSelector(
      "@layer "
        .concat(randomSelectorKey, " { .")
        .concat(randomSelectorKey, ' { content: "')
        .concat(checkContent, '"!important; } }'),
      function (ele) {
        ele.className = randomSelectorKey;
      },
    );
  }
  return canLayer;
}
var isClientSide = canUseDom();
function unit(num) {
  if (typeof num === "number") {
    return "".concat(num, "px");
  }
  return num;
}
function toStyleStr(style2, tokenKey, styleId) {
  var _objectSpread22;
  var customizeAttrs =
    arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var plain =
    arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  if (plain) {
    return style2;
  }
  var attrs = _objectSpread2(
    _objectSpread2({}, customizeAttrs),
    {},
    ((_objectSpread22 = {}),
    _defineProperty(_objectSpread22, ATTR_TOKEN, tokenKey),
    _defineProperty(_objectSpread22, ATTR_MARK, styleId),
    _objectSpread22),
  );
  var attrStr = Object.keys(attrs)
    .map(function (attr) {
      var val = attrs[attr];
      return val ? "".concat(attr, '="').concat(val, '"') : null;
    })
    .filter(function (v) {
      return v;
    })
    .join(" ");
  return "<style ".concat(attrStr, ">").concat(style2, "</style>");
}

// ../node_modules/@ant-design/cssinjs/es/util/css-variables.js
var token2CSSVar = function token2CSSVar2(token2) {
  var prefix =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--"
    .concat(prefix ? "".concat(prefix, "-") : "")
    .concat(token2)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2")
    .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
    .toLowerCase();
};
var serializeCSSVar = function serializeCSSVar2(cssVars, hashId, options) {
  if (!Object.keys(cssVars).length) {
    return "";
  }
  return "."
    .concat(hashId)
    .concat(
      options !== null && options !== void 0 && options.scope
        ? ".".concat(options.scope)
        : "",
      "{",
    )
    .concat(
      Object.entries(cssVars)
        .map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          return "".concat(key, ":").concat(value, ";");
        })
        .join(""),
      "}",
    );
};
var transformToken = function transformToken2(token2, themeKey, config) {
  var cssVars = {};
  var result = {};
  Object.entries(token2).forEach(function (_ref3) {
    var _config$preserve, _config$ignore;
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    if (
      config !== null &&
      config !== void 0 &&
      (_config$preserve = config.preserve) !== null &&
      _config$preserve !== void 0 &&
      _config$preserve[key]
    ) {
      result[key] = value;
    } else if (
      (typeof value === "string" || typeof value === "number") &&
      !(
        config !== null &&
        config !== void 0 &&
        (_config$ignore = config.ignore) !== null &&
        _config$ignore !== void 0 &&
        _config$ignore[key]
      )
    ) {
      var _config$unitless;
      var cssVar = token2CSSVar(
        key,
        config === null || config === void 0 ? void 0 : config.prefix,
      );
      cssVars[cssVar] =
        typeof value === "number" &&
        !(
          config !== null &&
          config !== void 0 &&
          (_config$unitless = config.unitless) !== null &&
          _config$unitless !== void 0 &&
          _config$unitless[key]
        )
          ? "".concat(value, "px")
          : String(value);
      result[key] = "var(".concat(cssVar, ")");
    }
  });
  return [
    result,
    serializeCSSVar(cssVars, themeKey, {
      scope: config === null || config === void 0 ? void 0 : config.scope,
    }),
  ];
};

// ../node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js
import * as React12 from "react";

// ../node_modules/rc-util/es/hooks/useLayoutEffect.js
import * as React9 from "react";
var useInternalLayoutEffect = canUseDom()
  ? React9.useLayoutEffect
  : React9.useEffect;
var useLayoutEffect2 = function useLayoutEffect3(callback, deps) {
  var firstMountRef = React9.useRef(true);
  useInternalLayoutEffect(function () {
    return callback(firstMountRef.current);
  }, deps);
  useInternalLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
  useLayoutEffect2(function (firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
var useLayoutEffect_default = useLayoutEffect2;

// ../node_modules/@ant-design/cssinjs/es/hooks/useCompatibleInsertionEffect.js
import * as React10 from "react";
var fullClone = _objectSpread2({}, React10);
var useInsertionEffect = fullClone.useInsertionEffect;
var useInsertionEffectPolyfill = function useInsertionEffectPolyfill2(
  renderEffect,
  effect,
  deps,
) {
  React10.useMemo(renderEffect, deps);
  useLayoutEffect_default(function () {
    return effect(true);
  }, deps);
};
var useCompatibleInsertionEffect = useInsertionEffect
  ? function (renderEffect, effect, deps) {
      return useInsertionEffect(function () {
        renderEffect();
        return effect();
      }, deps);
    }
  : useInsertionEffectPolyfill;
var useCompatibleInsertionEffect_default = useCompatibleInsertionEffect;

// ../node_modules/@ant-design/cssinjs/es/hooks/useEffectCleanupRegister.js
import * as React11 from "react";
var fullClone2 = _objectSpread2({}, React11);
var useInsertionEffect2 = fullClone2.useInsertionEffect;
var useCleanupRegister = function useCleanupRegister2(deps) {
  var effectCleanups = [];
  var cleanupFlag = false;
  function register(fn) {
    if (cleanupFlag) {
      if (true) {
        warning(
          false,
          "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.",
        );
      }
      return;
    }
    effectCleanups.push(fn);
  }
  React11.useEffect(function () {
    cleanupFlag = false;
    return function () {
      cleanupFlag = true;
      if (effectCleanups.length) {
        effectCleanups.forEach(function (fn) {
          return fn();
        });
      }
    };
  }, deps);
  return register;
};
var useRun = function useRun2() {
  return function (fn) {
    fn();
  };
};
var useEffectCleanupRegister =
  typeof useInsertionEffect2 !== "undefined" ? useCleanupRegister : useRun;
var useEffectCleanupRegister_default = useEffectCleanupRegister;

// ../node_modules/@ant-design/cssinjs/es/hooks/useHMR.js
var webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
var useHMR_default = false ? useProdHMR : useDevHMR;
if (
  typeof module !== "undefined" &&
  module &&
  module.hot &&
  typeof window !== "undefined"
) {
  win = window;
  if (typeof win.webpackHotUpdate === "function") {
    originWebpackHotUpdate = win.webpackHotUpdate;
    win.webpackHotUpdate = function () {
      webpackHMR = true;
      setTimeout(function () {
        webpackHMR = false;
      }, 0);
      return originWebpackHotUpdate.apply(void 0, arguments);
    };
  }
}
var win;
var originWebpackHotUpdate;

// ../node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js
function useGlobalCache(
  prefix,
  keyPath,
  cacheFn,
  onCacheRemove,
  onCacheEffect,
) {
  var _React$useContext = React12.useContext(StyleContext_default),
    globalCache = _React$useContext.cache;
  var fullPath = [prefix].concat(_toConsumableArray(keyPath));
  var fullPathStr = pathKey(fullPath);
  var register = useEffectCleanupRegister_default([fullPathStr]);
  var HMRUpdate = useHMR_default();
  var buildCache = function buildCache2(updater) {
    globalCache.opUpdate(fullPathStr, function (prevCache) {
      var _ref = prevCache || [void 0, void 0],
        _ref2 = _slicedToArray(_ref, 2),
        _ref2$ = _ref2[0],
        times = _ref2$ === void 0 ? 0 : _ref2$,
        cache = _ref2[1];
      var tmpCache = cache;
      if (cache && HMRUpdate) {
        onCacheRemove === null ||
          onCacheRemove === void 0 ||
          onCacheRemove(tmpCache, HMRUpdate);
        tmpCache = null;
      }
      var mergedCache = tmpCache || cacheFn();
      var data = [times, mergedCache];
      return updater ? updater(data) : data;
    });
  };
  React12.useMemo(
    function () {
      buildCache();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [fullPathStr],
    /* eslint-enable */
  );
  var cacheEntity = globalCache.opGet(fullPathStr);
  if (!cacheEntity) {
    buildCache();
    cacheEntity = globalCache.opGet(fullPathStr);
  }
  var cacheContent = cacheEntity[1];
  useCompatibleInsertionEffect_default(
    function () {
      onCacheEffect === null ||
        onCacheEffect === void 0 ||
        onCacheEffect(cacheContent);
    },
    function (polyfill) {
      buildCache(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          times = _ref4[0],
          cache = _ref4[1];
        if (polyfill && times === 0) {
          onCacheEffect === null ||
            onCacheEffect === void 0 ||
            onCacheEffect(cacheContent);
        }
        return [times + 1, cache];
      });
      return function () {
        globalCache.opUpdate(fullPathStr, function (prevCache) {
          var _ref5 = prevCache || [],
            _ref6 = _slicedToArray(_ref5, 2),
            _ref6$ = _ref6[0],
            times = _ref6$ === void 0 ? 0 : _ref6$,
            cache = _ref6[1];
          var nextCount = times - 1;
          if (nextCount === 0) {
            register(function () {
              if (polyfill || !globalCache.opGet(fullPathStr)) {
                onCacheRemove === null ||
                  onCacheRemove === void 0 ||
                  onCacheRemove(cache, false);
              }
            });
            return null;
          }
          return [times - 1, cache];
        });
      };
    },
    [fullPathStr],
  );
  return cacheContent;
}

// ../node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js
var EMPTY_OVERRIDE = {};
var hashPrefix = true ? "css-dev-only-do-not-override" : "css";
var tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== "undefined") {
    var styles = document.querySelectorAll(
      "style[".concat(ATTR_TOKEN, '="').concat(key, '"]'),
    );
    styles.forEach(function (style2) {
      if (style2[CSS_IN_JS_INSTANCE] === instanceId) {
        var _style$parentNode;
        (_style$parentNode = style2.parentNode) === null ||
          _style$parentNode === void 0 ||
          _style$parentNode.removeChild(style2);
      }
    });
  }
}
var TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  var tokenKeyList = Array.from(tokenKeys.keys());
  var cleanableKeyList = tokenKeyList.filter(function (key) {
    var count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach(function (key) {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
var getComputedToken = function getComputedToken2(
  originToken,
  overrideToken,
  theme,
  format,
) {
  var derivativeToken = theme.getDerivativeToken(originToken);
  var mergedDerivativeToken = _objectSpread2(
    _objectSpread2({}, derivativeToken),
    overrideToken,
  );
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
var TOKEN_PREFIX = "token";
function useCacheToken(theme, tokens) {
  var option =
    arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _useContext = useContext5(StyleContext_default),
    instanceId = _useContext.cache.instanceId,
    container = _useContext.container;
  var _option$salt = option.salt,
    salt = _option$salt === void 0 ? "" : _option$salt,
    _option$override = option.override,
    override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override,
    formatToken2 = option.formatToken,
    compute = option.getComputedToken,
    cssVar = option.cssVar;
  var mergedToken = memoResult(function () {
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
  }, tokens);
  var tokenStr = flattenToken(mergedToken);
  var overrideTokenStr = flattenToken(override);
  var cssVarStr = cssVar ? flattenToken(cssVar) : "";
  var cachedToken = useGlobalCache(
    TOKEN_PREFIX,
    [salt, theme.id, tokenStr, overrideTokenStr, cssVarStr],
    function () {
      var _cssVar$key;
      var mergedDerivativeToken = compute
        ? compute(mergedToken, override, theme)
        : getComputedToken(mergedToken, override, theme, formatToken2);
      var actualToken = _objectSpread2({}, mergedDerivativeToken);
      var cssVarsStr = "";
      if (!!cssVar) {
        var _transformToken = transformToken(
          mergedDerivativeToken,
          cssVar.key,
          {
            prefix: cssVar.prefix,
            ignore: cssVar.ignore,
            unitless: cssVar.unitless,
            preserve: cssVar.preserve,
          },
        );
        var _transformToken2 = _slicedToArray(_transformToken, 2);
        mergedDerivativeToken = _transformToken2[0];
        cssVarsStr = _transformToken2[1];
      }
      var tokenKey = token2key(mergedDerivativeToken, salt);
      mergedDerivativeToken._tokenKey = tokenKey;
      actualToken._tokenKey = token2key(actualToken, salt);
      var themeKey =
        (_cssVar$key =
          cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !==
          null && _cssVar$key !== void 0
          ? _cssVar$key
          : tokenKey;
      mergedDerivativeToken._themeKey = themeKey;
      recordCleanToken(themeKey);
      var hashId = ""
        .concat(hashPrefix, "-")
        .concat(hash_browser_esm_default(tokenKey));
      mergedDerivativeToken._hashId = hashId;
      return [
        mergedDerivativeToken,
        hashId,
        actualToken,
        cssVarsStr,
        (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || "",
      ];
    },
    function (cache) {
      cleanTokenStyle(cache[0]._themeKey, instanceId);
    },
    function (_ref) {
      var _ref2 = _slicedToArray(_ref, 4),
        token2 = _ref2[0],
        cssVarsStr = _ref2[3];
      if (cssVar && cssVarsStr) {
        var style2 = updateCSS(
          cssVarsStr,
          hash_browser_esm_default("css-variables-".concat(token2._themeKey)),
          {
            mark: ATTR_MARK,
            prepend: "queue",
            attachTo: container,
            priority: -999,
          },
        );
        style2[CSS_IN_JS_INSTANCE] = instanceId;
        style2.setAttribute(ATTR_TOKEN, token2._themeKey);
      }
    },
  );
  return cachedToken;
}
var extract = function extract2(cache, effectStyles, options) {
  var _cache = _slicedToArray(cache, 5),
    realToken = _cache[2],
    styleStr = _cache[3],
    cssVarKey = _cache[4];
  var _ref3 = options || {},
    plain = _ref3.plain;
  if (!styleStr) {
    return null;
  }
  var styleId = realToken._tokenKey;
  var order = -999;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order),
  };
  var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};

// ../node_modules/@ant-design/cssinjs/es/hooks/useCSSVarRegister.js
import { useContext as useContext7 } from "react";

// ../node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js
import * as React13 from "react";

// ../node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
var unitless_browser_esm_default = unitlessKeys;

// ../node_modules/stylis/src/Enum.js
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// ../node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}

// ../node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return {
    value,
    root,
    parent,
    type,
    props,
    children,
    line,
    column,
    length: length2,
    return: "",
    siblings,
  };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if ((column--, character === 10)) (column = 1), line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if ((column++, character === 10)) (column = 1), line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return (
    (line = column = 1),
    (length = strlen((characters = value))),
    (position = 0),
    []
  );
}
function dealloc(value) {
  return (characters = ""), value;
}
function delimit(type) {
  return trim(
    slice(
      position - 1,
      delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type),
    ),
  );
}
function whitespace(type) {
  while ((character = peek()))
    if (character < 33) next();
    else break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (
      character < 48 ||
      character > 102 ||
      (character > 57 && character < 65) ||
      (character > 70 && character < 97)
    )
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39) delimiter(character);
        break;
      case 40:
        if (type === 41) delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  while (next())
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
  return (
    "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next())
  );
}
function identifier(index2) {
  while (!token(peek())) next();
  return slice(index2, position);
}

// ../node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(
    parse("", null, null, null, [""], (value = alloc(value)), 0, [0], value),
  );
}
function parse(
  value,
  root,
  parent,
  rule,
  rules,
  rulesets,
  pseudo,
  points,
  declarations,
) {
  var index2 = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (((previous = character2), (character2 = next()))) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (
            indexof(
              (characters2 += replace(delimit(character2), "&", "&\f")),
              "&\f",
              abs(index2 ? points[index2 - 1] : 0),
            ) != -1
          )
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(
              comment(commenter(next(), caret()), root, parent, declarations),
              declarations,
            );
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(
                property > 32
                  ? declaration(
                      characters2 + ";",
                      rule,
                      parent,
                      length2 - 1,
                      declarations,
                    )
                  : declaration(
                      replace(characters2, " ", "") + ";",
                      rule,
                      parent,
                      length2 - 2,
                      declarations,
                    ),
                declarations,
              );
            break;
          case 59:
            characters2 += ";";
          default:
            append(
              (reference = ruleset(
                characters2,
                root,
                parent,
                index2,
                offset,
                rules,
                points,
                type,
                (props = []),
                (children = []),
                length2,
                rulesets,
              )),
              rulesets,
            );
            if (character2 === 123)
              if (offset === 0)
                parse(
                  characters2,
                  root,
                  reference,
                  reference,
                  props,
                  rulesets,
                  length2,
                  points,
                  children,
                );
              else
                switch (
                  atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule
                ) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(
                      value,
                      reference,
                      reference,
                      rule &&
                        append(
                          ruleset(
                            value,
                            reference,
                            reference,
                            0,
                            0,
                            rules,
                            points,
                            type,
                            rules,
                            (props = []),
                            length2,
                            children,
                          ),
                          children,
                        ),
                      rules,
                      children,
                      length2,
                      points,
                      rule ? props : children,
                    );
                    break;
                  default:
                    parse(
                      characters2,
                      reference,
                      reference,
                      reference,
                      [""],
                      children,
                      0,
                      points,
                      children,
                    );
                }
        }
        (index2 = offset = property = 0),
          (variable = ampersand = 1),
          (type = characters2 = ""),
          (length2 = pseudo);
        break;
      case 58:
        (length2 = 1 + strlen(characters2)), (property = previous);
      default:
        if (variable < 1) {
          if (character2 == 123) --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (((characters2 += from(character2)), character2 * variable)) {
          case 38:
            ampersand = offset > 0 ? 1 : ((characters2 += "\f"), -1);
            break;
          case 44:
            (points[index2++] = (strlen(characters2) - 1) * ampersand),
              (ampersand = 1);
            break;
          case 64:
            if (peek() === 45) characters2 += delimit(next());
            (atrule = peek()),
              (offset = length2 =
                strlen((type = characters2 += identifier(caret())))),
              character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2) variable = 0;
        }
    }
  return rulesets;
}
function ruleset(
  value,
  root,
  parent,
  index2,
  offset,
  rules,
  points,
  type,
  props,
  children,
  length2,
  siblings,
) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index2; ++i)
    for (
      var x = 0,
        y = substr(value, post + 1, (post = abs((j = points[i])))),
        z = value;
      x < size;
      ++x
    )
      if ((z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))))
        props[k++] = z;
  return node(
    value,
    root,
    parent,
    offset === 0 ? RULESET : type,
    props,
    children,
    length2,
    siblings,
  );
}
function comment(value, root, parent, siblings) {
  return node(
    value,
    root,
    parent,
    COMMENT,
    from(char()),
    substr(value, 2, -2),
    0,
    siblings,
  );
}
function declaration(value, root, parent, length2, siblings) {
  return node(
    value,
    root,
    parent,
    DECLARATION,
    substr(value, 0, length2),
    substr(value, length2 + 1, -1),
    length2,
    siblings,
  );
}

// ../node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  for (var i = 0; i < children.length; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return (element.return = element.return || element.value);
    case COMMENT:
      return "";
    case KEYFRAMES:
      return (element.return =
        element.value + "{" + serialize(element.children, callback) + "}");
    case RULESET:
      if (!strlen((element.value = element.props.join(",")))) return "";
  }
  return strlen((children = serialize(element.children, callback)))
    ? (element.return = element.value + "{" + children + "}")
    : "";
}

// ../node_modules/@ant-design/cssinjs/es/linters/utils.js
function lintWarning(message, info) {
  var path = info.path,
    parentSelectors = info.parentSelectors;
  warning_default(
    false,
    "[Ant Design CSS-in-JS] "
      .concat(path ? "Error in ".concat(path, ": ") : "")
      .concat(message)
      .concat(
        parentSelectors.length
          ? " Selector: ".concat(parentSelectors.join(" | "))
          : "",
      ),
  );
}

// ../node_modules/@ant-design/cssinjs/es/linters/contentQuotesLinter.js
var linter = function linter2(key, value, info) {
  if (key === "content") {
    var contentValuePattern =
      /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    var contentValues = ["normal", "none", "initial", "inherit", "unset"];
    if (
      typeof value !== "string" ||
      (contentValues.indexOf(value) === -1 &&
        !contentValuePattern.test(value) &&
        (value.charAt(0) !== value.charAt(value.length - 1) ||
          (value.charAt(0) !== '"' && value.charAt(0) !== "'")))
    ) {
      lintWarning(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(
          value,
          "\"'`.",
        ),
        info,
      );
    }
  }
};
var contentQuotesLinter_default = linter;

// ../node_modules/@ant-design/cssinjs/es/linters/hashedAnimationLinter.js
var linter3 = function linter4(key, value, info) {
  if (key === "animation") {
    if (info.hashId && value !== "none") {
      lintWarning(
        "You seem to be using hashed animation '".concat(
          value,
          "', in which case 'animationName' with Keyframe as value is recommended.",
        ),
        info,
      );
    }
  }
};
var hashedAnimationLinter_default = linter3;

// ../node_modules/@ant-design/cssinjs/es/util/cacheMapUtil.js
var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
var CSS_FILE_STYLE = "_FILE_STYLE__";
var cachePathMap;
var fromCSSFile = true;
function prepare() {
  if (!cachePathMap) {
    cachePathMap = {};
    if (canUseDom()) {
      var div = document.createElement("div");
      div.className = ATTR_CACHE_MAP;
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      div.style.top = "-9999px";
      document.body.appendChild(div);
      var content = getComputedStyle(div).content || "";
      content = content.replace(/^"/, "").replace(/"$/, "");
      content.split(";").forEach(function (item) {
        var _item$split = item.split(":"),
          _item$split2 = _slicedToArray(_item$split, 2),
          path = _item$split2[0],
          hash = _item$split2[1];
        cachePathMap[path] = hash;
      });
      var inlineMapStyle = document.querySelector(
        "style[".concat(ATTR_CACHE_MAP, "]"),
      );
      if (inlineMapStyle) {
        var _inlineMapStyle$paren;
        fromCSSFile = false;
        (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null ||
          _inlineMapStyle$paren === void 0 ||
          _inlineMapStyle$paren.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  var hash = cachePathMap[path];
  var styleStr = null;
  if (hash && canUseDom()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      var _style = document.querySelector(
        "style[".concat(ATTR_MARK, '="').concat(cachePathMap[path], '"]'),
      );
      if (_style) {
        styleStr = _style.innerHTML;
      } else {
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash];
}

// ../node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js
var SKIP_CHECK = "_skip_check_";
var MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr) {
  var serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return (
    _typeof(value) === "object" &&
    value &&
    (SKIP_CHECK in value || MULTI_VALUE in value)
  );
}
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  var hashClassName = ".".concat(hashId);
  var hashSelector =
    hashPriority === "low"
      ? ":where(".concat(hashClassName, ")")
      : hashClassName;
  var keys2 = key.split(",").map(function (k) {
    var _firstPath$match;
    var fullPath = k.trim().split(/\s+/);
    var firstPath = fullPath[0] || "";
    var htmlElement =
      ((_firstPath$match = firstPath.match(/^\w+/)) === null ||
      _firstPath$match === void 0
        ? void 0
        : _firstPath$match[0]) || "";
    firstPath = ""
      .concat(htmlElement)
      .concat(hashSelector)
      .concat(firstPath.slice(htmlElement.length));
    return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(" ");
  });
  return keys2.join(",");
}
var parseStyle = function parseStyle2(interpolation) {
  var config =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _ref =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : {
            root: true,
            parentSelectors: [],
          },
    root = _ref.root,
    injectHash = _ref.injectHash,
    parentSelectors = _ref.parentSelectors;
  var hashId = config.hashId,
    layer = config.layer,
    path = config.path,
    hashPriority = config.hashPriority,
    _config$transformers = config.transformers,
    transformers = _config$transformers === void 0 ? [] : _config$transformers,
    _config$linters = config.linters,
    linters = _config$linters === void 0 ? [] : _config$linters;
  var styleStr = "";
  var effectStyle = {};
  function parseKeyframes(keyframes) {
    var animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      var _parseStyle = parseStyle2(keyframes.style, config, {
          root: false,
          parentSelectors,
        }),
        _parseStyle2 = _slicedToArray(_parseStyle, 1),
        _parsedStr = _parseStyle2[0];
      effectStyle[animationName] = "@keyframes "
        .concat(keyframes.getName(hashId))
        .concat(_parsedStr);
    }
  }
  function flattenList(list) {
    var fullList =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach(function (item) {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  var flattenStyleList = flattenList(
    Array.isArray(interpolation) ? interpolation : [interpolation],
  );
  flattenStyleList.forEach(function (originStyle) {
    var style2 = typeof originStyle === "string" && !root ? {} : originStyle;
    if (typeof style2 === "string") {
      styleStr += "".concat(style2, "\n");
    } else if (style2._keyframe) {
      parseKeyframes(style2);
    } else {
      var mergedStyle = transformers.reduce(function (prev2, trans) {
        var _trans$visit;
        return (
          (trans === null ||
          trans === void 0 ||
          (_trans$visit = trans.visit) === null ||
          _trans$visit === void 0
            ? void 0
            : _trans$visit.call(trans, prev2)) || prev2
        );
      }, style2);
      Object.keys(mergedStyle).forEach(function (key) {
        var value = mergedStyle[key];
        if (
          _typeof(value) === "object" &&
          value &&
          (key !== "animationName" || !value._keyframe) &&
          !isCompoundCSSProperty(value)
        ) {
          var subInjectHash = false;
          var mergedKey = key.trim();
          var nextRoot = false;
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (
            root &&
            !hashId &&
            (mergedKey === "&" || mergedKey === "")
          ) {
            mergedKey = "";
            nextRoot = true;
          }
          var _parseStyle3 = parseStyle2(value, config, {
              root: nextRoot,
              injectHash: subInjectHash,
              parentSelectors: [].concat(_toConsumableArray(parentSelectors), [
                mergedKey,
              ]),
            }),
            _parseStyle4 = _slicedToArray(_parseStyle3, 2),
            _parsedStr2 = _parseStyle4[0],
            childEffectStyle = _parseStyle4[1];
          effectStyle = _objectSpread2(
            _objectSpread2({}, effectStyle),
            childEffectStyle,
          );
          styleStr += "".concat(mergedKey).concat(_parsedStr2);
        } else {
          let appendStyle = function (cssKey, cssValue) {
            if (
              _typeof(value) !== "object" ||
              !(value !== null && value !== void 0 && value[SKIP_CHECK])
            ) {
              [contentQuotesLinter_default, hashedAnimationLinter_default]
                .concat(_toConsumableArray(linters))
                .forEach(function (linter5) {
                  return linter5(cssKey, cssValue, {
                    path,
                    hashId,
                    parentSelectors,
                  });
                });
            }
            var styleName = cssKey.replace(/[A-Z]/g, function (match) {
              return "-".concat(match.toLowerCase());
            });
            var formatValue = cssValue;
            if (
              !unitless_browser_esm_default[cssKey] &&
              typeof formatValue === "number" &&
              formatValue !== 0
            ) {
              formatValue = "".concat(formatValue, "px");
            }
            if (
              cssKey === "animationName" &&
              cssValue !== null &&
              cssValue !== void 0 &&
              cssValue._keyframe
            ) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += "".concat(styleName, ":").concat(formatValue, ";");
          };
          var _value;
          var actualValue =
            (_value =
              value === null || value === void 0 ? void 0 : value.value) !==
              null && _value !== void 0
              ? _value
              : value;
          if (
            _typeof(value) === "object" &&
            value !== null &&
            value !== void 0 &&
            value[MULTI_VALUE] &&
            Array.isArray(actualValue)
          ) {
            actualValue.forEach(function (item) {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = "{".concat(styleStr, "}");
  } else if (layer && supportLayer()) {
    var layerCells = layer.split(",");
    var layerName = layerCells[layerCells.length - 1].trim();
    styleStr = "@layer ".concat(layerName, " {").concat(styleStr, "}");
    if (layerCells.length > 1) {
      styleStr = "@layer ".concat(layer, "{%%%:%}").concat(styleStr);
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return hash_browser_esm_default("".concat(path.join("%")).concat(styleStr));
}
function Empty() {
  return null;
}
var STYLE_PREFIX = "style";
function useStyleRegister(info, styleFn) {
  var token2 = info.token,
    path = info.path,
    hashId = info.hashId,
    layer = info.layer,
    nonce = info.nonce,
    clientOnly = info.clientOnly,
    _info$order = info.order,
    order = _info$order === void 0 ? 0 : _info$order;
  var _React$useContext = React13.useContext(StyleContext_default),
    autoClear = _React$useContext.autoClear,
    mock = _React$useContext.mock,
    defaultCache = _React$useContext.defaultCache,
    hashPriority = _React$useContext.hashPriority,
    container = _React$useContext.container,
    ssrInline = _React$useContext.ssrInline,
    transformers = _React$useContext.transformers,
    linters = _React$useContext.linters,
    cache = _React$useContext.cache;
  var tokenKey = token2._tokenKey;
  var fullPath = [tokenKey].concat(_toConsumableArray(path));
  var isMergedClientSide = isClientSide;
  if (mock !== void 0) {
    isMergedClientSide = mock === "client";
  }
  var _useGlobalCache = useGlobalCache(
      STYLE_PREFIX,
      fullPath,
      // Create cache if needed
      function () {
        var cachePath = fullPath.join("|");
        if (existPath(cachePath)) {
          var _getStyleAndHash = getStyleAndHash(cachePath),
            _getStyleAndHash2 = _slicedToArray(_getStyleAndHash, 2),
            inlineCacheStyleStr = _getStyleAndHash2[0],
            styleHash = _getStyleAndHash2[1];
          if (inlineCacheStyleStr) {
            return [
              inlineCacheStyleStr,
              tokenKey,
              styleHash,
              {},
              clientOnly,
              order,
            ];
          }
        }
        var styleObj = styleFn();
        var _parseStyle5 = parseStyle(styleObj, {
            hashId,
            hashPriority,
            layer,
            path: path.join("-"),
            transformers,
            linters,
          }),
          _parseStyle6 = _slicedToArray(_parseStyle5, 2),
          parsedStyle = _parseStyle6[0],
          effectStyle = _parseStyle6[1];
        var styleStr = normalizeStyle(parsedStyle);
        var styleId = uniqueHash(fullPath, styleStr);
        return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
      },
      // Remove cache if no need
      function (_ref2, fromHMR) {
        var _ref3 = _slicedToArray(_ref2, 3),
          styleId = _ref3[2];
        if ((fromHMR || autoClear) && isClientSide) {
          removeCSS(styleId, {
            mark: ATTR_MARK,
          });
        }
      },
      // Effect: Inject style here
      function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 4),
          styleStr = _ref5[0],
          _ = _ref5[1],
          styleId = _ref5[2],
          effectStyle = _ref5[3];
        if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
          var mergedCSSConfig = {
            mark: ATTR_MARK,
            prepend: "queue",
            attachTo: container,
            priority: order,
          };
          var nonceStr = typeof nonce === "function" ? nonce() : nonce;
          if (nonceStr) {
            mergedCSSConfig.csp = {
              nonce: nonceStr,
            };
          }
          var style2 = updateCSS(styleStr, styleId, mergedCSSConfig);
          style2[CSS_IN_JS_INSTANCE] = cache.instanceId;
          style2.setAttribute(ATTR_TOKEN, tokenKey);
          if (true) {
            style2.setAttribute(ATTR_CACHE_PATH, fullPath.join("|"));
          }
          Object.keys(effectStyle).forEach(function (effectKey) {
            updateCSS(
              normalizeStyle(effectStyle[effectKey]),
              "_effect-".concat(effectKey),
              mergedCSSConfig,
            );
          });
        }
      },
    ),
    _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3),
    cachedStyleStr = _useGlobalCache2[0],
    cachedTokenKey = _useGlobalCache2[1],
    cachedStyleId = _useGlobalCache2[2];
  return function (node2) {
    var styleNode;
    if (!ssrInline || isMergedClientSide || !defaultCache) {
      styleNode = /* @__PURE__ */ React13.createElement(Empty, null);
    } else {
      var _ref6;
      styleNode = /* @__PURE__ */ React13.createElement(
        "style",
        _extends(
          {},
          ((_ref6 = {}),
          _defineProperty(_ref6, ATTR_TOKEN, cachedTokenKey),
          _defineProperty(_ref6, ATTR_MARK, cachedStyleId),
          _ref6),
          {
            dangerouslySetInnerHTML: {
              __html: cachedStyleStr,
            },
          },
        ),
      );
    }
    return /* @__PURE__ */ React13.createElement(
      React13.Fragment,
      null,
      styleNode,
      node2,
    );
  };
}
var extract3 = function extract4(cache, effectStyles, options) {
  var _cache = _slicedToArray(cache, 6),
    styleStr = _cache[0],
    tokenKey = _cache[1],
    styleId = _cache[2],
    effectStyle = _cache[3],
    clientOnly = _cache[4],
    order = _cache[5];
  var _ref7 = options || {},
    plain = _ref7.plain;
  if (clientOnly) {
    return null;
  }
  var keyStyleText = styleStr;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order),
  };
  keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
  if (effectStyle) {
    Object.keys(effectStyle).forEach(function (effectKey) {
      if (!effectStyles[effectKey]) {
        effectStyles[effectKey] = true;
        var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
        keyStyleText += toStyleStr(
          effectStyleStr,
          tokenKey,
          "_effect-".concat(effectKey),
          sharedAttrs,
          plain,
        );
      }
    });
  }
  return [order, styleId, keyStyleText];
};

// ../node_modules/@ant-design/cssinjs/es/hooks/useCSSVarRegister.js
var CSS_VAR_PREFIX = "cssVar";
var useCSSVarRegister = function useCSSVarRegister2(config, fn) {
  var key = config.key,
    prefix = config.prefix,
    unitless2 = config.unitless,
    ignore2 = config.ignore,
    token2 = config.token,
    _config$scope = config.scope,
    scope = _config$scope === void 0 ? "" : _config$scope;
  var _useContext = useContext7(StyleContext_default),
    instanceId = _useContext.cache.instanceId,
    container = _useContext.container;
  var tokenKey = token2._tokenKey;
  var stylePath = [].concat(_toConsumableArray(config.path), [
    key,
    scope,
    tokenKey,
  ]);
  var cache = useGlobalCache(
    CSS_VAR_PREFIX,
    stylePath,
    function () {
      var originToken = fn();
      var _transformToken = transformToken(originToken, key, {
          prefix,
          unitless: unitless2,
          ignore: ignore2,
          scope,
        }),
        _transformToken2 = _slicedToArray(_transformToken, 2),
        mergedToken = _transformToken2[0],
        cssVarsStr = _transformToken2[1];
      var styleId = uniqueHash(stylePath, cssVarsStr);
      return [mergedToken, cssVarsStr, styleId, key];
    },
    function (_ref) {
      var _ref2 = _slicedToArray(_ref, 3),
        styleId = _ref2[2];
      if (isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK,
        });
      }
    },
    function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 3),
        cssVarsStr = _ref4[1],
        styleId = _ref4[2];
      if (!cssVarsStr) {
        return;
      }
      var style2 = updateCSS(cssVarsStr, styleId, {
        mark: ATTR_MARK,
        prepend: "queue",
        attachTo: container,
        priority: -999,
      });
      style2[CSS_IN_JS_INSTANCE] = instanceId;
      style2.setAttribute(ATTR_TOKEN, key);
    },
  );
  return cache;
};
var extract5 = function extract6(cache, effectStyles, options) {
  var _cache = _slicedToArray(cache, 4),
    styleStr = _cache[1],
    styleId = _cache[2],
    cssVarKey = _cache[3];
  var _ref5 = options || {},
    plain = _ref5.plain;
  if (!styleStr) {
    return null;
  }
  var order = -999;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order),
  };
  var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};
var useCSSVarRegister_default = useCSSVarRegister;

// ../node_modules/@ant-design/cssinjs/es/extractStyle.js
var _ExtractStyleFns;
var ExtractStyleFns =
  ((_ExtractStyleFns = {}),
  _defineProperty(_ExtractStyleFns, STYLE_PREFIX, extract3),
  _defineProperty(_ExtractStyleFns, TOKEN_PREFIX, extract),
  _defineProperty(_ExtractStyleFns, CSS_VAR_PREFIX, extract5),
  _ExtractStyleFns);

// ../node_modules/@ant-design/cssinjs/es/Keyframes.js
var Keyframe = /* @__PURE__ */ (function () {
  function Keyframe2(name, style2) {
    _classCallCheck(this, Keyframe2);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "style", void 0);
    _defineProperty(this, "_keyframe", true);
    this.name = name;
    this.style = style2;
  }
  _createClass(Keyframe2, [
    {
      key: "getName",
      value: function getName() {
        var hashId =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
      },
    },
  ]);
  return Keyframe2;
})();
var Keyframes_default = Keyframe;

// ../node_modules/@ant-design/cssinjs/es/transformers/legacyLogicalProperties.js
function noSplit(list) {
  list.notSplit = true;
  return list;
}
var keyMap = {
  // Inset
  inset: ["top", "right", "bottom", "left"],
  insetBlock: ["top", "bottom"],
  insetBlockStart: ["top"],
  insetBlockEnd: ["bottom"],
  insetInline: ["left", "right"],
  insetInlineStart: ["left"],
  insetInlineEnd: ["right"],
  // Margin
  marginBlock: ["marginTop", "marginBottom"],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  marginInline: ["marginLeft", "marginRight"],
  marginInlineStart: ["marginLeft"],
  marginInlineEnd: ["marginRight"],
  // Padding
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"],
  paddingInline: ["paddingLeft", "paddingRight"],
  paddingInlineStart: ["paddingLeft"],
  paddingInlineEnd: ["paddingRight"],
  // Border
  borderBlock: noSplit(["borderTop", "borderBottom"]),
  borderBlockStart: noSplit(["borderTop"]),
  borderBlockEnd: noSplit(["borderBottom"]),
  borderInline: noSplit(["borderLeft", "borderRight"]),
  borderInlineStart: noSplit(["borderLeft"]),
  borderInlineEnd: noSplit(["borderRight"]),
  // Border width
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndWidth: ["borderBottomWidth"],
  borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
  borderInlineStartWidth: ["borderLeftWidth"],
  borderInlineEndWidth: ["borderRightWidth"],
  // Border style
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
  borderInlineStartStyle: ["borderLeftStyle"],
  borderInlineEndStyle: ["borderRightStyle"],
  // Border color
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockEndColor: ["borderBottomColor"],
  borderInlineColor: ["borderLeftColor", "borderRightColor"],
  borderInlineStartColor: ["borderLeftColor"],
  borderInlineEndColor: ["borderRightColor"],
  // Border radius
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"],
};

// ../node_modules/@ant-design/icons/es/components/Context.js
import { createContext as createContext3 } from "react";
var IconContext = /* @__PURE__ */ createContext3({});
var Context_default = IconContext;

// ../node_modules/@babel/runtime/helpers/esm/toArray.js
function _toArray(arr) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableRest()
  );
}

// ../node_modules/rc-util/es/utils/get.js
function get(entity, path) {
  var current = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === void 0) {
      return void 0;
    }
    current = current[path[i]];
  }
  return current;
}

// ../node_modules/rc-util/es/utils/set.js
function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = _toArray(paths),
    path = _paths[0],
    restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === "number") {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread2({}, entity);
  }
  if (removeIfUndefined && value === void 0 && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined =
    arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (
    paths.length &&
    removeIfUndefined &&
    value === void 0 &&
    !get(entity, paths.slice(0, -1))
  ) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
  return (
    _typeof(obj) === "object" &&
    obj !== null &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}
function createEmpty(source) {
  return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
function merge() {
  for (
    var _len = arguments.length, sources = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    sources[_key] = arguments[_key];
  }
  var clone = createEmpty(sources[0]);
  sources.forEach(function (src) {
    function internalMerge(path, parentLoopSet) {
      var loopSet = new Set(parentLoopSet);
      var value = get(src, path);
      var isArr = Array.isArray(value);
      if (isArr || isObject(value)) {
        if (!loopSet.has(value)) {
          loopSet.add(value);
          var originValue = get(clone, path);
          if (isArr) {
            clone = set(clone, path, []);
          } else if (!originValue || _typeof(originValue) !== "object") {
            clone = set(clone, path, createEmpty(value));
          }
          keys(value).forEach(function (key) {
            internalMerge([].concat(_toConsumableArray(path), [key]), loopSet);
          });
        }
      } else {
        clone = set(clone, path, value);
      }
    }
    internalMerge([]);
  });
  return clone;
}

// ../node_modules/antd/es/_util/warning.js
import * as React14 from "react";
function noop() {}
var deprecatedWarnList = null;
var warning2 = noop;
if (true) {
  warning2 = (valid, component, message) => {
    warning_default(valid, `[antd: ${component}] ${message}`);
    if (false) {
      resetWarned();
    }
  };
}
var WarningContext = /* @__PURE__ */ React14.createContext({});
var devUseWarning = true
  ? (component) => {
      const { strict } = React14.useContext(WarningContext);
      const typeWarning = (valid, type, message) => {
        if (!valid) {
          if (strict === false && type === "deprecated") {
            const existWarning = deprecatedWarnList;
            if (!deprecatedWarnList) {
              deprecatedWarnList = {};
            }
            deprecatedWarnList[component] = deprecatedWarnList[component] || [];
            if (!deprecatedWarnList[component].includes(message || "")) {
              deprecatedWarnList[component].push(message || "");
            }
            if (!existWarning) {
              console.warn(
                "[antd] There exists deprecated usage in your code:",
                deprecatedWarnList,
              );
            }
          } else {
            true ? warning2(valid, component, message) : void 0;
          }
        }
      };
      typeWarning.deprecated = (valid, oldProp, newProp, message) => {
        typeWarning(
          valid,
          "deprecated",
          `\`${oldProp}\` is deprecated. Please use \`${newProp}\` instead.${
            message ? ` ${message}` : ""
          }`,
        );
      };
      return typeWarning;
    }
  : () => {
      const noopWarning = () => {};
      noopWarning.deprecated = noop;
      return noopWarning;
    };
var warning_default2 = warning2;

// ../node_modules/antd/es/form/validateMessagesContext.js
import { createContext as createContext5 } from "react";
("use client");
var validateMessagesContext_default = /* @__PURE__ */ createContext5(void 0);

// ../node_modules/antd/es/locale/index.js
import * as React15 from "react";

// ../node_modules/rc-pagination/es/locale/en_US.js
var locale = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size",
};
var en_US_default = locale;

// ../node_modules/rc-picker/es/locale/en_US.js
var locale2 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century",
};
var en_US_default2 = locale2;

// ../node_modules/antd/es/time-picker/locale/en_US.js
var locale3 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"],
};
var en_US_default3 = locale3;

// ../node_modules/antd/es/date-picker/locale/en_US.js
var locale4 = {
  lang: Object.assign(
    {
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"],
    },
    en_US_default2,
  ),
  timePickerLocale: Object.assign({}, en_US_default3),
};
var en_US_default4 = locale4;

// ../node_modules/antd/es/calendar/locale/en_US.js
var en_US_default5 = en_US_default4;

// ../node_modules/antd/es/locale/en_US.js
var typeTemplate = "${label} is not a valid ${type}";
var localeValues = {
  locale: "en",
  Pagination: en_US_default,
  DatePicker: en_US_default4,
  TimePicker: en_US_default3,
  Calendar: en_US_default5,
  global: {
    placeholder: "Please select",
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting",
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish",
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK",
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel",
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page",
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file",
  },
  Empty: {
    description: "No data",
  },
  Icon: {
    icon: "icon",
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date",
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters",
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}",
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}",
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}",
      },
    },
  },
  Image: {
    preview: "Preview",
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned",
  },
  ColorPicker: {
    presetEmpty: "Empty",
  },
};
var en_US_default6 = localeValues;

// ../node_modules/antd/es/modal/locale.js
var runtimeLocale = Object.assign({}, en_US_default6.Modal);
var localeList = [];
var generateLocale = () =>
  localeList.reduce(
    (merged, locale5) => Object.assign(Object.assign({}, merged), locale5),
    en_US_default6.Modal,
  );
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = Object.assign({}, newLocale);
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter((locale5) => locale5 !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = Object.assign({}, en_US_default6.Modal);
}

// ../node_modules/antd/es/locale/context.js
import { createContext as createContext6 } from "react";
var LocaleContext = /* @__PURE__ */ createContext6(void 0);
var context_default = LocaleContext;

// ../node_modules/antd/es/locale/index.js
("use client");
var ANT_MARK = "internalMark";
var LocaleProvider = (props) => {
  const { locale: locale5 = {}, children, _ANT_MARK__ } = props;
  if (true) {
    const warning4 = devUseWarning("LocaleProvider");
    true
      ? warning4(
          _ANT_MARK__ === ANT_MARK,
          "deprecated",
          "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale",
        )
      : void 0;
  }
  React15.useEffect(() => {
    const clearLocale = changeConfirmLocale(locale5 && locale5.Modal);
    return clearLocale;
  }, [locale5]);
  const getMemoizedContextValue = React15.useMemo(
    () =>
      Object.assign(Object.assign({}, locale5), {
        exist: true,
      }),
    [locale5],
  );
  return /* @__PURE__ */ React15.createElement(
    context_default.Provider,
    {
      value: getMemoizedContextValue,
    },
    children,
  );
};
if (true) {
  LocaleProvider.displayName = "LocaleProvider";
}
var locale_default = LocaleProvider;

// ../node_modules/antd/es/theme/context.js
import React16 from "react";

// ../node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
  } else {
    n = (n % max) / parseFloat(String(max));
  }
  return n;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}

// ../node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255,
  };
}
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var s = 0;
  var l = (max + min) / 2;
  if (max === min) {
    s = 0;
    h = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, l };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, v };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
  ];
  if (
    allow3Char &&
    hex[0].startsWith(hex[0].charAt(1)) &&
    hex[1].startsWith(hex[1].charAt(1)) &&
    hex[2].startsWith(hex[2].charAt(1))
  ) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
    pad2(convertDecimalToHex(a)),
  ];
  if (
    allow4Char &&
    hex[0].startsWith(hex[0].charAt(1)) &&
    hex[1].startsWith(hex[1].charAt(1)) &&
    hex[2].startsWith(hex[2].charAt(1)) &&
    hex[3].startsWith(hex[3].charAt(1))
  ) {
    return (
      hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0)
    );
  }
  return hex.join("");
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255,
  };
}

// ../node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};

// ../node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (
      isValidCSSUnit(color.r) &&
      isValidCSSUnit(color.g) &&
      isValidCSSUnit(color.b)
    ) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (
      isValidCSSUnit(color.h) &&
      isValidCSSUnit(color.s) &&
      isValidCSSUnit(color.v)
    ) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = "hsv";
    } else if (
      isValidCSSUnit(color.h) &&
      isValidCSSUnit(color.s) &&
      isValidCSSUnit(color.l)
    ) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a,
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+("
  .concat(CSS_UNIT, ")[,|\\s]+(")
  .concat(CSS_UNIT, ")[,|\\s]+(")
  .concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+("
  .concat(CSS_UNIT, ")[,|\\s]+(")
  .concat(CSS_UNIT, ")[,|\\s]+(")
  .concat(CSS_UNIT, ")[,|\\s]+(")
  .concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8",
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex",
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8",
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex",
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

// ../node_modules/@ctrl/tinycolor/dist/module/index.js
var TinyColor =
  /** @class */
  (function () {
    function TinyColor2(color, opts) {
      if (color === void 0) {
        color = "";
      }
      if (opts === void 0) {
        opts = {};
      }
      var _a;
      if (color instanceof TinyColor2) {
        return color;
      }
      if (typeof color === "number") {
        color = numberInputToObject(color);
      }
      this.originalInput = color;
      var rgb = inputToRGB(color);
      this.originalInput = color;
      this.r = rgb.r;
      this.g = rgb.g;
      this.b = rgb.b;
      this.a = rgb.a;
      this.roundA = Math.round(100 * this.a) / 100;
      this.format =
        (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
      this.gradientType = opts.gradientType;
      if (this.r < 1) {
        this.r = Math.round(this.r);
      }
      if (this.g < 1) {
        this.g = Math.round(this.g);
      }
      if (this.b < 1) {
        this.b = Math.round(this.b);
      }
      this.isValid = rgb.ok;
    }
    TinyColor2.prototype.isDark = function () {
      return this.getBrightness() < 128;
    };
    TinyColor2.prototype.isLight = function () {
      return !this.isDark();
    };
    TinyColor2.prototype.getBrightness = function () {
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
    };
    TinyColor2.prototype.getLuminance = function () {
      var rgb = this.toRgb();
      var R;
      var G;
      var B;
      var RsRGB = rgb.r / 255;
      var GsRGB = rgb.g / 255;
      var BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928) {
        R = RsRGB / 12.92;
      } else {
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }
      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }
      if (BsRGB <= 0.03928) {
        B = BsRGB / 12.92;
      } else {
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    TinyColor2.prototype.getAlpha = function () {
      return this.a;
    };
    TinyColor2.prototype.setAlpha = function (alpha) {
      this.a = boundAlpha(alpha);
      this.roundA = Math.round(100 * this.a) / 100;
      return this;
    };
    TinyColor2.prototype.isMonochrome = function () {
      var s = this.toHsl().s;
      return s === 0;
    };
    TinyColor2.prototype.toHsv = function () {
      var hsv = rgbToHsv(this.r, this.g, this.b);
      return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    TinyColor2.prototype.toHsvString = function () {
      var hsv = rgbToHsv(this.r, this.g, this.b);
      var h = Math.round(hsv.h * 360);
      var s = Math.round(hsv.s * 100);
      var v = Math.round(hsv.v * 100);
      return this.a === 1
        ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)")
        : "hsva("
            .concat(h, ", ")
            .concat(s, "%, ")
            .concat(v, "%, ")
            .concat(this.roundA, ")");
    };
    TinyColor2.prototype.toHsl = function () {
      var hsl = rgbToHsl(this.r, this.g, this.b);
      return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    TinyColor2.prototype.toHslString = function () {
      var hsl = rgbToHsl(this.r, this.g, this.b);
      var h = Math.round(hsl.h * 360);
      var s = Math.round(hsl.s * 100);
      var l = Math.round(hsl.l * 100);
      return this.a === 1
        ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)")
        : "hsla("
            .concat(h, ", ")
            .concat(s, "%, ")
            .concat(l, "%, ")
            .concat(this.roundA, ")");
    };
    TinyColor2.prototype.toHex = function (allow3Char) {
      if (allow3Char === void 0) {
        allow3Char = false;
      }
      return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    TinyColor2.prototype.toHexString = function (allow3Char) {
      if (allow3Char === void 0) {
        allow3Char = false;
      }
      return "#" + this.toHex(allow3Char);
    };
    TinyColor2.prototype.toHex8 = function (allow4Char) {
      if (allow4Char === void 0) {
        allow4Char = false;
      }
      return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    TinyColor2.prototype.toHex8String = function (allow4Char) {
      if (allow4Char === void 0) {
        allow4Char = false;
      }
      return "#" + this.toHex8(allow4Char);
    };
    TinyColor2.prototype.toHexShortString = function (allowShortChar) {
      if (allowShortChar === void 0) {
        allowShortChar = false;
      }
      return this.a === 1
        ? this.toHexString(allowShortChar)
        : this.toHex8String(allowShortChar);
    };
    TinyColor2.prototype.toRgb = function () {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a,
      };
    };
    TinyColor2.prototype.toRgbString = function () {
      var r = Math.round(this.r);
      var g = Math.round(this.g);
      var b = Math.round(this.b);
      return this.a === 1
        ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")")
        : "rgba("
            .concat(r, ", ")
            .concat(g, ", ")
            .concat(b, ", ")
            .concat(this.roundA, ")");
    };
    TinyColor2.prototype.toPercentageRgb = function () {
      var fmt = function (x) {
        return "".concat(Math.round(bound01(x, 255) * 100), "%");
      };
      return {
        r: fmt(this.r),
        g: fmt(this.g),
        b: fmt(this.b),
        a: this.a,
      };
    };
    TinyColor2.prototype.toPercentageRgbString = function () {
      var rnd = function (x) {
        return Math.round(bound01(x, 255) * 100);
      };
      return this.a === 1
        ? "rgb("
            .concat(rnd(this.r), "%, ")
            .concat(rnd(this.g), "%, ")
            .concat(rnd(this.b), "%)")
        : "rgba("
            .concat(rnd(this.r), "%, ")
            .concat(rnd(this.g), "%, ")
            .concat(rnd(this.b), "%, ")
            .concat(this.roundA, ")");
    };
    TinyColor2.prototype.toName = function () {
      if (this.a === 0) {
        return "transparent";
      }
      if (this.a < 1) {
        return false;
      }
      var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
      for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
        var _b = _a[_i],
          key = _b[0],
          value = _b[1];
        if (hex === value) {
          return key;
        }
      }
      return false;
    };
    TinyColor2.prototype.toString = function (format) {
      var formatSet = Boolean(format);
      format = format !== null && format !== void 0 ? format : this.format;
      var formattedString = false;
      var hasAlpha = this.a < 1 && this.a >= 0;
      var needsAlphaFormat =
        !formatSet &&
        hasAlpha &&
        (format.startsWith("hex") || format === "name");
      if (needsAlphaFormat) {
        if (format === "name" && this.a === 0) {
          return this.toName();
        }
        return this.toRgbString();
      }
      if (format === "rgb") {
        formattedString = this.toRgbString();
      }
      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }
      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }
      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }
      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }
      if (format === "hex8") {
        formattedString = this.toHex8String();
      }
      if (format === "name") {
        formattedString = this.toName();
      }
      if (format === "hsl") {
        formattedString = this.toHslString();
      }
      if (format === "hsv") {
        formattedString = this.toHsvString();
      }
      return formattedString || this.toHexString();
    };
    TinyColor2.prototype.toNumber = function () {
      return (
        (Math.round(this.r) << 16) +
        (Math.round(this.g) << 8) +
        Math.round(this.b)
      );
    };
    TinyColor2.prototype.clone = function () {
      return new TinyColor2(this.toString());
    };
    TinyColor2.prototype.lighten = function (amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.brighten = function (amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var rgb = this.toRgb();
      rgb.r = Math.max(
        0,
        Math.min(255, rgb.r - Math.round(255 * -(amount / 100))),
      );
      rgb.g = Math.max(
        0,
        Math.min(255, rgb.g - Math.round(255 * -(amount / 100))),
      );
      rgb.b = Math.max(
        0,
        Math.min(255, rgb.b - Math.round(255 * -(amount / 100))),
      );
      return new TinyColor2(rgb);
    };
    TinyColor2.prototype.darken = function (amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.tint = function (amount) {
      if (amount === void 0) {
        amount = 10;
      }
      return this.mix("white", amount);
    };
    TinyColor2.prototype.shade = function (amount) {
      if (amount === void 0) {
        amount = 10;
      }
      return this.mix("black", amount);
    };
    TinyColor2.prototype.desaturate = function (amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.saturate = function (amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.greyscale = function () {
      return this.desaturate(100);
    };
    TinyColor2.prototype.spin = function (amount) {
      var hsl = this.toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.mix = function (color, amount) {
      if (amount === void 0) {
        amount = 50;
      }
      var rgb1 = this.toRgb();
      var rgb2 = new TinyColor2(color).toRgb();
      var p = amount / 100;
      var rgba = {
        r: (rgb2.r - rgb1.r) * p + rgb1.r,
        g: (rgb2.g - rgb1.g) * p + rgb1.g,
        b: (rgb2.b - rgb1.b) * p + rgb1.b,
        a: (rgb2.a - rgb1.a) * p + rgb1.a,
      };
      return new TinyColor2(rgba);
    };
    TinyColor2.prototype.analogous = function (results, slices) {
      if (results === void 0) {
        results = 6;
      }
      if (slices === void 0) {
        slices = 30;
      }
      var hsl = this.toHsl();
      var part = 360 / slices;
      var ret = [this];
      for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(new TinyColor2(hsl));
      }
      return ret;
    };
    TinyColor2.prototype.complement = function () {
      var hsl = this.toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.monochromatic = function (results) {
      if (results === void 0) {
        results = 6;
      }
      var hsv = this.toHsv();
      var h = hsv.h;
      var s = hsv.s;
      var v = hsv.v;
      var res = [];
      var modification = 1 / results;
      while (results--) {
        res.push(new TinyColor2({ h, s, v }));
        v = (v + modification) % 1;
      }
      return res;
    };
    TinyColor2.prototype.splitcomplement = function () {
      var hsl = this.toHsl();
      var h = hsl.h;
      return [
        this,
        new TinyColor2({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
        new TinyColor2({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
      ];
    };
    TinyColor2.prototype.onBackground = function (background) {
      var fg = this.toRgb();
      var bg = new TinyColor2(background).toRgb();
      var alpha = fg.a + bg.a * (1 - fg.a);
      return new TinyColor2({
        r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
        g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
        b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
        a: alpha,
      });
    };
    TinyColor2.prototype.triad = function () {
      return this.polyad(3);
    };
    TinyColor2.prototype.tetrad = function () {
      return this.polyad(4);
    };
    TinyColor2.prototype.polyad = function (n) {
      var hsl = this.toHsl();
      var h = hsl.h;
      var result = [this];
      var increment = 360 / n;
      for (var i = 1; i < n; i++) {
        result.push(
          new TinyColor2({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }),
        );
      }
      return result;
    };
    TinyColor2.prototype.equals = function (color) {
      return this.toRgbString() === new TinyColor2(color).toRgbString();
    };
    return TinyColor2;
  })();

// ../node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [
  {
    index: 7,
    opacity: 0.15,
  },
  {
    index: 6,
    opacity: 0.25,
  },
  {
    index: 5,
    opacity: 0.3,
  },
  {
    index: 5,
    opacity: 0.45,
  },
  {
    index: 5,
    opacity: 0.65,
  },
  {
    index: 5,
    opacity: 0.85,
  },
  {
    index: 4,
    opacity: 0.9,
  },
  {
    index: 3,
    opacity: 0.95,
  },
  {
    index: 2,
    opacity: 0.97,
  },
  {
    index: 1,
    opacity: 0.98,
  },
];
function toHsv(_ref) {
  var r = _ref.r,
    g = _ref.g,
    b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v,
  };
}
function toHex(_ref2) {
  var r = _ref2.r,
    g = _ref2.g,
    b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
}
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light
      ? Math.round(hsv.h) - hueStep * i
      : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light
      ? Math.round(hsv.h) + hueStep * i
      : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(
      inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true),
      }),
    );
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(
      inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue(_hsv, _i),
      }),
    );
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function (_ref3) {
      var index2 = _ref3.index,
        opacity = _ref3.opacity;
      var darkColorString = toHex(
        mix(
          inputToRGB(opts.backgroundColor || "#141414"),
          inputToRGB(patterns[index2]),
          opacity * 100,
        ),
      );
      return darkColorString;
    });
  }
  return patterns;
}

// ../node_modules/@ant-design/colors/es/index.js
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666",
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414",
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var gray = presetPalettes.grey;

// ../node_modules/antd/es/theme/themes/shared/genControlHeight.js
var genControlHeight = (token2) => {
  const { controlHeight } = token2;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25,
  };
};
var genControlHeight_default = genControlHeight;

// ../node_modules/antd/es/theme/themes/shared/genSizeMapToken.js
function genSizeMapToken(token2) {
  const { sizeUnit, sizeStep } = token2;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    // 48
    sizeXL: sizeUnit * (sizeStep + 4),
    // 32
    sizeLG: sizeUnit * (sizeStep + 2),
    // 24
    sizeMD: sizeUnit * (sizeStep + 1),
    // 20
    sizeMS: sizeUnit * sizeStep,
    // 16
    size: sizeUnit * sizeStep,
    // 16
    sizeSM: sizeUnit * (sizeStep - 1),
    // 12
    sizeXS: sizeUnit * (sizeStep - 2),
    // 8
    sizeXXS: sizeUnit * (sizeStep - 3),
    // 4
  };
}

// ../node_modules/antd/es/theme/themes/seed.js
var defaultPresetColors = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911",
};
var seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false,
  // Motion
  motion: true,
});
var seed_default = seedToken;

// ../node_modules/antd/es/theme/themes/shared/genColorMapToken.js
function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes: generateColorPalettes2,
    generateNeutralColorPalettes: generateNeutralColorPalettes2,
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase,
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(
    colorBgBase,
    colorTextBase,
  );
  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes2(colorLink);
  return Object.assign(Object.assign({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff",
  });
}

// ../node_modules/antd/es/theme/themes/shared/genRadius.js
var genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter,
  };
};
var genRadius_default = genRadius;

// ../node_modules/antd/es/theme/themes/shared/genCommonMapToken.js
function genCommonMapToken(token2) {
  const { motionUnit, motionBase, borderRadius, lineWidth } = token2;
  return Object.assign(
    {
      // motion
      motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
      motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
      motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
      // line
      lineWidthBold: lineWidth + 1,
    },
    genRadius_default(borderRadius),
  );
}

// ../node_modules/antd/es/theme/themes/default/colorAlgorithm.js
var getAlphaColor = (baseColor, alpha) =>
  new TinyColor(baseColor).setAlpha(alpha).toRgbString();
var getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};

// ../node_modules/antd/es/theme/themes/default/colors.js
var generateColorPalettes = (baseColor) => {
  const colors = generate(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6],
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
var generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
    colorBgBlur: "transparent",
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6),
  };
};

// ../node_modules/antd/es/theme/themes/shared/genFontSizes.js
function getLineHeight(fontSize) {
  return (fontSize + 8) / fontSize;
}
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index2) => {
    const i = index2 - 1;
    const baseSize = base * Math.pow(2.71828, i / 5);
    const intSize = index2 > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => ({
    size,
    lineHeight: getLineHeight(size),
  }));
}

// ../node_modules/antd/es/theme/themes/shared/genFontMapToken.js
var genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  const fontSizeMD = fontSizes[1];
  const fontSizeSM = fontSizes[0];
  const fontSizeLG = fontSizes[2];
  const lineHeight = lineHeights[1];
  const lineHeightSM = lineHeights[0];
  const lineHeightLG = lineHeights[2];
  return {
    fontSizeSM,
    fontSize: fontSizeMD,
    fontSizeLG,
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight,
    lineHeightLG,
    lineHeightSM,
    fontHeight: Math.round(lineHeight * fontSizeMD),
    fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
    fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2],
  };
};
var genFontMapToken_default = genFontMapToken;

// ../node_modules/antd/es/theme/themes/default/index.js
function derivative(token2) {
  const colorPalettes = Object.keys(defaultPresetColors)
    .map((colorKey) => {
      const colors = generate(token2[colorKey]);
      return new Array(10).fill(1).reduce((prev2, _, i) => {
        prev2[`${colorKey}-${i + 1}`] = colors[i];
        prev2[`${colorKey}${i + 1}`] = colors[i];
        return prev2;
      }, {});
    })
    .reduce((prev2, cur) => {
      prev2 = Object.assign(Object.assign({}, prev2), cur);
      return prev2;
    }, {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, token2), colorPalettes),
            genColorMapToken(token2, {
              generateColorPalettes,
              generateNeutralColorPalettes,
            }),
          ),
          genFontMapToken_default(token2.fontSize),
        ),
        genSizeMapToken(token2),
      ),
      genControlHeight_default(token2),
    ),
    genCommonMapToken(token2),
  );
}

// ../node_modules/antd/es/theme/context.js
var defaultTheme = createTheme(derivative);
var defaultConfig = {
  token: seed_default,
  override: {
    override: seed_default,
  },
  hashed: true,
};
var DesignTokenContext = /* @__PURE__ */ React16.createContext(defaultConfig);

// ../node_modules/antd/es/config-provider/context.js
import * as React17 from "react";
var defaultIconPrefixCls = "anticon";
var defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `ant-${suffixCls}` : "ant";
};
var ConfigContext = /* @__PURE__ */ React17.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls,
});
var { Consumer: ConfigConsumer } = ConfigContext;

// ../node_modules/antd/es/config-provider/cssVariables.js
var dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls2, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone =
      (updater === null || updater === void 0 ? void 0 : updater(clone)) ||
      clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor
      .clone()
      .setAlpha(0.2)
      .toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");
    const primaryColor = new TinyColor(theme.primaryColor);
    const primaryColors = generate(primaryColor.toRgbString());
    primaryColors.forEach((color, index2) => {
      variables[`primary-${index2 + 1}`] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(
      primaryColor,
      (c) => c.lighten(35),
    );
    variables["primary-color-deprecated-l-20"] = formatColor(
      primaryColor,
      (c) => c.lighten(20),
    );
    variables["primary-color-deprecated-t-20"] = formatColor(
      primaryColor,
      (c) => c.tint(20),
    );
    variables["primary-color-deprecated-t-50"] = formatColor(
      primaryColor,
      (c) => c.tint(50),
    );
    variables["primary-color-deprecated-f-12"] = formatColor(
      primaryColor,
      (c) => c.setAlpha(c.getAlpha() * 0.12),
    );
    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(
      primaryActiveColor,
      (c) => c.setAlpha(c.getAlpha() * 0.3),
    );
    variables["primary-color-active-deprecated-d-02"] = formatColor(
      primaryActiveColor,
      (c) => c.darken(2),
    );
  }
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }
  const cssList = Object.keys(variables).map(
    (key) => `--${globalPrefixCls2}-${key}: ${variables[key]};`,
  );
  return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
}
function registerTheme(globalPrefixCls2, theme) {
  const style2 = getStyle(globalPrefixCls2, theme);
  if (canUseDom()) {
    updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`);
  } else {
    true
      ? warning_default2(
          false,
          "ConfigProvider",
          "SSR do not support dynamic theme with css variables.",
        )
      : void 0;
  }
}

// ../node_modules/antd/es/config-provider/DisabledContext.js
import * as React18 from "react";
("use client");
var DisabledContext = /* @__PURE__ */ React18.createContext(false);
var DisabledContextProvider = (_ref) => {
  let { children, disabled } = _ref;
  const originDisabled = React18.useContext(DisabledContext);
  return /* @__PURE__ */ React18.createElement(
    DisabledContext.Provider,
    {
      value:
        disabled !== null && disabled !== void 0 ? disabled : originDisabled,
    },
    children,
  );
};
var DisabledContext_default = DisabledContext;

// ../node_modules/antd/es/config-provider/hooks/useConfig.js
import { useContext as useContext11 } from "react";

// ../node_modules/antd/es/config-provider/SizeContext.js
import * as React19 from "react";
("use client");
var SizeContext = /* @__PURE__ */ React19.createContext(void 0);
var SizeContextProvider = (_ref) => {
  let { children, size } = _ref;
  const originSize = React19.useContext(SizeContext);
  return /* @__PURE__ */ React19.createElement(
    SizeContext.Provider,
    {
      value: size || originSize,
    },
    children,
  );
};
var SizeContext_default = SizeContext;

// ../node_modules/antd/es/config-provider/hooks/useConfig.js
function useConfig() {
  const componentDisabled = useContext11(DisabledContext_default);
  const componentSize = useContext11(SizeContext_default);
  return {
    componentDisabled,
    componentSize,
  };
}
var useConfig_default = useConfig;

// ../node_modules/antd/es/theme/interface/presetColors.js
var PresetColors = [
  "blue",
  "purple",
  "cyan",
  "green",
  "magenta",
  "pink",
  "red",
  "orange",
  "yellow",
  "volcano",
  "geekblue",
  "lime",
  "gold",
];

// ../node_modules/antd/es/theme/useToken.js
import React20 from "react";

// ../node_modules/antd/es/version/version.js
var version_default = "5.14.0";

// ../node_modules/antd/es/version/index.js
("use client");
var version_default2 = version_default;

// ../node_modules/antd/es/theme/util/getAlphaColor.js
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor2(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha,
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const { r: bR, g: bG, b: bB } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new TinyColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100,
      }).toRgbString();
    }
  }
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1,
  }).toRgbString();
}
var getAlphaColor_default = getAlphaColor2;

// ../node_modules/antd/es/theme/util/alias.js
var __rest = function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
};
function formatToken(derivativeToken) {
  const { override } = derivativeToken,
    restToken = __rest(derivativeToken, ["override"]);
  const overrideTokens = Object.assign({}, override);
  Object.keys(seed_default).forEach((token2) => {
    delete overrideTokens[token2];
  });
  const mergedToken = Object.assign(
    Object.assign({}, restToken),
    overrideTokens,
  );
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  if (mergedToken.motion === false) {
    const fastDuration = "0s";
    mergedToken.motionDurationFast = fastDuration;
    mergedToken.motionDurationMid = fastDuration;
    mergedToken.motionDurationSlow = fastDuration;
  }
  const aliasToken = Object.assign(
    Object.assign(Object.assign({}, mergedToken), {
      // ============== Background ============== //
      colorFillContent: mergedToken.colorFillSecondary,
      colorFillContentHover: mergedToken.colorFill,
      colorFillAlter: mergedToken.colorFillQuaternary,
      colorBgContainerDisabled: mergedToken.colorFillTertiary,
      // ============== Split ============== //
      colorBorderBg: mergedToken.colorBgContainer,
      colorSplit: getAlphaColor_default(
        mergedToken.colorBorderSecondary,
        mergedToken.colorBgContainer,
      ),
      // ============== Text ============== //
      colorTextPlaceholder: mergedToken.colorTextQuaternary,
      colorTextDisabled: mergedToken.colorTextQuaternary,
      colorTextHeading: mergedToken.colorText,
      colorTextLabel: mergedToken.colorTextSecondary,
      colorTextDescription: mergedToken.colorTextTertiary,
      colorTextLightSolid: mergedToken.colorWhite,
      colorHighlight: mergedToken.colorError,
      colorBgTextHover: mergedToken.colorFillSecondary,
      colorBgTextActive: mergedToken.colorFill,
      colorIcon: mergedToken.colorTextTertiary,
      colorIconHover: mergedToken.colorText,
      colorErrorOutline: getAlphaColor_default(
        mergedToken.colorErrorBg,
        mergedToken.colorBgContainer,
      ),
      colorWarningOutline: getAlphaColor_default(
        mergedToken.colorWarningBg,
        mergedToken.colorBgContainer,
      ),
      // Font
      fontSizeIcon: mergedToken.fontSizeSM,
      // Line
      lineWidthFocus: mergedToken.lineWidth * 4,
      // Control
      lineWidth: mergedToken.lineWidth,
      controlOutlineWidth: mergedToken.lineWidth * 2,
      // Checkbox size and expand icon size
      controlInteractiveSize: mergedToken.controlHeight / 2,
      controlItemBgHover: mergedToken.colorFillTertiary,
      controlItemBgActive: mergedToken.colorPrimaryBg,
      controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
      controlItemBgActiveDisabled: mergedToken.colorFill,
      controlTmpOutline: mergedToken.colorFillQuaternary,
      controlOutline: getAlphaColor_default(
        mergedToken.colorPrimaryBg,
        mergedToken.colorBgContainer,
      ),
      lineType: mergedToken.lineType,
      borderRadius: mergedToken.borderRadius,
      borderRadiusXS: mergedToken.borderRadiusXS,
      borderRadiusSM: mergedToken.borderRadiusSM,
      borderRadiusLG: mergedToken.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: mergedToken.sizeXXS,
      paddingXS: mergedToken.sizeXS,
      paddingSM: mergedToken.sizeSM,
      padding: mergedToken.size,
      paddingMD: mergedToken.sizeMD,
      paddingLG: mergedToken.sizeLG,
      paddingXL: mergedToken.sizeXL,
      paddingContentHorizontalLG: mergedToken.sizeLG,
      paddingContentVerticalLG: mergedToken.sizeMS,
      paddingContentHorizontal: mergedToken.sizeMS,
      paddingContentVertical: mergedToken.sizeSM,
      paddingContentHorizontalSM: mergedToken.size,
      paddingContentVerticalSM: mergedToken.sizeXS,
      marginXXS: mergedToken.sizeXXS,
      marginXS: mergedToken.sizeXS,
      marginSM: mergedToken.sizeSM,
      margin: mergedToken.size,
      marginMD: mergedToken.sizeMD,
      marginLG: mergedToken.sizeLG,
      marginXL: mergedToken.sizeXL,
      marginXXL: mergedToken.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS,
      screenXSMin: screenXS,
      screenXSMax: screenSM - 1,
      screenSM,
      screenSMMin: screenSM,
      screenSMMax: screenMD - 1,
      screenMD,
      screenMDMin: screenMD,
      screenMDMax: screenLG - 1,
      screenLG,
      screenLGMin: screenLG,
      screenLGMax: screenXL - 1,
      screenXL,
      screenXLMin: screenXL,
      screenXLMax: screenXXL - 1,
      screenXXL,
      screenXXLMin: screenXXL,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
    }),
    overrideTokens,
  );
  return aliasToken;
}

// ../node_modules/antd/es/theme/useToken.js
var __rest2 = function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
};
var unitless = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true,
};
var ignore = {
  size: true,
  sizeSM: true,
  sizeLG: true,
  sizeMD: true,
  sizeXS: true,
  sizeXXS: true,
  sizeMS: true,
  sizeXL: true,
  sizeXXL: true,
  sizeUnit: true,
  sizeStep: true,
  motionBase: true,
  motionUnit: true,
};
var preserve = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true,
};
var getComputedToken3 = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const { override } = overrideToken,
    components = __rest2(overrideToken, ["override"]);
  let mergedDerivativeToken = Object.assign(
    Object.assign({}, derivativeToken),
    {
      override,
    },
  );
  mergedDerivativeToken = formatToken(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach((_ref) => {
      let [key, value] = _ref;
      const { theme: componentTheme } = value,
        componentTokens = __rest2(value, ["theme"]);
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken3(
          Object.assign(
            Object.assign({}, mergedDerivativeToken),
            componentTokens,
          ),
          {
            override: componentTokens,
          },
          componentTheme,
        );
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
function useToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    override,
    cssVar,
  } = React20.useContext(DesignTokenContext);
  const salt = `${version_default2}-${hashed || ""}`;
  const mergedTheme = theme || defaultTheme;
  const [token2, hashId, realToken] = useCacheToken(
    mergedTheme,
    [seed_default, rootDesignToken],
    {
      salt,
      override,
      getComputedToken: getComputedToken3,
      // formatToken will not be consumed after 1.15.0 with getComputedToken.
      // But token will break if @ant-design/cssinjs is under 1.15.0 without it
      formatToken,
      cssVar: cssVar && {
        prefix: cssVar.prefix,
        key: cssVar.key,
        unitless,
        ignore,
        preserve,
      },
    },
  );
  return [mergedTheme, realToken, hashed ? hashId : "", token2, cssVar];
}

// ../node_modules/antd/es/theme/util/genComponentStyleHook.js
import React23, { useContext as useContext12 } from "react";

// ../node_modules/rc-util/es/hooks/useEvent.js
import * as React21 from "react";
function useEvent(callback) {
  var fnRef = React21.useRef();
  fnRef.current = callback;
  var memoFn = React21.useCallback(function () {
    var _fnRef$current;
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null ||
      _fnRef$current === void 0
      ? void 0
      : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

// ../node_modules/rc-util/es/hooks/useState.js
import * as React22 from "react";
function useSafeState(defaultValue) {
  var destroyRef = React22.useRef(false);
  var _React$useState = React22.useState(defaultValue),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  React22.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}

// ../node_modules/rc-util/es/hooks/useMergedState.js
function hasValue(value) {
  return value !== void 0;
}
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;
  var _useState = useSafeState(function () {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === "function"
          ? defaultValue()
          : defaultValue;
      } else {
        return typeof defaultStateValue === "function"
          ? defaultStateValue()
          : defaultStateValue;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== void 0 ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;
  var onChangeFn = useEvent(onChange);
  var _useState3 = useSafeState([mergedValue]),
    _useState4 = _slicedToArray(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  useLayoutUpdateEffect(
    function () {
      var prev2 = prevValue[0];
      if (innerValue !== prev2) {
        onChangeFn(innerValue, prev2);
      }
    },
    [prevValue],
  );
  useLayoutUpdateEffect(
    function () {
      if (!hasValue(value)) {
        setInnerValue(value);
      }
    },
    [value],
  );
  var triggerChange = useEvent(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}

// ../node_modules/antd/es/style/index.js
("use client");
var resetComponent = function (token2) {
  let needInheritFontFamily =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: token2.colorText,
    fontSize: token2.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: token2.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: needInheritFontFamily ? "inherit" : token2.fontFamily,
  };
};
var resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1,
  },
  svg: {
    display: "inline-block",
  },
});
var genLinkStyle = (token2) => ({
  a: {
    color: token2.colorLink,
    textDecoration: token2.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${token2.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: token2.colorLinkHover,
    },
    "&:active": {
      color: token2.colorLinkActive,
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token2.linkHoverDecoration,
      outline: 0,
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token2.linkFocusDecoration,
      outline: 0,
    },
    "&[disabled]": {
      color: token2.colorTextDisabled,
      cursor: "not-allowed",
    },
  },
});
var genCommonStyle = (token2, componentPrefixCls, rootCls) => {
  const { fontFamily, fontSize } = token2;
  const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box",
      },
      [prefixSelector]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box",
        },
      },
    },
  };
};
var genFocusOutline = (token2) => ({
  outline: `${unit(token2.lineWidthFocus)} solid ${token2.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s",
});
var genFocusStyle = (token2) => ({
  "&:focus-visible": Object.assign({}, genFocusOutline(token2)),
});

// ../node_modules/antd/es/theme/util/calc/calculator.js
var AbstractCalculator = /* @__PURE__ */ _createClass(
  function AbstractCalculator2() {
    _classCallCheck(this, AbstractCalculator2);
  },
);
var calculator_default = AbstractCalculator;

// ../node_modules/antd/es/theme/util/calc/NumCalculator.js
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e),
    )
  );
}
var NumCalculator = /* @__PURE__ */ (function (_AbstractCalculator) {
  _inherits(NumCalculator2, _AbstractCalculator);
  function NumCalculator2(num) {
    var _this;
    _classCallCheck(this, NumCalculator2);
    _this = _callSuper(this, NumCalculator2);
    _this.result = 0;
    if (num instanceof NumCalculator2) {
      _this.result = num.result;
    } else if (typeof num === "number") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(NumCalculator2, [
    {
      key: "add",
      value: function add(num) {
        if (num instanceof NumCalculator2) {
          this.result += num.result;
        } else if (typeof num === "number") {
          this.result += num;
        }
        return this;
      },
    },
    {
      key: "sub",
      value: function sub(num) {
        if (num instanceof NumCalculator2) {
          this.result -= num.result;
        } else if (typeof num === "number") {
          this.result -= num;
        }
        return this;
      },
    },
    {
      key: "mul",
      value: function mul(num) {
        if (num instanceof NumCalculator2) {
          this.result *= num.result;
        } else if (typeof num === "number") {
          this.result *= num;
        }
        return this;
      },
    },
    {
      key: "div",
      value: function div(num) {
        if (num instanceof NumCalculator2) {
          this.result /= num.result;
        } else if (typeof num === "number") {
          this.result /= num;
        }
        return this;
      },
    },
    {
      key: "equal",
      value: function equal() {
        return this.result;
      },
    },
  ]);
  return NumCalculator2;
})(calculator_default);

// ../node_modules/antd/es/theme/util/calc/CSSCalculator.js
function _callSuper2(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e),
    )
  );
}
var CALC_UNIT = "CALC_UNIT";
function unit2(value) {
  if (typeof value === "number") {
    return `${value}${CALC_UNIT}`;
  }
  return value;
}
var CSSCalculator = /* @__PURE__ */ (function (_AbstractCalculator) {
  _inherits(CSSCalculator2, _AbstractCalculator);
  function CSSCalculator2(num) {
    var _this;
    _classCallCheck(this, CSSCalculator2);
    _this = _callSuper2(this, CSSCalculator2);
    _this.result = "";
    if (num instanceof CSSCalculator2) {
      _this.result = `(${num.result})`;
    } else if (typeof num === "number") {
      _this.result = unit2(num);
    } else if (typeof num === "string") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(CSSCalculator2, [
    {
      key: "add",
      value: function add(num) {
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} + ${num.getResult()}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} + ${unit2(num)}`;
        }
        this.lowPriority = true;
        return this;
      },
    },
    {
      key: "sub",
      value: function sub(num) {
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} - ${num.getResult()}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} - ${unit2(num)}`;
        }
        this.lowPriority = true;
        return this;
      },
    },
    {
      key: "mul",
      value: function mul(num) {
        if (this.lowPriority) {
          this.result = `(${this.result})`;
        }
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} * ${num.getResult(true)}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} * ${num}`;
        }
        this.lowPriority = false;
        return this;
      },
    },
    {
      key: "div",
      value: function div(num) {
        if (this.lowPriority) {
          this.result = `(${this.result})`;
        }
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} / ${num.getResult(true)}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} / ${num}`;
        }
        this.lowPriority = false;
        return this;
      },
    },
    {
      key: "getResult",
      value: function getResult(force) {
        return this.lowPriority || force ? `(${this.result})` : this.result;
      },
    },
    {
      key: "equal",
      value: function equal(options) {
        const { unit: cssUnit = true } = options || {};
        const regexp = new RegExp(`${CALC_UNIT}`, "g");
        this.result = this.result.replace(regexp, cssUnit ? "px" : "");
        if (typeof this.lowPriority !== "undefined") {
          return `calc(${this.result})`;
        }
        return this.result;
      },
    },
  ]);
  return CSSCalculator2;
})(calculator_default);

// ../node_modules/antd/es/theme/util/calc/index.js
var genCalc = (type) => {
  const Calculator = type === "css" ? CSSCalculator : NumCalculator;
  return (num) => new Calculator(num);
};
var calc_default = genCalc;

// ../node_modules/antd/es/theme/util/maxmin.js
function genMaxMin(type) {
  if (type === "js") {
    return {
      max: Math.max,
      min: Math.min,
    };
  }
  return {
    max: function () {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      return `max(${args.map((value) => unit(value)).join(",")})`;
    },
    min: function () {
      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }
      return `min(${args.map((value) => unit(value)).join(",")})`;
    },
  };
}

// ../node_modules/antd/es/theme/util/statistic.js
var enableStatistic = true;
var recording = true;
function merge2() {
  for (
    var _len = arguments.length, objs = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  const ret = {};
  objs.forEach((obj) => {
    const keys2 = Object.keys(obj);
    keys2.forEach((key) => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key],
      });
    });
  });
  recording = true;
  return ret;
}
var statistic = {};
function noop2() {}
var statisticToken = (token2) => {
  let tokenKeys2;
  let proxy = token2;
  let flush = noop2;
  if (enableStatistic && typeof Proxy !== "undefined") {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token2, {
      get(obj, prop) {
        if (recording) {
          tokenKeys2.add(prop);
        }
        return obj[prop];
      },
    });
    flush = (componentName, componentToken) => {
      var _a;
      statistic[componentName] = {
        global: Array.from(tokenKeys2),
        component: Object.assign(
          Object.assign(
            {},
            (_a = statistic[componentName]) === null || _a === void 0
              ? void 0
              : _a.component,
          ),
          componentToken,
        ),
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush,
  };
};
var statistic_default = statisticToken;

// ../node_modules/antd/es/theme/util/useResetIconStyle.js
var useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token2] = useToken();
  return useStyleRegister(
    {
      theme,
      token: token2,
      hashId: "",
      path: ["ant-design-icons", iconPrefixCls],
      nonce: () => (csp === null || csp === void 0 ? void 0 : csp.nonce),
    },
    () => [
      {
        [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
          [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
            display: "block",
          },
        }),
      },
    ],
  );
};
var useResetIconStyle_default = useResetIconStyle;

// ../node_modules/antd/es/theme/util/genComponentStyleHook.js
("use client");
var getDefaultComponentToken = (component, token2, getDefaultToken) => {
  var _a;
  if (typeof getDefaultToken === "function") {
    return getDefaultToken(
      merge2(
        token2,
        (_a = token2[component]) !== null && _a !== void 0 ? _a : {},
      ),
    );
  }
  return getDefaultToken !== null && getDefaultToken !== void 0
    ? getDefaultToken
    : {};
};
var getComponentToken = (component, token2, defaultToken, options) => {
  const customToken = Object.assign({}, token2[component]);
  if (
    options === null || options === void 0 ? void 0 : options.deprecatedTokens
  ) {
    const { deprecatedTokens } = options;
    deprecatedTokens.forEach((_ref) => {
      let [oldTokenKey, newTokenKey] = _ref;
      var _a;
      if (true) {
        true
          ? warning_default(
              !(customToken === null || customToken === void 0
                ? void 0
                : customToken[oldTokenKey]),
              `Component Token \`${String(
                oldTokenKey,
              )}\` of ${component} is deprecated. Please use \`${String(
                newTokenKey,
              )}\` instead.`,
            )
          : void 0;
      }
      if (
        (customToken === null || customToken === void 0
          ? void 0
          : customToken[oldTokenKey]) ||
        (customToken === null || customToken === void 0
          ? void 0
          : customToken[newTokenKey])
      ) {
        (_a = customToken[newTokenKey]) !== null && _a !== void 0
          ? _a
          : (customToken[newTokenKey] =
              customToken === null || customToken === void 0
                ? void 0
                : customToken[oldTokenKey]);
      }
    });
  }
  const mergedToken = Object.assign(
    Object.assign({}, defaultToken),
    customToken,
  );
  Object.keys(mergedToken).forEach((key) => {
    if (mergedToken[key] === token2[key]) {
      delete mergedToken[key];
    }
  });
  return mergedToken;
};
var getCompVarPrefix = (component, prefix) =>
  `${[
    prefix,
    component
      .replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2")
      .replace(/([a-z])([A-Z])/g, "$1-$2"),
  ]
    .filter(Boolean)
    .join("-")}`;
function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
  let options =
    arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const cells = Array.isArray(componentName)
    ? componentName
    : [componentName, componentName];
  const [component] = cells;
  const concatComponent = cells.join("-");
  return function (prefixCls) {
    let rootCls =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : prefixCls;
    const [theme, realToken, hashId, token2, cssVar] = useToken();
    const { getPrefixCls, iconPrefixCls, csp } = useContext12(ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const type = cssVar ? "css" : "js";
    const calc = calc_default(type);
    const { max, min } = genMaxMin(type);
    const sharedConfig = {
      theme,
      token: token2,
      hashId,
      nonce: () => (csp === null || csp === void 0 ? void 0 : csp.nonce),
      clientOnly: options.clientOnly,
      // antd is always at top of styles
      order: options.order || -999,
    };
    useStyleRegister(
      Object.assign(Object.assign({}, sharedConfig), {
        clientOnly: false,
        path: ["Shared", rootPrefixCls],
      }),
      () => [
        {
          // Link
          "&": genLinkStyle(token2),
        },
      ],
    );
    useResetIconStyle_default(iconPrefixCls, csp);
    const wrapSSR = useStyleRegister(
      Object.assign(Object.assign({}, sharedConfig), {
        path: [concatComponent, prefixCls, iconPrefixCls],
      }),
      () => {
        if (options.injectStyle === false) {
          return [];
        }
        const { token: proxyToken, flush } = statistic_default(token2);
        const defaultComponentToken = getDefaultComponentToken(
          component,
          realToken,
          getDefaultToken,
        );
        const componentCls = `.${prefixCls}`;
        const componentToken = getComponentToken(
          component,
          realToken,
          defaultComponentToken,
          {
            deprecatedTokens: options.deprecatedTokens,
          },
        );
        if (cssVar) {
          Object.keys(defaultComponentToken).forEach((key) => {
            defaultComponentToken[key] = `var(${token2CSSVar(
              key,
              getCompVarPrefix(component, cssVar.prefix),
            )})`;
          });
        }
        const mergedToken = merge2(
          proxyToken,
          {
            componentCls,
            prefixCls,
            iconCls: `.${iconPrefixCls}`,
            antCls: `.${rootPrefixCls}`,
            calc,
            max,
            min,
          },
          cssVar ? defaultComponentToken : componentToken,
        );
        const styleInterpolation = styleFn(mergedToken, {
          hashId,
          prefixCls,
          rootPrefixCls,
          iconPrefixCls,
        });
        flush(component, componentToken);
        return [
          options.resetStyle === false
            ? null
            : genCommonStyle(mergedToken, prefixCls, rootCls),
          styleInterpolation,
        ];
      },
    );
    return [wrapSSR, hashId];
  };
}
var genSubStyleComponent = (
  componentName,
  styleFn,
  getDefaultToken,
  options,
) => {
  const useStyle = genComponentStyleHook(
    componentName,
    styleFn,
    getDefaultToken,
    Object.assign(
      {
        resetStyle: false,
        // Sub Style should default after root one
        order: -998,
      },
      options,
    ),
  );
  const StyledComponent = (_ref2) => {
    let { prefixCls, rootCls = prefixCls } = _ref2;
    useStyle(prefixCls, rootCls);
    return null;
  };
  if (true) {
    StyledComponent.displayName = `SubStyle_${
      Array.isArray(componentName) ? componentName.join(".") : componentName
    }`;
  }
  return StyledComponent;
};
var genCSSVarRegister = (component, getDefaultToken, options) => {
  function prefixToken(key) {
    return `${component}${key.slice(0, 1).toUpperCase()}${key.slice(1)}`;
  }
  const { unitless: originUnitless = {}, injectStyle = true } =
    options !== null && options !== void 0 ? options : {};
  const compUnitless = {
    [prefixToken("zIndexPopup")]: true,
  };
  Object.keys(originUnitless).forEach((key) => {
    compUnitless[prefixToken(key)] = originUnitless[key];
  });
  const CSSVarRegister = (_ref3) => {
    let { rootCls, cssVar } = _ref3;
    const [, realToken] = useToken();
    useCSSVarRegister_default(
      {
        path: [component],
        prefix: cssVar.prefix,
        key: cssVar === null || cssVar === void 0 ? void 0 : cssVar.key,
        unitless: Object.assign(Object.assign({}, unitless), compUnitless),
        ignore,
        token: realToken,
        scope: rootCls,
      },
      () => {
        const defaultToken = getDefaultComponentToken(
          component,
          realToken,
          getDefaultToken,
        );
        const componentToken = getComponentToken(
          component,
          realToken,
          defaultToken,
          {
            deprecatedTokens:
              options === null || options === void 0
                ? void 0
                : options.deprecatedTokens,
          },
        );
        Object.keys(defaultToken).forEach((key) => {
          componentToken[prefixToken(key)] = componentToken[key];
          delete componentToken[key];
        });
        return componentToken;
      },
    );
    return null;
  };
  const useCSSVar = (rootCls) => {
    const [, , , , cssVar] = useToken();
    return [
      (node2) =>
        injectStyle && cssVar
          ? /* @__PURE__ */ React23.createElement(
              React23.Fragment,
              null,
              /* @__PURE__ */ React23.createElement(CSSVarRegister, {
                rootCls,
                cssVar,
                component,
              }),
              node2,
            )
          : node2,
      cssVar === null || cssVar === void 0 ? void 0 : cssVar.key,
    ];
  };
  return useCSSVar;
};
var genStyleHooks = (component, styleFn, getDefaultToken, options) => {
  const useStyle = genComponentStyleHook(
    component,
    styleFn,
    getDefaultToken,
    options,
  );
  const useCSSVar = genCSSVarRegister(
    Array.isArray(component) ? component[0] : component,
    getDefaultToken,
    options,
  );
  return function (prefixCls) {
    let rootCls =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : prefixCls;
    const [, hashId] = useStyle(prefixCls, rootCls);
    const [wrapCSSVar, cssVarCls] = useCSSVar(rootCls);
    return [wrapCSSVar, hashId, cssVarCls];
  };
};

// ../node_modules/antd/es/theme/util/genPresetColor.js
function genPresetColor(token2, genCss) {
  return PresetColors.reduce((prev2, colorKey) => {
    const lightColor = token2[`${colorKey}1`];
    const lightBorderColor = token2[`${colorKey}3`];
    const darkColor = token2[`${colorKey}6`];
    const textColor = token2[`${colorKey}7`];
    return Object.assign(
      Object.assign({}, prev2),
      genCss(colorKey, {
        lightColor,
        lightBorderColor,
        darkColor,
        textColor,
      }),
    );
  }, {});
}

// ../node_modules/antd/es/config-provider/hooks/useThemeKey.js
import * as React24 from "react";
var fullClone3 = Object.assign({}, React24);
var { useId } = fullClone3;
var useEmptyId = () => "";
var useThemeKey = typeof useId === "undefined" ? useEmptyId : useId;
var useThemeKey_default = useThemeKey;

// ../node_modules/antd/es/config-provider/hooks/useTheme.js
function useTheme(theme, parentTheme) {
  var _a;
  const warning4 = devUseWarning("ConfigProvider");
  const themeConfig = theme || {};
  const parentThemeConfig =
    themeConfig.inherit === false || !parentTheme ? defaultConfig : parentTheme;
  const themeKey = useThemeKey_default();
  if (true) {
    const cssVarEnabled = themeConfig.cssVar || parentThemeConfig.cssVar;
    const validKey = !!(
      (typeof themeConfig.cssVar === "object" &&
        ((_a = themeConfig.cssVar) === null || _a === void 0
          ? void 0
          : _a.key)) ||
      themeKey
    );
    true
      ? warning4(
          !cssVarEnabled || validKey,
          "breaking",
          "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.",
        )
      : void 0;
  }
  return useMemo(
    () => {
      var _a2, _b;
      if (!theme) {
        return parentTheme;
      }
      const mergedComponents = Object.assign({}, parentThemeConfig.components);
      Object.keys(theme.components || {}).forEach((componentName) => {
        mergedComponents[componentName] = Object.assign(
          Object.assign({}, mergedComponents[componentName]),
          theme.components[componentName],
        );
      });
      const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
      const mergedCssVar =
        ((_a2 = themeConfig.cssVar) !== null && _a2 !== void 0
          ? _a2
          : parentThemeConfig.cssVar) &&
        Object.assign(
          Object.assign(
            Object.assign(
              {
                prefix: "ant",
              },
              typeof parentThemeConfig.cssVar === "object"
                ? parentThemeConfig.cssVar
                : {},
            ),
            typeof themeConfig.cssVar === "object" ? themeConfig.cssVar : {},
          ),
          {
            key:
              (typeof themeConfig.cssVar === "object" &&
                ((_b = themeConfig.cssVar) === null || _b === void 0
                  ? void 0
                  : _b.key)) ||
              cssVarKey,
          },
        );
      return Object.assign(
        Object.assign(Object.assign({}, parentThemeConfig), themeConfig),
        {
          token: Object.assign(
            Object.assign({}, parentThemeConfig.token),
            themeConfig.token,
          ),
          components: mergedComponents,
          cssVar: mergedCssVar,
        },
      );
    },
    [themeConfig, parentThemeConfig],
    (prev2, next2) =>
      prev2.some((prevTheme, index2) => {
        const nextTheme = next2[index2];
        return !isEqual_default(prevTheme, nextTheme, true);
      }),
  );
}

// ../node_modules/rc-motion/es/CSSMotion.js
var import_classnames = __toESM(require_classnames());
import * as React31 from "react";
import { useRef as useRef12 } from "react";

// ../node_modules/rc-motion/es/context.js
import * as React25 from "react";
var _excluded = ["children"];
var Context = /* @__PURE__ */ React25.createContext({});
function MotionProvider(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /* @__PURE__ */ React25.createElement(
    Context.Provider,
    {
      value: props,
    },
    children,
  );
}

// ../node_modules/rc-motion/es/DomWrapper.js
import * as React26 from "react";
var DomWrapper2 = /* @__PURE__ */ (function (_React$Component) {
  _inherits(DomWrapper3, _React$Component);
  var _super = _createSuper(DomWrapper3);
  function DomWrapper3() {
    _classCallCheck(this, DomWrapper3);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper3, [
    {
      key: "render",
      value: function render2() {
        return this.props.children;
      },
    },
  ]);
  return DomWrapper3;
})(React26.Component);
var DomWrapper_default = DomWrapper2;

// ../node_modules/rc-motion/es/hooks/useStatus.js
import * as React30 from "react";
import { useEffect as useEffect10, useRef as useRef10 } from "react";

// ../node_modules/rc-motion/es/interface.js
var STATUS_NONE = "none";
var STATUS_APPEAR = "appear";
var STATUS_ENTER = "enter";
var STATUS_LEAVE = "leave";
var STEP_NONE = "none";
var STEP_PREPARE = "prepare";
var STEP_START = "start";
var STEP_ACTIVE = "active";
var STEP_ACTIVATED = "end";
var STEP_PREPARED = "prepared";

// ../node_modules/rc-motion/es/hooks/useDomMotionEvents.js
import * as React27 from "react";
import { useRef as useRef7 } from "react";

// ../node_modules/rc-motion/es/util/motion.js
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    transitionend: makePrefixMap("Transition", "TransitionEnd"),
  };
  if (domSupport) {
    if (!("AnimationEvent" in win)) {
      delete prefixes.animationend.animation;
    }
    if (!("TransitionEvent" in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(
  canUseDom(),
  typeof window !== "undefined" ? window : {},
);
var style = {};
if (canUseDom()) {
  _document$createEleme = document.createElement("div");
  style = _document$createEleme.style;
}
var _document$createEleme;
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  var prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (
        Object.prototype.hasOwnProperty.call(prefixMap, styleProp) &&
        styleProp in style
      ) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return "";
}
var internalAnimationEndName = getVendorPrefixedEventName("animationend");
var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
var supportTransition = !!(
  internalAnimationEndName && internalTransitionEndName
);
var animationEndName = internalAnimationEndName || "animationend";
var transitionEndName = internalTransitionEndName || "transitionend";
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;
  if (_typeof(transitionName) === "object") {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }
  return "".concat(transitionName, "-").concat(transitionType);
}

// ../node_modules/rc-motion/es/hooks/useDomMotionEvents.js
var useDomMotionEvents_default = function (callback) {
  var cacheElementRef = useRef7();
  var callbackRef = useRef7(callback);
  callbackRef.current = callback;
  var onInternalMotionEnd = React27.useCallback(function (event) {
    callbackRef.current(event);
  }, []);
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);
      cacheElementRef.current = element;
    }
  }
  React27.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
};

// ../node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js
import {
  useEffect as useEffect7,
  useLayoutEffect as useLayoutEffect4,
} from "react";
var useIsomorphicLayoutEffect = canUseDom() ? useLayoutEffect4 : useEffect7;
var useIsomorphicLayoutEffect_default = useIsomorphicLayoutEffect;

// ../node_modules/rc-motion/es/hooks/useStepQueue.js
import * as React29 from "react";

// ../node_modules/rc-motion/es/hooks/useNextFrame.js
import * as React28 from "react";
var useNextFrame_default = function () {
  var nextFrameRef = React28.useRef(null);
  function cancelNextFrame() {
    raf_default.cancel(nextFrameRef.current);
  }
  function nextFrame(callback) {
    var delay =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = raf_default(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          },
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  React28.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
};

// ../node_modules/rc-motion/es/hooks/useStepQueue.js
var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
var SkipStep = false;
var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
var useStepQueue_default = function (status, prepareOnly, callback) {
  var _useState = useSafeState(STEP_NONE),
    _useState2 = _slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var _useNextFrame = useNextFrame_default(),
    _useNextFrame2 = _slicedToArray(_useNextFrame, 2),
    nextFrame = _useNextFrame2[0],
    cancelNextFrame = _useNextFrame2[1];
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  useIsomorphicLayoutEffect_default(
    function () {
      if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
        var index2 = STEP_QUEUE.indexOf(step);
        var nextStep = STEP_QUEUE[index2 + 1];
        var result = callback(step);
        if (result === SkipStep) {
          setStep(nextStep, true);
        } else if (nextStep) {
          nextFrame(function (info) {
            function doNext() {
              if (info.isCanceled()) return;
              setStep(nextStep, true);
            }
            if (result === true) {
              doNext();
            } else {
              Promise.resolve(result).then(doNext);
            }
          });
        }
      }
    },
    [status, step],
  );
  React29.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
};

// ../node_modules/rc-motion/es/hooks/useStatus.js
function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
    motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
    _ref$motionAppear = _ref.motionAppear,
    motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
    _ref$motionLeave = _ref.motionLeave,
    motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
    motionDeadline = _ref.motionDeadline,
    motionLeaveImmediately = _ref.motionLeaveImmediately,
    onAppearPrepare = _ref.onAppearPrepare,
    onEnterPrepare = _ref.onEnterPrepare,
    onLeavePrepare = _ref.onLeavePrepare,
    onAppearStart = _ref.onAppearStart,
    onEnterStart = _ref.onEnterStart,
    onLeaveStart = _ref.onLeaveStart,
    onAppearActive = _ref.onAppearActive,
    onEnterActive = _ref.onEnterActive,
    onLeaveActive = _ref.onLeaveActive,
    onAppearEnd = _ref.onAppearEnd,
    onEnterEnd = _ref.onEnterEnd,
    onLeaveEnd = _ref.onLeaveEnd,
    onVisibleChanged = _ref.onVisibleChanged;
  var _useState = useSafeState(),
    _useState2 = _slicedToArray(_useState, 2),
    asyncVisible = _useState2[0],
    setAsyncVisible = _useState2[1];
  var _useState3 = useSafeState(STATUS_NONE),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = useSafeState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    style2 = _useState6[0],
    setStyle = _useState6[1];
  var mountedRef = useRef10(false);
  var deadlineRef = useRef10(null);
  function getDomElement() {
    return getElement();
  }
  var activeRef = useRef10(false);
  function updateMotionEndStatus() {
    setStatus(STATUS_NONE, true);
    setStyle(null, true);
  }
  function onInternalMotionEnd(event) {
    var element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      return;
    }
    var currentActive = activeRef.current;
    var canEnd;
    if (status === STATUS_APPEAR && currentActive) {
      canEnd =
        onAppearEnd === null || onAppearEnd === void 0
          ? void 0
          : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd =
        onEnterEnd === null || onEnterEnd === void 0
          ? void 0
          : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd =
        onLeaveEnd === null || onLeaveEnd === void 0
          ? void 0
          : onLeaveEnd(element, event);
    }
    if (status !== STATUS_NONE && currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  }
  var _useDomMotionEvents = useDomMotionEvents_default(onInternalMotionEnd),
    _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1),
    patchMotionEvents = _useDomMotionEvents2[0];
  var getEventHandlers = function getEventHandlers2(targetStatus) {
    var _ref2, _ref3, _ref4;
    switch (targetStatus) {
      case STATUS_APPEAR:
        return (
          (_ref2 = {}),
          _defineProperty(_ref2, STEP_PREPARE, onAppearPrepare),
          _defineProperty(_ref2, STEP_START, onAppearStart),
          _defineProperty(_ref2, STEP_ACTIVE, onAppearActive),
          _ref2
        );
      case STATUS_ENTER:
        return (
          (_ref3 = {}),
          _defineProperty(_ref3, STEP_PREPARE, onEnterPrepare),
          _defineProperty(_ref3, STEP_START, onEnterStart),
          _defineProperty(_ref3, STEP_ACTIVE, onEnterActive),
          _ref3
        );
      case STATUS_LEAVE:
        return (
          (_ref4 = {}),
          _defineProperty(_ref4, STEP_PREPARE, onLeavePrepare),
          _defineProperty(_ref4, STEP_START, onLeaveStart),
          _defineProperty(_ref4, STEP_ACTIVE, onLeaveActive),
          _ref4
        );
      default:
        return {};
    }
  };
  var eventHandlers = React30.useMemo(
    function () {
      return getEventHandlers(status);
    },
    [status],
  );
  var _useStepQueue = useStepQueue_default(
      status,
      !supportMotion,
      function (newStep) {
        if (newStep === STEP_PREPARE) {
          var onPrepare = eventHandlers[STEP_PREPARE];
          if (!onPrepare) {
            return SkipStep;
          }
          return onPrepare(getDomElement());
        }
        if (step in eventHandlers) {
          var _eventHandlers$step;
          setStyle(
            ((_eventHandlers$step = eventHandlers[step]) === null ||
            _eventHandlers$step === void 0
              ? void 0
              : _eventHandlers$step.call(
                  eventHandlers,
                  getDomElement(),
                  null,
                )) || null,
          );
        }
        if (step === STEP_ACTIVE) {
          patchMotionEvents(getDomElement());
          if (motionDeadline > 0) {
            clearTimeout(deadlineRef.current);
            deadlineRef.current = setTimeout(function () {
              onInternalMotionEnd({
                deadline: true,
              });
            }, motionDeadline);
          }
        }
        if (step === STEP_PREPARED) {
          updateMotionEndStatus();
        }
        return DoStep;
      },
    ),
    _useStepQueue2 = _slicedToArray(_useStepQueue, 2),
    startStep = _useStepQueue2[0],
    step = _useStepQueue2[1];
  var active = isActive(step);
  activeRef.current = active;
  useIsomorphicLayoutEffect_default(
    function () {
      setAsyncVisible(visible);
      var isMounted = mountedRef.current;
      mountedRef.current = true;
      var nextStatus;
      if (!isMounted && visible && motionAppear) {
        nextStatus = STATUS_APPEAR;
      }
      if (isMounted && visible && motionEnter) {
        nextStatus = STATUS_ENTER;
      }
      if (
        (isMounted && !visible && motionLeave) ||
        (!isMounted && motionLeaveImmediately && !visible && motionLeave)
      ) {
        nextStatus = STATUS_LEAVE;
      }
      var nextEventHandlers = getEventHandlers(nextStatus);
      if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
        setStatus(nextStatus);
        startStep();
      } else {
        setStatus(STATUS_NONE);
      }
    },
    [visible],
  );
  useEffect10(
    function () {
      if (
        // Cancel appear
        (status === STATUS_APPEAR && !motionAppear) || // Cancel enter
        (status === STATUS_ENTER && !motionEnter) || // Cancel leave
        (status === STATUS_LEAVE && !motionLeave)
      ) {
        setStatus(STATUS_NONE);
      }
    },
    [motionAppear, motionEnter, motionLeave],
  );
  useEffect10(function () {
    return function () {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []);
  var firstMountChangeRef = React30.useRef(false);
  useEffect10(
    function () {
      if (asyncVisible) {
        firstMountChangeRef.current = true;
      }
      if (asyncVisible !== void 0 && status === STATUS_NONE) {
        if (firstMountChangeRef.current || asyncVisible) {
          onVisibleChanged === null || onVisibleChanged === void 0
            ? void 0
            : onVisibleChanged(asyncVisible);
        }
        firstMountChangeRef.current = true;
      }
    },
    [asyncVisible, status],
  );
  var mergedStyle = style2;
  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2(
      {
        transition: "none",
      },
      mergedStyle,
    );
  }
  return [
    status,
    step,
    mergedStyle,
    asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible,
  ];
}

// ../node_modules/rc-motion/es/CSSMotion.js
function genCSSMotion(config) {
  var transitionSupport = config;
  if (_typeof(config) === "object") {
    transitionSupport = config.transitionSupport;
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  var CSSMotion = /* @__PURE__ */ React31.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$removeOnLeave = props.removeOnLeave,
      removeOnLeave =
        _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
      forceRender = props.forceRender,
      children = props.children,
      motionName = props.motionName,
      leavedClassName = props.leavedClassName,
      eventProps = props.eventProps;
    var _React$useContext = React31.useContext(Context),
      contextMotion = _React$useContext.motion;
    var supportMotion = isSupportTransition(props, contextMotion);
    var nodeRef = useRef12();
    var wrapperNodeRef = useRef12();
    function getDomElement() {
      try {
        return nodeRef.current instanceof HTMLElement
          ? nodeRef.current
          : findDOMNode(wrapperNodeRef.current);
      } catch (e) {
        return null;
      }
    }
    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
      _useStatus2 = _slicedToArray(_useStatus, 4),
      status = _useStatus2[0],
      statusStep = _useStatus2[1],
      statusStyle = _useStatus2[2],
      mergedVisible = _useStatus2[3];
    var renderedRef = React31.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }
    var setNodeRef = React31.useCallback(
      function (node2) {
        nodeRef.current = node2;
        fillRef(ref, node2);
      },
      [ref],
    );
    var motionChildren;
    var mergedProps = _objectSpread2(
      _objectSpread2({}, eventProps),
      {},
      {
        visible,
      },
    );
    if (!children) {
      motionChildren = null;
    } else if (status === STATUS_NONE) {
      if (mergedVisible) {
        motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children(
          _objectSpread2(
            _objectSpread2({}, mergedProps),
            {},
            {
              className: leavedClassName,
            },
          ),
          setNodeRef,
        );
      } else if (forceRender || (!removeOnLeave && !leavedClassName)) {
        motionChildren = children(
          _objectSpread2(
            _objectSpread2({}, mergedProps),
            {},
            {
              style: {
                display: "none",
              },
            },
          ),
          setNodeRef,
        );
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;
      var statusSuffix;
      if (statusStep === STEP_PREPARE) {
        statusSuffix = "prepare";
      } else if (isActive(statusStep)) {
        statusSuffix = "active";
      } else if (statusStep === STEP_START) {
        statusSuffix = "start";
      }
      var motionCls = getTransitionName(
        motionName,
        "".concat(status, "-").concat(statusSuffix),
      );
      motionChildren = children(
        _objectSpread2(
          _objectSpread2({}, mergedProps),
          {},
          {
            className: (0, import_classnames.default)(
              getTransitionName(motionName, status),
              ((_classNames = {}),
              _defineProperty(
                _classNames,
                motionCls,
                motionCls && statusSuffix,
              ),
              _defineProperty(
                _classNames,
                motionName,
                typeof motionName === "string",
              ),
              _classNames),
            ),
            style: statusStyle,
          },
        ),
        setNodeRef,
      );
    }
    if (
      /* @__PURE__ */ React31.isValidElement(motionChildren) &&
      supportRef(motionChildren)
    ) {
      var _ref = motionChildren,
        originNodeRef = _ref.ref;
      if (!originNodeRef) {
        motionChildren = /* @__PURE__ */ React31.cloneElement(motionChildren, {
          ref: setNodeRef,
        });
      }
    }
    return /* @__PURE__ */ React31.createElement(
      DomWrapper_default,
      {
        ref: wrapperNodeRef,
      },
      motionChildren,
    );
  });
  CSSMotion.displayName = "CSSMotion";
  return CSSMotion;
}
var CSSMotion_default = genCSSMotion(supportTransition);

// ../node_modules/rc-motion/es/CSSMotionList.js
import * as React32 from "react";

// ../node_modules/rc-motion/es/util/diff.js
var STATUS_ADD = "add";
var STATUS_KEEP = "keep";
var STATUS_REMOVE = "remove";
var STATUS_REMOVED = "removed";
function wrapKeyToObject(key) {
  var keyObj;
  if (key && _typeof(key) === "object" && "key" in key) {
    keyObj = key;
  } else {
    keyObj = {
      key,
    };
  }
  return _objectSpread2(
    _objectSpread2({}, keyObj),
    {},
    {
      key: String(keyObj.key),
    },
  );
}
function parseKeys() {
  var keys2 =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return keys2.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var currentKeys =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);
  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;
    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        if (currentIndex < i) {
          list = list.concat(
            currentKeyObjects.slice(currentIndex, i).map(function (obj) {
              return _objectSpread2(
                _objectSpread2({}, obj),
                {},
                {
                  status: STATUS_ADD,
                },
              );
            }),
          );
          currentIndex = i;
        }
        list.push(
          _objectSpread2(
            _objectSpread2({}, currentKeyObj),
            {},
            {
              status: STATUS_KEEP,
            },
          ),
        );
        currentIndex += 1;
        hit = true;
        break;
      }
    }
    if (!hit) {
      list.push(
        _objectSpread2(
          _objectSpread2({}, keyObj),
          {},
          {
            status: STATUS_REMOVE,
          },
        ),
      );
    }
  });
  if (currentIndex < currentLen) {
    list = list.concat(
      currentKeyObjects.slice(currentIndex).map(function (obj) {
        return _objectSpread2(
          _objectSpread2({}, obj),
          {},
          {
            status: STATUS_ADD,
          },
        );
      }),
    );
  }
  var keys2 = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys2[key] = (keys2[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys2).filter(function (key) {
    return keys2[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
        status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });
    list.forEach(function (node2) {
      if (node2.key === matchKey) {
        node2.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

// ../node_modules/rc-motion/es/CSSMotionList.js
var _excluded2 = ["component", "children", "onVisibleChanged", "onAllRemoved"];
var _excluded22 = ["status"];
var MOTION_PROP_NAMES = [
  "eventProps",
  "visible",
  "children",
  "motionName",
  "motionAppear",
  "motionEnter",
  "motionLeave",
  "motionLeaveImmediately",
  "motionDeadline",
  "removeOnLeave",
  "leavedClassName",
  "onAppearPrepare",
  "onAppearStart",
  "onAppearActive",
  "onAppearEnd",
  "onEnterStart",
  "onEnterActive",
  "onEnterEnd",
  "onLeaveStart",
  "onLeaveActive",
  "onLeaveEnd",
];
function genCSSMotionList(transitionSupport) {
  var CSSMotion =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : CSSMotion_default;
  var CSSMotionList = /* @__PURE__ */ (function (_React$Component) {
    _inherits(CSSMotionList2, _React$Component);
    var _super = _createSuper(CSSMotionList2);
    function CSSMotionList2() {
      var _this;
      _classCallCheck(this, CSSMotionList2);
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        keyEntities: [],
      });
      _defineProperty(
        _assertThisInitialized(_this),
        "removeKey",
        function (removeKey) {
          var keyEntities = _this.state.keyEntities;
          var nextKeyEntities = keyEntities.map(function (entity) {
            if (entity.key !== removeKey) return entity;
            return _objectSpread2(
              _objectSpread2({}, entity),
              {},
              {
                status: STATUS_REMOVED,
              },
            );
          });
          _this.setState({
            keyEntities: nextKeyEntities,
          });
          return nextKeyEntities.filter(function (_ref) {
            var status = _ref.status;
            return status !== STATUS_REMOVED;
          }).length;
        },
      );
      return _this;
    }
    _createClass(
      CSSMotionList2,
      [
        {
          key: "render",
          value: function render2() {
            var _this2 = this;
            var keyEntities = this.state.keyEntities;
            var _this$props = this.props,
              component = _this$props.component,
              children = _this$props.children,
              _onVisibleChanged = _this$props.onVisibleChanged,
              onAllRemoved = _this$props.onAllRemoved,
              restProps = _objectWithoutProperties(_this$props, _excluded2);
            var Component4 = component || React32.Fragment;
            var motionProps = {};
            MOTION_PROP_NAMES.forEach(function (prop) {
              motionProps[prop] = restProps[prop];
              delete restProps[prop];
            });
            delete restProps.keys;
            return /* @__PURE__ */ React32.createElement(
              Component4,
              restProps,
              keyEntities.map(function (_ref2, index2) {
                var status = _ref2.status,
                  eventProps = _objectWithoutProperties(_ref2, _excluded22);
                var visible = status === STATUS_ADD || status === STATUS_KEEP;
                return /* @__PURE__ */ React32.createElement(
                  CSSMotion,
                  _extends({}, motionProps, {
                    key: eventProps.key,
                    visible,
                    eventProps,
                    onVisibleChanged: function onVisibleChanged(
                      changedVisible,
                    ) {
                      _onVisibleChanged === null || _onVisibleChanged === void 0
                        ? void 0
                        : _onVisibleChanged(changedVisible, {
                            key: eventProps.key,
                          });
                      if (!changedVisible) {
                        var restKeysCount = _this2.removeKey(eventProps.key);
                        if (restKeysCount === 0 && onAllRemoved) {
                          onAllRemoved();
                        }
                      }
                    },
                  }),
                  function (props, ref) {
                    return children(
                      _objectSpread2(
                        _objectSpread2({}, props),
                        {},
                        {
                          index: index2,
                        },
                      ),
                      ref,
                    );
                  },
                );
              }),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(_ref3, _ref4) {
            var keys2 = _ref3.keys;
            var keyEntities = _ref4.keyEntities;
            var parsedKeyObjects = parseKeys(keys2);
            var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
            return {
              keyEntities: mixedKeyEntities.filter(function (entity) {
                var prevEntity = keyEntities.find(function (_ref5) {
                  var key = _ref5.key;
                  return entity.key === key;
                });
                if (
                  prevEntity &&
                  prevEntity.status === STATUS_REMOVED &&
                  entity.status === STATUS_REMOVE
                ) {
                  return false;
                }
                return true;
              }),
            };
          },
        },
      ],
    );
    return CSSMotionList2;
  })(React32.Component);
  _defineProperty(CSSMotionList, "defaultProps", {
    component: "div",
  });
  return CSSMotionList;
}
var CSSMotionList_default = genCSSMotionList(supportTransition);

// ../node_modules/rc-motion/es/index.js
var es_default2 = CSSMotion_default;

// ../node_modules/antd/es/config-provider/MotionWrapper.js
import * as React33 from "react";
("use client");
function MotionWrapper(props) {
  const { children } = props;
  const [, token2] = useToken();
  const { motion } = token2;
  const needWrapMotionProviderRef = React33.useRef(false);
  needWrapMotionProviderRef.current =
    needWrapMotionProviderRef.current || motion === false;
  if (needWrapMotionProviderRef.current) {
    return /* @__PURE__ */ React33.createElement(
      MotionProvider,
      {
        motion,
      },
      children,
    );
  }
  return children;
}

// ../node_modules/antd/es/config-provider/PropWarning.js
import * as React34 from "react";
("use client");
var PropWarning = /* @__PURE__ */ React34.memo((_ref) => {
  let { dropdownMatchSelectWidth } = _ref;
  const warning4 = devUseWarning("ConfigProvider");
  warning4.deprecated(
    dropdownMatchSelectWidth === void 0,
    "dropdownMatchSelectWidth",
    "popupMatchSelectWidth",
  );
  return null;
});
if (true) {
  PropWarning.displayName = "PropWarning";
}
var PropWarning_default = true ? PropWarning : () => null;

// ../node_modules/antd/es/config-provider/index.js
("use client");
var __rest3 = function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
};
var existThemeConfig = false;
var PASSED_PROPS = [
  "getTargetContainer",
  "getPopupContainer",
  "renderEmpty",
  "input",
  "pagination",
  "form",
  "select",
  "button",
];
var defaultPrefixCls = "ant";
var globalPrefixCls;
var globalIconPrefixCls;
var globalTheme;
var globalHolderRender;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some((key) => key.endsWith("Color"));
}
var setGlobalConfig = (props) => {
  const { prefixCls, iconPrefixCls, theme, holderRender } = props;
  if (prefixCls !== void 0) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== void 0) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if ("holderRender" in props) {
    globalHolderRender = holderRender;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
      true
        ? warning_default2(
            false,
            "ConfigProvider",
            "`config` of css variable theme is not work in v5. Please use new `theme` config instead.",
          )
        : void 0;
      registerTheme(getGlobalPrefixCls(), theme);
    } else {
      globalTheme = theme;
    }
  }
};
var ProviderChildren = (props) => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    form,
    locale: locale5,
    componentSize,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic: statistic2,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    input,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
  } = props;
  const getPrefixCls = React35.useCallback(
    (suffixCls, customizePrefixCls) => {
      const { prefixCls } = props;
      if (customizePrefixCls) {
        return customizePrefixCls;
      }
      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    },
    [parentContext.getPrefixCls, props.prefixCls],
  );
  const iconPrefixCls =
    customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
  const csp = customCsp || parentContext.csp;
  useResetIconStyle_default(iconPrefixCls, csp);
  const mergedTheme = useTheme(theme, parentContext.theme);
  if (true) {
    existThemeConfig = existThemeConfig || !!mergedTheme;
  }
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    locale: locale5 || legacyLocale,
    direction,
    space,
    virtual,
    popupMatchSelectWidth:
      popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0
        ? popupMatchSelectWidth
        : dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic: statistic2,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
  };
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach((key) => {
    if (baseConfig[key] !== void 0) {
      config[key] = baseConfig[key];
    }
  });
  PASSED_PROPS.forEach((propName) => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  const memoedConfig = useMemo(
    () => config,
    config,
    (prevConfig, currentConfig) => {
      const prevKeys = Object.keys(prevConfig);
      const currentKeys = Object.keys(currentConfig);
      return (
        prevKeys.length !== currentKeys.length ||
        prevKeys.some((key) => prevConfig[key] !== currentConfig[key])
      );
    },
  );
  const memoIconContextValue = React35.useMemo(
    () => ({
      prefixCls: iconPrefixCls,
      csp,
    }),
    [iconPrefixCls, csp],
  );
  let childNode = /* @__PURE__ */ React35.createElement(
    React35.Fragment,
    null,
    /* @__PURE__ */ React35.createElement(PropWarning_default, {
      dropdownMatchSelectWidth,
    }),
    children,
  );
  const validateMessages = React35.useMemo(() => {
    var _a, _b, _c, _d;
    return merge(
      ((_a = en_US_default6.Form) === null || _a === void 0
        ? void 0
        : _a.defaultValidateMessages) || {},
      ((_c =
        (_b = memoedConfig.locale) === null || _b === void 0
          ? void 0
          : _b.Form) === null || _c === void 0
        ? void 0
        : _c.defaultValidateMessages) || {},
      ((_d = memoedConfig.form) === null || _d === void 0
        ? void 0
        : _d.validateMessages) || {},
      (form === null || form === void 0 ? void 0 : form.validateMessages) || {},
    );
  }, [
    memoedConfig,
    form === null || form === void 0 ? void 0 : form.validateMessages,
  ]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /* @__PURE__ */ React35.createElement(
      validateMessagesContext_default.Provider,
      {
        value: validateMessages,
      },
      childNode,
    );
  }
  if (locale5) {
    childNode = /* @__PURE__ */ React35.createElement(
      locale_default,
      {
        locale: locale5,
        _ANT_MARK__: ANT_MARK,
      },
      childNode,
    );
  }
  if (iconPrefixCls || csp) {
    childNode = /* @__PURE__ */ React35.createElement(
      Context_default.Provider,
      {
        value: memoIconContextValue,
      },
      childNode,
    );
  }
  if (componentSize) {
    childNode = /* @__PURE__ */ React35.createElement(
      SizeContextProvider,
      {
        size: componentSize,
      },
      childNode,
    );
  }
  childNode = /* @__PURE__ */ React35.createElement(
    MotionWrapper,
    null,
    childNode,
  );
  const memoTheme = React35.useMemo(() => {
    const _a = mergedTheme || {},
      { algorithm, token: token2, components, cssVar } = _a,
      rest = __rest3(_a, ["algorithm", "token", "components", "cssVar"]);
    const themeObj =
      algorithm && (!Array.isArray(algorithm) || algorithm.length > 0)
        ? createTheme(algorithm)
        : defaultTheme;
    const parsedComponents = {};
    Object.entries(components || {}).forEach((_ref) => {
      let [componentName, componentToken] = _ref;
      const parsedToken = Object.assign({}, componentToken);
      if ("algorithm" in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (
          Array.isArray(parsedToken.algorithm) ||
          typeof parsedToken.algorithm === "function"
        ) {
          parsedToken.theme = createTheme(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = Object.assign(Object.assign({}, seed_default), token2);
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: Object.assign(
        {
          override: mergedToken,
        },
        parsedComponents,
      ),
      cssVar,
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /* @__PURE__ */ React35.createElement(
      DesignTokenContext.Provider,
      {
        value: memoTheme,
      },
      childNode,
    );
  }
  if (memoedConfig.warning) {
    childNode = /* @__PURE__ */ React35.createElement(
      WarningContext.Provider,
      {
        value: memoedConfig.warning,
      },
      childNode,
    );
  }
  if (componentDisabled !== void 0) {
    childNode = /* @__PURE__ */ React35.createElement(
      DisabledContextProvider,
      {
        disabled: componentDisabled,
      },
      childNode,
    );
  }
  return /* @__PURE__ */ React35.createElement(
    ConfigContext.Provider,
    {
      value: memoedConfig,
    },
    childNode,
  );
};
var ConfigProvider = (props) => {
  const context = React35.useContext(ConfigContext);
  const antLocale = React35.useContext(context_default);
  return /* @__PURE__ */ React35.createElement(
    ProviderChildren,
    Object.assign(
      {
        parentContext: context,
        legacyLocale: antLocale,
      },
      props,
    ),
  );
};
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext_default;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = useConfig_default;
Object.defineProperty(ConfigProvider, "SizeContext", {
  get: () => {
    true
      ? warning_default2(
          false,
          "ConfigProvider",
          "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead.",
        )
      : void 0;
    return SizeContext_default;
  },
});
if (true) {
  ConfigProvider.displayName = "ConfigProvider";
}

// ../node_modules/@ant-design/icons/es/components/AntdIcon.js
var import_classnames2 = __toESM(require_classnames());
import * as React38 from "react";

// ../node_modules/@ant-design/icons/es/components/IconBase.js
import * as React37 from "react";

// ../node_modules/rc-util/es/Dom/shadow.js
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null ||
    ele === void 0 ||
    (_ele$getRootNode = ele.getRootNode) === null ||
    _ele$getRootNode === void 0
    ? void 0
    : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

// ../node_modules/@ant-design/icons/es/utils.js
import React36, {
  useContext as useContext15,
  useEffect as useEffect11,
} from "react";
function camelCase(input) {
  return input.replace(/-(.)/g, function (match, g) {
    return g.toUpperCase();
  });
}
function warning3(valid, message) {
  warning_default(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return (
    _typeof(target) === "object" &&
    typeof target.name === "string" &&
    typeof target.theme === "string" &&
    (_typeof(target.icon) === "object" || typeof target.icon === "function")
  );
}
function normalizeAttrs() {
  var attrs =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate2(node2, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ React36.createElement(
      node2.tag,
      _objectSpread2(
        {
          key,
        },
        normalizeAttrs(node2.attrs),
      ),
      (node2.children || []).map(function (child, index2) {
        return generate2(
          child,
          "".concat(key, "-").concat(node2.tag, "-").concat(index2),
        );
      }),
    );
  }
  return /* @__PURE__ */ React36.createElement(
    node2.tag,
    _objectSpread2(
      _objectSpread2(
        {
          key,
        },
        normalizeAttrs(node2.attrs),
      ),
      rootProps,
    ),
    (node2.children || []).map(function (child, index2) {
      return generate2(
        child,
        "".concat(key, "-").concat(node2.tag, "-").concat(index2),
      );
    }),
  );
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles =
  "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles2(eleRef) {
  var _useContext = useContext15(Context_default),
    csp = _useContext.csp,
    prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  useEffect11(function () {
    var ele = eleRef.current;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: true,
      csp,
      attachTo: shadowRoot,
    });
  }, []);
};

// ../node_modules/@ant-design/icons/es/components/IconBase.js
var _excluded3 = [
  "icon",
  "className",
  "onClick",
  "style",
  "primaryColor",
  "secondaryColor",
];
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false,
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor =
    secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style2 = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = _objectWithoutProperties(props, _excluded3);
  var svgRef = React37.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
    };
  }
  useInsertStyles(svgRef);
  warning3(
    isIconDefinition(icon),
    "icon should be icon definiton, but got ".concat(icon),
  );
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread2(
      _objectSpread2({}, target),
      {},
      {
        icon: target.icon(colors.primaryColor, colors.secondaryColor),
      },
    );
  }
  return generate2(
    target.icon,
    "svg-".concat(target.name),
    _objectSpread2(
      _objectSpread2(
        {
          className,
          onClick,
          style: style2,
          "data-icon": target.name,
          width: "1em",
          height: "1em",
          fill: "currentColor",
          "aria-hidden": "true",
        },
        restProps,
      ),
      {},
      {
        ref: svgRef,
      },
    ),
  );
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;

// ../node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return IconBase_default.setTwoToneColors({
    primaryColor,
    secondaryColor,
  });
}
function getTwoToneColor() {
  var colors = IconBase_default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

// ../node_modules/@ant-design/icons/es/components/AntdIcon.js
("use client");
var _excluded4 = [
  "className",
  "icon",
  "spin",
  "rotate",
  "tabIndex",
  "onClick",
  "twoToneColor",
];
setTwoToneColor(blue.primary);
var Icon = /* @__PURE__ */ React38.forwardRef(function (props, ref) {
  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = _objectWithoutProperties(props, _excluded4);
  var _React$useContext = React38.useContext(Context_default),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls =
      _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = (0, import_classnames2.default)(
    rootClassName,
    prefixCls,
    _defineProperty(
      _defineProperty(
        {},
        "".concat(prefixCls, "-").concat(icon.name),
        !!icon.name,
      ),
      "".concat(prefixCls, "-spin"),
      !!spin || icon.name === "loading",
    ),
    className,
  );
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate
    ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)"),
      }
    : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ React38.createElement(
    "span",
    _extends(
      {
        role: "img",
        "aria-label": icon.name,
      },
      restProps,
      {
        ref,
        tabIndex: iconTabIndex,
        onClick,
        className: classString,
      },
    ),
    /* @__PURE__ */ React38.createElement(IconBase_default, {
      icon,
      primaryColor,
      secondaryColor,
      style: svgStyle,
    }),
  );
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;

// ../node_modules/antd/es/_util/reactNode.js
import * as React39 from "react";
var { isValidElement: isValidElement4 } = React39;
function isFragment3(child) {
  return child && isValidElement4(child) && child.type === React39.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement4(element)) {
    return replacement;
  }
  return /* @__PURE__ */ React39.cloneElement(
    element,
    typeof props === "function" ? props(element.props || {}) : props,
  );
}
function cloneElement4(element, props) {
  return replaceElement(element, element, props);
}

// ../node_modules/rc-util/es/KeyCode.js
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (
      (e.altKey && !e.ctrlKey) ||
      e.metaKey || // Function keys don't generate text
      (keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12)
    ) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  },
};
var KeyCode_default = KeyCode;

// ../node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
import * as React40 from "react";

// ../node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
var LoadingOutlined = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
        },
      },
    ],
  },
  name: "loading",
  theme: "outlined",
};
var LoadingOutlined_default = LoadingOutlined;

// ../node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
var LoadingOutlined2 = function LoadingOutlined3(props, ref) {
  return /* @__PURE__ */ React40.createElement(
    AntdIcon_default,
    _extends({}, props, {
      ref,
      icon: LoadingOutlined_default,
    }),
  );
};
if (true) {
  LoadingOutlined2.displayName = "LoadingOutlined";
}
var LoadingOutlined_default2 =
  /* @__PURE__ */ React40.forwardRef(LoadingOutlined2);

// ../node_modules/antd/es/_util/hooks/useZIndex.js
import React42 from "react";

// ../node_modules/antd/es/_util/zindexContext.js
import React41 from "react";
var zIndexContext = /* @__PURE__ */ React41.createContext(void 0);
if (true) {
  zIndexContext.displayName = "zIndexContext";
}
var zindexContext_default = zIndexContext;

// ../node_modules/antd/es/_util/hooks/useZIndex.js
var CONTAINER_OFFSET = 100;
var CONTAINER_OFFSET_MAX_COUNT = 10;
var CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
var containerBaseZIndexOffset = {
  Modal: CONTAINER_OFFSET,
  Drawer: CONTAINER_OFFSET,
  Popover: CONTAINER_OFFSET,
  Popconfirm: CONTAINER_OFFSET,
  Tooltip: CONTAINER_OFFSET,
  Tour: CONTAINER_OFFSET,
};
var consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1,
};
function isContainerType(type) {
  return type in containerBaseZIndexOffset;
}
function useZIndex(componentType, customZIndex) {
  const [, token2] = useToken();
  const parentZIndex = React42.useContext(zindexContext_default);
  const isContainer = isContainerType(componentType);
  if (customZIndex !== void 0) {
    return [customZIndex, customZIndex];
  }
  let zIndex =
    parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
  if (isContainer) {
    zIndex += // Use preset token zIndex by default but not stack when has parent container
      (parentZIndex ? 0 : token2.zIndexPopupBase) + // Container offset
      containerBaseZIndexOffset[componentType];
    zIndex = Math.min(zIndex, token2.zIndexPopupBase + CONTAINER_MAX_OFFSET);
  } else {
    zIndex += consumerBaseZIndexOffset[componentType];
  }
  return [parentZIndex === void 0 ? customZIndex : zIndex, zIndex];
}

// ../node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
function _regeneratorRuntime() {
  "use strict";
  _regeneratorRuntime = function _regeneratorRuntime2() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t2, e2, r2) {
        t2[e2] = r2.value;
      },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define2(t2, e2, r2) {
    return (
      Object.defineProperty(t2, e2, {
        value: r2,
        enumerable: true,
        configurable: true,
        writable: true,
      }),
      t2[e2]
    );
  }
  try {
    define2({}, "");
  } catch (t2) {
    define2 = function define3(t3, e2, r2) {
      return (t3[e2] = r2);
    };
  }
  function wrap(t2, e2, r2, n2) {
    var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator,
      a2 = Object.create(i2.prototype),
      c2 = new Context2(n2 || []);
    return (
      o(a2, "_invoke", {
        value: makeInvokeMethod(t2, r2, c2),
      }),
      a2
    );
  }
  function tryCatch(t2, e2, r2) {
    try {
      return {
        type: "normal",
        arg: t2.call(e2, r2),
      };
    } catch (t3) {
      return {
        type: "throw",
        arg: t3,
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define2(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
  function defineIteratorMethods(t2) {
    ["next", "throw", "return"].forEach(function (e2) {
      define2(t2, e2, function (t3) {
        return this._invoke(e2, t3);
      });
    });
  }
  function AsyncIterator(t2, e2) {
    function invoke(r3, o2, i2, a2) {
      var c2 = tryCatch(t2[r3], t2, o2);
      if ("throw" !== c2.type) {
        var u2 = c2.arg,
          h2 = u2.value;
        return h2 && "object" == _typeof(h2) && n.call(h2, "__await")
          ? e2.resolve(h2.__await).then(
              function (t3) {
                invoke("next", t3, i2, a2);
              },
              function (t3) {
                invoke("throw", t3, i2, a2);
              },
            )
          : e2.resolve(h2).then(
              function (t3) {
                (u2.value = t3), i2(u2);
              },
              function (t3) {
                return invoke("throw", t3, i2, a2);
              },
            );
      }
      a2(c2.arg);
    }
    var r2;
    o(this, "_invoke", {
      value: function value(t3, n2) {
        function callInvokeWithMethodAndArg() {
          return new e2(function (e3, r3) {
            invoke(t3, n2, e3, r3);
          });
        }
        return (r2 = r2
          ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e2, r2, n2) {
    var o2 = h;
    return function (i2, a2) {
      if (o2 === f) throw new Error("Generator is already running");
      if (o2 === s) {
        if ("throw" === i2) throw a2;
        return {
          value: t,
          done: true,
        };
      }
      for (n2.method = i2, n2.arg = a2; ; ) {
        var c2 = n2.delegate;
        if (c2) {
          var u2 = maybeInvokeDelegate(c2, n2);
          if (u2) {
            if (u2 === y) continue;
            return u2;
          }
        }
        if ("next" === n2.method) n2.sent = n2._sent = n2.arg;
        else if ("throw" === n2.method) {
          if (o2 === h) throw ((o2 = s), n2.arg);
          n2.dispatchException(n2.arg);
        } else "return" === n2.method && n2.abrupt("return", n2.arg);
        o2 = f;
        var p2 = tryCatch(e2, r2, n2);
        if ("normal" === p2.type) {
          if (((o2 = n2.done ? s : l), p2.arg === y)) continue;
          return {
            value: p2.arg,
            done: n2.done,
          };
        }
        "throw" === p2.type &&
          ((o2 = s), (n2.method = "throw"), (n2.arg = p2.arg));
      }
    };
  }
  function maybeInvokeDelegate(e2, r2) {
    var n2 = r2.method,
      o2 = e2.iterator[n2];
    if (o2 === t)
      return (
        (r2.delegate = null),
        ("throw" === n2 &&
          e2.iterator["return"] &&
          ((r2.method = "return"),
          (r2.arg = t),
          maybeInvokeDelegate(e2, r2),
          "throw" === r2.method)) ||
          ("return" !== n2 &&
            ((r2.method = "throw"),
            (r2.arg = new TypeError(
              "The iterator does not provide a '" + n2 + "' method",
            )))),
        y
      );
    var i2 = tryCatch(o2, e2.iterator, r2.arg);
    if ("throw" === i2.type)
      return (r2.method = "throw"), (r2.arg = i2.arg), (r2.delegate = null), y;
    var a2 = i2.arg;
    return a2
      ? a2.done
        ? ((r2[e2.resultName] = a2.value),
          (r2.next = e2.nextLoc),
          "return" !== r2.method && ((r2.method = "next"), (r2.arg = t)),
          (r2.delegate = null),
          y)
        : a2
      : ((r2.method = "throw"),
        (r2.arg = new TypeError("iterator result is not an object")),
        (r2.delegate = null),
        y);
  }
  function pushTryEntry(t2) {
    var e2 = {
      tryLoc: t2[0],
    };
    1 in t2 && (e2.catchLoc = t2[1]),
      2 in t2 && ((e2.finallyLoc = t2[2]), (e2.afterLoc = t2[3])),
      this.tryEntries.push(e2);
  }
  function resetTryEntry(t2) {
    var e2 = t2.completion || {};
    (e2.type = "normal"), delete e2.arg, (t2.completion = e2);
  }
  function Context2(t2) {
    (this.tryEntries = [
      {
        tryLoc: "root",
      },
    ]),
      t2.forEach(pushTryEntry, this),
      this.reset(true);
  }
  function values(e2) {
    if (e2 || "" === e2) {
      var r2 = e2[a];
      if (r2) return r2.call(e2);
      if ("function" == typeof e2.next) return e2;
      if (!isNaN(e2.length)) {
        var o2 = -1,
          i2 = function next2() {
            for (; ++o2 < e2.length; )
              if (n.call(e2, o2))
                return (next2.value = e2[o2]), (next2.done = false), next2;
            return (next2.value = t), (next2.done = true), next2;
          };
        return (i2.next = i2);
      }
    }
    throw new TypeError(_typeof(e2) + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true,
    }),
    o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true,
    }),
    (GeneratorFunction.displayName = define2(
      GeneratorFunctionPrototype,
      u,
      "GeneratorFunction",
    )),
    (e.isGeneratorFunction = function (t2) {
      var e2 = "function" == typeof t2 && t2.constructor;
      return (
        !!e2 &&
        (e2 === GeneratorFunction ||
          "GeneratorFunction" === (e2.displayName || e2.name))
      );
    }),
    (e.mark = function (t2) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype)
          : ((t2.__proto__ = GeneratorFunctionPrototype),
            define2(t2, u, "GeneratorFunction")),
        (t2.prototype = Object.create(g)),
        t2
      );
    }),
    (e.awrap = function (t2) {
      return {
        __await: t2,
      };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define2(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t2, r2, n2, o2, i2) {
      void 0 === i2 && (i2 = Promise);
      var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
      return e.isGeneratorFunction(r2)
        ? a2
        : a2.next().then(function (t3) {
            return t3.done ? t3.value : a2.next();
          });
    }),
    defineIteratorMethods(g),
    define2(g, u, "Generator"),
    define2(g, a, function () {
      return this;
    }),
    define2(g, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (t2) {
      var e2 = Object(t2),
        r2 = [];
      for (var n2 in e2) r2.push(n2);
      return (
        r2.reverse(),
        function next2() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return (next2.value = t3), (next2.done = false), next2;
          }
          return (next2.done = true), next2;
        }
      );
    }),
    (e.values = values),
    (Context2.prototype = {
      constructor: Context2,
      reset: function reset(e2) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = false),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e2)
        )
          for (var r2 in this)
            "t" === r2.charAt(0) &&
              n.call(this, r2) &&
              !isNaN(+r2.slice(1)) &&
              (this[r2] = t);
      },
      stop: function stop() {
        this.done = true;
        var t2 = this.tryEntries[0].completion;
        if ("throw" === t2.type) throw t2.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e2) {
        if (this.done) throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return (
            (a2.type = "throw"),
            (a2.arg = e2),
            (r2.next = n2),
            o3 && ((r2.method = "next"), (r2.arg = t)),
            !!o3
          );
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2],
            a2 = i2.completion;
          if ("root" === i2.tryLoc) return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"),
              u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
              if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (
            o2.tryLoc <= this.prev &&
            n.call(o2, "finallyLoc") &&
            this.prev < o2.finallyLoc
          ) {
            var i2 = o2;
            break;
          }
        }
        i2 &&
          ("break" === t2 || "continue" === t2) &&
          i2.tryLoc <= e2 &&
          e2 <= i2.finallyLoc &&
          (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return (
          (a2.type = t2),
          (a2.arg = e2),
          i2
            ? ((this.method = "next"), (this.next = i2.finallyLoc), y)
            : this.complete(a2)
        );
      },
      complete: function complete(t2, e2) {
        if ("throw" === t2.type) throw t2.arg;
        return (
          "break" === t2.type || "continue" === t2.type
            ? (this.next = t2.arg)
            : "return" === t2.type
              ? ((this.rval = this.arg = t2.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === t2.type && e2 && (this.next = e2),
          y
        );
      },
      finish: function finish(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return (
              this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y
            );
        }
      },
      catch: function _catch(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if ("throw" === n2.type) {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e2, r2, n2) {
        return (
          (this.delegate = {
            iterator: values(e2),
            resultName: r2,
            nextLoc: n2,
          }),
          "next" === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}

// ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self2 = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}

// ../node_modules/rc-util/es/React/render.js
import * as ReactDOM2 from "react-dom";
var fullClone4 = _objectSpread2({}, ReactDOM2);
var version = fullClone4.version;
var reactRender = fullClone4.render;
var unmountComponentAtNode = fullClone4.unmountComponentAtNode;
var createRoot;
try {
  mainVersion = Number((version || "").split(".")[0]);
  if (mainVersion >= 18) {
    createRoot = fullClone4.createRoot;
  }
} catch (e) {}
var mainVersion;
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
    fullClone4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
    _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object"
  ) {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint =
      skip;
  }
}
var MARK = "__rc_react_root__";
function modernRender(node2, container) {
  toggleWarning(true);
  var root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node2);
  container[MARK] = root;
}
function legacyRender(node2, container) {
  reactRender(node2, container);
}
function render(node2, container) {
  if (createRoot) {
    modernRender(node2, container);
    return;
  }
  legacyRender(node2, container);
}
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = _asyncToGenerator(
    /* @__PURE__ */ _regeneratorRuntime().mark(function _callee(container) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch ((_context.prev = _context.next)) {
            case 0:
              return _context.abrupt(
                "return",
                Promise.resolve().then(function () {
                  var _container$MARK;
                  (_container$MARK = container[MARK]) === null ||
                    _container$MARK === void 0 ||
                    _container$MARK.unmount();
                  delete container[MARK];
                }),
              );
            case 1:
            case "end":
              return _context.stop();
          }
      }, _callee);
    }),
  );
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}
function _unmount() {
  _unmount = _asyncToGenerator(
    /* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(container) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1)
          switch ((_context2.prev = _context2.next)) {
            case 0:
              if (!(createRoot !== void 0)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", modernUnmount(container));
            case 2:
              legacyUnmount(container);
            case 3:
            case "end":
              return _context2.stop();
          }
      }, _callee2);
    }),
  );
  return _unmount.apply(this, arguments);
}

// ../node_modules/antd/es/_util/motion.js
var getTransitionName2 = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== void 0) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

// ../node_modules/antd/es/button/button.js
var import_classnames9 = __toESM(require_classnames());
import React52, {
  Children,
  createRef,
  forwardRef as forwardRef8,
  useContext as useContext21,
  useEffect as useEffect13,
  useMemo as useMemo8,
  useState as useState3,
} from "react";

// ../node_modules/antd/es/_util/wave/index.js
var import_classnames4 = __toESM(require_classnames());

// ../node_modules/rc-util/es/Dom/isVisible.js
var isVisible_default = function (element) {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      var _getBBox = element.getBBox(),
        width = _getBBox.width,
        height = _getBBox.height;
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      var _element$getBoundingC = element.getBoundingClientRect(),
        _width = _element$getBoundingC.width,
        _height = _element$getBoundingC.height;
      if (_width || _height) {
        return true;
      }
    }
  }
  return false;
};

// ../node_modules/antd/es/_util/wave/index.js
import React45, { useContext as useContext18, useRef as useRef17 } from "react";

// ../node_modules/antd/es/_util/wave/style.js
var genWaveStyle = (token2) => {
  const { componentCls, colorPrimary } = token2;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [
          `box-shadow 0.4s ${token2.motionEaseOutCirc}`,
          `opacity 2s ${token2.motionEaseOutCirc}`,
        ].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0,
        },
        "&.wave-quick": {
          transition: [
            `box-shadow 0.3s ${token2.motionEaseInOut}`,
            `opacity 0.35s ${token2.motionEaseInOut}`,
          ].join(","),
        },
      },
    },
  };
};
var style_default = genComponentStyleHook("Wave", (token2) => [
  genWaveStyle(token2),
]);

// ../node_modules/antd/es/_util/wave/useWave.js
import * as React44 from "react";

// ../node_modules/antd/es/_util/wave/WaveEffect.js
var import_classnames3 = __toESM(require_classnames());
import * as React43 from "react";

// ../node_modules/antd/es/_util/wave/util.js
function isNotGrey(color) {
  const match = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return (
    color &&
    color !== "#fff" &&
    color !== "#ffffff" &&
    color !== "rgb(255, 255, 255)" &&
    color !== "rgba(255, 255, 255, 1)" &&
    isNotGrey(color) &&
    !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
    color !== "transparent"
  );
}
function getTargetWaveColor(node2) {
  const { borderTopColor, borderColor, backgroundColor } =
    getComputedStyle(node2);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}

// ../node_modules/antd/es/_util/wave/interface.js
var TARGET_CLS = "ant-wave-target";

// ../node_modules/antd/es/_util/wave/WaveEffect.js
("use client");
function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
var WaveEffect = (props) => {
  const { className, target, component } = props;
  const divRef = React43.useRef(null);
  const [color, setWaveColor] = React43.useState(null);
  const [borderRadius, setBorderRadius] = React43.useState([]);
  const [left, setLeft] = React43.useState(0);
  const [top, setTop] = React43.useState(0);
  const [width, setWidth] = React43.useState(0);
  const [height, setHeight] = React43.useState(0);
  const [enabled, setEnabled] = React43.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map((radius) => `${radius}px`).join(" "),
  };
  if (color) {
    waveStyle["--wave-color"] = color;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    setWaveColor(getTargetWaveColor(target));
    const isStatic = nodeStyle.position === "static";
    const { borderLeftWidth, borderTopWidth } = nodeStyle;
    setLeft(
      isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)),
    );
    setTop(
      isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)),
    );
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
    } = nodeStyle;
    setBorderRadius(
      [
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
      ].map((radius) => validateNum(parseFloat(radius))),
    );
  }
  React43.useEffect(() => {
    if (target) {
      const id = raf_default(() => {
        syncPos();
        setEnabled(true);
      });
      let resizeObserver2;
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver2 = new ResizeObserver(syncPos);
        resizeObserver2.observe(target);
      }
      return () => {
        raf_default.cancel(id);
        resizeObserver2 === null || resizeObserver2 === void 0
          ? void 0
          : resizeObserver2.disconnect();
      };
    }
  }, []);
  if (!enabled) {
    return null;
  }
  const isSmallComponent =
    (component === "Checkbox" || component === "Radio") &&
    (target === null || target === void 0
      ? void 0
      : target.classList.contains(TARGET_CLS));
  return /* @__PURE__ */ React43.createElement(
    es_default2,
    {
      visible: true,
      motionAppear: true,
      motionName: "wave-motion",
      motionDeadline: 5e3,
      onAppearEnd: (_, event) => {
        var _a;
        if (event.deadline || event.propertyName === "opacity") {
          const holder =
            (_a = divRef.current) === null || _a === void 0
              ? void 0
              : _a.parentElement;
          unmount(holder).then(() => {
            holder === null || holder === void 0 ? void 0 : holder.remove();
          });
        }
        return false;
      },
    },
    (_ref) => {
      let { className: motionClassName } = _ref;
      return /* @__PURE__ */ React43.createElement("div", {
        ref: divRef,
        className: (0, import_classnames3.default)(
          className,
          {
            "wave-quick": isSmallComponent,
          },
          motionClassName,
        ),
        style: waveStyle,
      });
    },
  );
};
var showWaveEffect = (target, info) => {
  var _a;
  const { component } = info;
  if (
    component === "Checkbox" &&
    !((_a = target.querySelector("input")) === null || _a === void 0
      ? void 0
      : _a.checked)
  ) {
    return;
  }
  const holder = document.createElement("div");
  holder.style.position = "absolute";
  holder.style.left = "0px";
  holder.style.top = "0px";
  target === null || target === void 0
    ? void 0
    : target.insertBefore(
        holder,
        target === null || target === void 0 ? void 0 : target.firstChild,
      );
  render(
    /* @__PURE__ */ React43.createElement(
      WaveEffect,
      Object.assign({}, info, {
        target,
      }),
    ),
    holder,
  );
};
var WaveEffect_default = showWaveEffect;

// ../node_modules/antd/es/_util/wave/useWave.js
function useWave(nodeRef, className, component) {
  const { wave } = React44.useContext(ConfigContext);
  const [, token2, hashId] = useToken();
  const showWave = useEvent((event) => {
    const node2 = nodeRef.current;
    if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node2) {
      return;
    }
    const targetNode = node2.querySelector(`.${TARGET_CLS}`) || node2;
    const { showEffect } = wave || {};
    (showEffect || WaveEffect_default)(targetNode, {
      className,
      token: token2,
      component,
      event,
      hashId,
    });
  });
  const rafId = React44.useRef();
  const showDebounceWave = (event) => {
    raf_default.cancel(rafId.current);
    rafId.current = raf_default(() => {
      showWave(event);
    });
  };
  return showDebounceWave;
}

// ../node_modules/antd/es/_util/wave/index.js
var Wave = (props) => {
  const { children, disabled, component } = props;
  const { getPrefixCls } = useContext18(ConfigContext);
  const containerRef = useRef17(null);
  const prefixCls = getPrefixCls("wave");
  const [, hashId] = style_default(prefixCls);
  const showWave = useWave(
    containerRef,
    (0, import_classnames4.default)(prefixCls, hashId),
    component,
  );
  React45.useEffect(() => {
    const node2 = containerRef.current;
    if (!node2 || node2.nodeType !== 1 || disabled) {
      return;
    }
    const onClick = (e) => {
      if (
        !isVisible_default(e.target) || // No need wave
        !node2.getAttribute ||
        node2.getAttribute("disabled") ||
        node2.disabled ||
        node2.className.includes("disabled") ||
        node2.className.includes("-leave")
      ) {
        return;
      }
      showWave(e);
    };
    node2.addEventListener("click", onClick, true);
    return () => {
      node2.removeEventListener("click", onClick, true);
    };
  }, [disabled]);
  if (!(/* @__PURE__ */ React45.isValidElement(children))) {
    return children !== null && children !== void 0 ? children : null;
  }
  const ref = supportRef(children)
    ? composeRef(children.ref, containerRef)
    : containerRef;
  return cloneElement4(children, {
    ref,
  });
};
if (true) {
  Wave.displayName = "Wave";
}
var wave_default = Wave;

// ../node_modules/antd/es/config-provider/hooks/useSize.js
import React46 from "react";
var useSize = (customSize) => {
  const size = React46.useContext(SizeContext_default);
  const mergedSize = React46.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === "string") {
      return customSize !== null && customSize !== void 0 ? customSize : size;
    }
    if (customSize instanceof Function) {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
var useSize_default = useSize;

// ../node_modules/antd/es/space/Compact.js
var import_classnames5 = __toESM(require_classnames());
import * as React47 from "react";
("use client");
var SpaceCompactItemContext = /* @__PURE__ */ React47.createContext(null);
var useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = React47.useContext(SpaceCompactItemContext);
  const compactItemClassnames = React47.useMemo(() => {
    if (!compactItemContext) {
      return "";
    }
    const { compactDirection, isFirstItem, isLastItem } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return (0, import_classnames5.default)(
      `${prefixCls}-compact${separator}item`,
      {
        [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
        [`${prefixCls}-compact${separator}last-item`]: isLastItem,
        [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl",
      },
    );
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize:
      compactItemContext === null || compactItemContext === void 0
        ? void 0
        : compactItemContext.compactSize,
    compactDirection:
      compactItemContext === null || compactItemContext === void 0
        ? void 0
        : compactItemContext.compactDirection,
    compactItemClassnames,
  };
};
var NoCompactStyle = (_ref) => {
  let { children } = _ref;
  return /* @__PURE__ */ React47.createElement(
    SpaceCompactItemContext.Provider,
    {
      value: null,
    },
    children,
  );
};

// ../node_modules/antd/es/button/button-group.js
var import_classnames6 = __toESM(require_classnames());
import * as React48 from "react";
("use client");
var __rest4 = function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
};
var GroupSizeContext = /* @__PURE__ */ React48.createContext(void 0);
var ButtonGroup = (props) => {
  const { getPrefixCls, direction } = React48.useContext(ConfigContext);
  const { prefixCls: customizePrefixCls, size, className } = props,
    others = __rest4(props, ["prefixCls", "size", "className"]);
  const prefixCls = getPrefixCls("btn-group", customizePrefixCls);
  const [, , hashId] = useToken();
  let sizeCls = "";
  switch (size) {
    case "large":
      sizeCls = "lg";
      break;
    case "small":
      sizeCls = "sm";
      break;
    case "middle":
    default:
  }
  if (true) {
    const warning4 = devUseWarning("Button.Group");
    true
      ? warning4(
          !size || ["large", "small", "middle"].includes(size),
          "usage",
          "Invalid prop `size`.",
        )
      : void 0;
  }
  const classes = (0, import_classnames6.default)(
    prefixCls,
    {
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-rtl`]: direction === "rtl",
    },
    className,
    hashId,
  );
  return /* @__PURE__ */ React48.createElement(
    GroupSizeContext.Provider,
    {
      value: size,
    },
    /* @__PURE__ */ React48.createElement(
      "div",
      Object.assign({}, others, {
        className: classes,
      }),
    ),
  );
};
var button_group_default = ButtonGroup;

// ../node_modules/antd/es/button/buttonHelpers.js
import React49 from "react";
("use client");
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === "string";
}
function isUnBorderedButtonType(type) {
  return type === "text" || type === "link";
}
function splitCNCharsBySpace(child, needInserted) {
  if (child === null || child === void 0) {
    return;
  }
  const SPACE = needInserted ? " " : "";
  if (
    typeof child !== "string" &&
    typeof child !== "number" &&
    isString(child.type) &&
    isTwoCNChar(child.props.children)
  ) {
    return cloneElement4(child, {
      children: child.props.children.split("").join(SPACE),
    });
  }
  if (isString(child)) {
    return isTwoCNChar(child)
      ? /* @__PURE__ */ React49.createElement(
          "span",
          null,
          child.split("").join(SPACE),
        )
      : /* @__PURE__ */ React49.createElement("span", null, child);
  }
  if (isFragment3(child)) {
    return /* @__PURE__ */ React49.createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  let isPrevChildPure = false;
  const childList = [];
  React49.Children.forEach(children, (child) => {
    const type = typeof child;
    const isCurrentChildPure = type === "string" || type === "number";
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return React49.Children.map(childList, (child) =>
    splitCNCharsBySpace(child, needInserted),
  );
}

// ../node_modules/antd/es/button/IconWrapper.js
var import_classnames7 = __toESM(require_classnames());
import React50, { forwardRef as forwardRef6 } from "react";
("use client");
var IconWrapper = /* @__PURE__ */ forwardRef6((props, ref) => {
  const { className, style: style2, children, prefixCls } = props;
  const iconWrapperCls = (0, import_classnames7.default)(
    `${prefixCls}-icon`,
    className,
  );
  return /* @__PURE__ */ React50.createElement(
    "span",
    {
      ref,
      className: iconWrapperCls,
      style: style2,
    },
    children,
  );
});
var IconWrapper_default = IconWrapper;

// ../node_modules/antd/es/button/LoadingIcon.js
var import_classnames8 = __toESM(require_classnames());
import React51, { forwardRef as forwardRef7 } from "react";
("use client");
var InnerLoadingIcon = /* @__PURE__ */ forwardRef7((_ref, ref) => {
  let { prefixCls, className, style: style2, iconClassName } = _ref;
  const mergedIconCls = (0, import_classnames8.default)(
    `${prefixCls}-loading-icon`,
    className,
  );
  return /* @__PURE__ */ React51.createElement(
    IconWrapper_default,
    {
      prefixCls,
      className: mergedIconCls,
      style: style2,
      ref,
    },
    /* @__PURE__ */ React51.createElement(LoadingOutlined_default2, {
      className: iconClassName,
    }),
  );
});
var getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)",
});
var getRealWidth = (node2) => ({
  width: node2.scrollWidth,
  opacity: 1,
  transform: "scale(1)",
});
var LoadingIcon = (props) => {
  const { prefixCls, loading, existIcon, className, style: style2 } = props;
  const visible = !!loading;
  if (existIcon) {
    return /* @__PURE__ */ React51.createElement(InnerLoadingIcon, {
      prefixCls,
      className,
      style: style2,
    });
  }
  return /* @__PURE__ */ React51.createElement(
    es_default2,
    {
      visible,
      // We do not really use this motionName
      motionName: `${prefixCls}-loading-icon-motion`,
      motionLeave: visible,
      removeOnLeave: true,
      onAppearStart: getCollapsedWidth,
      onAppearActive: getRealWidth,
      onEnterStart: getCollapsedWidth,
      onEnterActive: getRealWidth,
      onLeaveStart: getRealWidth,
      onLeaveActive: getCollapsedWidth,
    },
    (_ref2, ref) => {
      let { className: motionCls, style: motionStyle } = _ref2;
      return /* @__PURE__ */ React51.createElement(InnerLoadingIcon, {
        prefixCls,
        className,
        style: Object.assign(Object.assign({}, style2), motionStyle),
        ref,
        iconClassName: motionCls,
      });
    },
  );
};
var LoadingIcon_default = LoadingIcon;

// ../node_modules/antd/es/button/style/group.js
var genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    "&:not(:last-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: borderColor,
        },
      },
    },
    "&:not(:first-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: borderColor,
        },
      },
    },
  },
});
var genGroupStyle = (token2) => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    groupBorderColor,
    colorErrorHover,
  } = token2;
  return {
    [`${componentCls}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${componentCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${componentCls}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
            },
          },
          "&:not(:first-child)": {
            marginInlineStart: token2.calc(lineWidth).mul(-1).equal(),
            [`&, & > ${componentCls}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0,
            },
          },
        },
        [componentCls]: {
          position: "relative",
          zIndex: 1,
          [`&:hover,
          &:focus,
          &:active`]: {
            zIndex: 2,
          },
          "&[disabled]": {
            zIndex: 0,
          },
        },
        [`${componentCls}-icon-only`]: {
          fontSize,
        },
      },
      // Border Color
      genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor),
      genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover),
    ],
  };
};
var group_default = genGroupStyle;

// ../node_modules/antd/es/button/style/token.js
var prepareToken = (token2) => {
  const { paddingInline, onlyIconSize, paddingBlock } = token2;
  const buttonToken = merge2(token2, {
    buttonPaddingHorizontal: paddingInline,
    buttonPaddingVertical: paddingBlock,
    buttonIconOnlyFontSize: onlyIconSize,
  });
  return buttonToken;
};
var prepareComponentToken = (token2) => {
  var _a, _b, _c, _d, _e, _f;
  const contentFontSize =
    (_a = token2.contentFontSize) !== null && _a !== void 0
      ? _a
      : token2.fontSize;
  const contentFontSizeSM =
    (_b = token2.contentFontSizeSM) !== null && _b !== void 0
      ? _b
      : token2.fontSize;
  const contentFontSizeLG =
    (_c = token2.contentFontSizeLG) !== null && _c !== void 0
      ? _c
      : token2.fontSizeLG;
  const contentLineHeight =
    (_d = token2.contentLineHeight) !== null && _d !== void 0
      ? _d
      : getLineHeight(contentFontSize);
  const contentLineHeightSM =
    (_e = token2.contentLineHeightSM) !== null && _e !== void 0
      ? _e
      : getLineHeight(contentFontSizeSM);
  const contentLineHeightLG =
    (_f = token2.contentLineHeightLG) !== null && _f !== void 0
      ? _f
      : getLineHeight(contentFontSizeLG);
  return {
    fontWeight: 400,
    defaultShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlTmpOutline}`,
    primaryShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlOutline}`,
    dangerShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.colorErrorOutline}`,
    primaryColor: token2.colorTextLightSolid,
    dangerColor: token2.colorTextLightSolid,
    borderColorDisabled: token2.colorBorder,
    defaultGhostColor: token2.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: token2.colorBgContainer,
    paddingInline: token2.paddingContentHorizontal - token2.lineWidth,
    paddingInlineLG: token2.paddingContentHorizontal - token2.lineWidth,
    paddingInlineSM: 8 - token2.lineWidth,
    onlyIconSize: token2.fontSizeLG,
    onlyIconSizeSM: token2.fontSizeLG - 2,
    onlyIconSizeLG: token2.fontSizeLG + 2,
    groupBorderColor: token2.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: token2.colorBgTextHover,
    defaultColor: token2.colorText,
    defaultBg: token2.colorBgContainer,
    defaultBorderColor: token2.colorBorder,
    defaultBorderColorDisabled: token2.colorBorder,
    defaultHoverBg: token2.colorBgContainer,
    defaultHoverColor: token2.colorPrimaryHover,
    defaultHoverBorderColor: token2.colorPrimaryHover,
    defaultActiveBg: token2.colorBgContainer,
    defaultActiveColor: token2.colorPrimaryActive,
    defaultActiveBorderColor: token2.colorPrimaryActive,
    contentFontSize,
    contentFontSizeSM,
    contentFontSizeLG,
    contentLineHeight,
    contentLineHeightSM,
    contentLineHeightLG,
    paddingBlock: Math.max(
      (token2.controlHeight - contentFontSize * contentLineHeight) / 2 -
        token2.lineWidth,
      0,
    ),
    paddingBlockSM: Math.max(
      (token2.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 -
        token2.lineWidth,
      0,
    ),
    paddingBlockLG: Math.max(
      (token2.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 -
        token2.lineWidth,
      0,
    ),
  };
};

// ../node_modules/antd/es/button/style/index.js
var genSharedButtonStyle = (token2) => {
  const { componentCls, iconCls, fontWeight } = token2;
  return {
    [componentCls]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${unit(token2.lineWidth)} ${token2.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: token2.colorText,
      "&:disabled > *": {
        pointerEvents: "none",
      },
      "> span": {
        display: "inline-block",
      },
      [`${componentCls}-icon`]: {
        lineHeight: 0,
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token2.marginXS,
      },
      [`&:not(${componentCls}-icon-only) > ${componentCls}-icon`]: {
        [`&${componentCls}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: token2.marginXS,
        },
      },
      "> a": {
        color: "currentColor",
      },
      "&:not(:disabled)": Object.assign({}, genFocusStyle(token2)),
      [`&${componentCls}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em",
      },
      [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em",
      },
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: "none",
      },
    },
  };
};
var genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
  [`&:not(:disabled):not(${btnCls}-disabled)`]: {
    "&:hover": hoverStyle,
    "&:active": activeStyle,
  },
});
var genCircleButtonStyle = (token2) => ({
  minWidth: token2.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%",
});
var genRoundButtonStyle = (token2) => ({
  borderRadius: token2.controlHeight,
  paddingInlineStart: token2.calc(token2.controlHeight).div(2).equal(),
  paddingInlineEnd: token2.calc(token2.controlHeight).div(2).equal(),
});
var genDisabledStyle = (token2) => ({
  cursor: "not-allowed",
  borderColor: token2.borderColorDisabled,
  color: token2.colorTextDisabled,
  background: token2.colorBgContainerDisabled,
  boxShadow: "none",
});
var genGhostButtonStyle = (
  btnCls,
  background,
  textColor,
  borderColor,
  textColorDisabled,
  borderColorDisabled,
  hoverStyle,
  activeStyle,
) => ({
  [`&${btnCls}-background-ghost`]: Object.assign(
    Object.assign(
      {
        color: textColor || void 0,
        background,
        borderColor: borderColor || void 0,
        boxShadow: "none",
      },
      genHoverActiveButtonStyle(
        btnCls,
        Object.assign(
          {
            background,
          },
          hoverStyle,
        ),
        Object.assign(
          {
            background,
          },
          activeStyle,
        ),
      ),
    ),
    {
      "&:disabled": {
        cursor: "not-allowed",
        color: textColorDisabled || void 0,
        borderColor: borderColorDisabled || void 0,
      },
    },
  ),
});
var genSolidDisabledButtonStyle = (token2) => ({
  [`&:disabled, &${token2.componentCls}-disabled`]: Object.assign(
    {},
    genDisabledStyle(token2),
  ),
});
var genSolidButtonStyle = (token2) =>
  Object.assign({}, genSolidDisabledButtonStyle(token2));
var genPureDisabledButtonStyle = (token2) => ({
  [`&:disabled, &${token2.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: token2.colorTextDisabled,
  },
});
var genDefaultButtonStyle = (token2) =>
  Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(Object.assign({}, genSolidButtonStyle(token2)), {
          background: token2.defaultBg,
          borderColor: token2.defaultBorderColor,
          color: token2.defaultColor,
          boxShadow: token2.defaultShadow,
        }),
        genHoverActiveButtonStyle(
          token2.componentCls,
          {
            color: token2.defaultHoverColor,
            borderColor: token2.defaultHoverBorderColor,
            background: token2.defaultHoverBg,
          },
          {
            color: token2.defaultActiveColor,
            borderColor: token2.defaultActiveBorderColor,
            background: token2.defaultActiveBg,
          },
        ),
      ),
      genGhostButtonStyle(
        token2.componentCls,
        token2.ghostBg,
        token2.defaultGhostColor,
        token2.defaultGhostBorderColor,
        token2.colorTextDisabled,
        token2.colorBorder,
      ),
    ),
    {
      [`&${token2.componentCls}-dangerous`]: Object.assign(
        Object.assign(
          Object.assign(
            {
              color: token2.colorError,
              borderColor: token2.colorError,
            },
            genHoverActiveButtonStyle(
              token2.componentCls,
              {
                color: token2.colorErrorHover,
                borderColor: token2.colorErrorBorderHover,
              },
              {
                color: token2.colorErrorActive,
                borderColor: token2.colorErrorActive,
              },
            ),
          ),
          genGhostButtonStyle(
            token2.componentCls,
            token2.ghostBg,
            token2.colorError,
            token2.colorError,
            token2.colorTextDisabled,
            token2.colorBorder,
          ),
        ),
        genSolidDisabledButtonStyle(token2),
      ),
    },
  );
var genPrimaryButtonStyle = (token2) =>
  Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(Object.assign({}, genSolidButtonStyle(token2)), {
          color: token2.primaryColor,
          background: token2.colorPrimary,
          boxShadow: token2.primaryShadow,
        }),
        genHoverActiveButtonStyle(
          token2.componentCls,
          {
            color: token2.colorTextLightSolid,
            background: token2.colorPrimaryHover,
          },
          {
            color: token2.colorTextLightSolid,
            background: token2.colorPrimaryActive,
          },
        ),
      ),
      genGhostButtonStyle(
        token2.componentCls,
        token2.ghostBg,
        token2.colorPrimary,
        token2.colorPrimary,
        token2.colorTextDisabled,
        token2.colorBorder,
        {
          color: token2.colorPrimaryHover,
          borderColor: token2.colorPrimaryHover,
        },
        {
          color: token2.colorPrimaryActive,
          borderColor: token2.colorPrimaryActive,
        },
      ),
    ),
    {
      [`&${token2.componentCls}-dangerous`]: Object.assign(
        Object.assign(
          Object.assign(
            {
              background: token2.colorError,
              boxShadow: token2.dangerShadow,
              color: token2.dangerColor,
            },
            genHoverActiveButtonStyle(
              token2.componentCls,
              {
                background: token2.colorErrorHover,
              },
              {
                background: token2.colorErrorActive,
              },
            ),
          ),
          genGhostButtonStyle(
            token2.componentCls,
            token2.ghostBg,
            token2.colorError,
            token2.colorError,
            token2.colorTextDisabled,
            token2.colorBorder,
            {
              color: token2.colorErrorHover,
              borderColor: token2.colorErrorHover,
            },
            {
              color: token2.colorErrorActive,
              borderColor: token2.colorErrorActive,
            },
          ),
        ),
        genSolidDisabledButtonStyle(token2),
      ),
    },
  );
var genDashedButtonStyle = (token2) =>
  Object.assign(Object.assign({}, genDefaultButtonStyle(token2)), {
    borderStyle: "dashed",
  });
var genLinkButtonStyle = (token2) =>
  Object.assign(
    Object.assign(
      Object.assign(
        {
          color: token2.colorLink,
        },
        genHoverActiveButtonStyle(
          token2.componentCls,
          {
            color: token2.colorLinkHover,
            background: token2.linkHoverBg,
          },
          {
            color: token2.colorLinkActive,
          },
        ),
      ),
      genPureDisabledButtonStyle(token2),
    ),
    {
      [`&${token2.componentCls}-dangerous`]: Object.assign(
        Object.assign(
          {
            color: token2.colorError,
          },
          genHoverActiveButtonStyle(
            token2.componentCls,
            {
              color: token2.colorErrorHover,
            },
            {
              color: token2.colorErrorActive,
            },
          ),
        ),
        genPureDisabledButtonStyle(token2),
      ),
    },
  );
var genTextButtonStyle = (token2) =>
  Object.assign(
    Object.assign(
      Object.assign(
        {},
        genHoverActiveButtonStyle(
          token2.componentCls,
          {
            color: token2.colorText,
            background: token2.textHoverBg,
          },
          {
            color: token2.colorText,
            background: token2.colorBgTextActive,
          },
        ),
      ),
      genPureDisabledButtonStyle(token2),
    ),
    {
      [`&${token2.componentCls}-dangerous`]: Object.assign(
        Object.assign(
          {
            color: token2.colorError,
          },
          genPureDisabledButtonStyle(token2),
        ),
        genHoverActiveButtonStyle(
          token2.componentCls,
          {
            color: token2.colorErrorHover,
            background: token2.colorErrorBg,
          },
          {
            color: token2.colorErrorHover,
            background: token2.colorErrorBg,
          },
        ),
      ),
    },
  );
var genTypeButtonStyle = (token2) => {
  const { componentCls } = token2;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token2),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token2),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token2),
    [`${componentCls}-link`]: genLinkButtonStyle(token2),
    [`${componentCls}-text`]: genTextButtonStyle(token2),
    [`${componentCls}-ghost`]: genGhostButtonStyle(
      token2.componentCls,
      token2.ghostBg,
      token2.colorBgContainer,
      token2.colorBgContainer,
      token2.colorTextDisabled,
      token2.colorBorder,
    ),
  };
};
var genButtonStyle = function (token2) {
  let prefixCls =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls,
    controlHeight,
    fontSize,
    lineHeight,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls,
    buttonPaddingVertical,
  } = token2;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
    {
      [`${prefixCls}`]: {
        fontSize,
        lineHeight,
        height: controlHeight,
        padding: `${unit(buttonPaddingVertical)} ${unit(
          buttonPaddingHorizontal,
        )}`,
        borderRadius,
        [`&${iconOnlyCls}`]: {
          width: controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${componentCls}-round`]: {
            width: "auto",
          },
          [iconCls]: {
            fontSize: token2.buttonIconOnlyFontSize,
          },
        },
        // Loading
        [`&${componentCls}-loading`]: {
          opacity: token2.opacityLoading,
          cursor: "default",
        },
        [`${componentCls}-loading-icon`]: {
          transition: `width ${token2.motionDurationSlow} ${token2.motionEaseInOut}, opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`,
        },
      },
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${prefixCls}`]:
        genCircleButtonStyle(token2),
    },
    {
      [`${componentCls}${componentCls}-round${prefixCls}`]:
        genRoundButtonStyle(token2),
    },
  ];
};
var genSizeBaseButtonStyle = (token2) => {
  const baseToken = merge2(token2, {
    fontSize: token2.contentFontSize,
    lineHeight: token2.contentLineHeight,
  });
  return genButtonStyle(baseToken, token2.componentCls);
};
var genSizeSmallButtonStyle = (token2) => {
  const smallToken = merge2(token2, {
    controlHeight: token2.controlHeightSM,
    fontSize: token2.contentFontSizeSM,
    lineHeight: token2.contentLineHeightSM,
    padding: token2.paddingXS,
    buttonPaddingHorizontal: token2.paddingInlineSM,
    buttonPaddingVertical: token2.paddingBlockSM,
    borderRadius: token2.borderRadiusSM,
    buttonIconOnlyFontSize: token2.onlyIconSizeSM,
  });
  return genButtonStyle(smallToken, `${token2.componentCls}-sm`);
};
var genSizeLargeButtonStyle = (token2) => {
  const largeToken = merge2(token2, {
    controlHeight: token2.controlHeightLG,
    fontSize: token2.contentFontSizeLG,
    lineHeight: token2.contentLineHeightLG,
    buttonPaddingHorizontal: token2.paddingInlineLG,
    buttonPaddingVertical: token2.paddingBlockLG,
    borderRadius: token2.borderRadiusLG,
    buttonIconOnlyFontSize: token2.onlyIconSizeLG,
  });
  return genButtonStyle(largeToken, `${token2.componentCls}-lg`);
};
var genBlockButtonStyle = (token2) => {
  const { componentCls } = token2;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: "100%",
      },
    },
  };
};
var style_default2 = genStyleHooks(
  "Button",
  (token2) => {
    const buttonToken = prepareToken(token2);
    return [
      // Shared
      genSharedButtonStyle(buttonToken),
      // Size
      genSizeBaseButtonStyle(buttonToken),
      genSizeSmallButtonStyle(buttonToken),
      genSizeLargeButtonStyle(buttonToken),
      // Block
      genBlockButtonStyle(buttonToken),
      // Group (type, ghost, danger, loading)
      genTypeButtonStyle(buttonToken),
      // Button Group
      group_default(buttonToken),
    ];
  },
  prepareComponentToken,
  {
    unitless: {
      fontWeight: true,
      contentLineHeight: true,
      contentLineHeightSM: true,
      contentLineHeightLG: true,
    },
  },
);

// ../node_modules/antd/es/style/compact-item.js
function compactItemBorder(token2, parentCls, options) {
  const { focusElCls, focus, borderElCls } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"]
    .filter(Boolean)
    .map((n) => `&:${n} ${childCombinator}`)
    .join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal(),
    },
    "&-item": Object.assign(
      Object.assign(
        {
          [hoverEffects]: {
            zIndex: 2,
          },
        },
        focusElCls
          ? {
              [`&${focusElCls}`]: {
                zIndex: 2,
              },
            }
          : {},
      ),
      {
        [`&[disabled] ${childCombinator}`]: {
          zIndex: 0,
        },
      },
    ),
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const { borderElCls } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]:
      {
        borderRadius: 0,
      },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]:
        {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]:
        {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
    },
  };
}
function genCompactItemStyle(token2) {
  let options =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : {
          focus: true,
        };
  const { componentCls } = token2;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: Object.assign(
      Object.assign({}, compactItemBorder(token2, compactCls, options)),
      compactItemBorderRadius(componentCls, compactCls, options),
    ),
  };
}

// ../node_modules/antd/es/style/compact-item-vertical.js
function compactItemVerticalBorder(token2, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: token2.calc(token2.lineWidth).mul(-1).equal(),
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2,
      },
      "&[disabled]": {
        zIndex: 0,
      },
    },
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0,
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  };
}
function genCompactItemVerticalStyle(token2) {
  const compactCls = `${token2.componentCls}-compact-vertical`;
  return {
    [compactCls]: Object.assign(
      Object.assign({}, compactItemVerticalBorder(token2, compactCls)),
      compactItemBorderVerticalRadius(token2.componentCls, compactCls),
    ),
  };
}

// ../node_modules/antd/es/button/style/compactCmp.js
var genButtonCompactStyle = (token2) => {
  const { componentCls, calc } = token2;
  return {
    [componentCls]: {
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]:
          {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: calc(token2.lineWidth).mul(-1).equal(),
              insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: token2.lineWidth,
              height: `calc(100% + ${unit(token2.lineWidth)} * 2)`,
              backgroundColor: token2.colorPrimaryHover,
              content: '""',
            },
          },
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]:
            {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: calc(token2.lineWidth).mul(-1).equal(),
                insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
                display: "inline-block",
                width: `calc(100% + ${unit(token2.lineWidth)} * 2)`,
                height: token2.lineWidth,
                backgroundColor: token2.colorPrimaryHover,
                content: '""',
              },
            },
        },
      },
    },
  };
};
var compactCmp_default = genSubStyleComponent(
  ["Button", "compact"],
  (token2) => {
    const buttonToken = prepareToken(token2);
    return [
      // Space Compact
      genCompactItemStyle(buttonToken),
      genCompactItemVerticalStyle(buttonToken),
      genButtonCompactStyle(buttonToken),
    ];
  },
  prepareComponentToken,
);

// ../node_modules/antd/es/button/button.js
("use client");
var __rest5 = function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
};
function getLoadingConfig(loading) {
  if (typeof loading === "object" && loading) {
    let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
    delay = !Number.isNaN(delay) && typeof delay === "number" ? delay : 0;
    return {
      loading: delay <= 0,
      delay,
    };
  }
  return {
    loading: !!loading,
    delay: 0,
  };
}
var InternalButton = (props, ref) => {
  var _a, _b;
  const {
      loading = false,
      prefixCls: customizePrefixCls,
      type = "default",
      danger,
      shape = "default",
      size: customizeSize,
      styles,
      disabled: customDisabled,
      className,
      rootClassName,
      children,
      icon,
      ghost = false,
      block = false,
      // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
      htmlType = "button",
      classNames: customClassNames,
      style: customStyle = {},
    } = props,
    rest = __rest5(props, [
      "loading",
      "prefixCls",
      "type",
      "danger",
      "shape",
      "size",
      "styles",
      "disabled",
      "className",
      "rootClassName",
      "children",
      "icon",
      "ghost",
      "block",
      "htmlType",
      "classNames",
      "style",
    ]);
  const { getPrefixCls, autoInsertSpaceInButton, direction, button } =
    useContext21(ConfigContext);
  const prefixCls = getPrefixCls("btn", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default2(prefixCls);
  const disabled = useContext21(DisabledContext_default);
  const mergedDisabled =
    customDisabled !== null && customDisabled !== void 0
      ? customDisabled
      : disabled;
  const groupSize = useContext21(GroupSizeContext);
  const loadingOrDelay = useMemo8(() => getLoadingConfig(loading), [loading]);
  const [innerLoading, setLoading] = useState3(loadingOrDelay.loading);
  const [hasTwoCNChar, setHasTwoCNChar] = useState3(false);
  const internalRef = /* @__PURE__ */ createRef();
  const buttonRef = composeRef(ref, internalRef);
  const needInserted =
    Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type);
  useEffect13(() => {
    let delayTimer = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }
    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }
    return cleanupTimer;
  }, [loadingOrDelay]);
  useEffect13(() => {
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }
    const buttonText = buttonRef.current.textContent;
    if (needInserted && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }, [buttonRef]);
  const handleClick = (e) => {
    const { onClick } = props;
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  if (true) {
    const warning4 = devUseWarning("Button");
    true
      ? warning4(
          !(typeof icon === "string" && icon.length > 2),
          "breaking",
          `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`,
        )
      : void 0;
    true
      ? warning4(
          !(ghost && isUnBorderedButtonType(type)),
          "usage",
          "`link` or `text` button can't be a `ghost` button.",
        )
      : void 0;
  }
  const autoInsertSpace = autoInsertSpaceInButton !== false;
  const { compactSize, compactItemClassnames } = useCompactItemContext(
    prefixCls,
    direction,
  );
  const sizeClassNameMap = {
    large: "lg",
    small: "sm",
    middle: void 0,
  };
  const sizeFullName = useSize_default((ctxSize) => {
    var _a2, _b2;
    return (_b2 =
      (_a2 =
        customizeSize !== null && customizeSize !== void 0
          ? customizeSize
          : compactSize) !== null && _a2 !== void 0
        ? _a2
        : groupSize) !== null && _b2 !== void 0
      ? _b2
      : ctxSize;
  });
  const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || "" : "";
  const iconType = innerLoading ? "loading" : icon;
  const linkButtonRestProps = omit(rest, ["navigate"]);
  const classes = (0, import_classnames9.default)(
    prefixCls,
    hashId,
    cssVarCls,
    {
      [`${prefixCls}-${shape}`]: shape !== "default" && shape,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
      [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
      [`${prefixCls}-loading`]: innerLoading,
      [`${prefixCls}-two-chinese-chars`]:
        hasTwoCNChar && autoInsertSpace && !innerLoading,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-dangerous`]: !!danger,
      [`${prefixCls}-rtl`]: direction === "rtl",
    },
    compactItemClassnames,
    className,
    rootClassName,
    button === null || button === void 0 ? void 0 : button.className,
  );
  const fullStyle = Object.assign(
    Object.assign(
      {},
      button === null || button === void 0 ? void 0 : button.style,
    ),
    customStyle,
  );
  const iconClasses = (0, import_classnames9.default)(
    customClassNames === null || customClassNames === void 0
      ? void 0
      : customClassNames.icon,
    (_a = button === null || button === void 0 ? void 0 : button.classNames) ===
      null || _a === void 0
      ? void 0
      : _a.icon,
  );
  const iconStyle = Object.assign(
    Object.assign(
      {},
      (styles === null || styles === void 0 ? void 0 : styles.icon) || {},
    ),
    ((_b = button === null || button === void 0 ? void 0 : button.styles) ===
      null || _b === void 0
      ? void 0
      : _b.icon) || {},
  );
  const iconNode =
    icon && !innerLoading
      ? /* @__PURE__ */ React52.createElement(
          IconWrapper_default,
          {
            prefixCls,
            className: iconClasses,
            style: iconStyle,
          },
          icon,
        )
      : /* @__PURE__ */ React52.createElement(LoadingIcon_default, {
          existIcon: !!icon,
          prefixCls,
          loading: !!innerLoading,
        });
  const kids =
    children || children === 0
      ? spaceChildren(children, needInserted && autoInsertSpace)
      : null;
  if (linkButtonRestProps.href !== void 0) {
    return wrapCSSVar(
      /* @__PURE__ */ React52.createElement(
        "a",
        Object.assign({}, linkButtonRestProps, {
          className: (0, import_classnames9.default)(classes, {
            [`${prefixCls}-disabled`]: mergedDisabled,
          }),
          href: mergedDisabled ? void 0 : linkButtonRestProps.href,
          style: fullStyle,
          onClick: handleClick,
          ref: buttonRef,
          tabIndex: mergedDisabled ? -1 : 0,
        }),
        iconNode,
        kids,
      ),
    );
  }
  let buttonNode = /* @__PURE__ */ React52.createElement(
    "button",
    Object.assign({}, rest, {
      type: htmlType,
      className: classes,
      style: fullStyle,
      onClick: handleClick,
      disabled: mergedDisabled,
      ref: buttonRef,
    }),
    iconNode,
    kids,
    !!compactItemClassnames &&
      /* @__PURE__ */ React52.createElement(compactCmp_default, {
        key: "compact",
        prefixCls,
      }),
  );
  if (!isUnBorderedButtonType(type)) {
    buttonNode = /* @__PURE__ */ React52.createElement(
      wave_default,
      {
        component: "Button",
        disabled: !!innerLoading,
      },
      buttonNode,
    );
  }
  return wrapCSSVar(buttonNode);
};
var Button = /* @__PURE__ */ forwardRef8(InternalButton);
if (true) {
  Button.displayName = "Button";
}
Button.Group = button_group_default;
Button.__ANT_BUTTON = true;
var button_default = Button;

// ../node_modules/antd/es/button/index.js
("use client");
var button_default2 = button_default;

// ../node_modules/@rc-component/portal/es/Portal.js
import * as React56 from "react";
import { createPortal } from "react-dom";

// ../node_modules/@rc-component/portal/es/Context.js
import * as React53 from "react";
var OrderContext = /* @__PURE__ */ React53.createContext(null);
var Context_default2 = OrderContext;

// ../node_modules/@rc-component/portal/es/useDom.js
import * as React54 from "react";
var EMPTY_LIST = [];
function useDom(render2, debug) {
  var _React$useState = React54.useState(function () {
      if (!canUseDom()) {
        return null;
      }
      var defaultEle = document.createElement("div");
      if (debug) {
        defaultEle.setAttribute("data-debug", debug);
      }
      return defaultEle;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 1),
    ele = _React$useState2[0];
  var appendedRef = React54.useRef(false);
  var queueCreate = React54.useContext(Context_default2);
  var _React$useState3 = React54.useState(EMPTY_LIST),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    queue = _React$useState4[0],
    setQueue = _React$useState4[1];
  var mergedQueueCreate =
    queueCreate ||
    (appendedRef.current
      ? void 0
      : function (appendFn) {
          setQueue(function (origin) {
            var newQueue = [appendFn].concat(_toConsumableArray(origin));
            return newQueue;
          });
        });
  function append2() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup2() {
    var _ele$parentElement;
    (_ele$parentElement = ele.parentElement) === null ||
    _ele$parentElement === void 0
      ? void 0
      : _ele$parentElement.removeChild(ele);
    appendedRef.current = false;
  }
  useLayoutEffect_default(
    function () {
      if (render2) {
        if (queueCreate) {
          queueCreate(append2);
        } else {
          append2();
        }
      } else {
        cleanup2();
      }
      return cleanup2;
    },
    [render2],
  );
  useLayoutEffect_default(
    function () {
      if (queue.length) {
        queue.forEach(function (appendFn) {
          return appendFn();
        });
        setQueue(EMPTY_LIST);
      }
    },
    [queue],
  );
  return [ele, mergedQueueCreate];
}

// ../node_modules/@rc-component/portal/es/useScrollLocker.js
import * as React55 from "react";

// ../node_modules/rc-util/es/getScrollBarSize.js
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === "undefined") {
    return 0;
  }
  if (fresh || cached === void 0) {
    var inner = document.createElement("div");
    inner.style.width = "100%";
    inner.style.height = "200px";
    var outer = document.createElement("div");
    var outerStyle = outer.style;
    outerStyle.position = "absolute";
    outerStyle.top = "0";
    outerStyle.left = "0";
    outerStyle.pointerEvents = "none";
    outerStyle.visibility = "hidden";
    outerStyle.width = "200px";
    outerStyle.height = "150px";
    outerStyle.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = "scroll";
    var widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}
function getTargetScrollBarSize(target) {
  if (
    typeof document === "undefined" ||
    !target ||
    !(target instanceof Element)
  ) {
    return {
      width: 0,
      height: 0,
    };
  }
  var _getComputedStyle = getComputedStyle(target, "::-webkit-scrollbar"),
    width = _getComputedStyle.width,
    height = _getComputedStyle.height;
  return {
    width: ensureSize(width),
    height: ensureSize(height),
  };
}

// ../node_modules/@rc-component/portal/es/util.js
function isBodyOverflowing() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}

// ../node_modules/@rc-component/portal/es/useScrollLocker.js
var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
var uuid2 = 0;
function useScrollLocker(lock) {
  var mergedLock = !!lock;
  var _React$useState = React55.useState(function () {
      uuid2 += 1;
      return "".concat(UNIQUE_ID, "_").concat(uuid2);
    }),
    _React$useState2 = _slicedToArray(_React$useState, 1),
    id = _React$useState2[0];
  useLayoutEffect_default(
    function () {
      if (mergedLock) {
        var scrollbarSize = getTargetScrollBarSize(document.body).width;
        var isOverflow = isBodyOverflowing();
        updateCSS(
          "\nhtml body {\n  overflow-y: hidden;\n  ".concat(
            isOverflow
              ? "width: calc(100% - ".concat(scrollbarSize, "px);")
              : "",
            "\n}",
          ),
          id,
        );
      } else {
        removeCSS(id);
      }
      return function () {
        removeCSS(id);
      };
    },
    [mergedLock, id],
  );
}

// ../node_modules/@rc-component/portal/es/mock.js
var inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === "boolean") {
    inline = nextInline;
  }
  return inline;
}

// ../node_modules/@rc-component/portal/es/Portal.js
var getPortalContainer = function getPortalContainer2(getContainer2) {
  if (getContainer2 === false) {
    return false;
  }
  if (!canUseDom() || !getContainer2) {
    return null;
  }
  if (typeof getContainer2 === "string") {
    return document.querySelector(getContainer2);
  }
  if (typeof getContainer2 === "function") {
    return getContainer2();
  }
  return getContainer2;
};
var Portal = /* @__PURE__ */ React56.forwardRef(function (props, ref) {
  var open = props.open,
    autoLock = props.autoLock,
    getContainer2 = props.getContainer,
    debug = props.debug,
    _props$autoDestroy = props.autoDestroy,
    autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy,
    children = props.children;
  var _React$useState = React56.useState(open),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    shouldRender = _React$useState2[0],
    setShouldRender = _React$useState2[1];
  var mergedRender = shouldRender || open;
  if (true) {
    warning_default(
      canUseDom() || !open,
      "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR.",
    );
  }
  React56.useEffect(
    function () {
      if (autoDestroy || open) {
        setShouldRender(open);
      }
    },
    [open, autoDestroy],
  );
  var _React$useState3 = React56.useState(function () {
      return getPortalContainer(getContainer2);
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    innerContainer = _React$useState4[0],
    setInnerContainer = _React$useState4[1];
  React56.useEffect(function () {
    var customizeContainer = getPortalContainer(getContainer2);
    setInnerContainer(
      customizeContainer !== null && customizeContainer !== void 0
        ? customizeContainer
        : null,
    );
  });
  var _useDom = useDom(mergedRender && !innerContainer, debug),
    _useDom2 = _slicedToArray(_useDom, 2),
    defaultContainer = _useDom2[0],
    queueCreate = _useDom2[1];
  var mergedContainer =
    innerContainer !== null && innerContainer !== void 0
      ? innerContainer
      : defaultContainer;
  useScrollLocker(
    autoLock &&
      open &&
      canUseDom() &&
      (mergedContainer === defaultContainer ||
        mergedContainer === document.body),
  );
  var childRef = null;
  if (children && supportRef(children) && ref) {
    var _ref = children;
    childRef = _ref.ref;
  }
  var mergedRef = useComposeRef(childRef, ref);
  if (!mergedRender || !canUseDom() || innerContainer === void 0) {
    return null;
  }
  var renderInline = mergedContainer === false || inlineMock();
  var reffedChildren = children;
  if (ref) {
    reffedChildren = /* @__PURE__ */ React56.cloneElement(children, {
      ref: mergedRef,
    });
  }
  return /* @__PURE__ */ React56.createElement(
    Context_default2.Provider,
    {
      value: queueCreate,
    },
    renderInline
      ? reffedChildren
      : /* @__PURE__ */ createPortal(reffedChildren, mergedContainer),
  );
});
if (true) {
  Portal.displayName = "Portal";
}
var Portal_default = Portal;

// ../node_modules/@rc-component/portal/es/index.js
var es_default3 = Portal_default;

// ../node_modules/rc-util/es/hooks/useId.js
import * as React57 from "react";
function getUseId() {
  var fullClone5 = _objectSpread2({}, React57);
  return fullClone5.useId;
}
var uuid3 = 0;
var useOriginId = getUseId();
var useId_default = useOriginId
  ? // Use React `useId`
    function useId2(id) {
      var reactId = useOriginId();
      if (id) {
        return id;
      }
      if (false) {
        return "test-id";
      }
      return reactId;
    }
  : // Use compatible of `useId`
    function useCompatId(id) {
      var _React$useState = React57.useState("ssr-id"),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        innerId = _React$useState2[0],
        setInnerId = _React$useState2[1];
      React57.useEffect(function () {
        var nextId = uuid3;
        uuid3 += 1;
        setInnerId("rc_unique_".concat(nextId));
      }, []);
      if (id) {
        return id;
      }
      if (false) {
        return "test-id";
      }
      return innerId;
    };

// ../node_modules/antd/es/style/motion/motion.js
var initMotionCommon = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both",
});
var initMotionCommonLeave = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both",
});
var initMotion = function (motionCls, inKeyframes, outKeyframes, duration) {
  let sameLevel =
    arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: "paused",
    }),
    [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(
      Object.assign({}, initMotionCommonLeave(duration)),
      {
        animationPlayState: "paused",
      },
    ),
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: "running",
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: "running",
      pointerEvents: "none",
    },
  };
};

// ../node_modules/antd/es/style/motion/zoom.js
var zoomIn = new Keyframes_default("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0,
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1,
  },
});
var zoomOut = new Keyframes_default("antZoomOut", {
  "0%": {
    transform: "scale(1)",
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0,
  },
});
var zoomBigIn = new Keyframes_default("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0,
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1,
  },
});
var zoomBigOut = new Keyframes_default("antZoomBigOut", {
  "0%": {
    transform: "scale(1)",
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0,
  },
});
var zoomUpIn = new Keyframes_default("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0,
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%",
  },
});
var zoomUpOut = new Keyframes_default("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%",
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0,
  },
});
var zoomLeftIn = new Keyframes_default("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0,
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%",
  },
});
var zoomLeftOut = new Keyframes_default("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%",
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0,
  },
});
var zoomRightIn = new Keyframes_default("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0,
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%",
  },
});
var zoomRightOut = new Keyframes_default("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%",
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0,
  },
});
var zoomDownIn = new Keyframes_default("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0,
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%",
  },
});
var zoomDownOut = new Keyframes_default("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%",
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0,
  },
});
var zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut,
  },
  "zoom-big": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut,
  },
  "zoom-big-fast": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut,
  },
  "zoom-left": {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut,
  },
  "zoom-right": {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut,
  },
  "zoom-up": {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut,
  },
  "zoom-down": {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut,
  },
};
var initZoomMotion = (token2, motionName) => {
  const { antCls } = token2;
  const motionCls = `${antCls}-${motionName}`;
  const { inKeyframes, outKeyframes } = zoomMotion[motionName];
  return [
    initMotion(
      motionCls,
      inKeyframes,
      outKeyframes,
      motionName === "zoom-big-fast"
        ? token2.motionDurationFast
        : token2.motionDurationMid,
    ),
    {
      [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
        transform: "scale(0)",
        opacity: 0,
        animationTimingFunction: token2.motionEaseOutCirc,
        "&-prepare": {
          transform: "none",
        },
      },
      [`${motionCls}-leave`]: {
        animationTimingFunction: token2.motionEaseInOutCirc,
      },
    },
  ];
};

// ../node_modules/rc-util/es/isMobile.js
var isMobile_default = function () {
  if (typeof navigator === "undefined" || typeof window === "undefined") {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      agent,
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
      agent === null || agent === void 0 ? void 0 : agent.substr(0, 4),
    )
  );
};

// ../node_modules/@rc-component/trigger/es/index.js
var import_classnames13 = __toESM(require_classnames());
import * as React67 from "react";

// ../node_modules/@rc-component/trigger/es/Popup/index.js
var import_classnames12 = __toESM(require_classnames());
import * as React61 from "react";

// ../node_modules/@rc-component/trigger/es/Popup/Arrow.js
var import_classnames10 = __toESM(require_classnames());
import * as React58 from "react";
function Arrow(props) {
  var prefixCls = props.prefixCls,
    align = props.align,
    arrow = props.arrow,
    arrowPos = props.arrowPos;
  var _ref = arrow || {},
    className = _ref.className,
    content = _ref.content;
  var _arrowPos$x = arrowPos.x,
    x = _arrowPos$x === void 0 ? 0 : _arrowPos$x,
    _arrowPos$y = arrowPos.y,
    y = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
  var arrowRef = React58.useRef();
  if (!align || !align.points) {
    return null;
  }
  var alignStyle = {
    position: "absolute",
  };
  if (align.autoArrow !== false) {
    var popupPoints = align.points[0];
    var targetPoints = align.points[1];
    var popupTB = popupPoints[0];
    var popupLR = popupPoints[1];
    var targetTB = targetPoints[0];
    var targetLR = targetPoints[1];
    if (popupTB === targetTB || !["t", "b"].includes(popupTB)) {
      alignStyle.top = y;
    } else if (popupTB === "t") {
      alignStyle.top = 0;
    } else {
      alignStyle.bottom = 0;
    }
    if (popupLR === targetLR || !["l", "r"].includes(popupLR)) {
      alignStyle.left = x;
    } else if (popupLR === "l") {
      alignStyle.left = 0;
    } else {
      alignStyle.right = 0;
    }
  }
  return /* @__PURE__ */ React58.createElement(
    "div",
    {
      ref: arrowRef,
      className: (0, import_classnames10.default)(
        "".concat(prefixCls, "-arrow"),
        className,
      ),
      style: alignStyle,
    },
    content,
  );
}

// ../node_modules/@rc-component/trigger/es/Popup/Mask.js
var import_classnames11 = __toESM(require_classnames());
import * as React59 from "react";
function Mask(props) {
  var prefixCls = props.prefixCls,
    open = props.open,
    zIndex = props.zIndex,
    mask = props.mask,
    motion = props.motion;
  if (!mask) {
    return null;
  }
  return /* @__PURE__ */ React59.createElement(
    es_default2,
    _extends({}, motion, {
      motionAppear: true,
      visible: open,
      removeOnLeave: true,
    }),
    function (_ref) {
      var className = _ref.className;
      return /* @__PURE__ */ React59.createElement("div", {
        style: {
          zIndex,
        },
        className: (0, import_classnames11.default)(
          "".concat(prefixCls, "-mask"),
          className,
        ),
      });
    },
  );
}

// ../node_modules/@rc-component/trigger/es/Popup/PopupContent.js
import * as React60 from "react";
var PopupContent = /* @__PURE__ */ React60.memo(
  function (_ref) {
    var children = _ref.children;
    return children;
  },
  function (_, next2) {
    return next2.cache;
  },
);
if (true) {
  PopupContent.displayName = "PopupContent";
}
var PopupContent_default = PopupContent;

// ../node_modules/@rc-component/trigger/es/Popup/index.js
var Popup = /* @__PURE__ */ React61.forwardRef(function (props, ref) {
  var popup = props.popup,
    className = props.className,
    prefixCls = props.prefixCls,
    style2 = props.style,
    target = props.target,
    _onVisibleChanged = props.onVisibleChanged,
    open = props.open,
    keepDom = props.keepDom,
    fresh = props.fresh,
    onClick = props.onClick,
    mask = props.mask,
    arrow = props.arrow,
    arrowPos = props.arrowPos,
    align = props.align,
    motion = props.motion,
    maskMotion = props.maskMotion,
    forceRender = props.forceRender,
    getPopupContainer = props.getPopupContainer,
    autoDestroy = props.autoDestroy,
    Portal2 = props.portal,
    zIndex = props.zIndex,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onPointerEnter = props.onPointerEnter,
    ready = props.ready,
    offsetX = props.offsetX,
    offsetY = props.offsetY,
    offsetR = props.offsetR,
    offsetB = props.offsetB,
    onAlign = props.onAlign,
    onPrepare = props.onPrepare,
    stretch = props.stretch,
    targetWidth = props.targetWidth,
    targetHeight = props.targetHeight;
  var childNode = typeof popup === "function" ? popup() : popup;
  var isNodeVisible = open || keepDom;
  var getPopupContainerNeedParams =
    (getPopupContainer === null || getPopupContainer === void 0
      ? void 0
      : getPopupContainer.length) > 0;
  var _React$useState = React61.useState(
      !getPopupContainer || !getPopupContainerNeedParams,
    ),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];
  useLayoutEffect_default(
    function () {
      if (!show && getPopupContainerNeedParams && target) {
        setShow(true);
      }
    },
    [show, getPopupContainerNeedParams, target],
  );
  if (!show) {
    return null;
  }
  var AUTO = "auto";
  var offsetStyle = {
    left: "-1000vw",
    top: "-1000vh",
    right: AUTO,
    bottom: AUTO,
  };
  if (ready || !open) {
    var _experimental;
    var points = align.points;
    var dynamicInset =
      align.dynamicInset ||
      ((_experimental = align._experimental) === null ||
      _experimental === void 0
        ? void 0
        : _experimental.dynamicInset);
    var alignRight = dynamicInset && points[0][1] === "r";
    var alignBottom = dynamicInset && points[0][0] === "b";
    if (alignRight) {
      offsetStyle.right = offsetR;
      offsetStyle.left = AUTO;
    } else {
      offsetStyle.left = offsetX;
      offsetStyle.right = AUTO;
    }
    if (alignBottom) {
      offsetStyle.bottom = offsetB;
      offsetStyle.top = AUTO;
    } else {
      offsetStyle.top = offsetY;
      offsetStyle.bottom = AUTO;
    }
  }
  var miscStyle = {};
  if (stretch) {
    if (stretch.includes("height") && targetHeight) {
      miscStyle.height = targetHeight;
    } else if (stretch.includes("minHeight") && targetHeight) {
      miscStyle.minHeight = targetHeight;
    }
    if (stretch.includes("width") && targetWidth) {
      miscStyle.width = targetWidth;
    } else if (stretch.includes("minWidth") && targetWidth) {
      miscStyle.minWidth = targetWidth;
    }
  }
  if (!open) {
    miscStyle.pointerEvents = "none";
  }
  return /* @__PURE__ */ React61.createElement(
    Portal2,
    {
      open: forceRender || isNodeVisible,
      getContainer:
        getPopupContainer &&
        function () {
          return getPopupContainer(target);
        },
      autoDestroy,
    },
    /* @__PURE__ */ React61.createElement(Mask, {
      prefixCls,
      open,
      zIndex,
      mask,
      motion: maskMotion,
    }),
    /* @__PURE__ */ React61.createElement(
      es_default,
      {
        onResize: onAlign,
        disabled: !open,
      },
      function (resizeObserverRef) {
        return /* @__PURE__ */ React61.createElement(
          es_default2,
          _extends(
            {
              motionAppear: true,
              motionEnter: true,
              motionLeave: true,
              removeOnLeave: false,
              forceRender,
              leavedClassName: "".concat(prefixCls, "-hidden"),
            },
            motion,
            {
              onAppearPrepare: onPrepare,
              onEnterPrepare: onPrepare,
              visible: open,
              onVisibleChanged: function onVisibleChanged(nextVisible) {
                var _motion$onVisibleChan;
                motion === null ||
                  motion === void 0 ||
                  (_motion$onVisibleChan = motion.onVisibleChanged) === null ||
                  _motion$onVisibleChan === void 0 ||
                  _motion$onVisibleChan.call(motion, nextVisible);
                _onVisibleChanged(nextVisible);
              },
            },
          ),
          function (_ref, motionRef) {
            var motionClassName = _ref.className,
              motionStyle = _ref.style;
            var cls5 = (0, import_classnames12.default)(
              prefixCls,
              motionClassName,
              className,
            );
            return /* @__PURE__ */ React61.createElement(
              "div",
              {
                ref: composeRef(resizeObserverRef, ref, motionRef),
                className: cls5,
                style: _objectSpread2(
                  _objectSpread2(
                    _objectSpread2(
                      _objectSpread2(
                        {
                          "--arrow-x": "".concat(arrowPos.x || 0, "px"),
                          "--arrow-y": "".concat(arrowPos.y || 0, "px"),
                        },
                        offsetStyle,
                      ),
                      miscStyle,
                    ),
                    motionStyle,
                  ),
                  {},
                  {
                    boxSizing: "border-box",
                    zIndex,
                  },
                  style2,
                ),
                onMouseEnter,
                onMouseLeave,
                onPointerEnter,
                onClick,
              },
              arrow &&
                /* @__PURE__ */ React61.createElement(Arrow, {
                  prefixCls,
                  arrow,
                  arrowPos,
                  align,
                }),
              /* @__PURE__ */ React61.createElement(
                PopupContent_default,
                {
                  cache: !open && !fresh,
                },
                childNode,
              ),
            );
          },
        );
      },
    ),
  );
});
if (true) {
  Popup.displayName = "Popup";
}
var Popup_default = Popup;

// ../node_modules/@rc-component/trigger/es/TriggerWrapper.js
import * as React62 from "react";
var TriggerWrapper = /* @__PURE__ */ React62.forwardRef(function (props, ref) {
  var children = props.children,
    getTriggerDOMNode = props.getTriggerDOMNode;
  var canUseRef = supportRef(children);
  var setRef = React62.useCallback(
    function (node2) {
      fillRef(ref, getTriggerDOMNode ? getTriggerDOMNode(node2) : node2);
    },
    [getTriggerDOMNode],
  );
  var mergedRef = useComposeRef(setRef, children.ref);
  return canUseRef
    ? /* @__PURE__ */ React62.cloneElement(children, {
        ref: mergedRef,
      })
    : children;
});
if (true) {
  TriggerWrapper.displayName = "TriggerWrapper";
}
var TriggerWrapper_default = TriggerWrapper;

// ../node_modules/@rc-component/trigger/es/context.js
import * as React63 from "react";
var TriggerContext = /* @__PURE__ */ React63.createContext(null);
var context_default2 = TriggerContext;

// ../node_modules/@rc-component/trigger/es/hooks/useAction.js
import * as React64 from "react";
function toArray2(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
}
function useAction(mobile, action, showAction, hideAction) {
  return React64.useMemo(
    function () {
      var mergedShowAction = toArray2(
        showAction !== null && showAction !== void 0 ? showAction : action,
      );
      var mergedHideAction = toArray2(
        hideAction !== null && hideAction !== void 0 ? hideAction : action,
      );
      var showActionSet = new Set(mergedShowAction);
      var hideActionSet = new Set(mergedHideAction);
      if (mobile) {
        if (showActionSet.has("hover")) {
          showActionSet.delete("hover");
          showActionSet.add("click");
        }
        if (hideActionSet.has("hover")) {
          hideActionSet.delete("hover");
          hideActionSet.add("click");
        }
      }
      return [showActionSet, hideActionSet];
    },
    [mobile, action, showAction, hideAction],
  );
}

// ../node_modules/@rc-component/trigger/es/hooks/useAlign.js
import * as React65 from "react";

// ../node_modules/@rc-component/trigger/es/util.js
function isPointsEq() {
  var a1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var a2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var isAlignPoint = arguments.length > 2 ? arguments[2] : void 0;
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignPopupClassName(
  builtinPlacements,
  prefixCls,
  align,
  isAlignPoint,
) {
  var points = align.points;
  var placements2 = Object.keys(builtinPlacements);
  for (var i = 0; i < placements2.length; i += 1) {
    var _builtinPlacements$pl;
    var placement = placements2[i];
    if (
      isPointsEq(
        (_builtinPlacements$pl = builtinPlacements[placement]) === null ||
          _builtinPlacements$pl === void 0
          ? void 0
          : _builtinPlacements$pl.points,
        points,
        isAlignPoint,
      )
    ) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return "";
}
function getMotion(prefixCls, motion, animation, transitionName) {
  if (motion) {
    return motion;
  }
  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation),
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName,
    };
  }
  return null;
}
function getWin(ele) {
  return ele.ownerDocument.defaultView;
}
function collectScroller(ele) {
  var scrollerList = [];
  var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
  var scrollStyle = ["hidden", "scroll", "clip", "auto"];
  while (current) {
    var _getWin$getComputedSt = getWin(current).getComputedStyle(current),
      overflowX = _getWin$getComputedSt.overflowX,
      overflowY = _getWin$getComputedSt.overflowY,
      overflow = _getWin$getComputedSt.overflow;
    if (
      [overflowX, overflowY, overflow].some(function (o) {
        return scrollStyle.includes(o);
      })
    ) {
      scrollerList.push(current);
    }
    current = current.parentElement;
  }
  return scrollerList;
}
function toNum(num) {
  var defaultValue =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
  return toNum(parseFloat(val), 0);
}
function getVisibleArea(initArea, scrollerList) {
  var visibleArea = _objectSpread2({}, initArea);
  (scrollerList || []).forEach(function (ele) {
    if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
      return;
    }
    var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele),
      overflow = _getWin$getComputedSt2.overflow,
      overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin,
      borderTopWidth = _getWin$getComputedSt2.borderTopWidth,
      borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth,
      borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth,
      borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
    var eleRect = ele.getBoundingClientRect();
    var eleOutHeight = ele.offsetHeight,
      eleInnerHeight = ele.clientHeight,
      eleOutWidth = ele.offsetWidth,
      eleInnerWidth = ele.clientWidth;
    var borderTopNum = getPxValue(borderTopWidth);
    var borderBottomNum = getPxValue(borderBottomWidth);
    var borderLeftNum = getPxValue(borderLeftWidth);
    var borderRightNum = getPxValue(borderRightWidth);
    var scaleX = toNum(Math.round((eleRect.width / eleOutWidth) * 1e3) / 1e3);
    var scaleY = toNum(Math.round((eleRect.height / eleOutHeight) * 1e3) / 1e3);
    var eleScrollWidth =
      (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
    var eleScrollHeight =
      (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
    var scaledBorderTopWidth = borderTopNum * scaleY;
    var scaledBorderBottomWidth = borderBottomNum * scaleY;
    var scaledBorderLeftWidth = borderLeftNum * scaleX;
    var scaledBorderRightWidth = borderRightNum * scaleX;
    var clipMarginWidth = 0;
    var clipMarginHeight = 0;
    if (overflow === "clip") {
      var clipNum = getPxValue(overflowClipMargin);
      clipMarginWidth = clipNum * scaleX;
      clipMarginHeight = clipNum * scaleY;
    }
    var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
    var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
    var eleRight =
      eleLeft +
      eleRect.width +
      2 * clipMarginWidth -
      scaledBorderLeftWidth -
      scaledBorderRightWidth -
      eleScrollWidth;
    var eleBottom =
      eleTop +
      eleRect.height +
      2 * clipMarginHeight -
      scaledBorderTopWidth -
      scaledBorderBottomWidth -
      eleScrollHeight;
    visibleArea.left = Math.max(visibleArea.left, eleLeft);
    visibleArea.top = Math.max(visibleArea.top, eleTop);
    visibleArea.right = Math.min(visibleArea.right, eleRight);
    visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
  });
  return visibleArea;
}

// ../node_modules/@rc-component/trigger/es/hooks/useAlign.js
function getUnitOffset(size) {
  var offset =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var offsetStr = "".concat(offset);
  var cells = offsetStr.match(/^(.*)\%$/);
  if (cells) {
    return size * (parseFloat(cells[1]) / 100);
  }
  return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
  var _ref = offset || [],
    _ref2 = _slicedToArray(_ref, 2),
    offsetX = _ref2[0],
    offsetY = _ref2[1];
  return [
    getUnitOffset(rect.width, offsetX),
    getUnitOffset(rect.height, offsetY),
  ];
}
function splitPoints() {
  var points =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [points[0], points[1]];
}
function getAlignPoint(rect, points) {
  var topBottom = points[0];
  var leftRight = points[1];
  var x;
  var y;
  if (topBottom === "t") {
    y = rect.y;
  } else if (topBottom === "b") {
    y = rect.y + rect.height;
  } else {
    y = rect.y + rect.height / 2;
  }
  if (leftRight === "l") {
    x = rect.x;
  } else if (leftRight === "r") {
    x = rect.x + rect.width;
  } else {
    x = rect.x + rect.width / 2;
  }
  return {
    x,
    y,
  };
}
function reversePoints(points, index2) {
  var reverseMap = {
    t: "b",
    b: "t",
    l: "r",
    r: "l",
  };
  return points
    .map(function (point, i) {
      if (i === index2) {
        return reverseMap[point] || "c";
      }
      return point;
    })
    .join("");
}
function useAlign(
  open,
  popupEle,
  target,
  placement,
  builtinPlacements,
  popupAlign,
  onPopupAlign,
) {
  var _React$useState = React65.useState({
      ready: false,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: builtinPlacements[placement] || {},
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    offsetInfo = _React$useState2[0],
    setOffsetInfo = _React$useState2[1];
  var alignCountRef = React65.useRef(0);
  var scrollerList = React65.useMemo(
    function () {
      if (!popupEle) {
        return [];
      }
      return collectScroller(popupEle);
    },
    [popupEle],
  );
  var prevFlipRef = React65.useRef({});
  var resetFlipCache = function resetFlipCache2() {
    prevFlipRef.current = {};
  };
  if (!open) {
    resetFlipCache();
  }
  var onAlign = useEvent(function () {
    if (popupEle && target && open) {
      let getIntersectionVisibleArea = function (offsetX, offsetY) {
          var area =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : visibleArea;
          var l = popupRect.x + offsetX;
          var t = popupRect.y + offsetY;
          var r = l + popupWidth;
          var b = t + popupHeight;
          var visibleL = Math.max(l, area.left);
          var visibleT = Math.max(t, area.top);
          var visibleR = Math.min(r, area.right);
          var visibleB = Math.min(b, area.bottom);
          return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
        },
        syncNextPopupPosition = function () {
          nextPopupY = popupRect.y + nextOffsetY;
          nextPopupBottom = nextPopupY + popupHeight;
          nextPopupX = popupRect.x + nextOffsetX;
          nextPopupRight = nextPopupX + popupWidth;
        };
      var _popupElement$parentE, _popupElement$parentE2;
      var popupElement = popupEle;
      var doc = popupElement.ownerDocument;
      var win = getWin(popupElement);
      var _win$getComputedStyle = win.getComputedStyle(popupElement),
        width = _win$getComputedStyle.width,
        height = _win$getComputedStyle.height,
        popupPosition = _win$getComputedStyle.position;
      var originLeft = popupElement.style.left;
      var originTop = popupElement.style.top;
      var originRight = popupElement.style.right;
      var originBottom = popupElement.style.bottom;
      var originOverflow = popupElement.style.overflow;
      var placementInfo = _objectSpread2(
        _objectSpread2({}, builtinPlacements[placement]),
        popupAlign,
      );
      var placeholderElement = doc.createElement("div");
      (_popupElement$parentE = popupElement.parentElement) === null ||
        _popupElement$parentE === void 0 ||
        _popupElement$parentE.appendChild(placeholderElement);
      placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
      placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
      placeholderElement.style.position = popupPosition;
      placeholderElement.style.height = "".concat(
        popupElement.offsetHeight,
        "px",
      );
      placeholderElement.style.width = "".concat(
        popupElement.offsetWidth,
        "px",
      );
      popupElement.style.left = "0";
      popupElement.style.top = "0";
      popupElement.style.right = "auto";
      popupElement.style.bottom = "auto";
      popupElement.style.overflow = "hidden";
      var targetRect;
      if (Array.isArray(target)) {
        targetRect = {
          x: target[0],
          y: target[1],
          width: 0,
          height: 0,
        };
      } else {
        var rect = target.getBoundingClientRect();
        targetRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
        };
      }
      var popupRect = popupElement.getBoundingClientRect();
      var _doc$documentElement = doc.documentElement,
        clientWidth = _doc$documentElement.clientWidth,
        clientHeight = _doc$documentElement.clientHeight,
        scrollWidth = _doc$documentElement.scrollWidth,
        scrollHeight = _doc$documentElement.scrollHeight,
        scrollTop = _doc$documentElement.scrollTop,
        scrollLeft = _doc$documentElement.scrollLeft;
      var popupHeight = popupRect.height;
      var popupWidth = popupRect.width;
      var targetHeight = targetRect.height;
      var targetWidth = targetRect.width;
      var visibleRegion = {
        left: 0,
        top: 0,
        right: clientWidth,
        bottom: clientHeight,
      };
      var scrollRegion = {
        left: -scrollLeft,
        top: -scrollTop,
        right: scrollWidth - scrollLeft,
        bottom: scrollHeight - scrollTop,
      };
      var htmlRegion = placementInfo.htmlRegion;
      var VISIBLE = "visible";
      var VISIBLE_FIRST = "visibleFirst";
      if (htmlRegion !== "scroll" && htmlRegion !== VISIBLE_FIRST) {
        htmlRegion = VISIBLE;
      }
      var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
      var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
      var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
      var visibleArea =
        htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
      var adjustCheckVisibleArea = isVisibleFirst
        ? visibleRegionArea
        : visibleArea;
      popupElement.style.left = "auto";
      popupElement.style.top = "auto";
      popupElement.style.right = "0";
      popupElement.style.bottom = "0";
      var popupMirrorRect = popupElement.getBoundingClientRect();
      popupElement.style.left = originLeft;
      popupElement.style.top = originTop;
      popupElement.style.right = originRight;
      popupElement.style.bottom = originBottom;
      popupElement.style.overflow = originOverflow;
      (_popupElement$parentE2 = popupElement.parentElement) === null ||
        _popupElement$parentE2 === void 0 ||
        _popupElement$parentE2.removeChild(placeholderElement);
      var _scaleX = toNum(
        Math.round((popupWidth / parseFloat(width)) * 1e3) / 1e3,
      );
      var _scaleY = toNum(
        Math.round((popupHeight / parseFloat(height)) * 1e3) / 1e3,
      );
      if (
        _scaleX === 0 ||
        _scaleY === 0 ||
        (isDOM(target) && !isVisible_default(target))
      ) {
        return;
      }
      var offset = placementInfo.offset,
        targetOffset2 = placementInfo.targetOffset;
      var _getNumberOffset = getNumberOffset(popupRect, offset),
        _getNumberOffset2 = _slicedToArray(_getNumberOffset, 2),
        popupOffsetX = _getNumberOffset2[0],
        popupOffsetY = _getNumberOffset2[1];
      var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset2),
        _getNumberOffset4 = _slicedToArray(_getNumberOffset3, 2),
        targetOffsetX = _getNumberOffset4[0],
        targetOffsetY = _getNumberOffset4[1];
      targetRect.x -= targetOffsetX;
      targetRect.y -= targetOffsetY;
      var _ref3 = placementInfo.points || [],
        _ref4 = _slicedToArray(_ref3, 2),
        popupPoint = _ref4[0],
        targetPoint = _ref4[1];
      var targetPoints = splitPoints(targetPoint);
      var popupPoints = splitPoints(popupPoint);
      var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
      var popupAlignPoint = getAlignPoint(popupRect, popupPoints);
      var nextAlignInfo = _objectSpread2({}, placementInfo);
      var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
      var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
      var originIntersectionVisibleArea = getIntersectionVisibleArea(
        nextOffsetX,
        nextOffsetY,
      );
      var originIntersectionRecommendArea = getIntersectionVisibleArea(
        nextOffsetX,
        nextOffsetY,
        visibleRegionArea,
      );
      var targetAlignPointTL = getAlignPoint(targetRect, ["t", "l"]);
      var popupAlignPointTL = getAlignPoint(popupRect, ["t", "l"]);
      var targetAlignPointBR = getAlignPoint(targetRect, ["b", "r"]);
      var popupAlignPointBR = getAlignPoint(popupRect, ["b", "r"]);
      var overflow = placementInfo.overflow || {};
      var adjustX = overflow.adjustX,
        adjustY = overflow.adjustY,
        shiftX = overflow.shiftX,
        shiftY = overflow.shiftY;
      var supportAdjust = function supportAdjust2(val) {
        if (typeof val === "boolean") {
          return val;
        }
        return val >= 0;
      };
      var nextPopupY;
      var nextPopupBottom;
      var nextPopupX;
      var nextPopupRight;
      syncNextPopupPosition();
      var needAdjustY = supportAdjust(adjustY);
      var sameTB = popupPoints[0] === targetPoints[0];
      if (
        needAdjustY &&
        popupPoints[0] === "t" &&
        (nextPopupBottom > adjustCheckVisibleArea.bottom ||
          prevFlipRef.current.bt)
      ) {
        var tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY -= popupHeight - targetHeight;
        } else {
          tmpNextOffsetY =
            targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
        }
        var newVisibleArea = getIntersectionVisibleArea(
          nextOffsetX,
          tmpNextOffsetY,
        );
        var newVisibleRecommendArea = getIntersectionVisibleArea(
          nextOffsetX,
          tmpNextOffsetY,
          visibleRegionArea,
        );
        if (
          // Of course use larger one
          newVisibleArea > originIntersectionVisibleArea ||
          (newVisibleArea === originIntersectionVisibleArea &&
            (!isVisibleFirst || // Choose recommend one
              newVisibleRecommendArea >= originIntersectionRecommendArea))
        ) {
          prevFlipRef.current.bt = true;
          nextOffsetY = tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [
            reversePoints(popupPoints, 0),
            reversePoints(targetPoints, 0),
          ];
        } else {
          prevFlipRef.current.bt = false;
        }
      }
      if (
        needAdjustY &&
        popupPoints[0] === "b" &&
        (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)
      ) {
        var _tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          _tmpNextOffsetY += popupHeight - targetHeight;
        } else {
          _tmpNextOffsetY =
            targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
        }
        var _newVisibleArea = getIntersectionVisibleArea(
          nextOffsetX,
          _tmpNextOffsetY,
        );
        var _newVisibleRecommendArea = getIntersectionVisibleArea(
          nextOffsetX,
          _tmpNextOffsetY,
          visibleRegionArea,
        );
        if (
          // Of course use larger one
          _newVisibleArea > originIntersectionVisibleArea ||
          (_newVisibleArea === originIntersectionVisibleArea &&
            (!isVisibleFirst || // Choose recommend one
              _newVisibleRecommendArea >= originIntersectionRecommendArea))
        ) {
          prevFlipRef.current.tb = true;
          nextOffsetY = _tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [
            reversePoints(popupPoints, 0),
            reversePoints(targetPoints, 0),
          ];
        } else {
          prevFlipRef.current.tb = false;
        }
      }
      var needAdjustX = supportAdjust(adjustX);
      var sameLR = popupPoints[1] === targetPoints[1];
      if (
        needAdjustX &&
        popupPoints[1] === "l" &&
        (nextPopupRight > adjustCheckVisibleArea.right ||
          prevFlipRef.current.rl)
      ) {
        var tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX -= popupWidth - targetWidth;
        } else {
          tmpNextOffsetX =
            targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
        }
        var _newVisibleArea2 = getIntersectionVisibleArea(
          tmpNextOffsetX,
          nextOffsetY,
        );
        var _newVisibleRecommendArea2 = getIntersectionVisibleArea(
          tmpNextOffsetX,
          nextOffsetY,
          visibleRegionArea,
        );
        if (
          // Of course use larger one
          _newVisibleArea2 > originIntersectionVisibleArea ||
          (_newVisibleArea2 === originIntersectionVisibleArea &&
            (!isVisibleFirst || // Choose recommend one
              _newVisibleRecommendArea2 >= originIntersectionRecommendArea))
        ) {
          prevFlipRef.current.rl = true;
          nextOffsetX = tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [
            reversePoints(popupPoints, 1),
            reversePoints(targetPoints, 1),
          ];
        } else {
          prevFlipRef.current.rl = false;
        }
      }
      if (
        needAdjustX &&
        popupPoints[1] === "r" &&
        (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)
      ) {
        var _tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          _tmpNextOffsetX += popupWidth - targetWidth;
        } else {
          _tmpNextOffsetX =
            targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
        }
        var _newVisibleArea3 = getIntersectionVisibleArea(
          _tmpNextOffsetX,
          nextOffsetY,
        );
        var _newVisibleRecommendArea3 = getIntersectionVisibleArea(
          _tmpNextOffsetX,
          nextOffsetY,
          visibleRegionArea,
        );
        if (
          // Of course use larger one
          _newVisibleArea3 > originIntersectionVisibleArea ||
          (_newVisibleArea3 === originIntersectionVisibleArea &&
            (!isVisibleFirst || // Choose recommend one
              _newVisibleRecommendArea3 >= originIntersectionRecommendArea))
        ) {
          prevFlipRef.current.lr = true;
          nextOffsetX = _tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [
            reversePoints(popupPoints, 1),
            reversePoints(targetPoints, 1),
          ];
        } else {
          prevFlipRef.current.lr = false;
        }
      }
      syncNextPopupPosition();
      var numShiftX = shiftX === true ? 0 : shiftX;
      if (typeof numShiftX === "number") {
        if (nextPopupX < visibleRegionArea.left) {
          nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
          if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
            nextOffsetX +=
              targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
          }
        }
        if (nextPopupRight > visibleRegionArea.right) {
          nextOffsetX -=
            nextPopupRight - visibleRegionArea.right - popupOffsetX;
          if (targetRect.x > visibleRegionArea.right - numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
          }
        }
      }
      var numShiftY = shiftY === true ? 0 : shiftY;
      if (typeof numShiftY === "number") {
        if (nextPopupY < visibleRegionArea.top) {
          nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;
          if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
            nextOffsetY +=
              targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
          }
        }
        if (nextPopupBottom > visibleRegionArea.bottom) {
          nextOffsetY -=
            nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
          if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
          }
        }
      }
      var popupLeft = popupRect.x + nextOffsetX;
      var popupRight = popupLeft + popupWidth;
      var popupTop = popupRect.y + nextOffsetY;
      var popupBottom = popupTop + popupHeight;
      var targetLeft = targetRect.x;
      var targetRight = targetLeft + targetWidth;
      var targetTop = targetRect.y;
      var targetBottom = targetTop + targetHeight;
      var maxLeft = Math.max(popupLeft, targetLeft);
      var minRight = Math.min(popupRight, targetRight);
      var xCenter = (maxLeft + minRight) / 2;
      var nextArrowX = xCenter - popupLeft;
      var maxTop = Math.max(popupTop, targetTop);
      var minBottom = Math.min(popupBottom, targetBottom);
      var yCenter = (maxTop + minBottom) / 2;
      var nextArrowY = yCenter - popupTop;
      onPopupAlign === null ||
        onPopupAlign === void 0 ||
        onPopupAlign(popupEle, nextAlignInfo);
      var offsetX4Right =
        popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
      var offsetY4Bottom =
        popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
      setOffsetInfo({
        ready: true,
        offsetX: nextOffsetX / _scaleX,
        offsetY: nextOffsetY / _scaleY,
        offsetR: offsetX4Right / _scaleX,
        offsetB: offsetY4Bottom / _scaleY,
        arrowX: nextArrowX / _scaleX,
        arrowY: nextArrowY / _scaleY,
        scaleX: _scaleX,
        scaleY: _scaleY,
        align: nextAlignInfo,
      });
    }
  });
  var triggerAlign = function triggerAlign2() {
    alignCountRef.current += 1;
    var id = alignCountRef.current;
    Promise.resolve().then(function () {
      if (alignCountRef.current === id) {
        onAlign();
      }
    });
  };
  var resetReady = function resetReady2() {
    setOffsetInfo(function (ori) {
      return _objectSpread2(
        _objectSpread2({}, ori),
        {},
        {
          ready: false,
        },
      );
    });
  };
  useLayoutEffect_default(resetReady, [placement]);
  useLayoutEffect_default(
    function () {
      if (!open) {
        resetReady();
      }
    },
    [open],
  );
  return [
    offsetInfo.ready,
    offsetInfo.offsetX,
    offsetInfo.offsetY,
    offsetInfo.offsetR,
    offsetInfo.offsetB,
    offsetInfo.arrowX,
    offsetInfo.arrowY,
    offsetInfo.scaleX,
    offsetInfo.scaleY,
    offsetInfo.align,
    triggerAlign,
  ];
}

// ../node_modules/@rc-component/trigger/es/hooks/useWatch.js
function useWatch(open, target, popup, onAlign, onScroll) {
  useLayoutEffect_default(
    function () {
      if (open && target && popup) {
        let notifyScroll = function () {
          onAlign();
          onScroll();
        };
        var targetElement = target;
        var popupElement = popup;
        var targetScrollList = collectScroller(targetElement);
        var popupScrollList = collectScroller(popupElement);
        var win = getWin(popupElement);
        var mergedList = new Set(
          [win].concat(
            _toConsumableArray(targetScrollList),
            _toConsumableArray(popupScrollList),
          ),
        );
        mergedList.forEach(function (scroller) {
          scroller.addEventListener("scroll", notifyScroll, {
            passive: true,
          });
        });
        win.addEventListener("resize", notifyScroll, {
          passive: true,
        });
        onAlign();
        return function () {
          mergedList.forEach(function (scroller) {
            scroller.removeEventListener("scroll", notifyScroll);
            win.removeEventListener("resize", notifyScroll);
          });
        };
      }
    },
    [open, target, popup],
  );
}

// ../node_modules/@rc-component/trigger/es/hooks/useWinClick.js
import * as React66 from "react";
function useWinClick(
  open,
  clickToHide,
  targetEle,
  popupEle,
  mask,
  maskClosable,
  inPopupOrChild,
  triggerOpen,
) {
  var openRef = React66.useRef(open);
  var lockRef = React66.useRef(false);
  if (openRef.current !== open) {
    lockRef.current = true;
    openRef.current = open;
  }
  React66.useEffect(
    function () {
      var id = raf_default(function () {
        lockRef.current = false;
      });
      return function () {
        raf_default.cancel(id);
      };
    },
    [open],
  );
  React66.useEffect(
    function () {
      if (clickToHide && popupEle && (!mask || maskClosable)) {
        var genClickEvents = function genClickEvents2() {
          var clickInside = false;
          var onWindowMouseDown = function onWindowMouseDown2(_ref) {
            var target = _ref.target;
            clickInside = inPopupOrChild(target);
          };
          var onWindowClick = function onWindowClick2(_ref2) {
            var target = _ref2.target;
            if (
              !lockRef.current &&
              openRef.current &&
              !clickInside &&
              !inPopupOrChild(target)
            ) {
              triggerOpen(false);
            }
          };
          return [onWindowMouseDown, onWindowClick];
        };
        var _genClickEvents = genClickEvents(),
          _genClickEvents2 = _slicedToArray(_genClickEvents, 2),
          onWinMouseDown = _genClickEvents2[0],
          onWinClick = _genClickEvents2[1];
        var _genClickEvents3 = genClickEvents(),
          _genClickEvents4 = _slicedToArray(_genClickEvents3, 2),
          onShadowMouseDown = _genClickEvents4[0],
          onShadowClick = _genClickEvents4[1];
        var win = getWin(popupEle);
        win.addEventListener("mousedown", onWinMouseDown, true);
        win.addEventListener("click", onWinClick, true);
        win.addEventListener("contextmenu", onWinClick, true);
        var targetShadowRoot = getShadowRoot(targetEle);
        if (targetShadowRoot) {
          targetShadowRoot.addEventListener(
            "mousedown",
            onShadowMouseDown,
            true,
          );
          targetShadowRoot.addEventListener("click", onShadowClick, true);
          targetShadowRoot.addEventListener("contextmenu", onShadowClick, true);
        }
        if (true) {
          var _targetEle$getRootNod, _popupEle$getRootNode;
          var targetRoot =
            targetEle === null ||
            targetEle === void 0 ||
            (_targetEle$getRootNod = targetEle.getRootNode) === null ||
            _targetEle$getRootNod === void 0
              ? void 0
              : _targetEle$getRootNod.call(targetEle);
          var popupRoot =
            (_popupEle$getRootNode = popupEle.getRootNode) === null ||
            _popupEle$getRootNode === void 0
              ? void 0
              : _popupEle$getRootNode.call(popupEle);
          warning(
            targetRoot === popupRoot,
            "trigger element and popup element should in same shadow root.",
          );
        }
        return function () {
          win.removeEventListener("mousedown", onWinMouseDown, true);
          win.removeEventListener("click", onWinClick, true);
          win.removeEventListener("contextmenu", onWinClick, true);
          if (targetShadowRoot) {
            targetShadowRoot.removeEventListener(
              "mousedown",
              onShadowMouseDown,
              true,
            );
            targetShadowRoot.removeEventListener("click", onShadowClick, true);
            targetShadowRoot.removeEventListener(
              "contextmenu",
              onShadowClick,
              true,
            );
          }
        };
      }
    },
    [clickToHide, targetEle, popupEle, mask, maskClosable],
  );
}

// ../node_modules/@rc-component/trigger/es/index.js
var _excluded5 = [
  "prefixCls",
  "children",
  "action",
  "showAction",
  "hideAction",
  "popupVisible",
  "defaultPopupVisible",
  "onPopupVisibleChange",
  "afterPopupVisibleChange",
  "mouseEnterDelay",
  "mouseLeaveDelay",
  "focusDelay",
  "blurDelay",
  "mask",
  "maskClosable",
  "getPopupContainer",
  "forceRender",
  "autoDestroy",
  "destroyPopupOnHide",
  "popup",
  "popupClassName",
  "popupStyle",
  "popupPlacement",
  "builtinPlacements",
  "popupAlign",
  "zIndex",
  "stretch",
  "getPopupClassNameFromAlign",
  "fresh",
  "alignPoint",
  "onPopupClick",
  "onPopupAlign",
  "arrow",
  "popupMotion",
  "maskMotion",
  "popupTransitionName",
  "popupAnimation",
  "maskTransitionName",
  "maskAnimation",
  "className",
  "getTriggerDOMNode",
];
function generateTrigger() {
  var PortalComponent =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : es_default3;
  var Trigger = /* @__PURE__ */ React67.forwardRef(function (props, ref) {
    var _props$prefixCls = props.prefixCls,
      prefixCls =
        _props$prefixCls === void 0 ? "rc-trigger-popup" : _props$prefixCls,
      children = props.children,
      _props$action = props.action,
      action = _props$action === void 0 ? "hover" : _props$action,
      showAction = props.showAction,
      hideAction = props.hideAction,
      popupVisible = props.popupVisible,
      defaultPopupVisible = props.defaultPopupVisible,
      onPopupVisibleChange = props.onPopupVisibleChange,
      afterPopupVisibleChange = props.afterPopupVisibleChange,
      mouseEnterDelay = props.mouseEnterDelay,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay =
        _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      focusDelay = props.focusDelay,
      blurDelay = props.blurDelay,
      mask = props.mask,
      _props$maskClosable = props.maskClosable,
      maskClosable =
        _props$maskClosable === void 0 ? true : _props$maskClosable,
      getPopupContainer = props.getPopupContainer,
      forceRender = props.forceRender,
      autoDestroy = props.autoDestroy,
      destroyPopupOnHide = props.destroyPopupOnHide,
      popup = props.popup,
      popupClassName = props.popupClassName,
      popupStyle = props.popupStyle,
      popupPlacement = props.popupPlacement,
      _props$builtinPlaceme = props.builtinPlacements,
      builtinPlacements =
        _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme,
      popupAlign = props.popupAlign,
      zIndex = props.zIndex,
      stretch = props.stretch,
      getPopupClassNameFromAlign = props.getPopupClassNameFromAlign,
      fresh = props.fresh,
      alignPoint = props.alignPoint,
      onPopupClick = props.onPopupClick,
      onPopupAlign = props.onPopupAlign,
      arrow = props.arrow,
      popupMotion = props.popupMotion,
      maskMotion = props.maskMotion,
      popupTransitionName = props.popupTransitionName,
      popupAnimation = props.popupAnimation,
      maskTransitionName = props.maskTransitionName,
      maskAnimation = props.maskAnimation,
      className = props.className,
      getTriggerDOMNode = props.getTriggerDOMNode,
      restProps = _objectWithoutProperties(props, _excluded5);
    var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;
    var _React$useState = React67.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mobile = _React$useState2[0],
      setMobile = _React$useState2[1];
    useLayoutEffect_default(function () {
      setMobile(isMobile_default());
    }, []);
    var subPopupElements = React67.useRef({});
    var parentContext = React67.useContext(context_default2);
    var context = React67.useMemo(
      function () {
        return {
          registerSubPopup: function registerSubPopup(id2, subPopupEle) {
            subPopupElements.current[id2] = subPopupEle;
            parentContext === null ||
              parentContext === void 0 ||
              parentContext.registerSubPopup(id2, subPopupEle);
          },
        };
      },
      [parentContext],
    );
    var id = useId_default();
    var _React$useState3 = React67.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      popupEle = _React$useState4[0],
      setPopupEle = _React$useState4[1];
    var setPopupRef = useEvent(function (node2) {
      if (isDOM(node2) && popupEle !== node2) {
        setPopupEle(node2);
      }
      parentContext === null ||
        parentContext === void 0 ||
        parentContext.registerSubPopup(id, node2);
    });
    var _React$useState5 = React67.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      targetEle = _React$useState6[0],
      setTargetEle = _React$useState6[1];
    var externalForwardRef = React67.useRef(null);
    var setTargetRef = useEvent(function (node2) {
      if (isDOM(node2) && targetEle !== node2) {
        setTargetEle(node2);
        externalForwardRef.current = node2;
      }
    });
    var child = React67.Children.only(children);
    var originChildProps =
      (child === null || child === void 0 ? void 0 : child.props) || {};
    var cloneProps = {};
    var inPopupOrChild = useEvent(function (ele) {
      var _getShadowRoot, _getShadowRoot2;
      var childDOM = targetEle;
      return (
        (childDOM === null || childDOM === void 0
          ? void 0
          : childDOM.contains(ele)) ||
        ((_getShadowRoot = getShadowRoot(childDOM)) === null ||
        _getShadowRoot === void 0
          ? void 0
          : _getShadowRoot.host) === ele ||
        ele === childDOM ||
        (popupEle === null || popupEle === void 0
          ? void 0
          : popupEle.contains(ele)) ||
        ((_getShadowRoot2 = getShadowRoot(popupEle)) === null ||
        _getShadowRoot2 === void 0
          ? void 0
          : _getShadowRoot2.host) === ele ||
        ele === popupEle ||
        Object.values(subPopupElements.current).some(function (subPopupEle) {
          return (
            (subPopupEle === null || subPopupEle === void 0
              ? void 0
              : subPopupEle.contains(ele)) || ele === subPopupEle
          );
        })
      );
    });
    var mergePopupMotion = getMotion(
      prefixCls,
      popupMotion,
      popupAnimation,
      popupTransitionName,
    );
    var mergeMaskMotion = getMotion(
      prefixCls,
      maskMotion,
      maskAnimation,
      maskTransitionName,
    );
    var _React$useState7 = React67.useState(defaultPopupVisible || false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      internalOpen = _React$useState8[0],
      setInternalOpen = _React$useState8[1];
    var mergedOpen =
      popupVisible !== null && popupVisible !== void 0
        ? popupVisible
        : internalOpen;
    var setMergedOpen = useEvent(function (nextOpen) {
      if (popupVisible === void 0) {
        setInternalOpen(nextOpen);
      }
    });
    useLayoutEffect_default(
      function () {
        setInternalOpen(popupVisible || false);
      },
      [popupVisible],
    );
    var openRef = React67.useRef(mergedOpen);
    openRef.current = mergedOpen;
    var lastTriggerRef = React67.useRef([]);
    lastTriggerRef.current = [];
    var internalTriggerOpen = useEvent(function (nextOpen) {
      var _lastTriggerRef$curre;
      setMergedOpen(nextOpen);
      if (
        ((_lastTriggerRef$curre =
          lastTriggerRef.current[lastTriggerRef.current.length - 1]) !== null &&
        _lastTriggerRef$curre !== void 0
          ? _lastTriggerRef$curre
          : mergedOpen) !== nextOpen
      ) {
        lastTriggerRef.current.push(nextOpen);
        onPopupVisibleChange === null ||
          onPopupVisibleChange === void 0 ||
          onPopupVisibleChange(nextOpen);
      }
    });
    var delayRef = React67.useRef();
    var clearDelay = function clearDelay2() {
      clearTimeout(delayRef.current);
    };
    var triggerOpen = function triggerOpen2(nextOpen) {
      var delay =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      clearDelay();
      if (delay === 0) {
        internalTriggerOpen(nextOpen);
      } else {
        delayRef.current = setTimeout(function () {
          internalTriggerOpen(nextOpen);
        }, delay * 1e3);
      }
    };
    React67.useEffect(function () {
      return clearDelay;
    }, []);
    var _React$useState9 = React67.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      inMotion = _React$useState10[0],
      setInMotion = _React$useState10[1];
    useLayoutEffect_default(
      function (firstMount) {
        if (!firstMount || mergedOpen) {
          setInMotion(true);
        }
      },
      [mergedOpen],
    );
    var _React$useState11 = React67.useState(null),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      motionPrepareResolve = _React$useState12[0],
      setMotionPrepareResolve = _React$useState12[1];
    var _React$useState13 = React67.useState([0, 0]),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      mousePos = _React$useState14[0],
      setMousePos = _React$useState14[1];
    var setMousePosByEvent = function setMousePosByEvent2(event) {
      setMousePos([event.clientX, event.clientY]);
    };
    var _useAlign = useAlign(
        mergedOpen,
        popupEle,
        alignPoint ? mousePos : targetEle,
        popupPlacement,
        builtinPlacements,
        popupAlign,
        onPopupAlign,
      ),
      _useAlign2 = _slicedToArray(_useAlign, 11),
      ready = _useAlign2[0],
      offsetX = _useAlign2[1],
      offsetY = _useAlign2[2],
      offsetR = _useAlign2[3],
      offsetB = _useAlign2[4],
      arrowX = _useAlign2[5],
      arrowY = _useAlign2[6],
      scaleX = _useAlign2[7],
      scaleY = _useAlign2[8],
      alignInfo = _useAlign2[9],
      onAlign = _useAlign2[10];
    var _useAction = useAction(mobile, action, showAction, hideAction),
      _useAction2 = _slicedToArray(_useAction, 2),
      showActions = _useAction2[0],
      hideActions = _useAction2[1];
    var clickToShow = showActions.has("click");
    var clickToHide =
      hideActions.has("click") || hideActions.has("contextMenu");
    var triggerAlign = useEvent(function () {
      if (!inMotion) {
        onAlign();
      }
    });
    var onScroll = function onScroll2() {
      if (openRef.current && alignPoint && clickToHide) {
        triggerOpen(false);
      }
    };
    useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
    useLayoutEffect_default(
      function () {
        triggerAlign();
      },
      [mousePos, popupPlacement],
    );
    useLayoutEffect_default(
      function () {
        if (
          mergedOpen &&
          !(
            builtinPlacements !== null &&
            builtinPlacements !== void 0 &&
            builtinPlacements[popupPlacement]
          )
        ) {
          triggerAlign();
        }
      },
      [JSON.stringify(popupAlign)],
    );
    var alignedClassName = React67.useMemo(
      function () {
        var baseClassName = getAlignPopupClassName(
          builtinPlacements,
          prefixCls,
          alignInfo,
          alignPoint,
        );
        return (0, import_classnames13.default)(
          baseClassName,
          getPopupClassNameFromAlign === null ||
            getPopupClassNameFromAlign === void 0
            ? void 0
            : getPopupClassNameFromAlign(alignInfo),
        );
      },
      [
        alignInfo,
        getPopupClassNameFromAlign,
        builtinPlacements,
        prefixCls,
        alignPoint,
      ],
    );
    React67.useImperativeHandle(ref, function () {
      return {
        nativeElement: externalForwardRef.current,
        forceAlign: triggerAlign,
      };
    });
    var _React$useState15 = React67.useState(0),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      targetWidth = _React$useState16[0],
      setTargetWidth = _React$useState16[1];
    var _React$useState17 = React67.useState(0),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      targetHeight = _React$useState18[0],
      setTargetHeight = _React$useState18[1];
    var syncTargetSize = function syncTargetSize2() {
      if (stretch && targetEle) {
        var rect = targetEle.getBoundingClientRect();
        setTargetWidth(rect.width);
        setTargetHeight(rect.height);
      }
    };
    var onTargetResize = function onTargetResize2() {
      syncTargetSize();
      triggerAlign();
    };
    var onVisibleChanged = function onVisibleChanged2(visible) {
      setInMotion(false);
      onAlign();
      afterPopupVisibleChange === null ||
        afterPopupVisibleChange === void 0 ||
        afterPopupVisibleChange(visible);
    };
    var onPrepare = function onPrepare2() {
      return new Promise(function (resolve) {
        syncTargetSize();
        setMotionPrepareResolve(function () {
          return resolve;
        });
      });
    };
    useLayoutEffect_default(
      function () {
        if (motionPrepareResolve) {
          onAlign();
          motionPrepareResolve();
          setMotionPrepareResolve(null);
        }
      },
      [motionPrepareResolve],
    );
    function wrapperAction(eventName, nextOpen, delay, preEvent) {
      cloneProps[eventName] = function (event) {
        var _originChildProps$eve;
        preEvent === null || preEvent === void 0 || preEvent(event);
        triggerOpen(nextOpen, delay);
        for (
          var _len = arguments.length,
            args = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }
        (_originChildProps$eve = originChildProps[eventName]) === null ||
          _originChildProps$eve === void 0 ||
          _originChildProps$eve.call.apply(
            _originChildProps$eve,
            [originChildProps, event].concat(args),
          );
      };
    }
    if (clickToShow || clickToHide) {
      cloneProps.onClick = function (event) {
        var _originChildProps$onC;
        if (openRef.current && clickToHide) {
          triggerOpen(false);
        } else if (!openRef.current && clickToShow) {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        for (
          var _len2 = arguments.length,
            args = new Array(_len2 > 1 ? _len2 - 1 : 0),
            _key2 = 1;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_originChildProps$onC = originChildProps.onClick) === null ||
          _originChildProps$onC === void 0 ||
          _originChildProps$onC.call.apply(
            _originChildProps$onC,
            [originChildProps, event].concat(args),
          );
      };
    }
    useWinClick(
      mergedOpen,
      clickToHide,
      targetEle,
      popupEle,
      mask,
      maskClosable,
      inPopupOrChild,
      triggerOpen,
    );
    var hoverToShow = showActions.has("hover");
    var hoverToHide = hideActions.has("hover");
    var onPopupMouseEnter;
    var onPopupMouseLeave;
    if (hoverToShow) {
      wrapperAction("onMouseEnter", true, mouseEnterDelay, function (event) {
        setMousePosByEvent(event);
      });
      wrapperAction("onPointerEnter", true, mouseEnterDelay, function (event) {
        setMousePosByEvent(event);
      });
      onPopupMouseEnter = function onPopupMouseEnter2(event) {
        if (
          (mergedOpen || inMotion) &&
          popupEle !== null &&
          popupEle !== void 0 &&
          popupEle.contains(event.target)
        ) {
          triggerOpen(true, mouseEnterDelay);
        }
      };
      if (alignPoint) {
        cloneProps.onMouseMove = function (event) {
          var _originChildProps$onM;
          (_originChildProps$onM = originChildProps.onMouseMove) === null ||
            _originChildProps$onM === void 0 ||
            _originChildProps$onM.call(originChildProps, event);
        };
      }
    }
    if (hoverToHide) {
      wrapperAction("onMouseLeave", false, mouseLeaveDelay);
      wrapperAction("onPointerLeave", false, mouseLeaveDelay);
      onPopupMouseLeave = function onPopupMouseLeave2() {
        triggerOpen(false, mouseLeaveDelay);
      };
    }
    if (showActions.has("focus")) {
      wrapperAction("onFocus", true, focusDelay);
    }
    if (hideActions.has("focus")) {
      wrapperAction("onBlur", false, blurDelay);
    }
    if (showActions.has("contextMenu")) {
      cloneProps.onContextMenu = function (event) {
        var _originChildProps$onC2;
        if (openRef.current && hideActions.has("contextMenu")) {
          triggerOpen(false);
        } else {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        event.preventDefault();
        for (
          var _len3 = arguments.length,
            args = new Array(_len3 > 1 ? _len3 - 1 : 0),
            _key3 = 1;
          _key3 < _len3;
          _key3++
        ) {
          args[_key3 - 1] = arguments[_key3];
        }
        (_originChildProps$onC2 = originChildProps.onContextMenu) === null ||
          _originChildProps$onC2 === void 0 ||
          _originChildProps$onC2.call.apply(
            _originChildProps$onC2,
            [originChildProps, event].concat(args),
          );
      };
    }
    if (className) {
      cloneProps.className = (0, import_classnames13.default)(
        originChildProps.className,
        className,
      );
    }
    var mergedChildrenProps = _objectSpread2(
      _objectSpread2({}, originChildProps),
      cloneProps,
    );
    var passedProps = {};
    var passedEventList = [
      "onContextMenu",
      "onClick",
      "onMouseDown",
      "onTouchStart",
      "onMouseEnter",
      "onMouseLeave",
      "onFocus",
      "onBlur",
    ];
    passedEventList.forEach(function (eventName) {
      if (restProps[eventName]) {
        passedProps[eventName] = function () {
          var _mergedChildrenProps$;
          for (
            var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
            _key4 < _len4;
            _key4++
          ) {
            args[_key4] = arguments[_key4];
          }
          (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null ||
            _mergedChildrenProps$ === void 0 ||
            _mergedChildrenProps$.call.apply(
              _mergedChildrenProps$,
              [mergedChildrenProps].concat(args),
            );
          restProps[eventName].apply(restProps, args);
        };
      }
    });
    var triggerNode = /* @__PURE__ */ React67.cloneElement(
      child,
      _objectSpread2(_objectSpread2({}, mergedChildrenProps), passedProps),
    );
    var arrowPos = {
      x: arrowX,
      y: arrowY,
    };
    var innerArrow = arrow
      ? _objectSpread2({}, arrow !== true ? arrow : {})
      : null;
    return /* @__PURE__ */ React67.createElement(
      React67.Fragment,
      null,
      /* @__PURE__ */ React67.createElement(
        es_default,
        {
          disabled: !mergedOpen,
          ref: setTargetRef,
          onResize: onTargetResize,
        },
        /* @__PURE__ */ React67.createElement(
          TriggerWrapper_default,
          {
            getTriggerDOMNode,
          },
          triggerNode,
        ),
      ),
      /* @__PURE__ */ React67.createElement(
        context_default2.Provider,
        {
          value: context,
        },
        /* @__PURE__ */ React67.createElement(Popup_default, {
          portal: PortalComponent,
          ref: setPopupRef,
          prefixCls,
          popup,
          className: (0, import_classnames13.default)(
            popupClassName,
            alignedClassName,
          ),
          style: popupStyle,
          target: targetEle,
          onMouseEnter: onPopupMouseEnter,
          onMouseLeave: onPopupMouseLeave,
          onPointerEnter: onPopupMouseEnter,
          zIndex,
          open: mergedOpen,
          keepDom: inMotion,
          fresh,
          onClick: onPopupClick,
          mask,
          motion: mergePopupMotion,
          maskMotion: mergeMaskMotion,
          onVisibleChanged,
          onPrepare,
          forceRender,
          autoDestroy: mergedAutoDestroy,
          getPopupContainer,
          align: alignInfo,
          arrow: innerArrow,
          arrowPos,
          ready,
          offsetX,
          offsetY,
          offsetR,
          offsetB,
          onAlign: triggerAlign,
          stretch,
          targetWidth: targetWidth / scaleX,
          targetHeight: targetHeight / scaleY,
        }),
      ),
    );
  });
  if (true) {
    Trigger.displayName = "Trigger";
  }
  return Trigger;
}
var es_default4 = generateTrigger(es_default3);

// ../node_modules/antd/es/tooltip/index.js
var import_classnames17 = __toESM(require_classnames());
import * as React71 from "react";

// ../node_modules/rc-tooltip/es/Popup.js
var import_classnames14 = __toESM(require_classnames());
import * as React68 from "react";
function Popup2(props) {
  var children = props.children,
    prefixCls = props.prefixCls,
    id = props.id,
    overlayInnerStyle = props.overlayInnerStyle,
    className = props.className,
    style2 = props.style;
  return /* @__PURE__ */ React68.createElement(
    "div",
    {
      className: (0, import_classnames14.default)(
        "".concat(prefixCls, "-content"),
        className,
      ),
      style: style2,
    },
    /* @__PURE__ */ React68.createElement(
      "div",
      {
        className: "".concat(prefixCls, "-inner"),
        id,
        role: "tooltip",
        style: overlayInnerStyle,
      },
      typeof children === "function" ? children() : children,
    ),
  );
}

// ../node_modules/rc-tooltip/es/Tooltip.js
import * as React69 from "react";
import {
  forwardRef as forwardRef13,
  useImperativeHandle as useImperativeHandle3,
  useRef as useRef23,
} from "react";

// ../node_modules/rc-tooltip/es/placements.js
var autoAdjustOverflowTopBottom = {
  shiftX: 64,
  adjustY: 1,
};
var autoAdjustOverflowLeftRight = {
  adjustX: 1,
  shiftY: true,
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ["cr", "cl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset,
  },
  right: {
    points: ["cl", "cr"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset,
  },
  top: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset,
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset,
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset,
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset,
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset,
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset,
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset,
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset,
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset,
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset,
  },
};

// ../node_modules/rc-tooltip/es/Tooltip.js
var _excluded6 = [
  "overlayClassName",
  "trigger",
  "mouseEnterDelay",
  "mouseLeaveDelay",
  "overlayStyle",
  "prefixCls",
  "children",
  "onVisibleChange",
  "afterVisibleChange",
  "transitionName",
  "animation",
  "motion",
  "placement",
  "align",
  "destroyTooltipOnHide",
  "defaultVisible",
  "getTooltipContainer",
  "overlayInnerStyle",
  "arrowContent",
  "overlay",
  "id",
  "showArrow",
];
var Tooltip = function Tooltip2(props, ref) {
  var overlayClassName = props.overlayClassName,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ["hover"] : _props$trigger,
    _props$mouseEnterDela = props.mouseEnterDelay,
    mouseEnterDelay =
      _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
    _props$mouseLeaveDela = props.mouseLeaveDelay,
    mouseLeaveDelay =
      _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
    overlayStyle = props.overlayStyle,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? "rc-tooltip" : _props$prefixCls,
    children = props.children,
    onVisibleChange = props.onVisibleChange,
    afterVisibleChange = props.afterVisibleChange,
    transitionName = props.transitionName,
    animation = props.animation,
    motion = props.motion,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? "right" : _props$placement,
    _props$align = props.align,
    align = _props$align === void 0 ? {} : _props$align,
    _props$destroyTooltip = props.destroyTooltipOnHide,
    destroyTooltipOnHide =
      _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
    defaultVisible = props.defaultVisible,
    getTooltipContainer = props.getTooltipContainer,
    overlayInnerStyle = props.overlayInnerStyle,
    arrowContent = props.arrowContent,
    overlay = props.overlay,
    id = props.id,
    _props$showArrow = props.showArrow,
    showArrow = _props$showArrow === void 0 ? true : _props$showArrow,
    restProps = _objectWithoutProperties(props, _excluded6);
  var triggerRef = useRef23(null);
  useImperativeHandle3(ref, function () {
    return triggerRef.current;
  });
  var extraProps = _objectSpread2({}, restProps);
  if ("visible" in props) {
    extraProps.popupVisible = props.visible;
  }
  var getPopupElement = function getPopupElement2() {
    return /* @__PURE__ */ React69.createElement(
      Popup2,
      {
        key: "content",
        prefixCls,
        id,
        overlayInnerStyle,
      },
      overlay,
    );
  };
  return /* @__PURE__ */ React69.createElement(
    es_default4,
    _extends(
      {
        popupClassName: overlayClassName,
        prefixCls,
        popup: getPopupElement,
        action: trigger,
        builtinPlacements: placements,
        popupPlacement: placement,
        ref: triggerRef,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupMotion: motion,
        defaultPopupVisible: defaultVisible,
        autoDestroy: destroyTooltipOnHide,
        mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay,
        arrow: showArrow,
      },
      extraProps,
    ),
    children,
  );
};
var Tooltip_default = /* @__PURE__ */ forwardRef13(Tooltip);

// ../node_modules/rc-tooltip/es/index.js
var es_default5 = Tooltip_default;

// ../node_modules/antd/es/style/roundedArrow.js
function getArrowToken(token2) {
  const { sizePopupArrow, borderRadiusXS, borderRadiusOuter } = token2;
  const unitWidth = sizePopupArrow / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = (borderRadiusOuter * 1) / Math.sqrt(2);
  const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
  const cy =
    borderRadiusOuter * (Math.sqrt(2) - 1) +
    borderRadiusXS * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth =
    unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
  const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
  const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${
    2 * unitWidth - polygonOffset
  }px 100%, ${polygonOffset}px 100%)`;
  const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
  return {
    arrowShadowWidth: shadowWidth,
    arrowPath,
    arrowPolygon,
  };
}
var genRoundedArrow = (token2, bgColor, boxShadow) => {
  const {
    sizePopupArrow,
    arrowPolygon,
    arrowPath,
    arrowShadowWidth,
    borderRadiusXS,
    calc,
  } = token2;
  return {
    pointerEvents: "none",
    width: sizePopupArrow,
    height: sizePopupArrow,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: sizePopupArrow,
      height: calc(sizePopupArrow).div(2).equal(),
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [arrowPolygon, arrowPath],
      },
      content: '""',
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: arrowShadowWidth,
      height: arrowShadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${unit(borderRadiusXS)} 0`,
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow,
      zIndex: 0,
      background: "transparent",
    },
  };
};

// ../node_modules/antd/es/style/placementArrow.js
var MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
  const { contentRadius, limitVerticalRadius } = options;
  const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const arrowOffsetVertical = limitVerticalRadius
    ? MAX_VERTICAL_CONTENT_RADIUS
    : arrowOffset;
  return {
    arrowOffsetHorizontal: arrowOffset,
    arrowOffsetVertical,
  };
}
function isInject(valid, code) {
  if (!valid) {
    return {};
  }
  return code;
}
function getArrowStyle(token2, colorBg, options) {
  const {
    componentCls,
    boxShadowPopoverArrow,
    arrowOffsetVertical,
    arrowOffsetHorizontal,
  } = token2;
  const {
    arrowDistance = 0,
    arrowPlacement = {
      left: true,
      right: true,
      top: true,
      bottom: true,
    },
  } = options || {};
  return {
    [componentCls]: Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              // ============================ Basic ============================
              [`${componentCls}-arrow`]: [
                Object.assign(
                  Object.assign(
                    {
                      position: "absolute",
                      zIndex: 1,
                      display: "block",
                    },
                    genRoundedArrow(token2, colorBg, boxShadowPopoverArrow),
                  ),
                  {
                    "&:before": {
                      background: colorBg,
                    },
                  },
                ),
              ],
            },
            isInject(!!arrowPlacement.top, {
              [[
                `&-placement-top > ${componentCls}-arrow`,
                `&-placement-topLeft > ${componentCls}-arrow`,
                `&-placement-topRight > ${componentCls}-arrow`,
              ].join(",")]: {
                bottom: arrowDistance,
                transform: "translateY(100%) rotate(180deg)",
              },
              [`&-placement-top > ${componentCls}-arrow`]: {
                left: {
                  _skip_check_: true,
                  value: "50%",
                },
                transform: "translateX(-50%) translateY(100%) rotate(180deg)",
              },
              [`&-placement-topLeft > ${componentCls}-arrow`]: {
                left: {
                  _skip_check_: true,
                  value: arrowOffsetHorizontal,
                },
              },
              [`&-placement-topRight > ${componentCls}-arrow`]: {
                right: {
                  _skip_check_: true,
                  value: arrowOffsetHorizontal,
                },
              },
            }),
          ),
          isInject(!!arrowPlacement.bottom, {
            [[
              `&-placement-bottom > ${componentCls}-arrow`,
              `&-placement-bottomLeft > ${componentCls}-arrow`,
              `&-placement-bottomRight > ${componentCls}-arrow`,
            ].join(",")]: {
              top: arrowDistance,
              transform: `translateY(-100%)`,
            },
            [`&-placement-bottom > ${componentCls}-arrow`]: {
              left: {
                _skip_check_: true,
                value: "50%",
              },
              transform: `translateX(-50%) translateY(-100%)`,
            },
            [`&-placement-bottomLeft > ${componentCls}-arrow`]: {
              left: {
                _skip_check_: true,
                value: arrowOffsetHorizontal,
              },
            },
            [`&-placement-bottomRight > ${componentCls}-arrow`]: {
              right: {
                _skip_check_: true,
                value: arrowOffsetHorizontal,
              },
            },
          }),
        ),
        isInject(!!arrowPlacement.left, {
          [[
            `&-placement-left > ${componentCls}-arrow`,
            `&-placement-leftTop > ${componentCls}-arrow`,
            `&-placement-leftBottom > ${componentCls}-arrow`,
          ].join(",")]: {
            right: {
              _skip_check_: true,
              value: arrowDistance,
            },
            transform: "translateX(100%) rotate(90deg)",
          },
          [`&-placement-left > ${componentCls}-arrow`]: {
            top: {
              _skip_check_: true,
              value: "50%",
            },
            transform: "translateY(-50%) translateX(100%) rotate(90deg)",
          },
          [`&-placement-leftTop > ${componentCls}-arrow`]: {
            top: arrowOffsetVertical,
          },
          [`&-placement-leftBottom > ${componentCls}-arrow`]: {
            bottom: arrowOffsetVertical,
          },
        }),
      ),
      isInject(!!arrowPlacement.right, {
        [[
          `&-placement-right > ${componentCls}-arrow`,
          `&-placement-rightTop > ${componentCls}-arrow`,
          `&-placement-rightBottom > ${componentCls}-arrow`,
        ].join(",")]: {
          left: {
            _skip_check_: true,
            value: arrowDistance,
          },
          transform: "translateX(-100%) rotate(-90deg)",
        },
        [`&-placement-right > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%",
          },
          transform: "translateY(-50%) translateX(-100%) rotate(-90deg)",
        },
        [`&-placement-rightTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical,
        },
        [`&-placement-rightBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical,
        },
      }),
    ),
  };
}

// ../node_modules/antd/es/_util/placements.js
function getOverflowOptions(
  placement,
  arrowOffset,
  arrowWidth,
  autoAdjustOverflow,
) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false,
    };
  }
  const overflow =
    autoAdjustOverflow && typeof autoAdjustOverflow === "object"
      ? autoAdjustOverflow
      : {};
  const baseOverflow = {};
  switch (placement) {
    case "top":
    case "bottom":
      baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
      baseOverflow.shiftY = true;
      baseOverflow.adjustY = true;
      break;
    case "left":
    case "right":
      baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
      baseOverflow.shiftX = true;
      baseOverflow.adjustX = true;
      break;
  }
  const mergedOverflow = Object.assign(
    Object.assign({}, baseOverflow),
    overflow,
  );
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
var PlacementAlignMap = {
  left: {
    points: ["cr", "cl"],
  },
  right: {
    points: ["cl", "cr"],
  },
  top: {
    points: ["bc", "tc"],
  },
  bottom: {
    points: ["tc", "bc"],
  },
  topLeft: {
    points: ["bl", "tl"],
  },
  leftTop: {
    points: ["tr", "tl"],
  },
  topRight: {
    points: ["br", "tr"],
  },
  rightTop: {
    points: ["tl", "tr"],
  },
  bottomRight: {
    points: ["tr", "br"],
  },
  rightBottom: {
    points: ["bl", "br"],
  },
  bottomLeft: {
    points: ["tl", "bl"],
  },
  leftBottom: {
    points: ["br", "bl"],
  },
};
var ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ["bl", "tc"],
  },
  leftTop: {
    points: ["tr", "cl"],
  },
  topRight: {
    points: ["br", "tc"],
  },
  rightTop: {
    points: ["tl", "cr"],
  },
  bottomRight: {
    points: ["tr", "bc"],
  },
  rightBottom: {
    points: ["bl", "cr"],
  },
  bottomLeft: {
    points: ["tl", "bc"],
  },
  leftBottom: {
    points: ["br", "cl"],
  },
};
var DisableAutoArrowList = /* @__PURE__ */ new Set([
  "topLeft",
  "topRight",
  "bottomLeft",
  "bottomRight",
  "leftTop",
  "leftBottom",
  "rightTop",
  "rightBottom",
]);
function getPlacements(config) {
  const {
    arrowWidth,
    autoAdjustOverflow,
    arrowPointAtCenter,
    offset,
    borderRadius,
    visibleFirst,
  } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  Object.keys(PlacementAlignMap).forEach((key) => {
    const template =
      (arrowPointAtCenter && ArrowCenterPlacementAlignMap[key]) ||
      PlacementAlignMap[key];
    const placementInfo = Object.assign(Object.assign({}, template), {
      offset: [0, 0],
      dynamicInset: true,
    });
    placementMap[key] = placementInfo;
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    switch (key) {
      case "top":
      case "topLeft":
      case "topRight":
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    const arrowOffset = getArrowOffsetToken({
      contentRadius: borderRadius,
      limitVerticalRadius: true,
    });
    if (arrowPointAtCenter) {
      switch (key) {
        case "topLeft":
        case "bottomLeft":
          placementInfo.offset[0] =
            -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
          break;
        case "topRight":
        case "bottomRight":
          placementInfo.offset[0] =
            arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
          break;
        case "leftTop":
        case "rightTop":
          placementInfo.offset[1] =
            -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
          break;
        case "leftBottom":
        case "rightBottom":
          placementInfo.offset[1] =
            arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
          break;
      }
    }
    placementInfo.overflow = getOverflowOptions(
      key,
      arrowOffset,
      arrowWidth,
      autoAdjustOverflow,
    );
    if (visibleFirst) {
      placementInfo.htmlRegion = "visibleFirst";
    }
  });
  return placementMap;
}

// ../node_modules/antd/es/tooltip/PurePanel.js
var import_classnames16 = __toESM(require_classnames());
import * as React70 from "react";

// ../node_modules/antd/es/tooltip/style/index.js
var genTooltipStyle = (token2) => {
  const {
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    boxShadowSecondary,
    paddingSM,
    paddingXS,
  } = token2;
  return [
    {
      [componentCls]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, resetComponent(token2)), {
            position: "absolute",
            zIndex: zIndexPopup,
            display: "block",
            width: "max-content",
            maxWidth: tooltipMaxWidth,
            visibility: "visible",
            transformOrigin: `var(--arrow-x, 50%) var(--arrow-y, 50%)`,
            "&-hidden": {
              display: "none",
            },
            "--antd-arrow-background-color": tooltipBg,
            // Wrapper for the tooltip content
            [`${componentCls}-inner`]: {
              minWidth: controlHeight,
              minHeight: controlHeight,
              padding: `${unit(token2.calc(paddingSM).div(2).equal())} ${unit(
                paddingXS,
              )}`,
              color: tooltipColor,
              textAlign: "start",
              textDecoration: "none",
              wordWrap: "break-word",
              backgroundColor: tooltipBg,
              borderRadius: tooltipBorderRadius,
              boxShadow: boxShadowSecondary,
              boxSizing: "border-box",
            },
            // Limit left and right placement radius
            [[
              `&-placement-left`,
              `&-placement-leftTop`,
              `&-placement-leftBottom`,
              `&-placement-right`,
              `&-placement-rightTop`,
              `&-placement-rightBottom`,
            ].join(",")]: {
              [`${componentCls}-inner`]: {
                borderRadius: token2.min(
                  tooltipBorderRadius,
                  MAX_VERTICAL_CONTENT_RADIUS,
                ),
              },
            },
            [`${componentCls}-content`]: {
              position: "relative",
            },
          }),
          genPresetColor(token2, (colorKey, _ref) => {
            let { darkColor } = _ref;
            return {
              [`&${componentCls}-${colorKey}`]: {
                [`${componentCls}-inner`]: {
                  backgroundColor: darkColor,
                },
                [`${componentCls}-arrow`]: {
                  "--antd-arrow-background-color": darkColor,
                },
              },
            };
          }),
        ),
        {
          // RTL
          "&-rtl": {
            direction: "rtl",
          },
        },
      ),
    },
    // Arrow Style
    getArrowStyle(token2, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: token2.sizePopupArrow,
      },
    },
  ];
};
var prepareComponentToken2 = (token2) =>
  Object.assign(
    Object.assign(
      {
        zIndexPopup: token2.zIndexPopupBase + 70,
      },
      getArrowOffsetToken({
        contentRadius: token2.borderRadius,
        limitVerticalRadius: true,
      }),
    ),
    getArrowToken(
      merge2(token2, {
        borderRadiusOuter: Math.min(token2.borderRadiusOuter, 4),
      }),
    ),
  );
var style_default3 = function (prefixCls) {
  let injectStyle =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const useStyle = genStyleHooks(
    "Tooltip",
    (token2) => {
      const { borderRadius, colorTextLightSolid, colorBgSpotlight } = token2;
      const TooltipToken = merge2(token2, {
        // default variables
        tooltipMaxWidth: 250,
        tooltipColor: colorTextLightSolid,
        tooltipBorderRadius: borderRadius,
        tooltipBg: colorBgSpotlight,
      });
      return [
        genTooltipStyle(TooltipToken),
        initZoomMotion(token2, "zoom-big-fast"),
      ];
    },
    prepareComponentToken2,
    {
      resetStyle: false,
      // Popover use Tooltip as internal component. We do not need to handle this.
      injectStyle,
    },
  );
  return useStyle(prefixCls);
};

// ../node_modules/antd/es/tooltip/util.js
var import_classnames15 = __toESM(require_classnames());

// ../node_modules/antd/es/_util/colors.js
var inverseColors = PresetColors.map((color) => `${color}-inverse`);
function isPresetColor(color) {
  let includeInverse =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (includeInverse) {
    return []
      .concat(
        _toConsumableArray(inverseColors),
        _toConsumableArray(PresetColors),
      )
      .includes(color);
  }
  return PresetColors.includes(color);
}

// ../node_modules/antd/es/tooltip/util.js
function parseColor(prefixCls, color) {
  const isInternalColor = isPresetColor(color);
  const className = (0, import_classnames15.default)({
    [`${prefixCls}-${color}`]: color && isInternalColor,
  });
  const overlayStyle = {};
  const arrowStyle = {};
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    arrowStyle["--antd-arrow-background-color"] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle,
  };
}

// ../node_modules/antd/es/tooltip/PurePanel.js
("use client");
var PurePanel = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    placement = "top",
    title,
    color,
    overlayInnerStyle,
  } = props;
  const { getPrefixCls } = React70.useContext(ConfigContext);
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default3(prefixCls);
  const colorInfo = parseColor(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = Object.assign(
    Object.assign({}, overlayInnerStyle),
    colorInfo.overlayStyle,
  );
  const cls5 = (0, import_classnames16.default)(
    hashId,
    cssVarCls,
    prefixCls,
    `${prefixCls}-pure`,
    `${prefixCls}-placement-${placement}`,
    className,
    colorInfo.className,
  );
  return wrapCSSVar(
    /* @__PURE__ */ React70.createElement(
      "div",
      {
        className: cls5,
        style: arrowContentStyle,
      },
      /* @__PURE__ */ React70.createElement("div", {
        className: `${prefixCls}-arrow`,
      }),
      /* @__PURE__ */ React70.createElement(
        Popup2,
        Object.assign({}, props, {
          className: hashId,
          prefixCls,
          overlayInnerStyle: formattedOverlayInnerStyle,
        }),
        title,
      ),
    ),
  );
};
var PurePanel_default = PurePanel;

// ../node_modules/antd/es/tooltip/index.js
("use client");
var __rest6 = function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
};
var Tooltip3 = /* @__PURE__ */ React71.forwardRef((props, ref) => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    openClassName,
    getTooltipContainer,
    overlayClassName,
    color,
    overlayInnerStyle,
    children,
    afterOpenChange,
    afterVisibleChange,
    destroyTooltipOnHide,
    arrow = true,
    title,
    overlay,
    builtinPlacements,
    arrowPointAtCenter = false,
    autoAdjustOverflow = true,
  } = props;
  const mergedShowArrow = !!arrow;
  const [, token2] = useToken();
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
  } = React71.useContext(ConfigContext);
  const warning4 = devUseWarning("Tooltip");
  const tooltipRef = React71.useRef(null);
  const forceAlign = () => {
    var _a2;
    (_a2 = tooltipRef.current) === null || _a2 === void 0
      ? void 0
      : _a2.forceAlign();
  };
  React71.useImperativeHandle(ref, () => ({
    forceAlign,
    forcePopupAlign: () => {
      warning4.deprecated(false, "forcePopupAlign", "forceAlign");
      forceAlign();
    },
  }));
  if (true) {
    [
      ["visible", "open"],
      ["defaultVisible", "defaultOpen"],
      ["onVisibleChange", "onOpenChange"],
      ["afterVisibleChange", "afterOpenChange"],
      ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"],
    ].forEach((_ref) => {
      let [deprecatedName, newName] = _ref;
      warning4.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
    true
      ? warning4(
          !destroyTooltipOnHide || typeof destroyTooltipOnHide === "boolean",
          "usage",
          "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.",
        )
      : void 0;
    true
      ? warning4(
          !arrow ||
            typeof arrow === "boolean" ||
            !("arrowPointAtCenter" in arrow),
          "deprecated",
          "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead.",
        )
      : void 0;
  }
  const [open, setOpen] = useMergedState(false, {
    value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
    defaultValue:
      (_b = props.defaultOpen) !== null && _b !== void 0
        ? _b
        : props.defaultVisible,
  });
  const noTitle = !title && !overlay && title !== 0;
  const onOpenChange = (vis) => {
    var _a2, _b2;
    setOpen(noTitle ? false : vis);
    if (!noTitle) {
      (_a2 = props.onOpenChange) === null || _a2 === void 0
        ? void 0
        : _a2.call(props, vis);
      (_b2 = props.onVisibleChange) === null || _b2 === void 0
        ? void 0
        : _b2.call(props, vis);
    }
  };
  const tooltipPlacements = React71.useMemo(() => {
    var _a2, _b2;
    let mergedArrowPointAtCenter = arrowPointAtCenter;
    if (typeof arrow === "object") {
      mergedArrowPointAtCenter =
        (_b2 =
          (_a2 = arrow.pointAtCenter) !== null && _a2 !== void 0
            ? _a2
            : arrow.arrowPointAtCenter) !== null && _b2 !== void 0
          ? _b2
          : arrowPointAtCenter;
    }
    return (
      builtinPlacements ||
      getPlacements({
        arrowPointAtCenter: mergedArrowPointAtCenter,
        autoAdjustOverflow,
        arrowWidth: mergedShowArrow ? token2.sizePopupArrow : 0,
        borderRadius: token2.borderRadius,
        offset: token2.marginXXS,
        visibleFirst: true,
      })
    );
  }, [arrowPointAtCenter, arrow, builtinPlacements, token2]);
  const memoOverlay = React71.useMemo(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || "";
  }, [overlay, title]);
  const memoOverlayWrapper = /* @__PURE__ */ React71.createElement(
    NoCompactStyle,
    null,
    typeof memoOverlay === "function" ? memoOverlay() : memoOverlay,
  );
  const {
      getPopupContainer,
      placement = "top",
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      overlayStyle,
      rootClassName,
    } = props,
    otherProps = __rest6(props, [
      "getPopupContainer",
      "placement",
      "mouseEnterDelay",
      "mouseLeaveDelay",
      "overlayStyle",
      "rootClassName",
    ]);
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const injectFromPopover = props["data-popover-inject"];
  let tempOpen = open;
  if (!("open" in props) && !("visible" in props) && noTitle) {
    tempOpen = false;
  }
  const child =
    isValidElement4(children) && !isFragment3(children)
      ? children
      : /* @__PURE__ */ React71.createElement("span", null, children);
  const childProps = child.props;
  const childCls =
    !childProps.className || typeof childProps.className === "string"
      ? (0, import_classnames17.default)(
          childProps.className,
          openClassName || `${prefixCls}-open`,
        )
      : childProps.className;
  const [wrapCSSVar, hashId, cssVarCls] = style_default3(
    prefixCls,
    !injectFromPopover,
  );
  const colorInfo = parseColor(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = Object.assign(
    Object.assign({}, overlayInnerStyle),
    colorInfo.overlayStyle,
  );
  const customOverlayClassName = (0, import_classnames17.default)(
    overlayClassName,
    {
      [`${prefixCls}-rtl`]: direction === "rtl",
    },
    colorInfo.className,
    rootClassName,
    hashId,
    cssVarCls,
  );
  const [zIndex, contextZIndex] = useZIndex("Tooltip", otherProps.zIndex);
  const content = /* @__PURE__ */ React71.createElement(
    es_default5,
    Object.assign({}, otherProps, {
      zIndex,
      showArrow: mergedShowArrow,
      placement,
      mouseEnterDelay,
      mouseLeaveDelay,
      prefixCls,
      overlayClassName: customOverlayClassName,
      overlayStyle: Object.assign(
        Object.assign({}, arrowContentStyle),
        overlayStyle,
      ),
      getTooltipContainer:
        getPopupContainer || getTooltipContainer || getContextPopupContainer,
      ref: tooltipRef,
      builtinPlacements: tooltipPlacements,
      overlay: memoOverlayWrapper,
      visible: tempOpen,
      onVisibleChange: onOpenChange,
      afterVisibleChange:
        afterOpenChange !== null && afterOpenChange !== void 0
          ? afterOpenChange
          : afterVisibleChange,
      overlayInnerStyle: formattedOverlayInnerStyle,
      arrowContent: /* @__PURE__ */ React71.createElement("span", {
        className: `${prefixCls}-arrow-content`,
      }),
      motion: {
        motionName: getTransitionName2(
          rootPrefixCls,
          "zoom-big-fast",
          props.transitionName,
        ),
        motionDeadline: 1e3,
      },
      destroyTooltipOnHide: !!destroyTooltipOnHide,
    }),
    tempOpen
      ? cloneElement4(child, {
          className: childCls,
        })
      : child,
  );
  return wrapCSSVar(
    /* @__PURE__ */ React71.createElement(
      zindexContext_default.Provider,
      {
        value: contextZIndex,
      },
      content,
    ),
  );
});
if (true) {
  Tooltip3.displayName = "Tooltip";
}
Tooltip3._InternalPanelDoNotUseOrYouWillBeFired = PurePanel_default;
var tooltip_default = Tooltip3;

// ../node_modules/antd/es/_util/gapSize.js
function isPresetSize(size) {
  return ["small", "middle", "large"].includes(size);
}

// ../node_modules/antd/es/flex/index.js
var import_classnames19 = __toESM(require_classnames());
import React72 from "react";

// ../node_modules/antd/es/flex/utils.js
var import_classnames18 = __toESM(require_classnames());
var flexWrapValues = ["wrap", "nowrap", "wrap-reverse"];
var justifyContentValues = [
  "flex-start",
  "flex-end",
  "start",
  "end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "stretch",
  "normal",
  "left",
  "right",
];
var alignItemsValues = [
  "center",
  "start",
  "end",
  "flex-start",
  "flex-end",
  "self-start",
  "self-end",
  "baseline",
  "normal",
  "stretch",
];
var genClsWrap = (prefixCls, props) => {
  const wrapCls = {};
  flexWrapValues.forEach((cssKey) => {
    wrapCls[`${prefixCls}-wrap-${cssKey}`] = props.wrap === cssKey;
  });
  return wrapCls;
};
var genClsAlign = (prefixCls, props) => {
  const alignCls = {};
  alignItemsValues.forEach((cssKey) => {
    alignCls[`${prefixCls}-align-${cssKey}`] = props.align === cssKey;
  });
  alignCls[`${prefixCls}-align-stretch`] = !props.align && !!props.vertical;
  return alignCls;
};
var genClsJustify = (prefixCls, props) => {
  const justifyCls = {};
  justifyContentValues.forEach((cssKey) => {
    justifyCls[`${prefixCls}-justify-${cssKey}`] = props.justify === cssKey;
  });
  return justifyCls;
};
function createFlexClassNames(prefixCls, props) {
  return (0, import_classnames18.default)(
    Object.assign(
      Object.assign(
        Object.assign({}, genClsWrap(prefixCls, props)),
        genClsAlign(prefixCls, props),
      ),
      genClsJustify(prefixCls, props),
    ),
  );
}
var utils_default = createFlexClassNames;

// ../node_modules/antd/es/flex/style/index.js
var genFlexStyle = (token2) => {
  const { componentCls } = token2;
  return {
    [componentCls]: {
      display: "flex",
      "&-vertical": {
        flexDirection: "column",
      },
      "&-rtl": {
        direction: "rtl",
      },
      "&:empty": {
        display: "none",
      },
    },
  };
};
var genFlexGapStyle = (token2) => {
  const { componentCls } = token2;
  return {
    [componentCls]: {
      "&-gap-small": {
        gap: token2.flexGapSM,
      },
      "&-gap-middle": {
        gap: token2.flexGap,
      },
      "&-gap-large": {
        gap: token2.flexGapLG,
      },
    },
  };
};
var genFlexWrapStyle = (token2) => {
  const { componentCls } = token2;
  const wrapStyle = {};
  flexWrapValues.forEach((value) => {
    wrapStyle[`${componentCls}-wrap-${value}`] = {
      flexWrap: value,
    };
  });
  return wrapStyle;
};
var genAlignItemsStyle = (token2) => {
  const { componentCls } = token2;
  const alignStyle = {};
  alignItemsValues.forEach((value) => {
    alignStyle[`${componentCls}-align-${value}`] = {
      alignItems: value,
    };
  });
  return alignStyle;
};
var genJustifyContentStyle = (token2) => {
  const { componentCls } = token2;
  const justifyStyle = {};
  justifyContentValues.forEach((value) => {
    justifyStyle[`${componentCls}-justify-${value}`] = {
      justifyContent: value,
    };
  });
  return justifyStyle;
};
var prepareComponentToken3 = () => ({});
var style_default4 = genStyleHooks(
  "Flex",
  (token2) => {
    const { paddingXS, padding, paddingLG } = token2;
    const flexToken = merge2(token2, {
      flexGapSM: paddingXS,
      flexGap: padding,
      flexGapLG: paddingLG,
    });
    return [
      genFlexStyle(flexToken),
      genFlexGapStyle(flexToken),
      genFlexWrapStyle(flexToken),
      genAlignItemsStyle(flexToken),
      genJustifyContentStyle(flexToken),
    ];
  },
  prepareComponentToken3,
  {
    // Flex component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/46403
    resetStyle: false,
  },
);

// ../node_modules/antd/es/flex/index.js
("use client");
var __rest7 = function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
};
var Flex = /* @__PURE__ */ React72.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      rootClassName,
      className,
      style: style2,
      flex,
      gap,
      children,
      vertical = false,
      component: Component4 = "div",
    } = props,
    othersProps = __rest7(props, [
      "prefixCls",
      "rootClassName",
      "className",
      "style",
      "flex",
      "gap",
      "children",
      "vertical",
      "component",
    ]);
  const {
    flex: ctxFlex,
    direction: ctxDirection,
    getPrefixCls,
  } = React72.useContext(ConfigContext);
  const prefixCls = getPrefixCls("flex", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default4(prefixCls);
  const mergedVertical =
    vertical !== null && vertical !== void 0
      ? vertical
      : ctxFlex === null || ctxFlex === void 0
        ? void 0
        : ctxFlex.vertical;
  const mergedCls = (0, import_classnames19.default)(
    className,
    rootClassName,
    ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.className,
    prefixCls,
    hashId,
    cssVarCls,
    utils_default(prefixCls, props),
    {
      [`${prefixCls}-rtl`]: ctxDirection === "rtl",
      [`${prefixCls}-gap-${gap}`]: isPresetSize(gap),
      [`${prefixCls}-vertical`]: mergedVertical,
    },
  );
  const mergedStyle = Object.assign(
    Object.assign(
      {},
      ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.style,
    ),
    style2,
  );
  if (flex) {
    mergedStyle.flex = flex;
  }
  if (gap && !isPresetSize(gap)) {
    mergedStyle.gap = gap;
  }
  return wrapCSSVar(
    /* @__PURE__ */ React72.createElement(
      Component4,
      Object.assign(
        {
          ref,
          className: mergedCls,
          style: mergedStyle,
        },
        omit(othersProps, ["justify", "wrap", "align"]),
      ),
      children,
    ),
  );
});
if (true) {
  Flex.displayName = "Flex";
}
var flex_default = Flex;

// ../node_modules/antd/es/slider/index.js
var import_classnames26 = __toESM(require_classnames());
import React86 from "react";

// ../node_modules/rc-slider/es/Slider.js
var import_classnames25 = __toESM(require_classnames());
import * as React84 from "react";

// ../node_modules/rc-slider/es/context.js
import * as React73 from "react";
var SliderContext = /* @__PURE__ */ React73.createContext({
  min: 0,
  max: 0,
  direction: "ltr",
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0,
  keyboard: true,
  styles: {},
  classNames: {},
});
var context_default3 = SliderContext;

// ../node_modules/rc-slider/es/Handles/index.js
import * as React75 from "react";

// ../node_modules/rc-slider/es/Handles/Handle.js
var import_classnames20 = __toESM(require_classnames());
import * as React74 from "react";

// ../node_modules/rc-slider/es/util.js
function getOffset(value, min, max) {
  return (value - min) / (max - min);
}
function getDirectionStyle(direction, value, min, max) {
  var offset = getOffset(value, min, max);
  var positionStyle = {};
  switch (direction) {
    case "rtl":
      positionStyle.right = "".concat(offset * 100, "%");
      positionStyle.transform = "translateX(50%)";
      break;
    case "btt":
      positionStyle.bottom = "".concat(offset * 100, "%");
      positionStyle.transform = "translateY(50%)";
      break;
    case "ttb":
      positionStyle.top = "".concat(offset * 100, "%");
      positionStyle.transform = "translateY(-50%)";
      break;
    default:
      positionStyle.left = "".concat(offset * 100, "%");
      positionStyle.transform = "translateX(-50%)";
      break;
  }
  return positionStyle;
}
function getIndex(value, index2) {
  return Array.isArray(value) ? value[index2] : value;
}

// ../node_modules/rc-slider/es/Handles/Handle.js
var _excluded7 = [
  "prefixCls",
  "value",
  "valueIndex",
  "onStartMove",
  "style",
  "render",
  "dragging",
  "onOffsetChange",
  "onChangeComplete",
];
var Handle = /* @__PURE__ */ React74.forwardRef(function (props, ref) {
  var _cls, _getIndex;
  var prefixCls = props.prefixCls,
    value = props.value,
    valueIndex = props.valueIndex,
    onStartMove = props.onStartMove,
    style2 = props.style,
    render2 = props.render,
    dragging = props.dragging,
    onOffsetChange = props.onOffsetChange,
    onChangeComplete = props.onChangeComplete,
    restProps = _objectWithoutProperties(props, _excluded7);
  var _React$useContext = React74.useContext(context_default3),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    disabled = _React$useContext.disabled,
    keyboard = _React$useContext.keyboard,
    range = _React$useContext.range,
    tabIndex = _React$useContext.tabIndex,
    ariaLabelForHandle = _React$useContext.ariaLabelForHandle,
    ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle,
    ariaValueTextFormatterForHandle =
      _React$useContext.ariaValueTextFormatterForHandle,
    styles = _React$useContext.styles,
    classNames23 = _React$useContext.classNames;
  var handlePrefixCls = "".concat(prefixCls, "-handle");
  var onInternalStartMove = function onInternalStartMove2(e) {
    if (!disabled) {
      onStartMove(e, valueIndex);
    }
  };
  var onKeyDown = function onKeyDown2(e) {
    if (!disabled && keyboard) {
      var offset = null;
      switch (e.which || e.keyCode) {
        case KeyCode_default.LEFT:
          offset = direction === "ltr" || direction === "btt" ? -1 : 1;
          break;
        case KeyCode_default.RIGHT:
          offset = direction === "ltr" || direction === "btt" ? 1 : -1;
          break;
        case KeyCode_default.UP:
          offset = direction !== "ttb" ? 1 : -1;
          break;
        case KeyCode_default.DOWN:
          offset = direction !== "ttb" ? -1 : 1;
          break;
        case KeyCode_default.HOME:
          offset = "min";
          break;
        case KeyCode_default.END:
          offset = "max";
          break;
        case KeyCode_default.PAGE_UP:
          offset = 2;
          break;
        case KeyCode_default.PAGE_DOWN:
          offset = -2;
          break;
      }
      if (offset !== null) {
        e.preventDefault();
        onOffsetChange(offset, valueIndex);
      }
    }
  };
  var handleKeyUp = function handleKeyUp2(e) {
    switch (e.which || e.keyCode) {
      case KeyCode_default.LEFT:
      case KeyCode_default.RIGHT:
      case KeyCode_default.UP:
      case KeyCode_default.DOWN:
      case KeyCode_default.HOME:
      case KeyCode_default.END:
      case KeyCode_default.PAGE_UP:
      case KeyCode_default.PAGE_DOWN:
        onChangeComplete === null ||
          onChangeComplete === void 0 ||
          onChangeComplete();
        break;
    }
  };
  var positionStyle = getDirectionStyle(direction, value, min, max);
  var handleNode = /* @__PURE__ */ React74.createElement(
    "div",
    _extends(
      {
        ref,
        className: (0, import_classnames20.default)(
          handlePrefixCls,
          ((_cls = {}),
          _defineProperty(
            _cls,
            "".concat(handlePrefixCls, "-").concat(valueIndex + 1),
            range,
          ),
          _defineProperty(
            _cls,
            "".concat(handlePrefixCls, "-dragging"),
            dragging,
          ),
          _cls),
          classNames23.handle,
        ),
        style: _objectSpread2(
          _objectSpread2(_objectSpread2({}, positionStyle), style2),
          styles.handle,
        ),
        onMouseDown: onInternalStartMove,
        onTouchStart: onInternalStartMove,
        onKeyDown,
        onKeyUp: handleKeyUp,
        tabIndex: disabled ? null : getIndex(tabIndex, valueIndex),
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": disabled,
        "aria-label": getIndex(ariaLabelForHandle, valueIndex),
        "aria-labelledby": getIndex(ariaLabelledByForHandle, valueIndex),
        "aria-valuetext":
          (_getIndex = getIndex(
            ariaValueTextFormatterForHandle,
            valueIndex,
          )) === null || _getIndex === void 0
            ? void 0
            : _getIndex(value),
        "aria-orientation":
          direction === "ltr" || direction === "rtl"
            ? "horizontal"
            : "vertical",
      },
      restProps,
    ),
  );
  if (render2) {
    handleNode = render2(handleNode, {
      index: valueIndex,
      prefixCls,
      value,
      dragging,
    });
  }
  return handleNode;
});
if (true) {
  Handle.displayName = "Handle";
}
var Handle_default = Handle;

// ../node_modules/rc-slider/es/Handles/index.js
var _excluded8 = [
  "prefixCls",
  "style",
  "onStartMove",
  "onOffsetChange",
  "values",
  "handleRender",
  "draggingIndex",
];
var Handles = /* @__PURE__ */ React75.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    style2 = props.style,
    onStartMove = props.onStartMove,
    onOffsetChange = props.onOffsetChange,
    values = props.values,
    handleRender = props.handleRender,
    draggingIndex = props.draggingIndex,
    restProps = _objectWithoutProperties(props, _excluded8);
  var handlesRef = React75.useRef({});
  React75.useImperativeHandle(ref, function () {
    return {
      focus: function focus(index2) {
        var _handlesRef$current$i;
        (_handlesRef$current$i = handlesRef.current[index2]) === null ||
          _handlesRef$current$i === void 0 ||
          _handlesRef$current$i.focus();
      },
    };
  });
  return /* @__PURE__ */ React75.createElement(
    React75.Fragment,
    null,
    values.map(function (value, index2) {
      return /* @__PURE__ */ React75.createElement(
        Handle_default,
        _extends(
          {
            ref: function ref2(node2) {
              if (!node2) {
                delete handlesRef.current[index2];
              } else {
                handlesRef.current[index2] = node2;
              }
            },
            dragging: draggingIndex === index2,
            prefixCls,
            style: getIndex(style2, index2),
            key: index2,
            value,
            valueIndex: index2,
            onStartMove,
            onOffsetChange,
            render: handleRender,
          },
          restProps,
        ),
      );
    }),
  );
});
if (true) {
  Handles.displayName = "Handles";
}
var Handles_default = Handles;

// ../node_modules/rc-slider/es/hooks/useDrag.js
import * as React76 from "react";
function getPosition(e) {
  var obj = "touches" in e ? e.touches[0] : e;
  return {
    pageX: obj.pageX,
    pageY: obj.pageY,
  };
}
function useDrag(
  containerRef,
  direction,
  rawValues,
  min,
  max,
  formatValue,
  triggerChange,
  finishChange,
  offsetValues,
) {
  var _React$useState = React76.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    draggingValue = _React$useState2[0],
    setDraggingValue = _React$useState2[1];
  var _React$useState3 = React76.useState(-1),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    draggingIndex = _React$useState4[0],
    setDraggingIndex = _React$useState4[1];
  var _React$useState5 = React76.useState(rawValues),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    cacheValues = _React$useState6[0],
    setCacheValues = _React$useState6[1];
  var _React$useState7 = React76.useState(rawValues),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    originValues = _React$useState8[0],
    setOriginValues = _React$useState8[1];
  var mouseMoveEventRef = React76.useRef(null);
  var mouseUpEventRef = React76.useRef(null);
  React76.useEffect(
    function () {
      if (draggingIndex === -1) {
        setCacheValues(rawValues);
      }
    },
    [rawValues, draggingIndex],
  );
  React76.useEffect(function () {
    return function () {
      document.removeEventListener("mousemove", mouseMoveEventRef.current);
      document.removeEventListener("mouseup", mouseUpEventRef.current);
      document.removeEventListener("touchmove", mouseMoveEventRef.current);
      document.removeEventListener("touchend", mouseUpEventRef.current);
    };
  }, []);
  var flushValues = function flushValues2(nextValues, nextValue) {
    if (
      cacheValues.some(function (val, i) {
        return val !== nextValues[i];
      })
    ) {
      if (nextValue !== void 0) {
        setDraggingValue(nextValue);
      }
      setCacheValues(nextValues);
      triggerChange(nextValues);
    }
  };
  var updateCacheValue = function updateCacheValue2(valueIndex, offsetPercent) {
    if (valueIndex === -1) {
      var startValue = originValues[0];
      var endValue = originValues[originValues.length - 1];
      var maxStartOffset = min - startValue;
      var maxEndOffset = max - endValue;
      var offset = offsetPercent * (max - min);
      offset = Math.max(offset, maxStartOffset);
      offset = Math.min(offset, maxEndOffset);
      var formatStartValue = formatValue(startValue + offset);
      offset = formatStartValue - startValue;
      var cloneCacheValues = originValues.map(function (val) {
        return val + offset;
      });
      flushValues(cloneCacheValues);
    } else {
      var offsetDist = (max - min) * offsetPercent;
      var cloneValues = _toConsumableArray(cacheValues);
      cloneValues[valueIndex] = originValues[valueIndex];
      var next2 = offsetValues(cloneValues, offsetDist, valueIndex, "dist");
      flushValues(next2.values, next2.value);
    }
  };
  var updateCacheValueRef = React76.useRef(updateCacheValue);
  updateCacheValueRef.current = updateCacheValue;
  var onStartMove = function onStartMove2(e, valueIndex, startValues) {
    e.stopPropagation();
    var initialValues = startValues || rawValues;
    var originValue = initialValues[valueIndex];
    setDraggingIndex(valueIndex);
    setDraggingValue(originValue);
    setOriginValues(initialValues);
    var _getPosition = getPosition(e),
      startX = _getPosition.pageX,
      startY = _getPosition.pageY;
    var onMouseMove = function onMouseMove2(event) {
      event.preventDefault();
      var _getPosition2 = getPosition(event),
        moveX = _getPosition2.pageX,
        moveY = _getPosition2.pageY;
      var offsetX = moveX - startX;
      var offsetY = moveY - startY;
      var _containerRef$current = containerRef.current.getBoundingClientRect(),
        width = _containerRef$current.width,
        height = _containerRef$current.height;
      var offSetPercent;
      switch (direction) {
        case "btt":
          offSetPercent = -offsetY / height;
          break;
        case "ttb":
          offSetPercent = offsetY / height;
          break;
        case "rtl":
          offSetPercent = -offsetX / width;
          break;
        default:
          offSetPercent = offsetX / width;
      }
      updateCacheValueRef.current(valueIndex, offSetPercent);
    };
    var onMouseUp = function onMouseUp2(event) {
      event.preventDefault();
      document.removeEventListener("mouseup", onMouseUp2);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchend", onMouseUp2);
      document.removeEventListener("touchmove", onMouseMove);
      mouseMoveEventRef.current = null;
      mouseUpEventRef.current = null;
      setDraggingIndex(-1);
      finishChange();
    };
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("touchmove", onMouseMove);
    mouseMoveEventRef.current = onMouseMove;
    mouseUpEventRef.current = onMouseUp;
  };
  var returnValues = React76.useMemo(
    function () {
      var sourceValues = _toConsumableArray(rawValues).sort(function (a, b) {
        return a - b;
      });
      var targetValues = _toConsumableArray(cacheValues).sort(function (a, b) {
        return a - b;
      });
      return sourceValues.every(function (val, index2) {
        return val === targetValues[index2];
      })
        ? cacheValues
        : rawValues;
    },
    [rawValues, cacheValues],
  );
  return [draggingIndex, draggingValue, returnValues, onStartMove];
}

// ../node_modules/rc-slider/es/hooks/useOffset.js
import * as React77 from "react";
function useOffset(min, max, step, markList, allowCross, pushable) {
  var formatRangeValue = React77.useCallback(
    function (val) {
      var formatNextValue = isFinite(val) ? val : min;
      formatNextValue = Math.min(max, val);
      formatNextValue = Math.max(min, formatNextValue);
      return formatNextValue;
    },
    [min, max],
  );
  var formatStepValue = React77.useCallback(
    function (val) {
      if (step !== null) {
        var stepValue =
          min + Math.round((formatRangeValue(val) - min) / step) * step;
        var getDecimal = function getDecimal2(num) {
          return (String(num).split(".")[1] || "").length;
        };
        var maxDecimal = Math.max(
          getDecimal(step),
          getDecimal(max),
          getDecimal(min),
        );
        var fixedValue = Number(stepValue.toFixed(maxDecimal));
        return min <= fixedValue && fixedValue <= max ? fixedValue : null;
      }
      return null;
    },
    [step, min, max, formatRangeValue],
  );
  var formatValue = React77.useCallback(
    function (val) {
      var formatNextValue = formatRangeValue(val);
      var alignValues = markList.map(function (mark) {
        return mark.value;
      });
      if (step !== null) {
        alignValues.push(formatStepValue(val));
      }
      alignValues.push(min, max);
      var closeValue = alignValues[0];
      var closeDist = max - min;
      alignValues.forEach(function (alignValue) {
        var dist = Math.abs(formatNextValue - alignValue);
        if (dist <= closeDist) {
          closeValue = alignValue;
          closeDist = dist;
        }
      });
      return closeValue;
    },
    [min, max, markList, step, formatRangeValue, formatStepValue],
  );
  var offsetValue = function offsetValue2(values, offset, valueIndex) {
    var mode =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
    if (typeof offset === "number") {
      var nextValue;
      var originValue = values[valueIndex];
      var targetDistValue = originValue + offset;
      var potentialValues = [];
      markList.forEach(function (mark) {
        potentialValues.push(mark.value);
      });
      potentialValues.push(min, max);
      potentialValues.push(formatStepValue(originValue));
      var sign = offset > 0 ? 1 : -1;
      if (mode === "unit") {
        potentialValues.push(formatStepValue(originValue + sign * step));
      } else {
        potentialValues.push(formatStepValue(targetDistValue));
      }
      potentialValues = potentialValues
        .filter(function (val) {
          return val !== null;
        })
        .filter(function (val) {
          return offset < 0 ? val <= originValue : val >= originValue;
        });
      if (mode === "unit") {
        potentialValues = potentialValues.filter(function (val) {
          return val !== originValue;
        });
      }
      var compareValue = mode === "unit" ? originValue : targetDistValue;
      nextValue = potentialValues[0];
      var valueDist = Math.abs(nextValue - compareValue);
      potentialValues.forEach(function (potentialValue) {
        var dist = Math.abs(potentialValue - compareValue);
        if (dist < valueDist) {
          nextValue = potentialValue;
          valueDist = dist;
        }
      });
      if (nextValue === void 0) {
        return offset < 0 ? min : max;
      }
      if (mode === "dist") {
        return nextValue;
      }
      if (Math.abs(offset) > 1) {
        var cloneValues = _toConsumableArray(values);
        cloneValues[valueIndex] = nextValue;
        return offsetValue2(cloneValues, offset - sign, valueIndex, mode);
      }
      return nextValue;
    } else if (offset === "min") {
      return min;
    } else if (offset === "max") {
      return max;
    }
  };
  var offsetChangedValue = function offsetChangedValue2(
    values,
    offset,
    valueIndex,
  ) {
    var mode =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
    var originValue = values[valueIndex];
    var nextValue = offsetValue(values, offset, valueIndex, mode);
    return {
      value: nextValue,
      changed: nextValue !== originValue,
    };
  };
  var needPush = function needPush2(dist) {
    return (
      (pushable === null && dist === 0) ||
      (typeof pushable === "number" && dist < pushable)
    );
  };
  var offsetValues = function offsetValues2(values, offset, valueIndex) {
    var mode =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
    var nextValues = values.map(formatValue);
    var originValue = nextValues[valueIndex];
    var nextValue = offsetValue(nextValues, offset, valueIndex, mode);
    nextValues[valueIndex] = nextValue;
    if (allowCross === false) {
      var pushNum = pushable || 0;
      if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) {
        nextValues[valueIndex] = Math.max(
          nextValues[valueIndex],
          nextValues[valueIndex - 1] + pushNum,
        );
      }
      if (
        valueIndex < nextValues.length - 1 &&
        nextValues[valueIndex + 1] !== originValue
      ) {
        nextValues[valueIndex] = Math.min(
          nextValues[valueIndex],
          nextValues[valueIndex + 1] - pushNum,
        );
      }
    } else if (typeof pushable === "number" || pushable === null) {
      for (var i = valueIndex + 1; i < nextValues.length; i += 1) {
        var changed = true;
        while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
          var _offsetChangedValue = offsetChangedValue(nextValues, 1, i);
          nextValues[i] = _offsetChangedValue.value;
          changed = _offsetChangedValue.changed;
        }
      }
      for (var _i = valueIndex; _i > 0; _i -= 1) {
        var _changed = true;
        while (needPush(nextValues[_i] - nextValues[_i - 1]) && _changed) {
          var _offsetChangedValue2 = offsetChangedValue(nextValues, -1, _i - 1);
          nextValues[_i - 1] = _offsetChangedValue2.value;
          _changed = _offsetChangedValue2.changed;
        }
      }
      for (var _i2 = nextValues.length - 1; _i2 > 0; _i2 -= 1) {
        var _changed2 = true;
        while (needPush(nextValues[_i2] - nextValues[_i2 - 1]) && _changed2) {
          var _offsetChangedValue3 = offsetChangedValue(
            nextValues,
            -1,
            _i2 - 1,
          );
          nextValues[_i2 - 1] = _offsetChangedValue3.value;
          _changed2 = _offsetChangedValue3.changed;
        }
      }
      for (var _i3 = 0; _i3 < nextValues.length - 1; _i3 += 1) {
        var _changed3 = true;
        while (needPush(nextValues[_i3 + 1] - nextValues[_i3]) && _changed3) {
          var _offsetChangedValue4 = offsetChangedValue(nextValues, 1, _i3 + 1);
          nextValues[_i3 + 1] = _offsetChangedValue4.value;
          _changed3 = _offsetChangedValue4.changed;
        }
      }
    }
    return {
      value: nextValues[valueIndex],
      values: nextValues,
    };
  };
  return [formatValue, offsetValues];
}

// ../node_modules/rc-slider/es/Marks/index.js
import * as React79 from "react";

// ../node_modules/rc-slider/es/Marks/Mark.js
var import_classnames21 = __toESM(require_classnames());
import * as React78 from "react";
function Mark(props) {
  var prefixCls = props.prefixCls,
    style2 = props.style,
    children = props.children,
    value = props.value,
    _onClick = props.onClick;
  var _React$useContext = React78.useContext(context_default3),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    includedStart = _React$useContext.includedStart,
    includedEnd = _React$useContext.includedEnd,
    included = _React$useContext.included;
  var textCls = "".concat(prefixCls, "-text");
  var positionStyle = getDirectionStyle(direction, value, min, max);
  return /* @__PURE__ */ React78.createElement(
    "span",
    {
      className: (0, import_classnames21.default)(
        textCls,
        _defineProperty(
          {},
          "".concat(textCls, "-active"),
          included && includedStart <= value && value <= includedEnd,
        ),
      ),
      style: _objectSpread2(_objectSpread2({}, positionStyle), style2),
      onMouseDown: function onMouseDown(e) {
        e.stopPropagation();
      },
      onClick: function onClick() {
        _onClick(value);
      },
    },
    children,
  );
}

// ../node_modules/rc-slider/es/Marks/index.js
function Marks(props) {
  var prefixCls = props.prefixCls,
    marks = props.marks,
    onClick = props.onClick;
  var markPrefixCls = "".concat(prefixCls, "-mark");
  if (!marks.length) {
    return null;
  }
  return /* @__PURE__ */ React79.createElement(
    "div",
    {
      className: markPrefixCls,
    },
    marks.map(function (_ref) {
      var value = _ref.value,
        style2 = _ref.style,
        label = _ref.label;
      return /* @__PURE__ */ React79.createElement(
        Mark,
        {
          key: value,
          prefixCls: markPrefixCls,
          style: style2,
          value,
          onClick,
        },
        label,
      );
    }),
  );
}

// ../node_modules/rc-slider/es/Steps/index.js
import * as React81 from "react";

// ../node_modules/rc-slider/es/Steps/Dot.js
var import_classnames22 = __toESM(require_classnames());
import * as React80 from "react";
function Dot(props) {
  var prefixCls = props.prefixCls,
    value = props.value,
    style2 = props.style,
    activeStyle = props.activeStyle;
  var _React$useContext = React80.useContext(context_default3),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    included = _React$useContext.included,
    includedStart = _React$useContext.includedStart,
    includedEnd = _React$useContext.includedEnd;
  var dotClassName = "".concat(prefixCls, "-dot");
  var active = included && includedStart <= value && value <= includedEnd;
  var mergedStyle = _objectSpread2(
    _objectSpread2({}, getDirectionStyle(direction, value, min, max)),
    typeof style2 === "function" ? style2(value) : style2,
  );
  if (active) {
    mergedStyle = _objectSpread2(
      _objectSpread2({}, mergedStyle),
      typeof activeStyle === "function" ? activeStyle(value) : activeStyle,
    );
  }
  return /* @__PURE__ */ React80.createElement("span", {
    className: (0, import_classnames22.default)(
      dotClassName,
      _defineProperty({}, "".concat(dotClassName, "-active"), active),
    ),
    style: mergedStyle,
  });
}

// ../node_modules/rc-slider/es/Steps/index.js
function Steps(props) {
  var prefixCls = props.prefixCls,
    marks = props.marks,
    dots = props.dots,
    style2 = props.style,
    activeStyle = props.activeStyle;
  var _React$useContext = React81.useContext(context_default3),
    min = _React$useContext.min,
    max = _React$useContext.max,
    step = _React$useContext.step;
  var stepDots = React81.useMemo(
    function () {
      var dotSet = /* @__PURE__ */ new Set();
      marks.forEach(function (mark) {
        dotSet.add(mark.value);
      });
      if (dots && step !== null) {
        var current = min;
        while (current <= max) {
          dotSet.add(current);
          current += step;
        }
      }
      return Array.from(dotSet);
    },
    [min, max, step, dots, marks],
  );
  return /* @__PURE__ */ React81.createElement(
    "div",
    {
      className: "".concat(prefixCls, "-step"),
    },
    stepDots.map(function (dotValue) {
      return /* @__PURE__ */ React81.createElement(Dot, {
        prefixCls,
        key: dotValue,
        value: dotValue,
        style: style2,
        activeStyle,
      });
    }),
  );
}

// ../node_modules/rc-slider/es/Tracks/index.js
var import_classnames24 = __toESM(require_classnames());
import * as React83 from "react";

// ../node_modules/rc-slider/es/Tracks/Track.js
var import_classnames23 = __toESM(require_classnames());
import * as React82 from "react";
function Track(props) {
  var _cls;
  var prefixCls = props.prefixCls,
    style2 = props.style,
    start = props.start,
    end = props.end,
    index2 = props.index,
    onStartMove = props.onStartMove,
    replaceCls = props.replaceCls;
  var _React$useContext = React82.useContext(context_default3),
    direction = _React$useContext.direction,
    min = _React$useContext.min,
    max = _React$useContext.max,
    disabled = _React$useContext.disabled,
    range = _React$useContext.range,
    classNames23 = _React$useContext.classNames;
  var trackPrefixCls = "".concat(prefixCls, "-track");
  var offsetStart = getOffset(start, min, max);
  var offsetEnd = getOffset(end, min, max);
  var onInternalStartMove = function onInternalStartMove2(e) {
    if (!disabled && onStartMove) {
      onStartMove(e, -1);
    }
  };
  var positionStyle = {};
  switch (direction) {
    case "rtl":
      positionStyle.right = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;
    case "btt":
      positionStyle.bottom = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(
        offsetEnd * 100 - offsetStart * 100,
        "%",
      );
      break;
    case "ttb":
      positionStyle.top = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(
        offsetEnd * 100 - offsetStart * 100,
        "%",
      );
      break;
    default:
      positionStyle.left = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
  }
  var className =
    replaceCls ||
    (0, import_classnames23.default)(
      trackPrefixCls,
      ((_cls = {}),
      _defineProperty(
        _cls,
        "".concat(trackPrefixCls, "-").concat(index2 + 1),
        index2 !== null && range,
      ),
      _defineProperty(
        _cls,
        "".concat(prefixCls, "-track-draggable"),
        onStartMove,
      ),
      _cls),
      classNames23.track,
    );
  return /* @__PURE__ */ React82.createElement("div", {
    className,
    style: _objectSpread2(_objectSpread2({}, positionStyle), style2),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove,
  });
}

// ../node_modules/rc-slider/es/Tracks/index.js
function Tracks(props) {
  var prefixCls = props.prefixCls,
    style2 = props.style,
    values = props.values,
    startPoint = props.startPoint,
    onStartMove = props.onStartMove;
  var _React$useContext = React83.useContext(context_default3),
    included = _React$useContext.included,
    range = _React$useContext.range,
    min = _React$useContext.min,
    styles = _React$useContext.styles,
    classNames23 = _React$useContext.classNames;
  var trackList = React83.useMemo(
    function () {
      if (!range) {
        if (values.length === 0) {
          return [];
        }
        var startValue =
          startPoint !== null && startPoint !== void 0 ? startPoint : min;
        var endValue = values[0];
        return [
          {
            start: Math.min(startValue, endValue),
            end: Math.max(startValue, endValue),
          },
        ];
      }
      var list = [];
      for (var i = 0; i < values.length - 1; i += 1) {
        list.push({
          start: values[i],
          end: values[i + 1],
        });
      }
      return list;
    },
    [values, range, startPoint, min],
  );
  var tracksNode = null;
  if (classNames23.tracks || styles.tracks) {
    tracksNode = /* @__PURE__ */ React83.createElement(Track, {
      index: null,
      prefixCls,
      start: trackList[0].start,
      end: trackList[trackList.length - 1].end,
      replaceCls: (0, import_classnames24.default)(
        classNames23.tracks,
        "".concat(prefixCls, "-tracks"),
      ),
      style: styles.tracks,
    });
  }
  return included
    ? /* @__PURE__ */ React83.createElement(
        React83.Fragment,
        null,
        tracksNode,
        trackList.map(function (_ref, index2) {
          var start = _ref.start,
            end = _ref.end;
          return /* @__PURE__ */ React83.createElement(Track, {
            index: index2,
            prefixCls,
            style: _objectSpread2(
              _objectSpread2({}, getIndex(style2, index2)),
              styles.track,
            ),
            start,
            end,
            key: index2,
            onStartMove,
          });
        }),
      )
    : null;
}

// ../node_modules/rc-slider/es/Slider.js
var Slider = /* @__PURE__ */ React84.forwardRef(function (props, ref) {
  var _cls;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? "rc-slider" : _props$prefixCls,
    className = props.className,
    style2 = props.style,
    classNames23 = props.classNames,
    styles = props.styles,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$keyboard = props.keyboard,
    keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
    autoFocus = props.autoFocus,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 100 : _props$max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    value = props.value,
    defaultValue = props.defaultValue,
    range = props.range,
    count = props.count,
    onChange = props.onChange,
    onBeforeChange = props.onBeforeChange,
    onAfterChange = props.onAfterChange,
    onChangeComplete = props.onChangeComplete,
    _props$allowCross = props.allowCross,
    allowCross = _props$allowCross === void 0 ? true : _props$allowCross,
    _props$pushable = props.pushable,
    pushable = _props$pushable === void 0 ? false : _props$pushable,
    draggableTrack = props.draggableTrack,
    reverse = props.reverse,
    vertical = props.vertical,
    _props$included = props.included,
    included = _props$included === void 0 ? true : _props$included,
    startPoint = props.startPoint,
    trackStyle = props.trackStyle,
    handleStyle = props.handleStyle,
    railStyle = props.railStyle,
    dotStyle = props.dotStyle,
    activeDotStyle = props.activeDotStyle,
    marks = props.marks,
    dots = props.dots,
    handleRender = props.handleRender,
    _props$tabIndex = props.tabIndex,
    tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
    ariaLabelForHandle = props.ariaLabelForHandle,
    ariaLabelledByForHandle = props.ariaLabelledByForHandle,
    ariaValueTextFormatterForHandle = props.ariaValueTextFormatterForHandle;
  var handlesRef = React84.useRef();
  var containerRef = React84.useRef();
  var direction = React84.useMemo(
    function () {
      if (vertical) {
        return reverse ? "ttb" : "btt";
      }
      return reverse ? "rtl" : "ltr";
    },
    [reverse, vertical],
  );
  var mergedMin = React84.useMemo(
    function () {
      return isFinite(min) ? min : 0;
    },
    [min],
  );
  var mergedMax = React84.useMemo(
    function () {
      return isFinite(max) ? max : 100;
    },
    [max],
  );
  var mergedStep = React84.useMemo(
    function () {
      return step !== null && step <= 0 ? 1 : step;
    },
    [step],
  );
  var mergedPush = React84.useMemo(
    function () {
      if (typeof pushable === "boolean") {
        return pushable ? mergedStep : false;
      }
      return pushable >= 0 ? pushable : false;
    },
    [pushable, mergedStep],
  );
  var markList = React84.useMemo(
    function () {
      var keys2 = Object.keys(marks || {});
      return keys2
        .map(function (key) {
          var mark = marks[key];
          var markObj = {
            value: Number(key),
          };
          if (
            mark &&
            _typeof(mark) === "object" &&
            !(/* @__PURE__ */ React84.isValidElement(mark)) &&
            ("label" in mark || "style" in mark)
          ) {
            markObj.style = mark.style;
            markObj.label = mark.label;
          } else {
            markObj.label = mark;
          }
          return markObj;
        })
        .filter(function (_ref) {
          var label = _ref.label;
          return label || typeof label === "number";
        })
        .sort(function (a, b) {
          return a.value - b.value;
        });
    },
    [marks],
  );
  var _useOffset = useOffset(
      mergedMin,
      mergedMax,
      mergedStep,
      markList,
      allowCross,
      mergedPush,
    ),
    _useOffset2 = _slicedToArray(_useOffset, 2),
    formatValue = _useOffset2[0],
    offsetValues = _useOffset2[1];
  var _useMergedState = useMergedState(defaultValue, {
      value,
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var rawValues = React84.useMemo(
    function () {
      var valueList =
        mergedValue === null || mergedValue === void 0
          ? []
          : Array.isArray(mergedValue)
            ? mergedValue
            : [mergedValue];
      var _valueList = _slicedToArray(valueList, 1),
        _valueList$ = _valueList[0],
        val0 = _valueList$ === void 0 ? mergedMin : _valueList$;
      var returnValues = mergedValue === null ? [] : [val0];
      if (range) {
        returnValues = _toConsumableArray(valueList);
        if (count || mergedValue === void 0) {
          var pointCount = count >= 0 ? count + 1 : 2;
          returnValues = returnValues.slice(0, pointCount);
          while (returnValues.length < pointCount) {
            var _returnValues;
            returnValues.push(
              (_returnValues = returnValues[returnValues.length - 1]) !==
                null && _returnValues !== void 0
                ? _returnValues
                : mergedMin,
            );
          }
        }
        returnValues.sort(function (a, b) {
          return a - b;
        });
      }
      returnValues.forEach(function (val, index2) {
        returnValues[index2] = formatValue(val);
      });
      return returnValues;
    },
    [mergedValue, range, mergedMin, count, formatValue],
  );
  var rawValuesRef = React84.useRef(rawValues);
  rawValuesRef.current = rawValues;
  var getTriggerValue = function getTriggerValue2(triggerValues) {
    return range ? triggerValues : triggerValues[0];
  };
  var triggerChange = function triggerChange2(nextValues) {
    var cloneNextValues = _toConsumableArray(nextValues).sort(function (a, b) {
      return a - b;
    });
    if (
      onChange &&
      !isEqual_default(cloneNextValues, rawValuesRef.current, true)
    ) {
      onChange(getTriggerValue(cloneNextValues));
    }
    setValue(cloneNextValues);
  };
  var finishChange = function finishChange2() {
    onAfterChange === null ||
      onAfterChange === void 0 ||
      onAfterChange(getTriggerValue(rawValuesRef.current));
    warning_default(
      !onAfterChange,
      "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead.",
    );
    onChangeComplete === null ||
      onChangeComplete === void 0 ||
      onChangeComplete(getTriggerValue(rawValuesRef.current));
  };
  var _useDrag = useDrag(
      containerRef,
      direction,
      rawValues,
      mergedMin,
      mergedMax,
      formatValue,
      triggerChange,
      finishChange,
      offsetValues,
    ),
    _useDrag2 = _slicedToArray(_useDrag, 4),
    draggingIndex = _useDrag2[0],
    draggingValue = _useDrag2[1],
    cacheValues = _useDrag2[2],
    onStartDrag = _useDrag2[3];
  var changeToCloseValue = function changeToCloseValue2(newValue, e) {
    if (!disabled) {
      var valueIndex = 0;
      var valueDist = mergedMax - mergedMin;
      rawValues.forEach(function (val, index2) {
        var dist = Math.abs(newValue - val);
        if (dist <= valueDist) {
          valueDist = dist;
          valueIndex = index2;
        }
      });
      var cloneNextValues = _toConsumableArray(rawValues);
      cloneNextValues[valueIndex] = newValue;
      if (range && !rawValues.length && count === void 0) {
        cloneNextValues.push(newValue);
      }
      onBeforeChange === null ||
        onBeforeChange === void 0 ||
        onBeforeChange(getTriggerValue(cloneNextValues));
      triggerChange(cloneNextValues);
      if (e) {
        onStartDrag(e, valueIndex, cloneNextValues);
      }
    }
  };
  var onSliderMouseDown = function onSliderMouseDown2(e) {
    e.preventDefault();
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      width = _containerRef$current.width,
      height = _containerRef$current.height,
      left = _containerRef$current.left,
      top = _containerRef$current.top,
      bottom = _containerRef$current.bottom,
      right = _containerRef$current.right;
    var clientX = e.clientX,
      clientY = e.clientY;
    var percent;
    switch (direction) {
      case "btt":
        percent = (bottom - clientY) / height;
        break;
      case "ttb":
        percent = (clientY - top) / height;
        break;
      case "rtl":
        percent = (right - clientX) / width;
        break;
      default:
        percent = (clientX - left) / width;
    }
    var nextValue = mergedMin + percent * (mergedMax - mergedMin);
    changeToCloseValue(formatValue(nextValue), e);
  };
  var _React$useState = React84.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    keyboardValue = _React$useState2[0],
    setKeyboardValue = _React$useState2[1];
  var onHandleOffsetChange = function onHandleOffsetChange2(
    offset,
    valueIndex,
  ) {
    if (!disabled) {
      var next2 = offsetValues(rawValues, offset, valueIndex);
      onBeforeChange === null ||
        onBeforeChange === void 0 ||
        onBeforeChange(getTriggerValue(rawValues));
      triggerChange(next2.values);
      setKeyboardValue(next2.value);
    }
  };
  React84.useEffect(
    function () {
      if (keyboardValue !== null) {
        var valueIndex = rawValues.indexOf(keyboardValue);
        if (valueIndex >= 0) {
          handlesRef.current.focus(valueIndex);
        }
      }
      setKeyboardValue(null);
    },
    [keyboardValue],
  );
  var mergedDraggableTrack = React84.useMemo(
    function () {
      if (draggableTrack && mergedStep === null) {
        if (true) {
          warning_default(
            false,
            "`draggableTrack` is not supported when `step` is `null`.",
          );
        }
        return false;
      }
      return draggableTrack;
    },
    [draggableTrack, mergedStep],
  );
  var onStartMove = function onStartMove2(e, valueIndex) {
    onStartDrag(e, valueIndex);
    onBeforeChange === null ||
      onBeforeChange === void 0 ||
      onBeforeChange(getTriggerValue(rawValuesRef.current));
  };
  var dragging = draggingIndex !== -1;
  React84.useEffect(
    function () {
      if (!dragging) {
        var valueIndex = rawValues.lastIndexOf(draggingValue);
        handlesRef.current.focus(valueIndex);
      }
    },
    [dragging],
  );
  var sortedCacheValues = React84.useMemo(
    function () {
      return _toConsumableArray(cacheValues).sort(function (a, b) {
        return a - b;
      });
    },
    [cacheValues],
  );
  var _React$useMemo = React84.useMemo(
      function () {
        if (!range) {
          return [mergedMin, sortedCacheValues[0]];
        }
        return [
          sortedCacheValues[0],
          sortedCacheValues[sortedCacheValues.length - 1],
        ];
      },
      [sortedCacheValues, range, mergedMin],
    ),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
    includedStart = _React$useMemo2[0],
    includedEnd = _React$useMemo2[1];
  React84.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        handlesRef.current.focus(0);
      },
      blur: function blur() {
        var _document = document,
          activeElement = _document.activeElement;
        if (containerRef.current.contains(activeElement)) {
          activeElement === null ||
            activeElement === void 0 ||
            activeElement.blur();
        }
      },
    };
  });
  React84.useEffect(function () {
    if (autoFocus) {
      handlesRef.current.focus(0);
    }
  }, []);
  var context = React84.useMemo(
    function () {
      return {
        min: mergedMin,
        max: mergedMax,
        direction,
        disabled,
        keyboard,
        step: mergedStep,
        included,
        includedStart,
        includedEnd,
        range,
        tabIndex,
        ariaLabelForHandle,
        ariaLabelledByForHandle,
        ariaValueTextFormatterForHandle,
        styles: styles || {},
        classNames: classNames23 || {},
      };
    },
    [
      mergedMin,
      mergedMax,
      direction,
      disabled,
      keyboard,
      mergedStep,
      included,
      includedStart,
      includedEnd,
      range,
      tabIndex,
      ariaLabelForHandle,
      ariaLabelledByForHandle,
      ariaValueTextFormatterForHandle,
      styles,
      classNames23,
    ],
  );
  return /* @__PURE__ */ React84.createElement(
    context_default3.Provider,
    {
      value: context,
    },
    /* @__PURE__ */ React84.createElement(
      "div",
      {
        ref: containerRef,
        className: (0, import_classnames25.default)(
          prefixCls,
          className,
          ((_cls = {}),
          _defineProperty(_cls, "".concat(prefixCls, "-disabled"), disabled),
          _defineProperty(_cls, "".concat(prefixCls, "-vertical"), vertical),
          _defineProperty(_cls, "".concat(prefixCls, "-horizontal"), !vertical),
          _defineProperty(
            _cls,
            "".concat(prefixCls, "-with-marks"),
            markList.length,
          ),
          _cls),
        ),
        style: style2,
        onMouseDown: onSliderMouseDown,
      },
      /* @__PURE__ */ React84.createElement("div", {
        className: (0, import_classnames25.default)(
          "".concat(prefixCls, "-rail"),
          classNames23 === null || classNames23 === void 0
            ? void 0
            : classNames23.rail,
        ),
        style: _objectSpread2(
          _objectSpread2({}, railStyle),
          styles === null || styles === void 0 ? void 0 : styles.rail,
        ),
      }),
      /* @__PURE__ */ React84.createElement(Tracks, {
        prefixCls,
        style: trackStyle,
        values: sortedCacheValues,
        startPoint,
        onStartMove: mergedDraggableTrack ? onStartMove : null,
      }),
      /* @__PURE__ */ React84.createElement(Steps, {
        prefixCls,
        marks: markList,
        dots,
        style: dotStyle,
        activeStyle: activeDotStyle,
      }),
      /* @__PURE__ */ React84.createElement(Handles_default, {
        ref: handlesRef,
        prefixCls,
        style: handleStyle,
        values: cacheValues,
        draggingIndex,
        onStartMove,
        onOffsetChange: onHandleOffsetChange,
        onFocus,
        onBlur,
        handleRender,
        onChangeComplete: finishChange,
      }),
      /* @__PURE__ */ React84.createElement(Marks, {
        prefixCls,
        marks: markList,
        onClick: changeToCloseValue,
      }),
    ),
  );
});
if (true) {
  Slider.displayName = "Slider";
}
var Slider_default = Slider;

// ../node_modules/rc-slider/es/index.js
var es_default6 = Slider_default;

// ../node_modules/antd/es/slider/SliderTooltip.js
import * as React85 from "react";
import { useRef as useRef28 } from "react";
("use client");
var SliderTooltip = /* @__PURE__ */ React85.forwardRef((props, ref) => {
  const { open } = props;
  const innerRef = useRef28(null);
  const rafRef = useRef28(null);
  function cancelKeepAlign() {
    raf_default.cancel(rafRef.current);
    rafRef.current = null;
  }
  function keepAlign() {
    rafRef.current = raf_default(() => {
      var _a;
      (_a = innerRef.current) === null || _a === void 0
        ? void 0
        : _a.forceAlign();
      rafRef.current = null;
    });
  }
  React85.useEffect(() => {
    if (open) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }
    return cancelKeepAlign;
  }, [open, props.title]);
  return /* @__PURE__ */ React85.createElement(
    tooltip_default,
    Object.assign(
      {
        ref: composeRef(innerRef, ref),
      },
      props,
    ),
  );
});
if (true) {
  SliderTooltip.displayName = "SliderTooltip";
}
var SliderTooltip_default = SliderTooltip;

// ../node_modules/antd/es/slider/style/index.js
var genBaseStyle = (token2) => {
  const {
    componentCls,
    antCls,
    controlSize,
    dotSize,
    marginFull,
    marginPart,
    colorFillContentHover,
    handleColorDisabled,
    calc,
  } = token2;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
      position: "relative",
      height: controlSize,
      margin: `${unit(marginPart)} ${unit(marginFull)}`,
      padding: 0,
      cursor: "pointer",
      touchAction: "none",
      [`&-vertical`]: {
        margin: `${unit(marginFull)} ${unit(marginPart)}`,
      },
      [`${componentCls}-rail`]: {
        position: "absolute",
        backgroundColor: token2.railBg,
        borderRadius: token2.borderRadiusXS,
        transition: `background-color ${token2.motionDurationMid}`,
      },
      [`${componentCls}-track,${componentCls}-tracks`]: {
        position: "absolute",
        transition: `background-color ${token2.motionDurationMid}`,
      },
      [`${componentCls}-track`]: {
        backgroundColor: token2.trackBg,
        borderRadius: token2.borderRadiusXS,
      },
      [`${componentCls}-track-draggable`]: {
        boxSizing: "content-box",
        backgroundClip: "content-box",
        border: "solid rgba(0,0,0,0)",
      },
      "&:hover": {
        [`${componentCls}-rail`]: {
          backgroundColor: token2.railHoverBg,
        },
        [`${componentCls}-track`]: {
          backgroundColor: token2.trackHoverBg,
        },
        [`${componentCls}-dot`]: {
          borderColor: colorFillContentHover,
        },
        [`${componentCls}-handle::after`]: {
          boxShadow: `0 0 0 ${unit(token2.handleLineWidth)} ${
            token2.colorPrimaryBorderHover
          }`,
        },
        [`${componentCls}-dot-active`]: {
          borderColor: token2.dotActiveBorderColor,
        },
      },
      [`${componentCls}-handle`]: {
        position: "absolute",
        width: token2.handleSize,
        height: token2.handleSize,
        outline: "none",
        // 扩大选区
        "&::before": {
          content: '""',
          position: "absolute",
          insetInlineStart: calc(token2.handleLineWidth).mul(-1).equal(),
          insetBlockStart: calc(token2.handleLineWidth).mul(-1).equal(),
          width: calc(token2.handleSize)
            .add(calc(token2.handleLineWidth).mul(2))
            .equal(),
          height: calc(token2.handleSize)
            .add(calc(token2.handleLineWidth).mul(2))
            .equal(),
          backgroundColor: "transparent",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: token2.handleSize,
          height: token2.handleSize,
          backgroundColor: token2.colorBgElevated,
          boxShadow: `0 0 0 ${unit(token2.handleLineWidth)} ${
            token2.handleColor
          }`,
          borderRadius: "50%",
          cursor: "pointer",
          transition: `
            inset-inline-start ${token2.motionDurationMid},
            inset-block-start ${token2.motionDurationMid},
            width ${token2.motionDurationMid},
            height ${token2.motionDurationMid},
            box-shadow ${token2.motionDurationMid}
          `,
        },
        "&:hover, &:active, &:focus": {
          "&::before": {
            // -(
            //   (token.handleSizeHover - token.handleSize) / 2 +
            //   token.handleLineWidthHover
            // ),
            insetInlineStart: calc(token2.handleSizeHover)
              .sub(token2.handleSize)
              .div(2)
              .add(token2.handleLineWidthHover)
              .mul(-1)
              .equal(),
            insetBlockStart: calc(token2.handleSizeHover)
              .sub(token2.handleSize)
              .div(2)
              .add(token2.handleLineWidthHover)
              .mul(-1)
              .equal(),
            width: calc(token2.handleSizeHover)
              .add(calc(token2.handleLineWidthHover).mul(2))
              .equal(),
            height: calc(token2.handleSizeHover)
              .add(calc(token2.handleLineWidthHover).mul(2))
              .equal(),
          },
          "&::after": {
            boxShadow: `0 0 0 ${unit(token2.handleLineWidthHover)} ${
              token2.handleActiveColor
            }`,
            width: token2.handleSizeHover,
            height: token2.handleSizeHover,
            insetInlineStart: token2
              .calc(token2.handleSize)
              .sub(token2.handleSizeHover)
              .div(2)
              .equal(),
            insetBlockStart: token2
              .calc(token2.handleSize)
              .sub(token2.handleSizeHover)
              .div(2)
              .equal(),
          },
        },
      },
      [`${componentCls}-mark`]: {
        position: "absolute",
        fontSize: token2.fontSize,
      },
      [`${componentCls}-mark-text`]: {
        position: "absolute",
        display: "inline-block",
        color: token2.colorTextDescription,
        textAlign: "center",
        wordBreak: "keep-all",
        cursor: "pointer",
        userSelect: "none",
        "&-active": {
          color: token2.colorText,
        },
      },
      [`${componentCls}-step`]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
      },
      [`${componentCls}-dot`]: {
        position: "absolute",
        width: dotSize,
        height: dotSize,
        backgroundColor: token2.colorBgElevated,
        border: `${unit(token2.handleLineWidth)} solid ${
          token2.dotBorderColor
        }`,
        borderRadius: "50%",
        cursor: "pointer",
        transition: `border-color ${token2.motionDurationSlow}`,
        pointerEvents: "auto",
        "&-active": {
          borderColor: token2.dotActiveBorderColor,
        },
      },
      [`&${componentCls}-disabled`]: {
        cursor: "not-allowed",
        [`${componentCls}-rail`]: {
          backgroundColor: `${token2.railBg} !important`,
        },
        [`${componentCls}-track`]: {
          backgroundColor: `${token2.trackBgDisabled} !important`,
        },
        [`
          ${componentCls}-dot
        `]: {
          backgroundColor: token2.colorBgElevated,
          borderColor: token2.trackBgDisabled,
          boxShadow: "none",
          cursor: "not-allowed",
        },
        [`${componentCls}-handle::after`]: {
          backgroundColor: token2.colorBgElevated,
          cursor: "not-allowed",
          width: token2.handleSize,
          height: token2.handleSize,
          boxShadow: `0 0 0 ${unit(
            token2.handleLineWidth,
          )} ${handleColorDisabled}`,
          insetInlineStart: 0,
          insetBlockStart: 0,
        },
        [`
          ${componentCls}-mark-text,
          ${componentCls}-dot
        `]: {
          cursor: `not-allowed !important`,
        },
      },
      [`&-tooltip ${antCls}-tooltip-inner`]: {
        minWidth: "unset",
      },
    }),
  };
};
var genDirectionStyle = (token2, horizontal) => {
  const { componentCls, railSize, handleSize, dotSize, marginFull, calc } =
    token2;
  const railPadding = horizontal ? "paddingBlock" : "paddingInline";
  const full = horizontal ? "width" : "height";
  const part = horizontal ? "height" : "width";
  const handlePos = horizontal ? "insetBlockStart" : "insetInlineStart";
  const markInset = horizontal ? "top" : "insetInlineStart";
  const handlePosSize = calc(railSize).mul(3).sub(handleSize).div(2).equal();
  const draggableBorderSize = calc(handleSize).sub(railSize).div(2).equal();
  const draggableBorder = horizontal
    ? {
        borderWidth: `${unit(draggableBorderSize)} 0`,
        transform: `translateY(${unit(
          calc(draggableBorderSize).mul(-1).equal(),
        )})`,
      }
    : {
        borderWidth: `0 ${unit(draggableBorderSize)}`,
        transform: `translateX(${unit(
          token2.calc(draggableBorderSize).mul(-1).equal(),
        )})`,
      };
  return {
    [railPadding]: railSize,
    [part]: calc(railSize).mul(3).equal(),
    [`${componentCls}-rail`]: {
      [full]: "100%",
      [part]: railSize,
    },
    [`${componentCls}-track,${componentCls}-tracks`]: {
      [part]: railSize,
    },
    [`${componentCls}-track-draggable`]: Object.assign({}, draggableBorder),
    [`${componentCls}-handle`]: {
      [handlePos]: handlePosSize,
    },
    [`${componentCls}-mark`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      // https://github.com/ant-design/ant-design/issues/43731
      [markInset]: calc(railSize)
        .mul(3)
        .add(horizontal ? 0 : marginFull)
        .equal(),
      [full]: "100%",
    },
    [`${componentCls}-step`]: {
      // Reset all
      insetInlineStart: 0,
      top: 0,
      [markInset]: railSize,
      [full]: "100%",
      [part]: railSize,
    },
    [`${componentCls}-dot`]: {
      position: "absolute",
      [handlePos]: calc(railSize).sub(dotSize).div(2).equal(),
    },
  };
};
var genHorizontalStyle = (token2) => {
  const { componentCls, marginPartWithMark } = token2;
  return {
    [`${componentCls}-horizontal`]: Object.assign(
      Object.assign({}, genDirectionStyle(token2, true)),
      {
        [`&${componentCls}-with-marks`]: {
          marginBottom: marginPartWithMark,
        },
      },
    ),
  };
};
var genVerticalStyle = (token2) => {
  const { componentCls } = token2;
  return {
    [`${componentCls}-vertical`]: Object.assign(
      Object.assign({}, genDirectionStyle(token2, false)),
      {
        height: "100%",
      },
    ),
  };
};
var prepareComponentToken4 = (token2) => {
  const increaseHandleWidth = 1;
  const controlSize = token2.controlHeightLG / 4;
  const controlSizeHover = token2.controlHeightSM / 2;
  const handleLineWidth = token2.lineWidth + increaseHandleWidth;
  const handleLineWidthHover = token2.lineWidth + increaseHandleWidth * 3;
  return {
    controlSize,
    railSize: 4,
    handleSize: controlSize,
    handleSizeHover: controlSizeHover,
    dotSize: 8,
    handleLineWidth,
    handleLineWidthHover,
    railBg: token2.colorFillTertiary,
    railHoverBg: token2.colorFillSecondary,
    trackBg: token2.colorPrimaryBorder,
    trackHoverBg: token2.colorPrimaryBorderHover,
    handleColor: token2.colorPrimaryBorder,
    handleActiveColor: token2.colorPrimary,
    handleColorDisabled: new TinyColor(token2.colorTextDisabled)
      .onBackground(token2.colorBgContainer)
      .toHexShortString(),
    dotBorderColor: token2.colorBorderSecondary,
    dotActiveBorderColor: token2.colorPrimaryBorder,
    trackBgDisabled: token2.colorBgContainerDisabled,
  };
};
var style_default5 = genStyleHooks(
  "Slider",
  (token2) => {
    const sliderToken = merge2(token2, {
      marginPart: token2
        .calc(token2.controlHeight)
        .sub(token2.controlSize)
        .div(2)
        .equal(),
      marginFull: token2.calc(token2.controlSize).div(2).equal(),
      marginPartWithMark: token2
        .calc(token2.controlHeightLG)
        .sub(token2.controlSize)
        .equal(),
    });
    return [
      genBaseStyle(sliderToken),
      genHorizontalStyle(sliderToken),
      genVerticalStyle(sliderToken),
    ];
  },
  prepareComponentToken4,
);

// ../node_modules/antd/es/slider/index.js
("use client");
var __rest8 = function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
};
function getTipFormatter(tipFormatter, legacyTipFormatter) {
  if (tipFormatter || tipFormatter === null) {
    return tipFormatter;
  }
  if (legacyTipFormatter || legacyTipFormatter === null) {
    return legacyTipFormatter;
  }
  return (val) => (typeof val === "number" ? val.toString() : "");
}
var Slider2 = /* @__PURE__ */ React86.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      range,
      className,
      rootClassName,
      style: style2,
      disabled,
      // Deprecated Props
      tooltipPrefixCls: legacyTooltipPrefixCls,
      tipFormatter: legacyTipFormatter,
      tooltipVisible: legacyTooltipVisible,
      getTooltipPopupContainer: legacyGetTooltipPopupContainer,
      tooltipPlacement: legacyTooltipPlacement,
    } = props,
    restProps = __rest8(props, [
      "prefixCls",
      "range",
      "className",
      "rootClassName",
      "style",
      "disabled",
      "tooltipPrefixCls",
      "tipFormatter",
      "tooltipVisible",
      "getTooltipPopupContainer",
      "tooltipPlacement",
    ]);
  const { direction, slider, getPrefixCls, getPopupContainer } =
    React86.useContext(ConfigContext);
  const contextDisabled = React86.useContext(DisabledContext_default);
  const mergedDisabled =
    disabled !== null && disabled !== void 0 ? disabled : contextDisabled;
  const [opens, setOpens] = React86.useState({});
  const toggleTooltipOpen = (index2, open) => {
    setOpens((prev2) =>
      Object.assign(Object.assign({}, prev2), {
        [index2]: open,
      }),
    );
  };
  const getTooltipPlacement = (placement, vertical) => {
    if (placement) {
      return placement;
    }
    if (!vertical) {
      return "top";
    }
    return direction === "rtl" ? "left" : "right";
  };
  const prefixCls = getPrefixCls("slider", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default5(prefixCls);
  const cls5 = (0, import_classnames26.default)(
    className,
    slider === null || slider === void 0 ? void 0 : slider.className,
    rootClassName,
    {
      [`${prefixCls}-rtl`]: direction === "rtl",
    },
    hashId,
    cssVarCls,
  );
  if (direction === "rtl" && !restProps.vertical) {
    restProps.reverse = !restProps.reverse;
  }
  const [mergedRange, draggableTrack] = React86.useMemo(() => {
    if (!range) {
      return [false];
    }
    return typeof range === "object"
      ? [true, range.draggableTrack]
      : [true, false];
  }, [range]);
  if (true) {
    const warning4 = devUseWarning("Slider");
    [
      ["tooltipPrefixCls", "prefixCls"],
      ["getTooltipPopupContainer", "getPopupContainer"],
      ["tipFormatter", "formatter"],
      ["tooltipPlacement", "placement"],
      ["tooltipVisible", "open"],
    ].forEach((_ref) => {
      let [deprecatedName, newName] = _ref;
      warning4.deprecated(
        !(deprecatedName in props),
        deprecatedName,
        `tooltip.${newName}`,
      );
    });
  }
  const handleRender = (node2, info) => {
    var _a;
    const { index: index2, dragging } = info;
    const { tooltip = {}, vertical } = props;
    const tooltipProps = Object.assign({}, tooltip);
    const {
      open: tooltipOpen,
      placement: tooltipPlacement,
      getPopupContainer: getTooltipPopupContainer,
      prefixCls: customizeTooltipPrefixCls,
      formatter: tipFormatter,
    } = tooltipProps;
    const mergedTipFormatter = getTipFormatter(
      tipFormatter,
      legacyTipFormatter,
    );
    const isTipFormatter = mergedTipFormatter
      ? opens[index2] || dragging
      : false;
    const open =
      (_a =
        tooltipOpen !== null && tooltipOpen !== void 0
          ? tooltipOpen
          : legacyTooltipVisible) !== null && _a !== void 0
        ? _a
        : tooltipOpen === void 0 && isTipFormatter;
    const passedProps = Object.assign(Object.assign({}, node2.props), {
      onMouseEnter: () => toggleTooltipOpen(index2, true),
      onMouseLeave: () => toggleTooltipOpen(index2, false),
      onFocus: (e) => {
        var _a2;
        toggleTooltipOpen(index2, true);
        (_a2 = restProps.onFocus) === null || _a2 === void 0
          ? void 0
          : _a2.call(restProps, e);
      },
      onBlur: (e) => {
        var _a2;
        toggleTooltipOpen(index2, false);
        (_a2 = restProps.onBlur) === null || _a2 === void 0
          ? void 0
          : _a2.call(restProps, e);
      },
    });
    return /* @__PURE__ */ React86.createElement(
      SliderTooltip_default,
      Object.assign({}, tooltipProps, {
        prefixCls: getPrefixCls(
          "tooltip",
          customizeTooltipPrefixCls !== null &&
            customizeTooltipPrefixCls !== void 0
            ? customizeTooltipPrefixCls
            : legacyTooltipPrefixCls,
        ),
        title: mergedTipFormatter ? mergedTipFormatter(info.value) : "",
        open,
        placement: getTooltipPlacement(
          tooltipPlacement !== null && tooltipPlacement !== void 0
            ? tooltipPlacement
            : legacyTooltipPlacement,
          vertical,
        ),
        key: index2,
        overlayClassName: `${prefixCls}-tooltip`,
        getPopupContainer:
          getTooltipPopupContainer ||
          legacyGetTooltipPopupContainer ||
          getPopupContainer,
      }),
      /* @__PURE__ */ React86.cloneElement(node2, passedProps),
    );
  };
  const mergedStyle = Object.assign(
    Object.assign(
      {},
      slider === null || slider === void 0 ? void 0 : slider.style,
    ),
    style2,
  );
  return wrapCSSVar(
    /* @__PURE__ */ React86.createElement(
      es_default6,
      Object.assign({}, restProps, {
        step: restProps.step,
        range: mergedRange,
        draggableTrack,
        className: cls5,
        style: mergedStyle,
        disabled: mergedDisabled,
        ref,
        prefixCls,
        handleRender,
      }),
    ),
  );
});
if (true) {
  Slider2.displayName = "Slider";
}
var slider_default = Slider2;

// ../node_modules/antd/es/index.js
("use client");
export {
  button_default2 as Button,
  flex_default as Flex,
  slider_default as Slider,
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@babel/runtime/helpers/esm/regeneratorRuntime.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
