(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkstms_test_task_3"] = self["webpackChunkstms_test_task_3"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    71301:
    /*!************************************************!*\
      !*** ./src/app/app-root/app-root.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRootComponent": function AppRootComponent() {
          return (
            /* binding */
            _AppRootComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var browser_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! browser-detect */
      14155);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/core.module */
      40294);
      /* harmony import */


      var _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/settings/settings.actions */
      40005);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sidenav */
      627);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      43635);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      40093);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      63266);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      45159);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2795);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      79661);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/menu */
      87227);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      3323);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      77820);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      59298);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      14147);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/core */
      13828);

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function AppRootComponent_a_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppRootComponent_a_11_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

            return _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, item_r8.link));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, item_r8.label), " ");
        }
      }

      function AppRootComponent_button_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, item_r11.link));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, item_r11.label), " ");
        }
      }

      function AppRootComponent_button_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppRootComponent_button_31_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r12.onLoginClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "stms.menu.login"), " ");
        }
      }

      function AppRootComponent_button_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        }
      }

      function AppRootComponent_span_45_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var l_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", l_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", l_r16.toUpperCase(), " ");
        }
      }

      function AppRootComponent_span_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function AppRootComponent_span_45_Template_mat_select_selectionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17.onLanguageSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppRootComponent_span_45_mat_option_2_Template, 2, 2, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var language_r14 = ctx.ngIf;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", language_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.languages);
        }
      }

      var _AppRootComponent = /*#__PURE__*/function () {
        function _AppRootComponent(store, storageService) {
          _classCallCheck(this, _AppRootComponent);

          this.store = store;
          this.storageService = storageService;
          this.isProd = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production;
          this.envName = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.envName;
          this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.versions.app;
          this.year = new Date().getFullYear();
          this.languages = ['en', 'he'];
          this.navItems = [{
            link: 'patients',
            label: 'stms.menu.patients'
          }, {
            link: 'orders',
            label: 'stms.menu.orders'
          }, {
            link: 'follow-list',
            label: 'stms.menu.follow-list'
          }];
          this.navigationSideMenu = [].concat(_toConsumableArray(this.navItems), [{
            link: 'settings',
            label: 'stms.menu.settings'
          }]);
        }

        _createClass(_AppRootComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.storageService.testLocalStorage();

            if (_AppRootComponent.isIEorEdgeOrSafari()) {
              this.store.dispatch((0, _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__.actionSettingsChangeAnimationsPageDisabled)({
                pageAnimationsDisabled: true
              }));
            }

            this.isAuthenticated$ = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_core_core_module__WEBPACK_IMPORTED_MODULE_2__.selectIsAuthenticated));
            this.stickyHeader$ = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_core_core_module__WEBPACK_IMPORTED_MODULE_2__.selectSettingsStickyHeader));
            this.language$ = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_core_core_module__WEBPACK_IMPORTED_MODULE_2__.selectSettingsLanguage));
            this.theme$ = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_core_core_module__WEBPACK_IMPORTED_MODULE_2__.selectEffectiveTheme));
          }
        }, {
          key: "onLoginClick",
          value: function onLoginClick() {
            this.store.dispatch((0, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.authLogin)());
          }
        }, {
          key: "onLogoutClick",
          value: function onLogoutClick() {
            this.store.dispatch((0, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.authLogout)());
          }
        }, {
          key: "onLanguageSelect",
          value: function onLanguageSelect(_ref) {
            var language = _ref.value;
            this.store.dispatch((0, _core_settings_settings_actions__WEBPACK_IMPORTED_MODULE_3__.actionSettingsChangeLanguage)({
              language: language
            }));
          }
        }], [{
          key: "isIEorEdgeOrSafari",
          value: function isIEorEdgeOrSafari() {
            return ['ie', 'edge', 'safari'].includes((0, browser_detect__WEBPACK_IMPORTED_MODULE_0__["default"])().name);
          }
        }]);

        return _AppRootComponent;
      }();

      _AppRootComponent.ɵfac = function AppRootComponent_Factory(t) {
        return new (t || _AppRootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_core_module__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService));
      };

      _AppRootComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AppRootComponent,
        selectors: [["st-root"]],
        decls: 52,
        vars: 36,
        consts: [["mode", "push"], ["sidenav", ""], [1, "branding"], ["src", "assets/logo.png", "alt", "logo"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "wrapper"], [1, "toolbar"], ["color", "primary"], ["mat-icon-button", "", 1, "d-md-none", 3, "click"], ["icon", "bars"], ["routerLink", "", 1, "branding", "spacer", "center", "d-inline", "d-sm-none"], ["routerLink", "", 1, "branding", "spacer", "d-none", "d-sm-inline", "d-md-none"], ["routerLink", "", 1, "branding", "spacer", "d-none", "d-md-inline"], [1, "d-none", "d-md-inline"], ["mat-button", "", "class", "nav-button", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-button", "", "mat-stroked-button", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["toolbarUserMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["icon", "power-off"], ["mat-icon-button", "", "routerLink", "settings", 1, "d-none", "d-sm-inline"], ["icon", "cog"], [4, "ngIf"], [1, "content"], ["o", "outlet"], [1, "footer"], [1, "row"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink", "click"], ["mat-button", "", "routerLinkActive", "active", 1, "nav-button", 3, "routerLink"], ["mat-button", "", "mat-stroked-button", "", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["icon", "user-circle"], [3, "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function AppRootComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-sidenav", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AppRootComponent_a_11_Template, 3, 6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-toolbar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppRootComponent_Template_button_click_17_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "fa-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, AppRootComponent_button_30_Template, 3, 6, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AppRootComponent_button_31_Template, 3, 3, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, AppRootComponent_button_33_Template, 2, 1, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-menu", null, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppRootComponent_Template_button_click_37_listener() {
              return ctx.onLogoutClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "fa-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "fa-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, AppRootComponent_span_45_Template, 3, 2, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "router-outlet", null, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("theme-wrapper " + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 16, ctx.theme$));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 18, "stms.title.short"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.navigationSideMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("position", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 20, ctx.stickyHeader$) ? "fixed" : "inherit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-elevation-z4", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 22, ctx.stickyHeader$));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 24, "stms.title.short"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 26, "stms.title.long"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.navigationSideMenu);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 28, ctx.isAuthenticated$));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 30, ctx.isAuthenticated$));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](42, 32, "stms.menu.logout"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 34, ctx.language$));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@routeAnimations", _r7.isActivated && _r7.activatedRoute.routeConfig.data && _r7.activatedRoute.routeConfig.data.title);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
        styles: [".theme-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  display: flex;\n  z-index: 10;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n  padding: 4px 15px 0 15px;\n  text-overflow: ellipsis;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  width: 48px;\n  height: 48px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  margin: 0 0 0 20px;\n  width: 40px;\n  font-size: 14px;\n}\n\n@media (max-width: 992px) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .nav-button[_ngcontent-%COMP%] {\n    min-width: 0;\n    padding: 0 10px;\n  }\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  margin-top: 64px;\n  overflow: hidden;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 0 15px;\n  text-align: center;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: padding 0.5s;\n  display: inline-block;\n  padding: 20px 5px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  width: 35px;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 75px;\n  padding: 0 0 0 3px;\n  overflow: hidden;\n  text-align: left;\n  white-space: nowrap;\n  transition: width 0.5s;\n}\n\n@media (min-width: 992px) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n  }\n}\n\n@media (max-width: 768px) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 0;\n    padding: 0;\n  }\n}\n\n@media (max-width: 576px) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 20px 5px;\n  }\n}\n\n@media (min-width: 576px) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  mat-sidenav-container[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 15px;\n  }\n}\n\n@media (max-width: 600px) {\n  mat-sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    margin-top: 56px !important;\n  }\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 8px 10px;\n  font-size: 20px;\n  font-weight: 500;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 48px;\n  margin: 2px 10px 0 0;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .branding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n}\n\nmat-sidenav[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1yb290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBREY7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBREo7O0FBR0k7RUFDRSxrQkFBQTtBQUROOztBQUlJO0VBQ0UsZUFBQTtBQUZOOztBQUtJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUhOOztBQUtNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIUjs7QUFPSTtFQUNFLGtCQUFBO0FBTE47O0FBUUk7RUFDRSxjQUFBO0FBTk47O0FBU0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUE47O0FBVUk7RUFDRTtJQUNFLFlBQUE7SUFDQSxlQUFBO0VBUk47QUFDRjs7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVZKOztBQVlJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFWTjs7QUFhSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFYTjs7QUFhTTtFQUNFLGNBQUE7QUFYUjs7QUFjVTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQVpaOztBQWNZO0VBQ0UscUJBQUE7QUFaZDs7QUFlWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBYmQ7O0FBZ0JZO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWRkOztBQWtCVTtFQUNFO0lBQ0Usa0JBQUE7RUFoQlo7QUFDRjs7QUFtQlU7RUFDRTtJQUNFLGFBQUE7RUFqQlo7RUFtQlk7SUFDRSxRQUFBO0lBQ0EsVUFBQTtFQWpCZDtBQUNGOztBQXFCVTtFQUNFO0lBQ0UsaUJBQUE7RUFuQlo7QUFDRjs7QUF1QlE7RUFDRTtJQUNFLGtCQUFBO0VBckJWO0VBdUJVO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VBckJaO0FBQ0Y7O0FBNEJFO0VBQ0U7SUFDRSwyQkFBQTtFQTFCSjtBQUNGOztBQThCQTtFQUNFLFlBQUE7QUEzQkY7O0FBNkJFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBM0JKOztBQTZCSTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQTNCTjs7QUE4Qkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUE1Qk47O0FBZ0NFO0VBQ0UsY0FBQTtBQTlCSiIsImZpbGUiOiJhcHAtcm9vdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMtdmFyaWFibGVzXCI7XG5cbi50aGVtZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICAudG9vbGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgei1pbmRleDogMTA7XG5cbiAgICAubmF2LWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDAgMTBweCAwIDA7XG4gICAgfVxuXG4gICAgZmEtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgLmJyYW5kaW5nIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwYWRkaW5nOiA0cHggMTVweCAwIDE1cHg7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLnNwYWNlciB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG5cbiAgICBtYXQtc2VsZWN0IHtcbiAgICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBsZykpIHtcbiAgICAgIC5uYXYtYnV0dG9uIHtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLndyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmNvbnRlbnQge1xuICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiA2NHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAucm93IHtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG5cbiAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggNXB4O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmYS1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDNweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgbGcpKSB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBtZCkpIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgc20pKSB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIHNtKSkge1xuICAgICAgICAgIC5zaWduYXR1cmUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHRvb2xiYXItYnJlYWtwb2ludCkge1xuICAgIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDU2cHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG5cbiAgLmJyYW5kaW5nIHtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgbWFyZ2luOiAycHggMTBweCAwIDA7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDNweDtcbiAgICB9XG4gIH1cblxuICAubWF0LW5hdi1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxufVxuIl19 */"],
        data: {
          animation: [_core_core_module__WEBPACK_IMPORTED_MODULE_2__.routeAnimations]
        }
      });
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      79661);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var routes = [{
        path: '',
        redirectTo: 'patients',
        pathMatch: 'full'
      }, {
        path: 'patients',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_patients_patients_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./features/patients/patients.module */
          13758)).then(function (m) {
            return m.PatientsModule;
          });
        }
      }, {
        path: 'orders',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_orders_orders_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./features/orders/orders.module */
          45992)).then(function (m) {
            return m.OrdersModule;
          });
        }
      }, {
        path: 'follow-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_follow-list_follow-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./features/follow-list/follow-list.module */
          81560)).then(function (m) {
            return m.FollowListModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_features_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./features/settings/settings.module */
          56867)).then(function (m) {
            return m.SettingsModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'patients'
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
          scrollPositionRestoration: 'enabled',
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules,
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    41137:
    /*!*******************************************************!*\
      !*** ./src/app/core/animations/animations.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnimationsService": function AnimationsService() {
          return (
            /* binding */
            _AnimationsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var _AnimationsService = /*#__PURE__*/function () {
        function _AnimationsService() {
          _classCallCheck(this, _AnimationsService);

          _AnimationsService.routeAnimationType = 'NONE';
        }

        _createClass(_AnimationsService, [{
          key: "updateRouteAnimationType",
          value: function updateRouteAnimationType(pageAnimations, elementsAnimations) {
            _AnimationsService.routeAnimationType = pageAnimations && elementsAnimations ? 'ALL' : pageAnimations ? 'PAGE' : elementsAnimations ? 'ELEMENTS' : 'NONE';
          }
        }], [{
          key: "isRouteAnimationsType",
          value: function isRouteAnimationsType(type) {
            return _AnimationsService.routeAnimationType === type;
          }
        }]);

        return _AnimationsService;
      }();

      _AnimationsService.routeAnimationType = 'NONE';

      _AnimationsService.ɵfac = function AnimationsService_Factory(t) {
        return new (t || _AnimationsService)();
      };

      _AnimationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _AnimationsService,
        factory: _AnimationsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    1015:
    /*!*****************************************************!*\
      !*** ./src/app/core/animations/route.animations.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ROUTE_ANIMATIONS_ELEMENTS": function ROUTE_ANIMATIONS_ELEMENTS() {
          return (
            /* binding */
            _ROUTE_ANIMATIONS_ELEMENTS
          );
        },

        /* harmony export */
        "routeAnimations": function routeAnimations() {
          return (
            /* binding */
            _routeAnimations
          );
        },

        /* harmony export */
        "isRouteAnimationsAll": function isRouteAnimationsAll() {
          return (
            /* binding */
            _isRouteAnimationsAll
          );
        },

        /* harmony export */
        "isRouteAnimationsNone": function isRouteAnimationsNone() {
          return (
            /* binding */
            _isRouteAnimationsNone
          );
        },

        /* harmony export */
        "isRouteAnimationsPage": function isRouteAnimationsPage() {
          return (
            /* binding */
            _isRouteAnimationsPage
          );
        },

        /* harmony export */
        "isRouteAnimationsElements": function isRouteAnimationsElements() {
          return (
            /* binding */
            _isRouteAnimationsElements
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      82458);
      /* harmony import */


      var _animations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./animations.service */
      41137);

      var _ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';
      var STEPS_ALL = [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.query)(':enter > *', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        opacity: 0,
        position: 'fixed'
      }), {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.query)(':enter .' + _ROUTE_ANIMATIONS_ELEMENTS, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        opacity: 0
      }), {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.sequence)([(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.query)(':leave > *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translateY(0%)',
        opacity: 1
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('0.2s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translateY(-3%)',
        opacity: 0
      })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        position: 'fixed'
      })], {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.query)(':enter > *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translateY(-3%)',
        opacity: 0,
        position: 'static'
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('0.5s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translateY(0%)',
        opacity: 1
      }))], {
        optional: true
      })]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.query)(':enter .' + _ROUTE_ANIMATIONS_ELEMENTS, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.stagger)(75, [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translateY(10%)',
        opacity: 0
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('0.5s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
        transform: 'translateY(0%)',
        opacity: 1
      }))]), {
        optional: true
      })];
      var STEPS_NONE = [];
      var STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
      var STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];

      var _routeAnimations = (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('routeAnimations', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)(_isRouteAnimationsAll, STEPS_ALL), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)(_isRouteAnimationsNone, STEPS_NONE), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)(_isRouteAnimationsPage, STEPS_PAGE), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)(_isRouteAnimationsElements, STEPS_ELEMENTS)]);

      function _isRouteAnimationsAll() {
        return _animations_service__WEBPACK_IMPORTED_MODULE_0__.AnimationsService.isRouteAnimationsType('ALL');
      }

      function _isRouteAnimationsNone() {
        return _animations_service__WEBPACK_IMPORTED_MODULE_0__.AnimationsService.isRouteAnimationsType('NONE');
      }

      function _isRouteAnimationsPage() {
        return _animations_service__WEBPACK_IMPORTED_MODULE_0__.AnimationsService.isRouteAnimationsType('PAGE');
      }

      function _isRouteAnimationsElements() {
        return _animations_service__WEBPACK_IMPORTED_MODULE_0__.AnimationsService.isRouteAnimationsType('ELEMENTS');
      }
      /***/

    },

    /***/
    31265:
    /*!*************************************************!*\
      !*** ./src/app/core/auth/auth-guard.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuardService": function AuthGuardService() {
          return (
            /* binding */
            _AuthGuardService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _auth_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.selectors */
      54787);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var _AuthGuardService = /*#__PURE__*/function () {
        function _AuthGuardService(store) {
          _classCallCheck(this, _AuthGuardService);

          this.store = store;
        }

        _createClass(_AuthGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            return this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(_auth_selectors__WEBPACK_IMPORTED_MODULE_0__.selectIsAuthenticated));
          }
        }]);

        return _AuthGuardService;
      }();

      _AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || _AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
      };

      _AuthGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AuthGuardService,
        factory: _AuthGuardService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    54283:
    /*!*******************************************!*\
      !*** ./src/app/core/auth/auth.actions.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "authLogin": function authLogin() {
          return (
            /* binding */
            _authLogin
          );
        },

        /* harmony export */
        "authLogout": function authLogout() {
          return (
            /* binding */
            _authLogout
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      88182);

      var _authLogin = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login');

      var _authLogout = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout');
      /***/

    },

    /***/
    40168:
    /*!*******************************************!*\
      !*** ./src/app/core/auth/auth.effects.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AUTH_KEY": function AUTH_KEY() {
          return (
            /* binding */
            _AUTH_KEY
          );
        },

        /* harmony export */
        "AuthEffects": function AuthEffects() {
          return (
            /* binding */
            _AuthEffects
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/effects */
      18760);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../local-storage/local-storage.service */
      97316);
      /* harmony import */


      var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.actions */
      54283);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      79661);

      var _AUTH_KEY = 'AUTH';

      var _AuthEffects = /*#__PURE__*/_createClass(function _AuthEffects(actions$, localStorageService, router) {
        var _this = this;

        _classCallCheck(this, _AuthEffects);

        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.router = router;
        this.login = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authLogin), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function () {
            return _this.localStorageService.setItem(_AUTH_KEY, {
              isAuthenticated: true
            });
          }));
        }, {
          dispatch: false
        });
        this.logout = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
          return _this.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authLogout), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function () {
            _this.router.navigate(['']);

            _this.localStorageService.setItem(_AUTH_KEY, {
              isAuthenticated: false
            });
          }));
        }, {
          dispatch: false
        });
      });

      _AuthEffects.ɵfac = function AuthEffects_Factory(t) {
        return new (t || _AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _AuthEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AuthEffects,
        factory: _AuthEffects.ɵfac
      });
      /***/
    },

    /***/
    13131:
    /*!*******************************************!*\
      !*** ./src/app/core/auth/auth.reducer.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initialState": function initialState() {
          return (
            /* binding */
            _initialState
          );
        },

        /* harmony export */
        "authReducer": function authReducer() {
          return (
            /* binding */
            _authReducer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.actions */
      54283);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      88182);

      var _initialState = {
        isAuthenticated: false
      };
      var reducer = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(_initialState, (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.authLogin, function (state) {
        return Object.assign(Object.assign({}, state), {
          isAuthenticated: true
        });
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_0__.authLogout, function (state) {
        return Object.assign(Object.assign({}, state), {
          isAuthenticated: false
        });
      }));

      function _authReducer(state, action) {
        return reducer(state, action);
      }
      /***/

    },

    /***/
    54787:
    /*!*********************************************!*\
      !*** ./src/app/core/auth/auth.selectors.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "selectAuth": function selectAuth() {
          return (
            /* binding */
            _selectAuth
          );
        },

        /* harmony export */
        "selectIsAuthenticated": function selectIsAuthenticated() {
          return (
            /* binding */
            _selectIsAuthenticated
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _core_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core.state */
      20649);

      var _selectAuth = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_core_state__WEBPACK_IMPORTED_MODULE_0__.selectAuthState, function (state) {
        return state;
      });

      var _selectIsAuthenticated = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_core_state__WEBPACK_IMPORTED_MODULE_0__.selectAuthState, function (state) {
        return state.isAuthenticated;
      });
      /***/

    },

    /***/
    40294:
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TitleService": function TitleService() {
          return (
            /* reexport safe */
            _title_title_service__WEBPACK_IMPORTED_MODULE_6__.TitleService
          );
        },

        /* harmony export */
        "selectAuth": function selectAuth() {
          return (
            /* reexport safe */
            _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__.selectAuth
          );
        },

        /* harmony export */
        "authLogin": function authLogin() {
          return (
            /* reexport safe */
            _auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__.authLogin
          );
        },

        /* harmony export */
        "authLogout": function authLogout() {
          return (
            /* reexport safe */
            _auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__.authLogout
          );
        },

        /* harmony export */
        "routeAnimations": function routeAnimations() {
          return (
            /* reexport safe */
            _animations_route_animations__WEBPACK_IMPORTED_MODULE_7__.routeAnimations
          );
        },

        /* harmony export */
        "LocalStorageService": function LocalStorageService() {
          return (
            /* reexport safe */
            _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_11__.LocalStorageService
          );
        },

        /* harmony export */
        "selectIsAuthenticated": function selectIsAuthenticated() {
          return (
            /* reexport safe */
            _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__.selectIsAuthenticated
          );
        },

        /* harmony export */
        "ROUTE_ANIMATIONS_ELEMENTS": function ROUTE_ANIMATIONS_ELEMENTS() {
          return (
            /* reexport safe */
            _animations_route_animations__WEBPACK_IMPORTED_MODULE_7__.ROUTE_ANIMATIONS_ELEMENTS
          );
        },

        /* harmony export */
        "AnimationsService": function AnimationsService() {
          return (
            /* reexport safe */
            _animations_animations_service__WEBPACK_IMPORTED_MODULE_8__.AnimationsService
          );
        },

        /* harmony export */
        "AuthGuardService": function AuthGuardService() {
          return (
            /* reexport safe */
            _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuardService
          );
        },

        /* harmony export */
        "selectRouterState": function selectRouterState() {
          return (
            /* reexport safe */
            _core_state__WEBPACK_IMPORTED_MODULE_1__.selectRouterState
          );
        },

        /* harmony export */
        "NotificationService": function NotificationService() {
          return (
            /* reexport safe */
            _notifications_notification_service__WEBPACK_IMPORTED_MODULE_13__.NotificationService
          );
        },

        /* harmony export */
        "selectEffectiveTheme": function selectEffectiveTheme() {
          return (
            /* reexport safe */
            _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_15__.selectEffectiveTheme
          );
        },

        /* harmony export */
        "selectSettingsLanguage": function selectSettingsLanguage() {
          return (
            /* reexport safe */
            _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_15__.selectSettingsLanguage
          );
        },

        /* harmony export */
        "selectSettingsStickyHeader": function selectSettingsStickyHeader() {
          return (
            /* reexport safe */
            _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_15__.selectSettingsStickyHeader
          );
        },

        /* harmony export */
        "httpLoaderFactory": function httpLoaderFactory() {
          return (
            /* binding */
            _httpLoaderFactory
          );
        },

        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* binding */
            _CoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/common */
      40093);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/common/http */
      34301);
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ngrx/router-store */
      52814);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @ngrx/effects */
      18760);
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      11243);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @ngx-translate/core */
      13828);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      60482);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2795);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/sidenav */
      627);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/toolbar */
      63266);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/list */
      43635);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/menu */
      87227);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/icon */
      3323);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/select */
      77820);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/tooltip */
      30620);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/forms */
      59298);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      85579);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _core_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core.state */
      20649);
      /* harmony import */


      var _auth_auth_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/auth.effects */
      40168);
      /* harmony import */


      var _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/auth.selectors */
      54787);
      /* harmony import */


      var _auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth/auth.actions */
      54283);
      /* harmony import */


      var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth/auth-guard.service */
      31265);
      /* harmony import */


      var _title_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./title/title.service */
      87807);
      /* harmony import */


      var _animations_route_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./animations/route.animations */
      1015);
      /* harmony import */


      var _animations_animations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./animations/animations.service */
      41137);
      /* harmony import */


      var _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./error-handler/app-error-handler.service */
      83561);
      /* harmony import */


      var _router_custom_serializer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./router/custom-serializer */
      53679);
      /* harmony import */


      var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./local-storage/local-storage.service */
      97316);
      /* harmony import */


      var _http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./http-interceptors/http-error.interceptor */
      92470);
      /* harmony import */


      var _notifications_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./notifications/notification.service */
      46239);
      /* harmony import */


      var _settings_settings_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./settings/settings.effects */
      77364);
      /* harmony import */


      var _settings_settings_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./settings/settings.selectors */
      8606);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/button */
      45159);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      42457);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      98870);

      function _httpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__.TranslateHttpLoader(http, "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.i18nPrefix, "/assets/i18n/"), '.json');
      }

      var _CoreModule = /*#__PURE__*/_createClass(function _CoreModule(parentModule, faIconLibrary) {
        _classCallCheck(this, _CoreModule);

        if (parentModule) {
          throw new Error('CoreModule is already loaded. Import only in MainModule');
        }

        faIconLibrary.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faCog, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faBars, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faRocket, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faPowerOff, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faUserCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_17__.faPlayCircle, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_18__.faGithub, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_18__.faMediumM, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_18__.faTwitter, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_18__.faInstagram, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_18__.faYoutube);
      });

      _CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || _CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](_CoreModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FaIconLibrary));
      };

      _CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
        type: _CoreModule
      });
      _CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS,
          useClass: _http_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_12__.HttpErrorInterceptor,
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ErrorHandler,
          useClass: _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_9__.AppErrorHandler
        }, {
          provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__.RouterStateSerializer,
          useClass: _router_custom_serializer__WEBPACK_IMPORTED_MODULE_10__.CustomSerializer
        }],
        imports: [[// angular
        _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, // material
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule, // ngrx
        _ngrx_store__WEBPACK_IMPORTED_MODULE_34__.StoreModule.forRoot(_core_state__WEBPACK_IMPORTED_MODULE_1__.reducers, {
          metaReducers: _core_state__WEBPACK_IMPORTED_MODULE_1__.metaReducers
        }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__.StoreRouterConnectingModule.forRoot(), _ngrx_effects__WEBPACK_IMPORTED_MODULE_35__.EffectsModule.forRoot([_auth_auth_effects__WEBPACK_IMPORTED_MODULE_2__.AuthEffects, _settings_settings_effects__WEBPACK_IMPORTED_MODULE_14__.SettingsEffects]), _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_36__.StoreDevtoolsModule.instrument({
          name: 'STMS test task'
        }), // 3rd party
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslateLoader,
            useFactory: _httpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClient]
          }
        })], // angular
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, // material
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule, // 3rd party
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslateModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](_CoreModule, {
          imports: [// angular
          _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, // material
          _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_34__.StoreRootModule, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_22__.StoreRouterConnectingModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_35__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_36__.StoreDevtoolsModule, // 3rd party
          _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslateModule],
          exports: [// angular
          _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, // material
          _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButtonModule, // 3rd party
          _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslateModule]
        });
      })();
      /***/

    },

    /***/
    20649:
    /*!************************************!*\
      !*** ./src/app/core/core.state.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "reducers": function reducers() {
          return (
            /* binding */
            _reducers
          );
        },

        /* harmony export */
        "metaReducers": function metaReducers() {
          return (
            /* binding */
            _metaReducers
          );
        },

        /* harmony export */
        "selectAuthState": function selectAuthState() {
          return (
            /* binding */
            _selectAuthState
          );
        },

        /* harmony export */
        "selectSettingsState": function selectSettingsState() {
          return (
            /* binding */
            _selectSettingsState
          );
        },

        /* harmony export */
        "selectRouterState": function selectRouterState() {
          return (
            /* binding */
            _selectRouterState
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/router-store */
      52814);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./meta-reducers/init-state-from-local-storage.reducer */
      20853);
      /* harmony import */


      var _meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meta-reducers/debug.reducer */
      35456);
      /* harmony import */


      var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/auth.reducer */
      13131);
      /* harmony import */


      var _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./settings/settings.reducer */
      85439);

      var _reducers = {
        auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__.authReducer,
        settings: _settings_settings_reducer__WEBPACK_IMPORTED_MODULE_4__.settingsReducer,
        router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__.routerReducer
      };
      var _metaReducers = [_meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_1__.initStateFromLocalStorage];

      if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.test) {
          _metaReducers.unshift(_meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_2__.debug);
        }
      }

      var _selectAuthState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.createFeatureSelector)('auth');

      var _selectSettingsState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.createFeatureSelector)('settings');

      var _selectRouterState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.createFeatureSelector)('router');
      /***/

    },

    /***/
    83561:
    /*!*****************************************************************!*\
      !*** ./src/app/core/error-handler/app-error-handler.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppErrorHandler": function AppErrorHandler() {
          return (
            /* binding */
            _AppErrorHandler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var _notifications_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../notifications/notification.service */
      46239);
      /** Application-wide error handler that adds a UI notification to the error handling
       * provided by the default Angular ErrorHandler.
       */


      var _AppErrorHandler = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(_AppErrorHandler, _angular_core__WEBPAC);

        var _super = _createSuper(_AppErrorHandler);

        function _AppErrorHandler(notificationsService) {
          var _this2;

          _classCallCheck(this, _AppErrorHandler);

          _this2 = _super.call(this);
          _this2.notificationsService = notificationsService;
          return _this2;
        }

        _createClass(_AppErrorHandler, [{
          key: "handleError",
          value: function handleError(error) {
            var displayMessage = 'An error occurred.';

            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
              displayMessage += ' See console for details.';
            }

            this.notificationsService.error(displayMessage);

            _get(_getPrototypeOf(_AppErrorHandler.prototype), "handleError", this).call(this, error);
          }
        }]);

        return _AppErrorHandler;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ErrorHandler);

      _AppErrorHandler.ɵfac = function AppErrorHandler_Factory(t) {
        return new (t || _AppErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_notifications_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
      };

      _AppErrorHandler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AppErrorHandler,
        factory: _AppErrorHandler.ɵfac
      });
      /***/
    },

    /***/
    92470:
    /*!******************************************************************!*\
      !*** ./src/app/core/http-interceptors/http-error.interceptor.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpErrorInterceptor": function HttpErrorInterceptor() {
          return (
            /* binding */
            _HttpErrorInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      34301);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /** Passes HttpErrorResponse to application-wide error handler */


      var _HttpErrorInterceptor = /*#__PURE__*/function () {
        function _HttpErrorInterceptor(injector) {
          _classCallCheck(this, _HttpErrorInterceptor);

          this.injector = injector;
        }

        _createClass(_HttpErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this3 = this;

            return next.handle(request).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)({
              error: function error(err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
                  var appErrorHandler = _this3.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ErrorHandler);

                  appErrorHandler.handleError(err);
                }
              }
            }));
          }
        }]);

        return _HttpErrorInterceptor;
      }();

      _HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) {
        return new (t || _HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
      };

      _HttpErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _HttpErrorInterceptor,
        factory: _HttpErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    97316:
    /*!*************************************************************!*\
      !*** ./src/app/core/local-storage/local-storage.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocalStorageService": function LocalStorageService() {
          return (
            /* binding */
            _LocalStorageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var APP_PREFIX = 'st-';

      var _LocalStorageService = /*#__PURE__*/function () {
        function _LocalStorageService() {
          _classCallCheck(this, _LocalStorageService);
        }

        _createClass(_LocalStorageService, [{
          key: "setItem",
          value: function setItem(key, value) {
            localStorage.setItem("".concat(APP_PREFIX).concat(key), JSON.stringify(value));
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            return JSON.parse(localStorage.getItem("".concat(APP_PREFIX).concat(key)));
          }
        }, {
          key: "removeItem",
          value: function removeItem(key) {
            localStorage.removeItem("".concat(APP_PREFIX).concat(key));
          }
          /** Tests that localStorage exists, can be written to, and read from. */

        }, {
          key: "testLocalStorage",
          value: function testLocalStorage() {
            var testValue = 'testValue';
            var testKey = 'testKey';
            var errorMessage = 'localStorage did not return expected value';
            this.setItem(testKey, testValue);
            var retrievedValue = this.getItem(testKey);
            this.removeItem(testKey);

            if (retrievedValue !== testValue) {
              throw new Error(errorMessage);
            }
          }
        }], [{
          key: "loadInitialState",
          value: function loadInitialState() {
            return Object.keys(localStorage).reduce(function (state, storageKey) {
              if (storageKey.includes(APP_PREFIX)) {
                var stateKeys = storageKey.replace(APP_PREFIX, '').toLowerCase().split('.').map(function (key) {
                  return key.split('-').map(function (token, index) {
                    return index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1);
                  }).join('');
                });
                var currentStateRef = state;
                stateKeys.forEach(function (key, index) {
                  if (index === stateKeys.length - 1) {
                    currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
                    return;
                  }

                  currentStateRef[key] = currentStateRef[key] || {};
                  currentStateRef = currentStateRef[key];
                });
              }

              return state;
            }, {});
          }
        }]);

        return _LocalStorageService;
      }();

      _LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
        return new (t || _LocalStorageService)();
      };

      _LocalStorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LocalStorageService,
        factory: _LocalStorageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    35456:
    /*!*****************************************************!*\
      !*** ./src/app/core/meta-reducers/debug.reducer.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "debug": function debug() {
          return (
            /* binding */
            _debug
          );
        }
        /* harmony export */

      });

      function _debug(reducer) {
        return function (state, action) {
          var newState = reducer(state, action);
          console.log("[DEBUG] action: ".concat(action.type), {
            payload: action.payload,
            oldState: state,
            newState: newState
          });
          return newState;
        };
      }
      /***/

    },

    /***/
    20853:
    /*!*****************************************************************************!*\
      !*** ./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initStateFromLocalStorage": function initStateFromLocalStorage() {
          return (
            /* binding */
            _initStateFromLocalStorage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../local-storage/local-storage.service */
      97316);
      /* eslint-disable prefer-arrow/prefer-arrow-functions */


      function _initStateFromLocalStorage(reducer) {
        return function (state, action) {
          var newState = reducer(state, action);

          if ([_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.INIT.toString(), _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UPDATE.toString()].includes(action.type)) {
            return Object.assign(Object.assign({}, newState), _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService.loadInitialState());
          }

          return newState;
        };
      }
      /***/

    },

    /***/
    46239:
    /*!************************************************************!*\
      !*** ./src/app/core/notifications/notification.service.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationService": function NotificationService() {
          return (
            /* binding */
            _NotificationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      85579);

      var _NotificationService = /*#__PURE__*/function () {
        function _NotificationService(snackBar, zone) {
          _classCallCheck(this, _NotificationService);

          this.snackBar = snackBar;
          this.zone = zone;
        }

        _createClass(_NotificationService, [{
          key: "default",
          value: function _default(message) {
            this.show(message, {
              duration: 2000,
              panelClass: 'default-notification-overlay'
            });
          }
        }, {
          key: "info",
          value: function info(message) {
            this.show(message, {
              duration: 2000,
              panelClass: 'info-notification-overlay'
            });
          }
        }, {
          key: "success",
          value: function success(message) {
            this.show(message, {
              duration: 2000,
              panelClass: 'success-notification-overlay'
            });
          }
        }, {
          key: "warn",
          value: function warn(message) {
            this.show(message, {
              duration: 2500,
              panelClass: 'warning-notification-overlay'
            });
          }
        }, {
          key: "error",
          value: function error(message) {
            this.show(message, {
              duration: 3000,
              panelClass: 'error-notification-overlay'
            });
          }
        }, {
          key: "show",
          value: function show(message, configuration) {
            var _this4 = this;

            // Need to open snackBar from Angular zone to prevent issues with its position per
            // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
            this.zone.run(function () {
              return _this4.snackBar.open(message, null, configuration);
            });
          }
        }]);

        return _NotificationService;
      }();

      _NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || _NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _NotificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _NotificationService,
        factory: _NotificationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    53679:
    /*!**************************************************!*\
      !*** ./src/app/core/router/custom-serializer.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomSerializer": function CustomSerializer() {
          return (
            /* binding */
            _CustomSerializer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var _CustomSerializer = /*#__PURE__*/function () {
        function _CustomSerializer() {
          _classCallCheck(this, _CustomSerializer);
        }

        _createClass(_CustomSerializer, [{
          key: "serialize",
          value: function serialize(routerState) {
            var route = routerState.root;

            while (route.firstChild) {
              route = route.firstChild;
            }

            var url = routerState.url,
                queryParams = routerState.root.queryParams;
            var _route = route,
                params = _route.params;
            return {
              url: url,
              params: params,
              queryParams: queryParams
            };
          }
        }]);

        return _CustomSerializer;
      }();

      _CustomSerializer.ɵfac = function CustomSerializer_Factory(t) {
        return new (t || _CustomSerializer)();
      };

      _CustomSerializer.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _CustomSerializer,
        factory: _CustomSerializer.ɵfac
      });
      /***/
    },

    /***/
    40005:
    /*!***************************************************!*\
      !*** ./src/app/core/settings/settings.actions.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "actionSettingsChangeLanguage": function actionSettingsChangeLanguage() {
          return (
            /* binding */
            _actionSettingsChangeLanguage
          );
        },

        /* harmony export */
        "actionSettingsChangeTheme": function actionSettingsChangeTheme() {
          return (
            /* binding */
            _actionSettingsChangeTheme
          );
        },

        /* harmony export */
        "actionSettingsChangeAutoNightMode": function actionSettingsChangeAutoNightMode() {
          return (
            /* binding */
            _actionSettingsChangeAutoNightMode
          );
        },

        /* harmony export */
        "actionSettingsChangeStickyHeader": function actionSettingsChangeStickyHeader() {
          return (
            /* binding */
            _actionSettingsChangeStickyHeader
          );
        },

        /* harmony export */
        "actionSettingsChangeAnimationsPage": function actionSettingsChangeAnimationsPage() {
          return (
            /* binding */
            _actionSettingsChangeAnimationsPage
          );
        },

        /* harmony export */
        "actionSettingsChangeAnimationsPageDisabled": function actionSettingsChangeAnimationsPageDisabled() {
          return (
            /* binding */
            _actionSettingsChangeAnimationsPageDisabled
          );
        },

        /* harmony export */
        "actionSettingsChangeAnimationsElements": function actionSettingsChangeAnimationsElements() {
          return (
            /* binding */
            _actionSettingsChangeAnimationsElements
          );
        },

        /* harmony export */
        "actionSettingsChangeHour": function actionSettingsChangeHour() {
          return (
            /* binding */
            _actionSettingsChangeHour
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      88182);

      var _actionSettingsChangeLanguage = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Settings] Change Language', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _actionSettingsChangeTheme = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Settings] Change Theme', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _actionSettingsChangeAutoNightMode = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Settings] Change Auto Night Mode', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _actionSettingsChangeStickyHeader = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Settings] Change Sticky Header', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _actionSettingsChangeAnimationsPage = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Settings] Change Animations Page', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _actionSettingsChangeAnimationsPageDisabled = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Settings] Change Animations Page Disabled', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _actionSettingsChangeAnimationsElements = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Settings] Change Animations Elements', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

      var _actionSettingsChangeHour = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Settings] Change Hours', (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
      /***/

    },

    /***/
    77364:
    /*!***************************************************!*\
      !*** ./src/app/core/settings/settings.effects.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SETTINGS_KEY": function SETTINGS_KEY() {
          return (
            /* binding */
            _SETTINGS_KEY
          );
        },

        /* harmony export */
        "SettingsEffects": function SettingsEffects() {
          return (
            /* binding */
            _SettingsEffects
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      79661);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/effects */
      18760);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      89919);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      61486);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      17163);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _core_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core.state */
      20649);
      /* harmony import */


      var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../local-storage/local-storage.service */
      97316);
      /* harmony import */


      var _animations_animations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../animations/animations.service */
      41137);
      /* harmony import */


      var _title_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../title/title.service */
      87807);
      /* harmony import */


      var _settings_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./settings.actions */
      40005);
      /* harmony import */


      var _settings_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings.selectors */
      8606);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      2897);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/core */
      13828);

      var _SETTINGS_KEY = 'SETTINGS';
      var INIT = (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)('stms-init-effect-trigger');

      var _SettingsEffects = /*#__PURE__*/_createClass(function _SettingsEffects(actions$, store, router, overlayContainer, localStorageService, titleService, animationsService, translateService, ngZone) {
        var _this5 = this;

        _classCallCheck(this, _SettingsEffects);

        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.overlayContainer = overlayContainer;
        this.localStorageService = localStorageService;
        this.titleService = titleService;
        this.animationsService = animationsService;
        this.translateService = translateService;
        this.ngZone = ngZone;
        this.hour = 0;
        this.changeHour = this.ngZone.runOutsideAngular(function () {
          return setInterval(function () {
            var hour = new Date().getHours();

            if (hour !== _this5.hour) {
              _this5.hour = hour;

              _this5.ngZone.run(function () {
                return _this5.store.dispatch((0, _settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeHour)({
                  hour: hour
                }));
              });
            }
          }, 60000);
        });
        this.persistSettings = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(function () {
          return _this5.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(_settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeAnimationsElements, _settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeAnimationsPage, _settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeAnimationsPageDisabled, _settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeAutoNightMode, _settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeLanguage, _settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeStickyHeader, _settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeTheme), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.withLatestFrom)(_this5.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(_core_state__WEBPACK_IMPORTED_MODULE_0__.selectSettingsState))), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                action = _ref3[0],
                settings = _ref3[1];

            return _this5.localStorageService.setItem(_SETTINGS_KEY, settings);
          }));
        }, {
          dispatch: false
        });
        this.updateRouteAnimationType = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(function () {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(INIT, _this5.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(_settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeAnimationsElements, _settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeAnimationsPage))).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.withLatestFrom)((0, rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([_this5.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(_settings_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPageAnimations)), _this5.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(_settings_selectors__WEBPACK_IMPORTED_MODULE_5__.selectElementsAnimations))])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                action = _ref5[0],
                _ref5$ = _slicedToArray(_ref5[1], 2),
                pageAnimations = _ref5$[0],
                elementsAnimations = _ref5$[1];

            return _this5.animationsService.updateRouteAnimationType(pageAnimations, elementsAnimations);
          }));
        }, {
          dispatch: false
        });
        this.updateTheme = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(function () {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(INIT, _this5.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(_settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeTheme))).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.withLatestFrom)(_this5.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(_settings_selectors__WEBPACK_IMPORTED_MODULE_5__.selectEffectiveTheme))), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
                action = _ref7[0],
                effectiveTheme = _ref7[1];

            var classList = _this5.overlayContainer.getContainerElement().classList;

            var toRemove = Array.from(classList).filter(function (item) {
              return item.includes('-theme');
            });

            if (toRemove.length) {
              classList.remove.apply(classList, _toConsumableArray(toRemove));
            }

            classList.add(effectiveTheme);
          }));
        }, {
          dispatch: false
        });
        this.setTranslateServiceLanguage = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(function () {
          return _this5.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(_settings_selectors__WEBPACK_IMPORTED_MODULE_5__.selectSettingsLanguage), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (language) {
            return _this5.translateService.use(language);
          }));
        }, {
          dispatch: false
        });
        this.setTitle = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(function () {
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(_this5.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(_settings_actions__WEBPACK_IMPORTED_MODULE_4__.actionSettingsChangeLanguage)), _this5.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivationEnd;
          }))).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function () {
            _this5.titleService.setTitle(_this5.router.routerState.snapshot.root, _this5.translateService);
          }));
        }, {
          dispatch: false
        });
      });

      _SettingsEffects.ɵfac = function SettingsEffects_Factory(t) {
        return new (t || _SettingsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_title_title_service__WEBPACK_IMPORTED_MODULE_3__.TitleService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_animations_animations_service__WEBPACK_IMPORTED_MODULE_2__.AnimationsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgZone));
      };

      _SettingsEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjectable"]({
        token: _SettingsEffects,
        factory: _SettingsEffects.ɵfac
      });
      /***/
    },

    /***/
    27491:
    /*!*************************************************!*\
      !*** ./src/app/core/settings/settings.model.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NIGHT_MODE_THEME": function NIGHT_MODE_THEME() {
          return (
            /* binding */
            _NIGHT_MODE_THEME
          );
        }
        /* harmony export */

      });

      var _NIGHT_MODE_THEME = 'BLACK-THEME';
      /***/
    },

    /***/
    85439:
    /*!***************************************************!*\
      !*** ./src/app/core/settings/settings.reducer.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initialState": function initialState() {
          return (
            /* binding */
            _initialState2
          );
        },

        /* harmony export */
        "settingsReducer": function settingsReducer() {
          return (
            /* binding */
            _settingsReducer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings.model */
      27491);
      /* harmony import */


      var _settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.actions */
      40005);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      88182);

      var _initialState2 = {
        language: 'en',
        theme: 'DEFAULT-THEME',
        autoNightMode: false,
        nightTheme: _settings_model__WEBPACK_IMPORTED_MODULE_0__.NIGHT_MODE_THEME,
        stickyHeader: true,
        pageAnimations: true,
        pageAnimationsDisabled: false,
        elementsAnimations: true,
        hour: 0
      };
      var reducer = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_initialState2, (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_settings_actions__WEBPACK_IMPORTED_MODULE_1__.actionSettingsChangeLanguage, _settings_actions__WEBPACK_IMPORTED_MODULE_1__.actionSettingsChangeTheme, _settings_actions__WEBPACK_IMPORTED_MODULE_1__.actionSettingsChangeAutoNightMode, _settings_actions__WEBPACK_IMPORTED_MODULE_1__.actionSettingsChangeStickyHeader, _settings_actions__WEBPACK_IMPORTED_MODULE_1__.actionSettingsChangeAnimationsPage, _settings_actions__WEBPACK_IMPORTED_MODULE_1__.actionSettingsChangeAnimationsElements, _settings_actions__WEBPACK_IMPORTED_MODULE_1__.actionSettingsChangeHour, function (state, action) {
        return Object.assign(Object.assign({}, state), action);
      }), (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_settings_actions__WEBPACK_IMPORTED_MODULE_1__.actionSettingsChangeAnimationsPageDisabled, function (state, _ref8) {
        var pageAnimationsDisabled = _ref8.pageAnimationsDisabled;
        return Object.assign(Object.assign({}, state), {
          pageAnimationsDisabled: pageAnimationsDisabled,
          pageAnimations: false
        });
      }));

      function _settingsReducer(state, action) {
        return reducer(state, action);
      }
      /***/

    },

    /***/
    8606:
    /*!*****************************************************!*\
      !*** ./src/app/core/settings/settings.selectors.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "selectSettings": function selectSettings() {
          return (
            /* binding */
            _selectSettings
          );
        },

        /* harmony export */
        "selectSettingsStickyHeader": function selectSettingsStickyHeader() {
          return (
            /* binding */
            _selectSettingsStickyHeader
          );
        },

        /* harmony export */
        "selectSettingsLanguage": function selectSettingsLanguage() {
          return (
            /* binding */
            _selectSettingsLanguage
          );
        },

        /* harmony export */
        "selectTheme": function selectTheme() {
          return (
            /* binding */
            _selectTheme
          );
        },

        /* harmony export */
        "selectPageAnimations": function selectPageAnimations() {
          return (
            /* binding */
            _selectPageAnimations
          );
        },

        /* harmony export */
        "selectElementsAnimations": function selectElementsAnimations() {
          return (
            /* binding */
            _selectElementsAnimations
          );
        },

        /* harmony export */
        "selectAutoNightMode": function selectAutoNightMode() {
          return (
            /* binding */
            _selectAutoNightMode
          );
        },

        /* harmony export */
        "selectNightTheme": function selectNightTheme() {
          return (
            /* binding */
            _selectNightTheme
          );
        },

        /* harmony export */
        "selectHour": function selectHour() {
          return (
            /* binding */
            _selectHour
          );
        },

        /* harmony export */
        "selectIsNightHour": function selectIsNightHour() {
          return (
            /* binding */
            _selectIsNightHour
          );
        },

        /* harmony export */
        "selectEffectiveTheme": function selectEffectiveTheme() {
          return (
            /* binding */
            _selectEffectiveTheme
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _core_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core.state */
      20649);

      var _selectSettings = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_core_state__WEBPACK_IMPORTED_MODULE_0__.selectSettingsState, function (state) {
        return state;
      });

      var _selectSettingsStickyHeader = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectSettings, function (state) {
        return state.stickyHeader;
      });

      var _selectSettingsLanguage = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectSettings, function (state) {
        return state.language;
      });

      var _selectTheme = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectSettings, function (settings) {
        return settings.theme;
      });

      var _selectPageAnimations = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectSettings, function (settings) {
        return settings.pageAnimations;
      });

      var _selectElementsAnimations = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectSettings, function (settings) {
        return settings.elementsAnimations;
      });

      var _selectAutoNightMode = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectSettings, function (settings) {
        return settings.autoNightMode;
      });

      var _selectNightTheme = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectSettings, function (settings) {
        return settings.nightTheme;
      });

      var _selectHour = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectSettings, function (settings) {
        return settings.hour;
      });

      var _selectIsNightHour = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectAutoNightMode, _selectHour, function (autoNightMode, hour) {
        return autoNightMode && (hour >= 21 || hour <= 7);
      });

      var _selectEffectiveTheme = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectTheme, _selectNightTheme, _selectIsNightHour, function (theme, nightTheme, isNightHour) {
        return (isNightHour ? nightTheme : theme).toLowerCase();
      });
      /***/

    },

    /***/
    87807:
    /*!*********************************************!*\
      !*** ./src/app/core/title/title.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TitleService": function TitleService() {
          return (
            /* binding */
            _TitleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      13828);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      4919);

      var _TitleService = /*#__PURE__*/function () {
        function _TitleService(translateService, title) {
          _classCallCheck(this, _TitleService);

          this.translateService = translateService;
          this.title = title;
        }

        _createClass(_TitleService, [{
          key: "setTitle",
          value: function setTitle(snapshot, lazyTranslateService) {
            var _this6 = this;

            var lastChild = snapshot;

            while (lastChild.children.length) {
              lastChild = lastChild.children[0];
            }

            var title = lastChild.data.title;
            var translate = lazyTranslateService || this.translateService;

            if (title) {
              translate.get(title).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(function (translatedTitle) {
                return translatedTitle !== title;
              })).subscribe(function (translatedTitle) {
                return _this6.title.setTitle("".concat(translatedTitle, " - ").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appName));
              });
            } else {
              this.title.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appName);
            }
          }
        }]);

        return _TitleService;
      }();

      _TitleService.ɵfac = function TitleService_Factory(t) {
        return new (t || _TitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
      };

      _TitleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _TitleService,
        factory: _TitleService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    98152:
    /*!********************************!*\
      !*** ./src/app/main.module.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainModule": function MainModule() {
          return (
            /* binding */
            _MainModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      4919);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      92352);
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core/core.module */
      40294);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_root_app_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-root/app-root.component */
      71301);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var _MainModule = /*#__PURE__*/_createClass(function _MainModule() {
        _classCallCheck(this, _MainModule);
      });

      _MainModule.ɵfac = function MainModule_Factory(t) {
        return new (t || _MainModule)();
      };

      _MainModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _MainModule,
        bootstrap: [_app_root_app_root_component__WEBPACK_IMPORTED_MODULE_2__.AppRootComponent]
      });
      _MainModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[// angular
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, // core
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, // app
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_MainModule, {
          declarations: [_app_root_app_root_component__WEBPACK_IMPORTED_MODULE_2__.AppRootComponent],
          imports: [// angular
          _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, // core
          _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, // app
          _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
        });
      })();
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var packageJson = __webpack_require__(
      /*! ../../package.json */
      4147);

      var _environment = {
        apiUrl: "https://api.mocki.io",
        appName: "STMS test task",
        envName: "DEV",
        production: false,
        test: false,
        i18nPrefix: ".",
        versions: {
          app: packageJson.version,
          angular: packageJson.dependencies["@angular/core"],
          ngrx: packageJson.dependencies["@ngrx/store"],
          material: packageJson.dependencies["@angular/material"],
          bootstrap: packageJson.dependencies.bootstrap,
          rxjs: packageJson.dependencies.rxjs,
          ngxtranslate: packageJson.dependencies["@ngx-translate/core"],
          fontAwesome: packageJson.dependencies["@fortawesome/fontawesome-free"],
          angularCli: packageJson.devDependencies["@angular/cli"],
          typescript: packageJson.devDependencies.typescript,
          cypress: packageJson.devDependencies.cypress,
          eslint: packageJson.devDependencies.eslint
        }
      };
      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      4919);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _app_main_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/main.module */
      98152);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_main_module__WEBPACK_IMPORTED_MODULE_0__.MainModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    4147:
    /*!**********************!*\
      !*** ./package.json ***!
      \**********************/

    /***/
    function _(module) {
      "use strict";

      module.exports = JSON.parse('{"name":"stms-test-task-3","version":"0.0.0","private":true,"scripts":{"ng":"ng","start":"export NODE_OPTIONS=--openssl-legacy-provider && ng serve","build":"ng build","gh-pages":"ng build --output-path docs --base-href . && cp ./docs/index.html ./docs/404.html","test":"ng test","lint":"ng lint","e2e":"ng e2e","postinstall":"ngcc"},"dependencies":{"@angular-extensions/elements":"12.6.0","@angular-extensions/model":"12.0.0","@angular/animations":"12.2.17","@angular/cdk":"12.2.13","@angular/common":"12.2.17","@angular/compiler":"12.2.17","@angular/core":"12.2.17","@angular/forms":"12.2.17","@angular/material":"12.2.13","@angular/platform-browser":"12.2.17","@angular/platform-browser-dynamic":"12.2.17","@angular/router":"12.2.17","@fortawesome/angular-fontawesome":"0.9.0","@fortawesome/fontawesome-free":"5.15.2","@fortawesome/fontawesome-svg-core":"1.2.34","@fortawesome/free-brands-svg-icons":"5.15.2","@fortawesome/free-solid-svg-icons":"5.15.2","@ngrx/effects":"12.5.1","@ngrx/entity":"12.5.1","@ngrx/router-store":"12.5.1","@ngrx/store":"12.5.1","@ngrx/store-devtools":"12.5.1","@ngx-translate/core":"13.0.0","@ngx-translate/http-loader":"6.0.0","@types/jasmine":"3.6.3","@types/jasminewd2":"2.0.8","@types/uuid":"8.3.0","bootstrap":"4.6.0","browser-detect":"0.2.28","rxjs":"6.6.3","tslib":"2.1.0","uuid":"8.3.2","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"12.2.18","@angular-eslint/builder":"^12.0.0","@angular-eslint/eslint-plugin":"^12.0.0","@angular-eslint/eslint-plugin-template":"^12.0.0","@angular-eslint/schematics":"12.7.0","@angular-eslint/template-parser":"^12.0.0","@angular/cli":"12.2.18","@angular/compiler-cli":"12.2.17","@angular/language-service":"12.2.17","@types/jasmine":"3.5.0","@types/jasminewd2":"2.0.3","@types/node":"12.11.1","@typescript-eslint/eslint-plugin":"4.28.2","@typescript-eslint/parser":"4.28.2","eslint":"^7.26.0","eslint-plugin-import":"latest","eslint-plugin-jsdoc":"latest","eslint-plugin-prefer-arrow":"latest","jasmine-core":"3.5.0","jasmine-spec-reporter":"4.2.1","karma":"6.4.2","karma-chrome-launcher":"3.1.0","karma-coverage-istanbul-reporter":"2.1.0","karma-jasmine":"3.0.1","karma-jasmine-html-reporter":"1.4.2","protractor":"7.0.0","ts-node":"8.3.0","typescript":"4.3.5"}}');
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map