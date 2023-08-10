"use strict";
(self["webpackChunkstms_test_task_3"] = self["webpackChunkstms_test_task_3"] || []).push([["common"],{

/***/ 66551:
/*!*************************************************************!*\
  !*** ./src/app/features/follow-list/follow-list.actions.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowListActionType": function() { return /* binding */ FollowListActionType; },
/* harmony export */   "AddFollowListOrderAction": function() { return /* binding */ AddFollowListOrderAction; },
/* harmony export */   "RemoveFollowListOrderAction": function() { return /* binding */ RemoveFollowListOrderAction; },
/* harmony export */   "AddFollowListPatientAction": function() { return /* binding */ AddFollowListPatientAction; },
/* harmony export */   "RemoveFollowListPatientAction": function() { return /* binding */ RemoveFollowListPatientAction; }
/* harmony export */ });
var FollowListActionType;
(function (FollowListActionType) {
    FollowListActionType["addFollowedOrder"] = "[FollowList] add followed order";
    FollowListActionType["removeFollowedOrder"] = "[FollowList] remove followed order";
    FollowListActionType["addFollowedPatient"] = "[FollowList] add followed patient";
    FollowListActionType["removeFollowedPatient"] = "[FollowList] remove followed patient";
})(FollowListActionType || (FollowListActionType = {}));
;
class AddFollowListOrderAction {
    constructor(payload) {
        this.payload = payload;
        this.type = FollowListActionType.addFollowedOrder;
    }
}
class RemoveFollowListOrderAction {
    constructor(payload) {
        this.payload = payload;
        this.type = FollowListActionType.removeFollowedOrder;
    }
}
class AddFollowListPatientAction {
    constructor(payload) {
        this.payload = payload;
        this.type = FollowListActionType.addFollowedPatient;
    }
}
class RemoveFollowListPatientAction {
    constructor(payload) {
        this.payload = payload;
        this.type = FollowListActionType.removeFollowedPatient;
    }
}


/***/ }),

/***/ 76335:
/*!***************************************************************!*\
  !*** ./src/app/features/follow-list/follow-list.selectors.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectorFollowListFeature": function() { return /* binding */ selectorFollowListFeature; },
/* harmony export */   "selectFollowedOrders": function() { return /* binding */ selectFollowedOrders; },
/* harmony export */   "selectFollowedPatients": function() { return /* binding */ selectFollowedPatients; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 88182);
/* harmony import */ var _follow_list_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow.list.reducers */ 10102);


const selectorFollowListFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_follow_list_reducers__WEBPACK_IMPORTED_MODULE_0__.featureFollowListNode);
const selectFollowedOrders = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectorFollowListFeature, (state) => state.followedOrders);
const selectFollowedPatients = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectorFollowListFeature, (state) => state.followedPatients);


/***/ }),

/***/ 10102:
/*!**************************************************************!*\
  !*** ./src/app/features/follow-list/follow.list.reducers.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "featureFollowListNode": function() { return /* binding */ featureFollowListNode; },
/* harmony export */   "defaultFollowedListState": function() { return /* binding */ defaultFollowedListState; },
/* harmony export */   "followListReducer": function() { return /* binding */ followListReducer; }
/* harmony export */ });
/* harmony import */ var _follow_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-list.actions */ 66551);

const featureFollowListNode = 'followList';
const defaultFollowedListState = {
    followedPatients: [],
    followedOrders: [],
};
const followListReducer = (state = defaultFollowedListState, action) => {
    switch (action.type) {
        case _follow_list_actions__WEBPACK_IMPORTED_MODULE_0__.FollowListActionType.addFollowedOrder:
            {
                return Object.assign(Object.assign({}, state), { followedOrders: [
                        ...state.followedOrders,
                        action.payload.order
                    ] });
            }
            ;
        case _follow_list_actions__WEBPACK_IMPORTED_MODULE_0__.FollowListActionType.removeFollowedOrder: {
            return Object.assign(Object.assign({}, state), { followedOrders: state.followedOrders
                    .filter(({ orderNum }) => orderNum !== action.payload.orderNum) });
        }
        case _follow_list_actions__WEBPACK_IMPORTED_MODULE_0__.FollowListActionType.addFollowedPatient: {
            return Object.assign(Object.assign({}, state), { followedPatients: [
                    ...state.followedPatients,
                    action.payload.patient
                ] });
        }
        case _follow_list_actions__WEBPACK_IMPORTED_MODULE_0__.FollowListActionType.removeFollowedPatient: {
            return Object.assign(Object.assign({}, state), { followedPatients: state.followedPatients
                    .filter(({ code }) => code !== action.payload.code) });
        }
        default: return state;
    }
};


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map