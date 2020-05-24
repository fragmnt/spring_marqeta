webpackHotUpdate("static/development/pages/register.js",{

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/*! exports provided: loginUser, registerUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginUser\", function() { return loginUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerUser\", function() { return registerUser; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar BASE_API_URL = 'http://127.0.0.1:9080';\nvar loginUser = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pEmail, pPassword) {\n    var response;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"\".concat(BASE_API_URL, \"/v1/users/login\"), {\n              email: pEmail,\n              password: pPassword\n            }, {\n              headers: {\n                // 'x-access-token': '',\n                'Content-Type': 'application/x-www-form-urlencoded'\n              },\n              json: true\n            });\n\n          case 2:\n            response = _context.sent;\n            return _context.abrupt(\"return\", response);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function loginUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar registerUser = function registerUser(email, name, username, password) {};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkuanM/ZDhjNCJdLCJuYW1lcyI6WyJCQVNFX0FQSV9VUkwiLCJsb2dpblVzZXIiLCJwRW1haWwiLCJwUGFzc3dvcmQiLCJheGlvcyIsInBvc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGVhZGVycyIsImpzb24iLCJyZXNwb25zZSIsInJlZ2lzdGVyVXNlciIsIm5hbWUiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBSUEsWUFBWSxHQUFHLHVCQUFuQjtBQUVPLElBQU1DLFNBQVM7QUFBQSw4TEFBRyxpQkFBT0MsTUFBUCxFQUFlQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0VDLDRDQUFLLENBQUNDLElBQU4sV0FBY0wsWUFBZCxzQkFBNkM7QUFDaEVNLG1CQUFLLEVBQUVKLE1BRHlEO0FBRWhFSyxzQkFBUSxFQUFFSjtBQUZzRCxhQUE3QyxFQUl2QjtBQUNJSyxxQkFBTyxFQUFFO0FBQ047QUFDQyxnQ0FBZ0I7QUFGWCxlQURiO0FBS0lDLGtCQUFJLEVBQUU7QUFMVixhQUp1QixDQURGOztBQUFBO0FBQ2ZDLG9CQURlO0FBQUEsNkNBYWRBLFFBYmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVFQsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmO0FBZ0JBLElBQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNMLEtBQUQsRUFBUU0sSUFBUixFQUFjQyxRQUFkLEVBQXdCTixRQUF4QixFQUFxQyxDQUVoRSxDQUZNIiwiZmlsZSI6Ii4vc2VydmljZXMvYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxubGV0IEJBU0VfQVBJX1VSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjkwODAnXG5cbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAocEVtYWlsLCBwUGFzc3dvcmQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRV9BUElfVVJMfS92MS91c2Vycy9sb2dpbmAsIHtcbiAgICAgICAgZW1haWw6IHBFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHBQYXNzd29yZFxuICAgIH0sIFxuICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAvLyAneC1hY2Nlc3MtdG9rZW4nOiAnJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICB9LFxuICAgICAgICBqc29uOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gKGVtYWlsLCBuYW1lLCB1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcblxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/api.js\n");

/***/ })

})