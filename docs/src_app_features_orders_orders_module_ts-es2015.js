"use strict";
(self["webpackChunkstms_test_task_3"] = self["webpackChunkstms_test_task_3"] || []).push([["src_app_features_orders_orders_module_ts"],{

/***/ 3037:
/*!**********************************************************!*\
  !*** ./src/app/features/orders/orders-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersRoutingModule": function() { return /* binding */ OrdersRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 79661);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders/orders.component */ 3307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);




const routes = [
    {
        path: '',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_0__.OrdersComponent,
        data: { title: 'stms.menu.orders' }
    }
];
class OrdersRoutingModule {
}
OrdersRoutingModule.ɵfac = function OrdersRoutingModule_Factory(t) { return new (t || OrdersRoutingModule)(); };
OrdersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrdersRoutingModule });
OrdersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 45992:
/*!**************************************************!*\
  !*** ./src/app/features/orders/orders.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": function() { return /* binding */ OrdersModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 33579);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders-routing.module */ 3037);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders/orders.component */ 3307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 91477);






class OrdersModule {
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(); };
OrdersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _orders_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrdersRoutingModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_orders_orders_component__WEBPACK_IMPORTED_MODULE_2__.OrdersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _orders_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrdersRoutingModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule] }); })();


/***/ }),

/***/ 3307:
/*!************************************************************!*\
  !*** ./src/app/features/orders/orders/orders.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": function() { return /* binding */ OrdersComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/core.module */ 40294);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/orders.service */ 12331);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 88182);
/* harmony import */ var _features_follow_list_follow_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../features/follow-list/follow-list.actions */ 66551);
/* harmony import */ var _features_follow_list_follow_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../features/follow-list/follow-list.selectors */ 76335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _shared_directives_rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/rtl-support/rtl-support.directive */ 82410);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 45159);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 40093);
/* harmony import */ var _shared_components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/orders-table/orders-table.component */ 85244);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 13828);















function OrdersComponent_st_orders_table_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "st-orders-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("action", function OrdersComponent_st_orders_table_10_Template_st_orders_table_action_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.onFollowOrder($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", data_r1)("isLoading$", ctx_r0.isLoading$)("actionType", "add");
} }
class OrdersComponent {
    constructor(store$, ordersService) {
        this.store$ = store$;
        this.ordersService = ordersService;
        this.routeAnimationsElements = _core_core_module__WEBPACK_IMPORTED_MODULE_0__.ROUTE_ANIMATIONS_ELEMENTS;
        this.followedOrders$ = this.store$.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_features_follow_list_follow_list_selectors__WEBPACK_IMPORTED_MODULE_3__.selectFollowedOrders));
        this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    }
    ngOnInit() {
        this.orderList$ = this.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.isLoading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([
            this.ordersService.getOrderList(),
            this.followedOrders$
        ])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([orderList, followedOrders]) => orderList.map(order => {
            var _a;
            return (Object.assign(Object.assign({}, order), { isFollowup: (_a = followedOrders.find(fo => fo.orderNum === order.orderNum)) === null || _a === void 0 ? void 0 : _a.isFollowup }));
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(() => {
            // todo: do error handle
            this.isLoading$.next(false);
            return [];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.isLoading$.next(false)));
    }
    onRefresh() {
        this.refresh$.next({});
    }
    onFollowOrder(order) {
        this.store$.dispatch(new _features_follow_list_follow_list_actions__WEBPACK_IMPORTED_MODULE_2__.AddFollowListOrderAction({
            order: Object.assign(Object.assign({}, order), { isFollowup: true })
        }));
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService)); };
OrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["st-orders"]], decls: 12, vars: 12, consts: [[1, "container"], ["rtl", ""], [1, "main-heading"], [1, "actions"], ["mat-raised-button", "", "color", "primary", 1, "actions-main", 3, "disabled", "click"], [3, "data", "isLoading$", "actionType", "action", 4, "ngIf"], [3, "data", "isLoading$", "actionType", "action"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrdersComponent_Template_button_click_6_listener() { return ctx.onRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, OrdersComponent_st_orders_table_10_Template, 1, 3, "st-orders-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, "stms.orders.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 6, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 8, "stms.orders.get-orders"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 10, ctx.orderList$));
    } }, directives: [_shared_directives_rtl_support_rtl_support_directive__WEBPACK_IMPORTED_MODULE_4__.RtlSupportDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_5__.OrdersTableComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.main-heading[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 0 0 20px 0;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n}\n\nmat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nmat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 11px;\n  right: 0;\n  float: right;\n  font-size: 10px;\n}\n\nmat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n\n@media (max-width: 576px) {\n  mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n}\n\nmat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 2px;\n  font-size: 16px;\n  margin: 6px;\n}\n\nmat-card[_ngcontent-%COMP%]   a[mat-icon-button][_ngcontent-%COMP%] {\n  position: relative;\n  left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUdFO0VBQ0Usa0JBQUE7QUFESjs7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUROOztBQUlFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFLRTtFQUNFO0lBQ0UsZ0JBQUE7RUFISjtBQUNGOztBQU9JO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFMTjs7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQVBKIiwiZmlsZSI6Im9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzXCI7XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWFpbi1oZWFkaW5nIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcblxuICBtYXQtY2FyZC10aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgY29kZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDExcHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gIH1cbiAgbWF0LWNhcmQtc3VidGl0bGUge1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgc20pKSB7XG4gICAgbWF0LWNhcmQtc3VidGl0bGUge1xuICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cblxuICBhIHtcbiAgICBmYS1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luOiA2cHg7XG4gICAgfVxuICB9XG5cbiAgYVttYXQtaWNvbi1idXR0b25dIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNXB4O1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 40726:
/*!*****************************************************!*\
  !*** ./src/app/repositories/orders-repo.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersRepo": function() { return /* binding */ OrdersRepo; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 91477);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 34301);





class OrdersRepo {
    constructor(http) {
        this.http = http;
    }
    getList() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/v2/79fb05cb`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(({ order }) => order));
    }
}
OrdersRepo.ɵfac = function OrdersRepo_Factory(t) { return new (t || OrdersRepo)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
OrdersRepo.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OrdersRepo, factory: OrdersRepo.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12331:
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersService": function() { return /* binding */ OrdersService; }
/* harmony export */ });
/* harmony import */ var _repositories_orders_repo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/orders-repo.service */ 40726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 91477);



class OrdersService {
    constructor(orderRepo) {
        this.orderRepo = orderRepo;
    }
    getOrderList() {
        return this.orderRepo.getList();
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_repositories_orders_repo_service__WEBPACK_IMPORTED_MODULE_0__.OrdersRepo)); };
OrdersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_features_orders_orders_module_ts-es2015.js.map