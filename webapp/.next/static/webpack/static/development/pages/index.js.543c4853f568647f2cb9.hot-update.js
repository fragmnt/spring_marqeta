webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/HomePage.module.css */ \"./styles/HomePage.module.css\");\n/* harmony import */ var _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/localuser/.devpost/spring_payments_marqeta/webapp/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction HomePage() {\n  var loggedIn = function loggedIn() {\n    if (true) {\n      var accessToken = localStorage.getItem('token');\n      if (accessToken) return true;\n      if (!accessToken) return false;\n    }\n  };\n\n  var logOut = function logOut() {\n    localStorage.removeItem('token');\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n    return;\n  };\n\n  var fetchUserData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var resp;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return getUserInformation();\n\n            case 2:\n              resp = _context.sent;\n\n              if (resp) {\n                if (resp.status === 200) {\n                  console.log(resp.data.user);\n                }\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchUserData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, loggedIn() ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, \"M E T A _ IDentity Services Platform\"), \"You are logged in. This will be your dashboard.\", __jsx(\"button\", {\n    onClick: function onClick() {\n      return fetchUserData();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, \"View user data.\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return logOut();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, \"Logout\")) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  }, \"M E T A _ I D\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }, \"Decentralized Travel Identity\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"Protect your identity and payment information when traveling abroad. Powered by Marqeta and DiD.\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/register\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 21\n    }\n  }, __jsx(\"button\", {\n    className: _styles_HomePage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.rgBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 25\n    }\n  }, \"Get Started\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/login\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 25\n    }\n  }, \"Already a user? Login.\"))));\n}\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibG9nZ2VkSW4iLCJhY2Nlc3NUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dPdXQiLCJyZW1vdmVJdGVtIiwiUm91dGVyIiwicHVzaCIsImZldGNoVXNlckRhdGEiLCJnZXRVc2VySW5mb3JtYXRpb24iLCJyZXNwIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1c2VyIiwic3R5bGVzIiwibWFpbiIsInJnQnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsUUFBVCxHQUFvQjtBQUVoQixNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ2pCLGNBQXFCO0FBQ2pCLFVBQUlDLFdBQVcsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWxCO0FBQ0EsVUFBSUYsV0FBSixFQUFpQixPQUFPLElBQVA7QUFDakIsVUFBSSxDQUFDQSxXQUFMLEVBQWtCLE9BQU8sS0FBUDtBQUNyQjtBQUNKLEdBTkQ7O0FBUUEsTUFBSUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNmRixnQkFBWSxDQUFDRyxVQUFiLENBQXdCLE9BQXhCO0FBQ0FDLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0E7QUFDSCxHQUpEOztBQU1BLE1BQUlDLGFBQWE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHQyxrQkFBa0IsRUFEckI7O0FBQUE7QUFDVkMsa0JBRFU7O0FBRWhCLGtCQUFJQSxJQUFKLEVBQVU7QUFDTixvQkFBSUEsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3JCQyx5QkFBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxJQUF0QjtBQUE4QjtBQUNyQzs7QUFMZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiUCxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQVFBLFNBQ1E7QUFBSyxhQUFTLEVBQUVRLGtFQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ2pCLFFBQVEsS0FDVCxtRUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQURKLHFEQUdJO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVEsYUFBYSxFQUFuQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEosRUFJSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1KLE1BQU0sRUFBWjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixDQURTLEdBUUgsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUhGLEVBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBRVksa0VBQU0sQ0FBQ0UsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixDQUpGLEVBU0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLENBVEYsQ0FUTixDQURSO0FBNEJIOztLQXBEUW5CLFE7QUFzRE1BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZVBhZ2UubW9kdWxlLmNzcyc7XG5cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cbiAgICBsZXQgbG9nZ2VkSW4gPSAoKSA9PiB7IFxuICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgIGlmIChhY2Nlc3NUb2tlbikgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAoIWFjY2Vzc1Rva2VuKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbG9nT3V0ID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBnZXRVc2VySW5mb3JtYXRpb24oKTtcbiAgICAgICAgaWYgKHJlc3ApIHtcbiAgICAgICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhLnVzZXIpOyB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICB7bG9nZ2VkSW4oKSA/IFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDQ+TSBFIFQgQSBfIElEZW50aXR5IFNlcnZpY2VzIFBsYXRmb3JtPC9oND5cbiAgICAgICAgICAgICAgICBZb3UgYXJlIGxvZ2dlZCBpbi4gVGhpcyB3aWxsIGJlIHlvdXIgZGFzaGJvYXJkLlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZmV0Y2hVc2VyRGF0YSgpfT5WaWV3IHVzZXIgZGF0YS48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvZ091dCgpfT5cbiAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Lz4gOiA8PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NIEUgVCBBIF8gSSBEPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RGVjZW50cmFsaXplZCBUcmF2ZWwgSWRlbnRpdHk8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlByb3RlY3QgeW91ciBpZGVudGl0eSBhbmQgcGF5bWVudCBpbmZvcm1hdGlvbiB3aGVuIHRyYXZlbGluZyBhYnJvYWQuIFBvd2VyZWQgYnkgTWFycWV0YSBhbmQgRGlELjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcmVnaXN0ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yZ0J0bn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbHJlYWR5IGEgdXNlcj8gTG9naW4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./services/api.js":
false

})