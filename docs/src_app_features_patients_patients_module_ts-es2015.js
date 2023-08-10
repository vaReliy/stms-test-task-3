"use strict";
(self["webpackChunkstms_test_task_3"] = self["webpackChunkstms_test_task_3"] || []).push([["src_app_features_patients_patients_module_ts"],{

/***/ 28751:
/*!**************************************************************!*\
  !*** ./src/app/features/patients/patients-routing.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientsRoutingModule": function() { return /* binding */ PatientsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patients/patients.component */ 14199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);




const routes = [
    {
        path: '',
        component: _patients_patients_component__WEBPACK_IMPORTED_MODULE_0__.PatientsComponent,
        data: { title: 'stms.menu.patients' }
    }
];
class PatientsRoutingModule {
}
PatientsRoutingModule.ɵfac = function PatientsRoutingModule_Factory(t) { return new (t || PatientsRoutingModule)(); };
PatientsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PatientsRoutingModule });
PatientsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PatientsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 13758:
/*!******************************************************!*\
  !*** ./src/app/features/patients/patients.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientsModule": function() { return /* binding */ PatientsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patients-routing.module */ 28751);
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patients/patients.component */ 14199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 91477);





class PatientsModule {
}
PatientsModule.ɵfac = function PatientsModule_Factory(t) { return new (t || PatientsModule)(); };
PatientsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PatientsModule });
PatientsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _patients_routing_module__WEBPACK_IMPORTED_MODULE_1__.PatientsRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PatientsModule, { declarations: [_patients_patients_component__WEBPACK_IMPORTED_MODULE_2__.PatientsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _patients_routing_module__WEBPACK_IMPORTED_MODULE_1__.PatientsRoutingModule] }); })();


/***/ }),

/***/ 14199:
/*!******************************************************************!*\
  !*** ./src/app/features/patients/patients/patients.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientsComponent": function() { return /* binding */ PatientsComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/core.module */ 40294);
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/patient.service */ 37672);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 88182);
/* harmony import */ var _features_follow_list_follow_list_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../features/follow-list/follow-list.selectors */ 76335);
/* harmony import */ var _features_follow_list_follow_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../features/follow-list/follow-list.actions */ 66551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _shared_directives_rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/rtl-support/rtl-support.directive */ 82410);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 45159);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _shared_components_patient_table_patient_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/patient-table/patient-table.component */ 94317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 13828);















function PatientsComponent_st_patient_table_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "st-patient-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function PatientsComponent_st_patient_table_9_Template_st_patient_table_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.onFollowPatient($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", list_r1)("isLoading$", ctx_r0.isLoading$)("actionType", "add");
} }
class PatientsComponent {
    constructor(store$, patientService) {
        this.store$ = store$;
        this.patientService = patientService;
        this.routeAnimationsElements = _core_core_module__WEBPACK_IMPORTED_MODULE_0__.ROUTE_ANIMATIONS_ELEMENTS;
        this.followedPatients$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_features_follow_list_follow_list_selectors__WEBPACK_IMPORTED_MODULE_2__.selectFollowedPatients));
        this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    }
    ngOnInit() {
        this.patientList$ = this.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.isLoading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([
            this.patientService.getPatientList(),
            this.followedPatients$
        ])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([patientList, followedPatients]) => patientList.map(patient => {
            var _a;
            return (Object.assign(Object.assign({}, patient), { followUpPatient: (_a = followedPatients.find(fp => fp.code === patient.code)) === null || _a === void 0 ? void 0 : _a.followUpPatient }));
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(() => {
            // todo: do error handle
            this.isLoading$.next(false);
            return [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.isLoading$.next(false)));
    }
    onRefresh() {
        this.refresh$.next({});
    }
    onFollowPatient(patient) {
        this.store$.dispatch(new _features_follow_list_follow_list_actions__WEBPACK_IMPORTED_MODULE_3__.AddFollowListPatientAction({
            patient: Object.assign(Object.assign({}, patient), { followUpPatient: true })
        }));
    }
}
PatientsComponent.ɵfac = function PatientsComponent_Factory(t) { return new (t || PatientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_1__.PatientService)); };
PatientsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PatientsComponent, selectors: [["st-patients"]], decls: 11, vars: 9, consts: [[1, "container"], ["rtl", ""], [1, "main-heading"], [1, "actions"], ["mat-raised-button", "", "color", "primary", 1, "actions-main", 3, "click"], [3, "data", "isLoading$", "actionType", "action", 4, "ngIf"], [3, "data", "isLoading$", "actionType", "action"]], template: function PatientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PatientsComponent_Template_button_click_6_listener() { return ctx.onRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PatientsComponent_st_patient_table_9_Template, 1, 3, "st-patient-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, "stms.patients.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 5, "stms.patients.get-patients"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 7, ctx.patientList$));
    } }, directives: [_shared_directives_rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_4__.RtlSupportDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_patient_table_patient_table_component__WEBPACK_IMPORTED_MODULE_5__.PatientTableComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRpZW50cy5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 84896:
/*!*******************************************************!*\
  !*** ./src/app/repositories/patients-repo.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientsRepo": function() { return /* binding */ PatientsRepo; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 34301);





class PatientsRepo {
    constructor(http) {
        this.http = http;
    }
    getList() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/v2/51597ef3`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(({ patient }) => patient));
    }
}
PatientsRepo.ɵfac = function PatientsRepo_Factory(t) { return new (t || PatientsRepo)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
PatientsRepo.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PatientsRepo, factory: PatientsRepo.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37672:
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientService": function() { return /* binding */ PatientService; }
/* harmony export */ });
/* harmony import */ var _repositories_patients_repo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/patients-repo.service */ 84896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);



class PatientService {
    constructor(patientsRepo) {
        this.patientsRepo = patientsRepo;
    }
    getPatientList() {
        return this.patientsRepo.getList();
    }
}
PatientService.ɵfac = function PatientService_Factory(t) { return new (t || PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_repositories_patients_repo_service__WEBPACK_IMPORTED_MODULE_0__.PatientsRepo)); };
PatientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PatientService, factory: PatientService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_features_patients_patients_module_ts-es2015.js.map