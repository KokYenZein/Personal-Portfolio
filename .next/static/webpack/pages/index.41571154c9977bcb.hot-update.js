"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/partials/BlogSection.tsx":
/*!*************************************************!*\
  !*** ./src/components/partials/BlogSection.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_shared_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/shared/Post */ \"./src/components/shared/Post.tsx\");\n/* harmony import */ var _data_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/posts */ \"./src/data/posts.ts\");\n/* harmony import */ var _components_shared_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/shared/SectionTitle */ \"./src/components/shared/SectionTitle.tsx\");\nvar _this = undefined;\n\n\n\n\nvar BlogSection = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: \"Latest Posts\"\n            }, void 0, false, {\n                fileName: \"/Users/bananazein/Documents/Projects/Personal-Portfolio/src/components/partials/BlogSection.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-0 grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8\",\n                children: _data_posts__WEBPACK_IMPORTED_MODULE_2__.posts.filter(function(_, index) {\n                    return index < 3;\n                }).map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/blog/\".concat(post.id),\n                        thumbnailUrl: post.thumbnailUrl,\n                        title: post.title,\n                        publishedAt: post.publishedAt\n                    }, post.id, false, {\n                        fileName: \"/Users/bananazein/Documents/Projects/Personal-Portfolio/src/components/partials/BlogSection.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/bananazein/Documents/Projects/Personal-Portfolio/src/components/partials/BlogSection.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = BlogSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogSection);\nvar _c;\n$RefreshReg$(_c, \"BlogSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYXJ0aWFscy9CbG9nU2VjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTRDO0FBQ1A7QUFDdUI7QUFFNUQsSUFBTUcsV0FBVyxHQUFHLFdBQU07SUFDeEIscUJBQ0U7OzBCQUNFLDhEQUFDRCx1RUFBWTswQkFBQyxjQUFZOzs7OztxQkFBZTswQkFDekMsOERBQUNFLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrREFBa0Q7MEJBQzlESixxREFDUSxDQUFDLFNBQUNNLENBQUMsRUFBRUMsS0FBSzsyQkFBS0EsS0FBSyxHQUFHLENBQUM7aUJBQUEsQ0FBQyxDQUMvQkMsR0FBRyxDQUFDLFNBQUNDLElBQUk7eUNBQ1IsOERBQUNWLCtEQUFJO3dCQUVIVyxJQUFJLEVBQUUsUUFBTyxDQUFVLE9BQVJELElBQUksQ0FBQ0UsRUFBRSxDQUFFO3dCQUN4QkMsWUFBWSxFQUFFSCxJQUFJLENBQUNHLFlBQVk7d0JBQy9CQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSzt3QkFDakJDLFdBQVcsRUFBRUwsSUFBSSxDQUFDSyxXQUFXO3VCQUp4QkwsSUFBSSxDQUFDRSxFQUFFOzs7OzZCQUtaO2lCQUNILENBQUM7Ozs7O3FCQUNBOztvQkFDTCxDQUNIO0FBQ0osQ0FBQztBQW5CS1QsS0FBQUEsV0FBVztBQXFCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wYXJ0aWFscy9CbG9nU2VjdGlvbi50c3g/MjgxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zdCBmcm9tICdAL2NvbXBvbmVudHMvc2hhcmVkL1Bvc3QnO1xuaW1wb3J0IHsgcG9zdHMgfSBmcm9tICdAL2RhdGEvcG9zdHMnO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdAL2NvbXBvbmVudHMvc2hhcmVkL1NlY3Rpb25UaXRsZSc7XG5cbmNvbnN0IEJsb2dTZWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VjdGlvblRpdGxlPkxhdGVzdCBQb3N0czwvU2VjdGlvblRpdGxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0wIGdyaWQgZ2FwLTggc206Z2FwLTQgbWQ6Z3JpZC1jb2xzLTMgbGc6Z2FwLThcIj5cbiAgICAgICAge3Bvc3RzXG4gICAgICAgICAgLmZpbHRlcigoXywgaW5kZXgpID0+IGluZGV4IDwgMylcbiAgICAgICAgICAubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8UG9zdFxuICAgICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICAgIGhyZWY9e2AvYmxvZy8ke3Bvc3QuaWR9YH1cbiAgICAgICAgICAgICAgdGh1bWJuYWlsVXJsPXtwb3N0LnRodW1ibmFpbFVybH1cbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwb3N0LnB1Ymxpc2hlZEF0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUG9zdCIsInBvc3RzIiwiU2VjdGlvblRpdGxlIiwiQmxvZ1NlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJmaWx0ZXIiLCJfIiwiaW5kZXgiLCJtYXAiLCJwb3N0IiwiaHJlZiIsImlkIiwidGh1bWJuYWlsVXJsIiwidGl0bGUiLCJwdWJsaXNoZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/partials/BlogSection.tsx\n"));

/***/ })

});