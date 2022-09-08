"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Or": () => (/* binding */ AppWrapper),
/* harmony export */   "bp": () => (/* binding */ useAppContext)
/* harmony export */ });
/* unused harmony export useNavbarState */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    theme: "light",
    toggleTheme: (theme)=>{},
    showNavList: false,
    setShowNavList: (activate)=>{}
});
const AppWrapper = ({ children  })=>{
    const { 0: theme , 1: toggleTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("light");
    const { 0: showNavList , 1: setShowNavList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: {
            theme,
            toggleTheme,
            showNavList,
            setShowNavList
        },
        children: children
    });
};
const useAppContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
};
const useNavbarState = ()=>{
    return useState(false);
};


/***/ }),

/***/ 3010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/shared/AppWrapper/AppWrapper.tsx
var AppWrapper = __webpack_require__(1262);
;// CONCATENATED MODULE: ./components/shared/Layout/Layout.tsx



const Layout = ({ children  })=>{
    const { theme  } = (0,AppWrapper/* useAppContext */.bp)();
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: `${theme === "light" ? "theme-light" : "theme-dark"}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-6xl w-11/12 my-0 mx-auto ",
            children: children
        })
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(AppWrapper/* AppWrapper */.Or, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3010));
module.exports = __webpack_exports__;

})();