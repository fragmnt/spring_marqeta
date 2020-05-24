webpackHotUpdate("static/development/pages/register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api */ \"./services/api.js\");\n\n\n\nvar _jsxFileName = \"/home/localuser/.devpost/spring_payments_marqeta/webapp/pages/register.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nfunction RegisterPage() {\n  _s();\n\n  var registrationForm = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      pswd = _useState2[0],\n      setPswd = _useState2[1];\n\n  var handleEChange = function handleEChange(event) {\n    setEmail(event.target.value);\n  };\n\n  var handlePChange = function handlePChange(event) {\n    setPswd(event.target.value);\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      var resp;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.next = 3;\n              return Object(_services_api__WEBPACK_IMPORTED_MODULE_4__[\"loginUser\"])(email, pswd);\n\n            case 3:\n              resp = _context.sent;\n              alert(JSON.stringify(resp));\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, \"return to homepage\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"Register an Account\"), __jsx(\"form\", {\n    ref: registrationForm,\n    onSubmit: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    type: \"email\",\n    onChange: handleEChange,\n    value: email,\n    placeholder: \"create a email address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }), __jsx(\"input\", {\n    type: \"password\",\n    onChange: handlePChange,\n    value: pswd,\n    placeholder: \"create a password\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \"register your account\")));\n}\n\n_s(RegisterPage, \"2y59z5Tn7W54SQDm2l1FFRd/svU=\");\n\n_c = RegisterPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"RegisterPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcz8wZWNiIl0sIm5hbWVzIjpbIlJlZ2lzdGVyUGFnZSIsInJlZ2lzdHJhdGlvbkZvcm0iLCJjcmVhdGVSZWYiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwc3dkIiwic2V0UHN3ZCIsImhhbmRsZUVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9naW5Vc2VyIiwicmVzcCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQ3BCLE1BQUlDLGdCQUFnQixHQUFHQyx1REFBUyxFQUFoQzs7QUFEb0Isa0JBR01DLHNEQUFRLENBQUMsRUFBRCxDQUhkO0FBQUEsTUFHYkMsS0FIYTtBQUFBLE1BR05DLFFBSE07O0FBQUEsbUJBSUlGLHNEQUFRLENBQUMsRUFBRCxDQUpaO0FBQUEsTUFJYkcsSUFKYTtBQUFBLE1BSVBDLE9BSk87O0FBTXBCLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCSixZQUFRLENBQUNJLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVI7QUFDSCxHQUZEOztBQUlBLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0gsS0FBRCxFQUFXO0FBQzNCRixXQUFPLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQUlFLFlBQVk7QUFBQSxnTUFBRyxpQkFBT0osS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkEsbUJBQUssQ0FBQ0ssY0FBTjtBQURlO0FBQUEscUJBRUVDLCtEQUFTLENBQUNYLEtBQUQsRUFBUUUsSUFBUixDQUZYOztBQUFBO0FBRVhVLGtCQUZXO0FBR2ZDLG1CQUFLLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmLENBQUQsQ0FBTDs7QUFIZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaSCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQU1BLFNBQ0ksbUVBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKLEVBR0k7QUFBTSxPQUFHLEVBQUVaLGdCQUFYO0FBQTZCLFlBQVEsRUFBRVksWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBUSxFQUFFTCxhQUE5QjtBQUE2QyxTQUFLLEVBQUVKLEtBQXBEO0FBQTJELGVBQVcsRUFBQyx3QkFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFRLEVBQUVRLGFBQWpDO0FBQWdELFNBQUssRUFBRU4sSUFBdkQ7QUFBNkQsZUFBVyxFQUFDLG1CQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhKLENBSEosQ0FESjtBQVdIOztHQS9CUU4sWTs7S0FBQUEsWTtBQWlDTUEsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge2xvZ2luVXNlcn0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcblxuZnVuY3Rpb24gUmVnaXN0ZXJQYWdlKCkge1xuICAgIGxldCByZWdpc3RyYXRpb25Gb3JtID0gY3JlYXRlUmVmKCk7XG5cbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwc3dkLCBzZXRQc3dkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgbGV0IGhhbmRsZUVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlUENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRQc3dkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgcmVzcCA9IGF3YWl0IGxvZ2luVXNlcihlbWFpbCwgcHN3ZCk7XG4gICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPnJldHVybiB0byBob21lcGFnZTwvTGluaz5cbiAgICAgICAgICAgIDxoMj5SZWdpc3RlciBhbiBBY2NvdW50PC9oMj5cbiAgICAgICAgICAgIDxmb3JtIHJlZj17cmVnaXN0cmF0aW9uRm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBvbkNoYW5nZT17aGFuZGxlRUNoYW5nZX0gdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj0nY3JlYXRlIGEgZW1haWwgYWRkcmVzcycgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIG9uQ2hhbmdlPXtoYW5kbGVQQ2hhbmdlfSB2YWx1ZT17cHN3ZH0gcGxhY2Vob2xkZXI9J2NyZWF0ZSBhIHBhc3N3b3JkJyAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24+cmVnaXN0ZXIgeW91ciBhY2NvdW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

})