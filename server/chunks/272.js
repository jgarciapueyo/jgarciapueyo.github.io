"use strict";
exports.id = 272;
exports.ids = [272];
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

/***/ 3659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./data/config.ts
var config = __webpack_require__(6074);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
// EXTERNAL MODULE: ./components/shared/AppWrapper/AppWrapper.tsx
var AppWrapper = __webpack_require__(1262);
;// CONCATENATED MODULE: ./components/shared/Navbar/Navbar.tsx







const NavbarLink = ({ href , children , onClick  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            onClick: onClick,
            className: "text-bgText pb-0.5 border-b-4 border-transparent hover:border-primary hover:text-primary",
            children: children
        })
    });
};
const Navbar = ()=>{
    const { theme , toggleTheme , showNavList , setShowNavList  } = (0,AppWrapper/* useAppContext */.bp)();
    const toggleNavList = ()=>setShowNavList(!showNavList);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: `
                ${showNavList ? "flex" : "invisible"}
                flex flex-col justify-center content-center items-center top-0 bottom-0 left-0 right-0 fixed w-full h-screen z-10 
                md:flex md:visible md:flex md:mr-10
                md:flex-row md:justify-end md:content-end md:relative md:w-auto md:h-auto
                `,
                children: [
                    config/* about */.jZ !== undefined && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "my-2 md:my-0 md:ml-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                            href: "/#about",
                            onClick: toggleNavList,
                            children: "About"
                        })
                    }),
                    config/* experience */.b8 !== undefined && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "my-2 md:my-0 md:ml-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                            href: "/#experience",
                            onClick: toggleNavList,
                            children: "Experience"
                        })
                    }),
                    config/* projects.length */.q.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "my-2 md:my-0 md:ml-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                            href: "/#projects",
                            onClick: toggleNavList,
                            children: "Projects"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "my-2 md:my-0 md:ml-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                            href: "/blog",
                            onClick: toggleNavList,
                            children: "Blog"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                "aria-label": "toggle theme",
                onClick: ()=>{
                    toggleTheme(theme == "light" ? "dark" : "light");
                },
                className: "mr-4 md:mr-0 z-20",
                children: theme == "light" ? /*#__PURE__*/ jsx_runtime_.jsx(md_.MdBrightness2, {
                    className: "text-primary text-xl sm:text-2xl"
                }) : /*#__PURE__*/ jsx_runtime_.jsx(io_.IoMdSunny, {
                    className: "text-primary text-xl sm:text-2xl"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                "aria-label": "toggle navigation",
                onClick: toggleNavList,
                className: "md:hidden z-20",
                children: showNavList ? /*#__PURE__*/ jsx_runtime_.jsx(md_.MdClose, {
                    className: "text-primary text-xl sm:text-2xl"
                }) : /*#__PURE__*/ jsx_runtime_.jsx(md_.MdMenu, {
                    className: "text-primary text-xl sm:text-2xl"
                })
            })
        ]
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/shared/Header/Header.tsx



const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "h-20 w-full flex items-center justify-end",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {})
    });
};
/* harmony default export */ const Header_Header = (Header);


/***/ }),

/***/ 1506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ blog)
/* harmony export */ });
const posts = [];
const blog = {
    claim: '"The best way to learn something is to teach it to someone"',
    shortDescription: "The purpose of this blog is to write and publicly share posts about technology, notes about interesting topics that learn or to start discussions and hear what other people think. I truly believe that exchanging ideas and experiences is the best way to improve, so any comment or feedback in the posts is welcome.",
    longDescription: "The purpose of this blog is to write and publicly share posts about technology, notes about interesting topics that learn or to start discussions and hear what other people think. I truly believe that exchanging ideas and experiences is the best way to improve, so any comment or feedback in the posts is welcome.",
    posts: posts,
    featuredPosts: posts
};


/***/ }),

/***/ 6074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b8": () => (/* binding */ experience),
/* harmony export */   "jZ": () => (/* binding */ about),
/* harmony export */   "q": () => (/* binding */ projects)
/* harmony export */ });
const about = {
    name: "Jorge Garcia",
    role: "Software Engineer",
    description: "I love to use technology to build products that have a positive impact in the world. Interested in distributed systems, cloud computing, good practices in software development and computer graphics. Looking for challenges that push me out of my comfort zone.",
    resume: "",
    social: {
        mail: "jgarciapueyo@gmail.com",
        linkedin: "https://linkedin.com/in/jgarciapueyo",
        github: "https://github.com/jgarciapueyo",
        medium: "https://medium.com/@jgarciapueyo"
    }
};
const experience = [
    {
        company: "Maximiliana",
        title: "Software Engineer",
        startDate: "May, 2021",
        endDate: "Present"
    }
];
const projects = [
    {
        name: "Transient Rendering in Mitsuba 2",
        description: "Extended Mitsuba 2, a research-oriented rendering system, to support transient rendering. Light transport rendering in transient state stops assuming the speed of ligth is infinite which allows observing interesting effects like direct and indirect light separation during its propagation. It supports polarized and spectral light transport rendering and can be executed in the CPU (scalar and vectorized) and in the GPU.",
        stack: [
            "C++",
            "Python"
        ],
        sourceCode: "https://github.com/jgarciapueyo/mitsuba2-transient"
    },
    {
        name: "Melnet - Speech Generation",
        description: "Implementation of MelNet, a probabilistic deep-learning model for generating audio using melspectrograms, in PyTorch using utilities for training big models in GPU memory limited machines.",
        stack: [
            "Python",
            "PyTorch"
        ],
        sourceCode: "https://github.com/jgarciapueyo/MelNet-SpeechGeneration"
    },
    {
        name: "Stoc (Compiler)",
        description: "Implementation of a compiler for a statically strongly typed programming language with C-like syntax. The compiler transforms Stoc source code into machine code using the LLVM infrastructure (same technology that it is used in production compilers like Clang, Swift compiler, etc.)",
        stack: [
            "C++",
            "LLVM"
        ],
        sourceCode: "https://github.com/jgarciapueyo/stoc"
    }, 
];


/***/ })

};
;