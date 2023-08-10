(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkstms_test_task_3"] = self["webpackChunkstms_test_task_3"] || []).push([["src_app_features_follow-list_follow-list_module_ts"], {
    /***/
    91720:
    /*!*****************************************************************!*\
      !*** ./src/app/features/follow-list/filter/filter.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilterComponent": function FilterComponent() {
          return (
            /* binding */
            _FilterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      7494);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      59298);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      77820);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      14147);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      63176);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      40093);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      95076);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      45159);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      13828);

      function FilterComponent_mat_label_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var filterBy_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "stms.follow-list.filter.placeholder"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "stms.shared.table.title." + filterBy_r1), " ");
        }
      }

      var _FilterComponent = /*#__PURE__*/function () {
        function _FilterComponent(fb) {
          _classCallCheck(this, _FilterComponent);

          this.fb = fb;
          this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.form = this.fb.group({
            filterBy: this.fb.control('orderName'),
            query: this.fb.control('')
          });
          this.subscribeHolder$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        }

        _createClass(_FilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.form.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.auditTime)(300), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.subscribeHolder$)).subscribe(function (filter) {
              _this.filterChange.emit(filter);
            });
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.form.reset({
              filterBy: 'orderName'
            });
          }
        }, {
          key: "clearQuery",
          value: function clearQuery() {
            var _a;

            (_a = this.form.get('query')) === null || _a === void 0 ? void 0 : _a.setValue('');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscribeHolder$.next();
            this.subscribeHolder$.complete();
          }
        }]);

        return _FilterComponent;
      }();

      _FilterComponent.ɵfac = function FilterComponent_Factory(t) {
        return new (t || _FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
      };

      _FilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FilterComponent,
        selectors: [["st-filter"]],
        outputs: {
          filterChange: "filterChange"
        },
        decls: 14,
        vars: 11,
        consts: [[1, "f-row", 3, "formGroup"], ["formControlName", "filterBy", 1, "w-30p", 3, "selectionChange"], ["value", "fullName"], ["value", "orderName"], [1, "ml-20"], [4, "ngIf"], ["matInput", "", "formControlName", "query"], ["mat-raised-button", "", 1, "actions-main", "ml-20", 3, "click"]],
        template: function FilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FilterComponent_Template_mat_select_selectionChange_1_listener() {
              return ctx.clearQuery();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FilterComponent_mat_label_9_Template, 4, 6, "mat-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_11_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_3_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "stms.shared.table.title.fullName"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "stms.shared.table.title.orderName"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.form.get("filterBy")) == null ? null : tmp_3_0.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, "stms.follow-list.clear"), " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
        styles: [".f-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  height: 3rem;\n}\n\n.ml-20[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.w-30p[_ngcontent-%COMP%] {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJmaWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGhlaWdodDogM3JlbTtcbn1cblxuLm1sLTIwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi53LTMwcCB7XG4gIHdpZHRoOiAzMCU7XG59XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    63307:
    /*!********************************************************************!*\
      !*** ./src/app/features/follow-list/follow-list-routing.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FollowListRoutingModule": function FollowListRoutingModule() {
          return (
            /* binding */
            _FollowListRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      79661);
      /* harmony import */


      var _follow_list_follow_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./follow-list/follow-list.component */
      23527);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var routes = [{
        path: '',
        component: _follow_list_follow_list_component__WEBPACK_IMPORTED_MODULE_0__.FollowListComponent,
        data: {
          title: 'stms.menu.follow-list'
        }
      }];

      var _FollowListRoutingModule = /*#__PURE__*/_createClass(function _FollowListRoutingModule() {
        _classCallCheck(this, _FollowListRoutingModule);
      });

      _FollowListRoutingModule.ɵfac = function FollowListRoutingModule_Factory(t) {
        return new (t || _FollowListRoutingModule)();
      };

      _FollowListRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _FollowListRoutingModule
      });
      _FollowListRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_FollowListRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    81560:
    /*!************************************************************!*\
      !*** ./src/app/features/follow-list/follow-list.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FollowListModule": function FollowListModule() {
          return (
            /* binding */
            _FollowListModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      40093);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      13828);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);
      /* harmony import */


      var _follow_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./follow-list-routing.module */
      63307);
      /* harmony import */


      var _follow_list_follow_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./follow-list/follow-list.component */
      23527);
      /* harmony import */


      var _filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./filter/filter.component */
      91720);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _follow_list_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./follow.list.reducers */
      10102);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var _FollowListModule = /*#__PURE__*/_createClass(function _FollowListModule() {
        _classCallCheck(this, _FollowListModule);
      });

      _FollowListModule.ɵfac = function FollowListModule_Factory(t) {
        return new (t || _FollowListModule)();
      };

      _FollowListModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _FollowListModule
      });
      _FollowListModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _follow_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.FollowListRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forFeature(_follow_list_reducers__WEBPACK_IMPORTED_MODULE_4__.featureFollowListNode, _follow_list_reducers__WEBPACK_IMPORTED_MODULE_4__.followListReducer)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_FollowListModule, {
          declarations: [_follow_list_follow_list_component__WEBPACK_IMPORTED_MODULE_2__.FollowListComponent, _filter_filter_component__WEBPACK_IMPORTED_MODULE_3__.FilterComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _follow_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.FollowListRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreFeatureModule]
        });
      })();
      /***/

    },

    /***/
    23527:
    /*!***************************************************************************!*\
      !*** ./src/app/features/follow-list/follow-list/follow-list.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FollowListComponent": function FollowListComponent() {
          return (
            /* binding */
            _FollowListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      61486);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      1143);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _follow_list_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../follow-list.selectors */
      76335);
      /* harmony import */


      var _follow_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../follow-list.actions */
      66551);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _shared_directives_rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/directives/rtl-support/rtl-support.directive */
      82410);
      /* harmony import */


      var _filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../filter/filter.component */
      91720);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      40093);
      /* harmony import */


      var _shared_components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/orders-table/orders-table.component */
      85244);
      /* harmony import */


      var _shared_components_patient_table_patient_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/components/patient-table/patient-table.component */
      94317);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      13828);

      function FollowListComponent_div_7_st_orders_table_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "st-orders-table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function FollowListComponent_div_7_st_orders_table_4_Template_st_orders_table_action_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r6.onUnfollowOrder($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var orderList_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", orderList_r4)("actionType", "remove");
        }
      }

      function FollowListComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, FollowListComponent_div_7_st_orders_table_4_Template, 1, 2, "st-orders-table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var orderList_r4 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "stms.follow-list.orders"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", orderList_r4.length)("ngIfElse", _r2);
        }
      }

      function FollowListComponent_div_9_st_patient_table_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "st-patient-table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function FollowListComponent_div_9_st_patient_table_4_Template_st_patient_table_action_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r11.onUnfollowPatient($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patientList_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", patientList_r9)("actionType", "remove");
        }
      }

      function FollowListComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, FollowListComponent_div_9_st_patient_table_4_Template, 1, 2, "st-patient-table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var patientList_r9 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "stms.follow-list.patients"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", patientList_r9.length)("ngIfElse", _r2);
        }
      }

      function FollowListComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "stms.follow-list.empty"));
        }
      }

      var _FollowListComponent = /*#__PURE__*/function () {
        function _FollowListComponent(store$) {
          _classCallCheck(this, _FollowListComponent);

          this.store$ = store$;
          this.followedOrders$ = this.store$.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_follow_list_selectors__WEBPACK_IMPORTED_MODULE_0__.selectFollowedOrders));
          this.followedPatients$ = this.store$.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_follow_list_selectors__WEBPACK_IMPORTED_MODULE_0__.selectFollowedPatients));
          this.filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        }

        _createClass(_FollowListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var filterList = function filterList(_ref) {
              var filter = _ref.filter,
                  list = _ref.list;
              return list.filter(function (item) {
                return filter.query ? item[filter.filterBy].toLowerCase().includes(filter.query.toLowerCase()) : true;
              });
            };

            this.orderList$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.filter$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)({
              filterBy: 'orderName',
              query: ''
            })), this.followedOrders$]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                  filter = _ref3[0],
                  list = _ref3[1];

              return {
                filter: filter,
                list: list
              };
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(function (_ref4) {
              var filter = _ref4.filter,
                  list = _ref4.list;
              return filter.filterBy === 'orderName' || !filter.query;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(filterList));
            this.patientList$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.filter$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)({
              filterBy: 'fullName',
              query: ''
            })), this.followedPatients$]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  filter = _ref6[0],
                  list = _ref6[1];

              return {
                filter: filter,
                list: list
              };
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(function (_ref7) {
              var filter = _ref7.filter,
                  list = _ref7.list;
              return filter.filterBy === 'fullName' || !filter.query;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(filterList));
          }
        }, {
          key: "onUnfollowOrder",
          value: function onUnfollowOrder(order) {
            this.store$.dispatch(new _follow_list_actions__WEBPACK_IMPORTED_MODULE_1__.RemoveFollowListOrderAction({
              orderNum: order.orderNum
            }));
          }
        }, {
          key: "onUnfollowPatient",
          value: function onUnfollowPatient(patient) {
            this.store$.dispatch(new _follow_list_actions__WEBPACK_IMPORTED_MODULE_1__.RemoveFollowListPatientAction({
              code: patient.code
            }));
          }
        }, {
          key: "onFilterChange",
          value: function onFilterChange(filter) {
            this.filter$.next(filter);
          }
        }]);

        return _FollowListComponent;
      }();

      _FollowListComponent.ɵfac = function FollowListComponent_Factory(t) {
        return new (t || _FollowListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store));
      };

      _FollowListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _FollowListComponent,
        selectors: [["st-follow-list"]],
        decls: 13,
        vars: 9,
        consts: [[1, "container"], ["rtl", ""], [1, "main-heading"], [1, "actions"], [3, "filterChange"], ["class", "mt-2rem", 4, "ngIf"], ["empty", ""], [1, "mt-2rem"], [3, "data", "actionType", "action", 4, "ngIf", "ngIfElse"], [3, "data", "actionType", "action"]],
        template: function FollowListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "st-filter", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filterChange", function FollowListComponent_Template_st_filter_filterChange_6_listener($event) {
              return ctx.onFilterChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, FollowListComponent_div_7_Template, 5, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, FollowListComponent_div_9_Template, 5, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, FollowListComponent_ng_template_11_Template, 3, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, "stms.follow-list.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 5, ctx.orderList$));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 7, ctx.patientList$));
          }
        },
        directives: [_shared_directives_rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_2__.RtlSupportDirective, _filter_filter_component__WEBPACK_IMPORTED_MODULE_3__.FilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_4__.OrdersTableComponent, _shared_components_patient_table_patient_table_component__WEBPACK_IMPORTED_MODULE_5__.PatientTableComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
        styles: [".mt-2rem[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJmb2xsb3ctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC0ycmVtIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_features_follow-list_follow-list_module_ts-es5.js.map