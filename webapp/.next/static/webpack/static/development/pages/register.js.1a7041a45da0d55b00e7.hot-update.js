webpackHotUpdate("static/development/pages/register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ \"./services/api.js\");\n/* harmony import */ var _styles_Auth_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Auth.module.css */ \"./styles/Auth.module.css\");\n/* harmony import */ var _styles_Auth_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Auth_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/home/localuser/.devpost/spring_payments_marqeta/webapp/pages/register.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction RegistrationPage() {\n  _s();\n\n  var registrationForm = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      pswd = _useState2[0],\n      setPswd = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      nickname = _useState3[0],\n      setNickname = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      username = _useState4[0],\n      setUsername = _useState4[1];\n\n  var handleEChange = function handleEChange(event) {\n    setEmail(event.target.value);\n  };\n\n  var handlePChange = function handlePChange(event) {\n    setPswd(event.target.value);\n  };\n\n  var handleNChange = function handleNChange(event) {\n    setNickname(event.target.value);\n  };\n\n  var handleUChange = function handleUChange(event) {\n    setUsername(event.target.value);\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n      var resp;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.next = 3;\n              return Object(_services_api__WEBPACK_IMPORTED_MODULE_5__[\"registerUser\"])(email, nickname, username, pswd);\n\n            case 3:\n              resp = _context.sent;\n\n              if (resp && resp.status === 201) {\n                localStorage.setItem('token', resp.data.accessToken);\n                setEmail(\"\");\n                setPswd(\"\");\n                setUsername(\"\");\n                setNickname(\"\");\n                next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n              } else if (resp && resp.status === 409) {\n                alert('Try again with a different email. This account already exists!');\n                setEmail(\"\");\n                setPswd(\"\");\n                setUsername(\"\");\n                setNickname(\"\");\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, \"Return to homepage\")), __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    ref: registrationForm,\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, \"Register to get started using Meta.\"), __jsx(\"label\", {\n    htmlFor: \"nickname\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, \"Name\"), __jsx(\"input\", {\n    type: \"nickname\",\n    onChange: handleNChange,\n    value: nickname,\n    placeholder: \"Enter your full name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"username\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, \"Username\"), __jsx(\"input\", {\n    type: \"username\",\n    onChange: handleUChange,\n    value: username,\n    placeholder: \"Pick a username\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, \"Email\"), __jsx(\"input\", {\n    type: \"email\",\n    onChange: handleEChange,\n    value: email,\n    placeholder: \"Enter your email address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, \"Password\"), __jsx(\"input\", {\n    type: \"password\",\n    onChange: handlePChange,\n    value: pswd,\n    placeholder: \"Pick a strong password\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    className: _styles_Auth_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.athBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, \"Sign up\")));\n}\n\n_s(RegistrationPage, \"/pfqWJ9K8IfDQYKzDndSYok6e9A=\");\n\n_c = RegistrationPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"RegistrationPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcz8wZWNiIl0sIm5hbWVzIjpbIlJlZ2lzdHJhdGlvblBhZ2UiLCJyZWdpc3RyYXRpb25Gb3JtIiwiY3JlYXRlUmVmIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicHN3ZCIsInNldFBzd2QiLCJuaWNrbmFtZSIsInNldE5pY2tuYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImhhbmRsZUVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUENoYW5nZSIsImhhbmRsZU5DaGFuZ2UiLCJoYW5kbGVVQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlclVzZXIiLCJyZXNwIiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJhY2Nlc3NUb2tlbiIsIlJvdXRlciIsInB1c2giLCJhbGVydCIsInN0eWxlcyIsImF0aEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLGdCQUFULEdBQTRCO0FBQUE7O0FBQ3hCLE1BQUlDLGdCQUFnQixHQUFHQyx1REFBUyxFQUFoQzs7QUFEd0Isa0JBR0VDLHNEQUFRLENBQUMsRUFBRCxDQUhWO0FBQUEsTUFHakJDLEtBSGlCO0FBQUEsTUFHVkMsUUFIVTs7QUFBQSxtQkFJQUYsc0RBQVEsQ0FBQyxFQUFELENBSlI7QUFBQSxNQUlqQkcsSUFKaUI7QUFBQSxNQUlYQyxPQUpXOztBQUFBLG1CQUtRSixzREFBUSxDQUFDLEVBQUQsQ0FMaEI7QUFBQSxNQUtqQkssUUFMaUI7QUFBQSxNQUtQQyxXQUxPOztBQUFBLG1CQU1RTixzREFBUSxDQUFDLEVBQUQsQ0FOaEI7QUFBQSxNQU1qQk8sUUFOaUI7QUFBQSxNQU1QQyxXQU5POztBQVF4QixNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUND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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBUUk7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkosRUFTSTtBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLFlBQVEsRUFBRUUsYUFBOUI7QUFBNkMsU0FBSyxFQUFFUixLQUFwRDtBQUEyRCxlQUFXLEVBQUMsMEJBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVJO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSixFQVdJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsWUFBUSxFQUFFWSxhQUFqQztBQUFnRCxTQUFLLEVBQUVWLElBQXZEO0FBQTZELGVBQVcsRUFBQyx3QkFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLEVBYUk7QUFBUSxhQUFTLEVBQUV5Qiw4REFBTSxDQUFDQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkosQ0FOSixDQURKO0FBMEJIOztHQXJFUWhDLGdCOztLQUFBQSxnQjtBQXVFTUEsK0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHtyZWdpc3RlclVzZXJ9IGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BdXRoLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBSZWdpc3RyYXRpb25QYWdlKCkge1xuICAgIGxldCByZWdpc3RyYXRpb25Gb3JtID0gY3JlYXRlUmVmKCk7XG5cbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwc3dkLCBzZXRQc3dkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtuaWNrbmFtZSwgc2V0Tmlja25hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGxldCBoYW5kbGVFQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZVBDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0UHN3ZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGxldCBoYW5kbGVOQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldE5pY2tuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgbGV0IGhhbmRsZVVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciByZXNwID0gYXdhaXQgcmVnaXN0ZXJVc2VyKGVtYWlsLCBuaWNrbmFtZSwgdXNlcm5hbWUsIHBzd2QpO1xuICAgICAgICBpZiAocmVzcCAmJiByZXNwLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3AuZGF0YS5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICAgICBzZXRQc3dkKFwiXCIpO1xuICAgICAgICAgICBzZXRVc2VybmFtZShcIlwiKTtcbiAgICAgICAgICAgc2V0Tmlja25hbWUoXCJcIik7XG4gICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcCAmJiByZXNwLnN0YXR1cyA9PT0gNDA5KSB7XG4gICAgICAgICAgICBhbGVydCgnVHJ5IGFnYWluIHdpdGggYSBkaWZmZXJlbnQgZW1haWwuIFRoaXMgYWNjb3VudCBhbHJlYWR5IGV4aXN0cyEnKTtcbiAgICAgICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICAgICAgc2V0UHN3ZChcIlwiKTtcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKFwiXCIpO1xuICAgICAgICAgICAgc2V0Tmlja25hbWUoXCJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIFJldHVybiB0byBob21lcGFnZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHJlZj17cmVnaXN0cmF0aW9uRm9ybX0gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGg0PlJlZ2lzdGVyIHRvIGdldCBzdGFydGVkIHVzaW5nIE1ldGEuPC9oND5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmlja25hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nbmlja25hbWUnIG9uQ2hhbmdlPXtoYW5kbGVOQ2hhbmdlfSB2YWx1ZT17bmlja25hbWV9IHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGZ1bGwgbmFtZScgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd1c2VybmFtZScgb25DaGFuZ2U9e2hhbmRsZVVDaGFuZ2V9IHZhbHVlPXt1c2VybmFtZX0gcGxhY2Vob2xkZXI9J1BpY2sgYSB1c2VybmFtZScgLz5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBvbkNoYW5nZT17aGFuZGxlRUNoYW5nZX0gdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJyAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBvbkNoYW5nZT17aGFuZGxlUENoYW5nZX0gdmFsdWU9e3Bzd2R9IHBsYWNlaG9sZGVyPSdQaWNrIGEgc3Ryb25nIHBhc3N3b3JkJyAvPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hdGhCdG59PlNpZ24gdXA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25QYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

})