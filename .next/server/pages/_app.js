/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/hooks/use-theme.tsx":
/*!*********************************!*\
  !*** ./src/hooks/use-theme.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Theme\": () => (/* binding */ Theme),\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider),\n/* harmony export */   \"useTheme\": () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Theme;\n(function(Theme) {\n    Theme[\"LIGHT\"] = \"light\";\n    Theme[\"DARK\"] = \"dark\";\n})(Theme || (Theme = {}));\nconst ThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);\nconst ThemeProvider = ({ children  })=>{\n    const [theme, setTheme] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(Theme.LIGHT);\n    const toggleTheme = ()=>{\n        if (theme === Theme.LIGHT) {\n            setTheme(Theme.DARK);\n            document.documentElement.classList.add(Theme.DARK);\n            localStorage.setItem(\"theme\", Theme.DARK);\n        } else {\n            setTheme(Theme.LIGHT);\n            document.documentElement.classList.remove(Theme.DARK);\n            localStorage.setItem(\"theme\", Theme.LIGHT);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const localTheme = localStorage.getItem(\"theme\");\n        if (localTheme) {\n            setTheme(localTheme);\n            if (localTheme === Theme.DARK) {\n                document.documentElement.classList.add(Theme.DARK);\n            }\n        }\n        return ()=>{\n            setTheme(Theme.LIGHT);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/bananazein/Documents/Projects/Personal-Portfolio/src/hooks/use-theme.tsx\",\n        lineNumber: 47,\n        columnNumber: 10\n    }, undefined);\n};\nconst useTheme = ()=>{\n    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ThemeContext);\n    if (context === undefined) {\n        throw new Error(\"useTheme must be used within a ThemeProvider\");\n    }\n    return context;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlLXRoZW1lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEQ7SUFFbkQsS0FHTjtVQUhXRSxLQUFLO0lBQUxBLEtBQUssQ0FDZkMsT0FBSyxJQUFHLE9BQU87SUFETEQsS0FBSyxDQUVmRSxNQUFJLElBQUcsTUFBTTtHQUZIRixLQUFLLEtBQUxBLEtBQUs7QUFjakIsTUFBTUcsWUFBWSxpQkFBR0wsMERBQW1CLENBQStCTyxTQUFTLENBQUM7QUFFakYsTUFBTUMsYUFBYSxHQUFpQyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQ3BFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1gscURBQWMsQ0FBUUUsS0FBSyxDQUFDQyxLQUFLLENBQUM7SUFFNUQsTUFBTVUsV0FBVyxHQUFHLElBQU07UUFDeEIsSUFBSUgsS0FBSyxLQUFLUixLQUFLLENBQUNDLEtBQUssRUFBRTtZQUN6QlEsUUFBUSxDQUFDVCxLQUFLLENBQUNFLElBQUksQ0FBQyxDQUFDO1lBQ3JCVSxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUNmLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUM7WUFDbkRjLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sRUFBRWpCLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTztZQUNMTyxRQUFRLENBQUNULEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQUM7WUFDdEJXLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxTQUFTLENBQUNJLE1BQU0sQ0FBQ2xCLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUM7WUFDdERjLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sRUFBRWpCLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFFREYsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTW9CLFVBQVUsR0FBR0gsWUFBWSxDQUFDSSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2hELElBQUlELFVBQVUsRUFBRTtZQUNkVixRQUFRLENBQUNVLFVBQVUsQ0FBVSxDQUFDO1lBQzlCLElBQUlBLFVBQVUsS0FBS25CLEtBQUssQ0FBQ0UsSUFBSSxFQUFFO2dCQUM3QlUsUUFBUSxDQUFDQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDZixLQUFLLENBQUNFLElBQUksQ0FBQyxDQUFDO1lBQ3JELENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxJQUFNO1lBQ1hPLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFBTyw4REFBQ0UsWUFBWSxDQUFDa0IsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWQsS0FBSztZQUFFRyxXQUFXO1NBQUU7a0JBQUdKLFFBQVE7Ozs7O2lCQUF5QixDQUFDO0FBQ2xHLENBQUM7QUFFRCxNQUFNZ0IsUUFBUSxHQUFHLElBQU07SUFDckIsTUFBTUMsT0FBTyxHQUFHMUIsdURBQWdCLENBQUNLLFlBQVksQ0FBQztJQUM5QyxJQUFJcUIsT0FBTyxLQUFLbkIsU0FBUyxFQUFFO1FBQ3pCLE1BQU0sSUFBSXFCLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxPQUFPRixPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVrQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbGF0ZXN0Ly4vc3JjL2hvb2tzL3VzZS10aGVtZS50c3g/OGEwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBlbnVtIFRoZW1lIHtcbiAgTElHSFQgPSAnbGlnaHQnLFxuICBEQVJLID0gJ2RhcmsnLFxufVxuXG50eXBlIFRoZW1lQ29udGV4dFR5cGUgPSB7XG4gIHRoZW1lOiBUaGVtZTtcbiAgdG9nZ2xlVGhlbWU6ICgpID0+IHZvaWQ7XG59O1xuXG50eXBlIFRoZW1lUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxUaGVtZUNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5jb25zdCBUaGVtZVByb3ZpZGVyOiBSZWFjdC5GQzxUaGVtZVByb3ZpZGVyUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IFJlYWN0LnVzZVN0YXRlPFRoZW1lPihUaGVtZS5MSUdIVCk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgaWYgKHRoZW1lID09PSBUaGVtZS5MSUdIVCkge1xuICAgICAgc2V0VGhlbWUoVGhlbWUuREFSSyk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChUaGVtZS5EQVJLKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIFRoZW1lLkRBUkspO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaGVtZShUaGVtZS5MSUdIVCk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShUaGVtZS5EQVJLKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIFRoZW1lLkxJR0hUKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2NhbFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgaWYgKGxvY2FsVGhlbWUpIHtcbiAgICAgIHNldFRoZW1lKGxvY2FsVGhlbWUgYXMgVGhlbWUpO1xuICAgICAgaWYgKGxvY2FsVGhlbWUgPT09IFRoZW1lLkRBUkspIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoVGhlbWUuREFSSyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzZXRUaGVtZShUaGVtZS5MSUdIVCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCB0b2dnbGVUaGVtZSB9fT57Y2hpbGRyZW59PC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVRoZW1lIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBUaGVtZVByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyLCB1c2VUaGVtZSB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiVGhlbWUiLCJMSUdIVCIsIkRBUksiLCJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVN0YXRlIiwidG9nZ2xlVGhlbWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmUiLCJsb2NhbFRoZW1lIiwiZ2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VUaGVtZSIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/use-theme.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/use-theme */ \"./src/hooks/use-theme.tsx\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/app.scss */ \"./src/styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_use_theme__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/bananazein/Documents/Projects/Personal-Portfolio/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bananazein/Documents/Projects/Personal-Portfolio/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBa0Q7QUFDdkI7QUFHM0IsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNILDJEQUFhO2tCQUNaLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2QsQ0FDaEI7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbGF0ZXN0Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0AvaG9va3MvdXNlLXRoZW1lJztcbmltcG9ydCAnQC9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();