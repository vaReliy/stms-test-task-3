(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkstms_test_task_3"] = self["webpackChunkstms_test_task_3"] || []).push([["src_app_features_patients_patients_module_ts"], {
    /***/
    28751:
    /*!**************************************************************!*\
      !*** ./src/app/features/patients/patients-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientsRoutingModule": function PatientsRoutingModule() {
          return (
            /* binding */
            _PatientsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      79661);
      /* harmony import */


      var _patients_patients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./patients/patients.component */
      14199);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var routes = [{
        path: '',
        component: _patients_patients_component__WEBPACK_IMPORTED_MODULE_0__.PatientsComponent,
        data: {
          title: 'stms.menu.patients'
        }
      }];

      var _PatientsRoutingModule = /*#__PURE__*/_createClass(function _PatientsRoutingModule() {
        _classCallCheck(this, _PatientsRoutingModule);
      });

      _PatientsRoutingModule.ɵfac = function PatientsRoutingModule_Factory(t) {
        return new (t || _PatientsRoutingModule)();
      };

      _PatientsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PatientsRoutingModule
      });
      _PatientsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PatientsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    13758:
    /*!******************************************************!*\
      !*** ./src/app/features/patients/patients.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientsModule": function PatientsModule() {
          return (
            /* binding */
            _PatientsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      40093);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);
      /* harmony import */


      var _patients_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./patients-routing.module */
      28751);
      /* harmony import */


      var _patients_patients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./patients/patients.component */
      14199);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var _PatientsModule = /*#__PURE__*/_createClass(function _PatientsModule() {
        _classCallCheck(this, _PatientsModule);
      });

      _PatientsModule.ɵfac = function PatientsModule_Factory(t) {
        return new (t || _PatientsModule)();
      };

      _PatientsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _PatientsModule
      });
      _PatientsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _patients_routing_module__WEBPACK_IMPORTED_MODULE_1__.PatientsRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_PatientsModule, {
          declarations: [_patients_patients_component__WEBPACK_IMPORTED_MODULE_2__.PatientsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _patients_routing_module__WEBPACK_IMPORTED_MODULE_1__.PatientsRoutingModule]
        });
      })();
      /***/

    },

    /***/
    14199:
    /*!******************************************************************!*\
      !*** ./src/app/features/patients/patients/patients.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientsComponent": function PatientsComponent() {
          return (
            /* binding */
            _PatientsComponent
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
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      61486);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/core.module */
      40294);
      /* harmony import */


      var _services_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/patient.service */
      37672);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _features_follow_list_follow_list_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../features/follow-list/follow-list.selectors */
      76335);
      /* harmony import */


      var _features_follow_list_follow_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../features/follow-list/follow-list.actions */
      66551);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _shared_directives_rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/directives/rtl-support/rtl-support.directive */
      82410);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      45159);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      40093);
      /* harmony import */


      var _shared_components_patient_table_patient_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/components/patient-table/patient-table.component */
      94317);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/core */
      13828);

      function PatientsComponent_st_patient_table_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "st-patient-table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function PatientsComponent_st_patient_table_9_Template_st_patient_table_action_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r2.onFollowPatient($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", list_r1)("isLoading$", ctx_r0.isLoading$)("actionType", "add");
        }
      }

      var _PatientsComponent = /*#__PURE__*/function () {
        function _PatientsComponent(store$, patientService) {
          _classCallCheck(this, _PatientsComponent);

          this.store$ = store$;
          this.patientService = patientService;
          this.routeAnimationsElements = _core_core_module__WEBPACK_IMPORTED_MODULE_0__.ROUTE_ANIMATIONS_ELEMENTS;
          this.followedPatients$ = this.store$.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_features_follow_list_follow_list_selectors__WEBPACK_IMPORTED_MODULE_2__.selectFollowedPatients));
          this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
          this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
        }

        _createClass(_PatientsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.patientList$ = this.refresh$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function () {
              return _this.isLoading$.next(true);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(function () {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([_this.patientService.getPatientList(), _this.followedPatients$]);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  patientList = _ref2[0],
                  followedPatients = _ref2[1];

              return patientList.map(function (patient) {
                var _a;

                return Object.assign(Object.assign({}, patient), {
                  followUpPatient: (_a = followedPatients.find(function (fp) {
                    return fp.code === patient.code;
                  })) === null || _a === void 0 ? void 0 : _a.followUpPatient
                });
              });
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(function () {
              // todo: do error handle
              _this.isLoading$.next(false);

              return [];
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function () {
              return _this.isLoading$.next(false);
            }));
          }
        }, {
          key: "onRefresh",
          value: function onRefresh() {
            this.refresh$.next({});
          }
        }, {
          key: "onFollowPatient",
          value: function onFollowPatient(patient) {
            this.store$.dispatch(new _features_follow_list_follow_list_actions__WEBPACK_IMPORTED_MODULE_3__.AddFollowListPatientAction({
              patient: Object.assign(Object.assign({}, patient), {
                followUpPatient: true
              })
            }));
          }
        }]);

        return _PatientsComponent;
      }();

      _PatientsComponent.ɵfac = function PatientsComponent_Factory(t) {
        return new (t || _PatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_1__.PatientService));
      };

      _PatientsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _PatientsComponent,
        selectors: [["st-patients"]],
        decls: 11,
        vars: 9,
        consts: [[1, "container"], ["rtl", ""], [1, "main-heading"], [1, "actions"], ["mat-raised-button", "", "color", "primary", 1, "actions-main", 3, "click"], [3, "data", "isLoading$", "actionType", "action", 4, "ngIf"], [3, "data", "isLoading$", "actionType", "action"]],
        template: function PatientsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PatientsComponent_Template_button_click_6_listener() {
              return ctx.onRefresh();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PatientsComponent_st_patient_table_9_Template, 1, 3, "st-patient-table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, "stms.patients.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 5, "stms.patients.get-patients"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 7, ctx.patientList$));
          }
        },
        directives: [_shared_directives_rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_4__.RtlSupportDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_patient_table_patient_table_component__WEBPACK_IMPORTED_MODULE_5__.PatientTableComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRpZW50cy5jb21wb25lbnQuc2NzcyJ9 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    84896:
    /*!*******************************************************!*\
      !*** ./src/app/repositories/patients-repo.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientsRepo": function PatientsRepo() {
          return (
            /* binding */
            _PatientsRepo
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      91477);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      34301);

      var _PatientsRepo = /*#__PURE__*/function () {
        function _PatientsRepo(http) {
          _classCallCheck(this, _PatientsRepo);

          this.http = http;
        }

        _createClass(_PatientsRepo, [{
          key: "getList",
          value: function getList() {
            var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl, "/v2/51597ef3");
            return this.http.get(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (_ref3) {
              var patient = _ref3.patient;
              return patient;
            }));
          }
        }]);

        return _PatientsRepo;
      }();

      _PatientsRepo.ɵfac = function PatientsRepo_Factory(t) {
        return new (t || _PatientsRepo)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _PatientsRepo.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _PatientsRepo,
        factory: _PatientsRepo.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    37672:
    /*!*********************************************!*\
      !*** ./src/app/services/patient.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientService": function PatientService() {
          return (
            /* binding */
            _PatientService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _repositories_patients_repo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../repositories/patients-repo.service */
      84896);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      91477);

      var _PatientService = /*#__PURE__*/function () {
        function _PatientService(patientsRepo) {
          _classCallCheck(this, _PatientService);

          this.patientsRepo = patientsRepo;
        }

        _createClass(_PatientService, [{
          key: "getPatientList",
          value: function getPatientList() {
            return this.patientsRepo.getList();
          }
        }]);

        return _PatientService;
      }();

      _PatientService.ɵfac = function PatientService_Factory(t) {
        return new (t || _PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_repositories_patients_repo_service__WEBPACK_IMPORTED_MODULE_0__.PatientsRepo));
      };

      _PatientService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _PatientService,
        factory: _PatientService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_features_patients_patients_module_ts-es5.js.map