webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Dashboard.js":
/*!*********************************!*\
  !*** ./components/Dashboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/api */ \"./services/api.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/localuser/.devpost/spring_payments_marqeta/webapp/components/Dashboard.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Dashboard = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Dashboard, _React$Component);\n\n  var _super = _createSuper(Dashboard);\n\n  function Dashboard(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Dashboard);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"logOut\", function () {\n      localStorage.removeItem('token');\n      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/');\n      return;\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchUserData\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var resp;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_services_api__WEBPACK_IMPORTED_MODULE_12__[\"getUserInformation\"])();\n\n            case 2:\n              resp = _context.sent;\n\n              if (!resp) {\n                _context.next = 10;\n                break;\n              }\n\n              if (!(resp.status === 200)) {\n                _context.next = 8;\n                break;\n              }\n\n              return _context.abrupt(\"return\", resp.data.user);\n\n            case 8:\n              if (!(resp.status === 500)) {\n                _context.next = 10;\n                break;\n              }\n\n              return _context.abrupt(\"return\", \"\");\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"componentDidMount\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var userData;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              window.document.title = \"My Account | Meta Travel\";\n              _context2.next = 3;\n              return _this.fetchUserData();\n\n            case 3:\n              userData = _context2.sent;\n\n              _this.setState({\n                user: {\n                  email: userData.email,\n                  id: userData.id,\n                  nickname: userData.nickname,\n                  username: userData.username,\n                  pfp_url: userData.profile_photo_url\n                }\n              });\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    })));\n\n    _this.state = {\n      user: {}\n    };\n    _this.logOut = _this.logOut.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.fetchUserData = _this.fetchUserData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Dashboard, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }\n      }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        logout: this.logOut(),\n        user: this.state.user,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 17\n        }\n      }), __jsx(\"h4\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 17\n        }\n      }, \"M E T A _ IDentity Services Platform\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 17\n        }\n      }, __jsx(\"h3\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }\n      }, this.state.user.nickname, \"!\"), __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }\n      }, this.state.user.email)), \"You are logged in. This will be your dashboard.\");\n    }\n  }]);\n\n  return Dashboard;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC5qcz9hNGQwIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInByb3BzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIlJvdXRlciIsInB1c2giLCJnZXRVc2VySW5mb3JtYXRpb24iLCJyZXNwIiwic3RhdHVzIiwiZGF0YSIsInVzZXIiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInRpdGxlIiwiZmV0Y2hVc2VyRGF0YSIsInVzZXJEYXRhIiwic2V0U3RhdGUiLCJlbWFpbCIsImlkIiwibmlja25hbWUiLCJ1c2VybmFtZSIsInBmcF91cmwiLCJwcm9maWxlX3Bob3RvX3VybCIsInN0YXRlIiwibG9nT3V0IiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFM7Ozs7O0FBQ0YscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxpTkFVVixZQUFNO0FBQ1hDLGtCQUFZLENBQUNDLFVBQWIsQ0FBd0IsT0FBeEI7QUFDQUMseURBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDQTtBQUNILEtBZGtCOztBQUFBLHNaQWdCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNPQyx5RUFBa0IsRUFEekI7O0FBQUE7QUFDTkMsa0JBRE07O0FBQUEsbUJBRVJBLElBRlE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBR0pBLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUhaO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUlHRCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsSUFKYjs7QUFBQTtBQUFBLG9CQUtHSCxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FMbkI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBTUcsRUFOSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhCRzs7QUFBQSwwWkEyQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCRyxvQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxLQUFoQixHQUF3QiwwQkFBeEI7QUFEZ0I7QUFBQSxxQkFFTyxNQUFLQyxhQUFMLEVBRlA7O0FBQUE7QUFFVkMsc0JBRlU7O0FBR2hCLG9CQUFLQyxRQUFMLENBQWM7QUFDVk4sb0JBQUksRUFBRTtBQUNGTyx1QkFBSyxFQUFFRixRQUFRLENBQUNFLEtBRGQ7QUFFRkMsb0JBQUUsRUFBRUgsUUFBUSxDQUFDRyxFQUZYO0FBR0ZDLDBCQUFRLEVBQUVKLFFBQVEsQ0FBQ0ksUUFIakI7QUFJRkMsMEJBQVEsRUFBRUwsUUFBUSxDQUFDSyxRQUpqQjtBQUtGQyx5QkFBTyxFQUFFTixRQUFRLENBQUNPO0FBTGhCO0FBREksZUFBZDs7QUFIZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EzQkQ7O0FBR2YsVUFBS0MsS0FBTCxHQUFhO0FBQ1RiLFVBQUksRUFBRTtBQURHLEtBQWI7QUFHQSxVQUFLYyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLHlHQUFkO0FBQ0EsVUFBS1gsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CVyxJQUFuQix5R0FBckI7QUFQZTtBQVFsQjs7Ozs2QkFrQ1E7QUFDTCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFSSxNQUFDLGdEQUFEO0FBQVEsY0FBTSxFQUFFLEtBQUtELE1BQUwsRUFBaEI7QUFBK0IsWUFBSSxFQUFFLEtBQUtELEtBQUwsQ0FBV2IsSUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUssS0FBS2EsS0FBTCxDQUFXYixJQUFYLENBQWdCUyxRQUFyQixNQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFPLEtBQUtJLEtBQUwsQ0FBV2IsSUFBWCxDQUFnQk8sS0FBdkIsQ0FGSixDQUpKLG9EQURKO0FBWUg7Ozs7RUF4RG1CUyw0Q0FBSyxDQUFDQyxTOztBQTJEZjNCLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EYXNoYm9hcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtzZXRTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtnZXRVc2VySW5mb3JtYXRpb259IGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHVzZXI6IHt9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubG9nT3V0ID0gdGhpcy5sb2dPdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mZXRjaFVzZXJEYXRhID0gdGhpcy5mZXRjaFVzZXJEYXRhLmJpbmQodGhpcyk7XG4gICAgfTtcblxuICAgIGxvZ091dCA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZ2V0VXNlckluZm9ybWF0aW9uKCk7XG4gICAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwLmRhdGEudXNlcjsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3Auc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gXCJNeSBBY2NvdW50IHwgTWV0YSBUcmF2ZWxcIlxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHRoaXMuZmV0Y2hVc2VyRGF0YSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlckRhdGEuZW1haWwsXG4gICAgICAgICAgICAgICAgaWQ6IHVzZXJEYXRhLmlkLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiB1c2VyRGF0YS5uaWNrbmFtZSxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlckRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGZwX3VybDogdXNlckRhdGEucHJvZmlsZV9waG90b191cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7LyogcGFzcyB0aGlzLnN0YXRlLnVzZXIgcHJvcHMgdG8gbmF2YmFyICovfVxuICAgICAgICAgICAgICAgIDxOYXZiYXIgbG9nb3V0PXt0aGlzLmxvZ091dCgpfSB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9IC8+XG4gICAgICAgICAgICAgICAgPGg0Pk0gRSBUIEEgXyBJRGVudGl0eSBTZXJ2aWNlcyBQbGF0Zm9ybTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLnVzZXIubmlja25hbWV9ITwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLnVzZXIuZW1haWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFlvdSBhcmUgbG9nZ2VkIGluLiBUaGlzIHdpbGwgYmUgeW91ciBkYXNoYm9hcmQuXG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Dashboard.js\n");

/***/ })

})