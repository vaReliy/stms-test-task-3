(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkstms_test_task_3"] = self["webpackChunkstms_test_task_3"] || []).push([["common"], {
    /***/
    66551:
    /*!*************************************************************!*\
      !*** ./src/app/features/follow-list/follow-list.actions.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FollowListActionType": function FollowListActionType() {
          return (
            /* binding */
            _FollowListActionType
          );
        },

        /* harmony export */
        "AddFollowListOrderAction": function AddFollowListOrderAction() {
          return (
            /* binding */
            _AddFollowListOrderAction
          );
        },

        /* harmony export */
        "RemoveFollowListOrderAction": function RemoveFollowListOrderAction() {
          return (
            /* binding */
            _RemoveFollowListOrderAction
          );
        },

        /* harmony export */
        "AddFollowListPatientAction": function AddFollowListPatientAction() {
          return (
            /* binding */
            _AddFollowListPatientAction
          );
        },

        /* harmony export */
        "RemoveFollowListPatientAction": function RemoveFollowListPatientAction() {
          return (
            /* binding */
            _RemoveFollowListPatientAction
          );
        }
        /* harmony export */

      });

      var _FollowListActionType;

      (function (FollowListActionType) {
        FollowListActionType["addFollowedOrder"] = "[FollowList] add followed order";
        FollowListActionType["removeFollowedOrder"] = "[FollowList] remove followed order";
        FollowListActionType["addFollowedPatient"] = "[FollowList] add followed patient";
        FollowListActionType["removeFollowedPatient"] = "[FollowList] remove followed patient";
      })(_FollowListActionType || (_FollowListActionType = {}));

      ;

      var _AddFollowListOrderAction = /*#__PURE__*/_createClass(function _AddFollowListOrderAction(payload) {
        _classCallCheck(this, _AddFollowListOrderAction);

        this.payload = payload;
        this.type = _FollowListActionType.addFollowedOrder;
      });

      var _RemoveFollowListOrderAction = /*#__PURE__*/_createClass(function _RemoveFollowListOrderAction(payload) {
        _classCallCheck(this, _RemoveFollowListOrderAction);

        this.payload = payload;
        this.type = _FollowListActionType.removeFollowedOrder;
      });

      var _AddFollowListPatientAction = /*#__PURE__*/_createClass(function _AddFollowListPatientAction(payload) {
        _classCallCheck(this, _AddFollowListPatientAction);

        this.payload = payload;
        this.type = _FollowListActionType.addFollowedPatient;
      });

      var _RemoveFollowListPatientAction = /*#__PURE__*/_createClass(function _RemoveFollowListPatientAction(payload) {
        _classCallCheck(this, _RemoveFollowListPatientAction);

        this.payload = payload;
        this.type = _FollowListActionType.removeFollowedPatient;
      });
      /***/

    },

    /***/
    76335:
    /*!***************************************************************!*\
      !*** ./src/app/features/follow-list/follow-list.selectors.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "selectorFollowListFeature": function selectorFollowListFeature() {
          return (
            /* binding */
            _selectorFollowListFeature
          );
        },

        /* harmony export */
        "selectFollowedOrders": function selectFollowedOrders() {
          return (
            /* binding */
            _selectFollowedOrders
          );
        },

        /* harmony export */
        "selectFollowedPatients": function selectFollowedPatients() {
          return (
            /* binding */
            _selectFollowedPatients
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      88182);
      /* harmony import */


      var _follow_list_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./follow.list.reducers */
      10102);

      var _selectorFollowListFeature = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_follow_list_reducers__WEBPACK_IMPORTED_MODULE_0__.featureFollowListNode);

      var _selectFollowedOrders = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectorFollowListFeature, function (state) {
        return state.followedOrders;
      });

      var _selectFollowedPatients = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(_selectorFollowListFeature, function (state) {
        return state.followedPatients;
      });
      /***/

    },

    /***/
    10102:
    /*!**************************************************************!*\
      !*** ./src/app/features/follow-list/follow.list.reducers.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "featureFollowListNode": function featureFollowListNode() {
          return (
            /* binding */
            _featureFollowListNode
          );
        },

        /* harmony export */
        "defaultFollowedListState": function defaultFollowedListState() {
          return (
            /* binding */
            _defaultFollowedListState
          );
        },

        /* harmony export */
        "followListReducer": function followListReducer() {
          return (
            /* binding */
            _followListReducer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _follow_list_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./follow-list.actions */
      66551);

      var _featureFollowListNode = 'followList';
      var _defaultFollowedListState = {
        followedPatients: [],
        followedOrders: []
      };

      var _followListReducer = function _followListReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultFollowedListState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _follow_list_actions__WEBPACK_IMPORTED_MODULE_0__.FollowListActionType.addFollowedOrder:
            {
              return Object.assign(Object.assign({}, state), {
                followedOrders: [].concat(_toConsumableArray(state.followedOrders), [action.payload.order])
              });
            }
            ;

          case _follow_list_actions__WEBPACK_IMPORTED_MODULE_0__.FollowListActionType.removeFollowedOrder:
            {
              return Object.assign(Object.assign({}, state), {
                followedOrders: state.followedOrders.filter(function (_ref) {
                  var orderNum = _ref.orderNum;
                  return orderNum !== action.payload.orderNum;
                })
              });
            }

          case _follow_list_actions__WEBPACK_IMPORTED_MODULE_0__.FollowListActionType.addFollowedPatient:
            {
              return Object.assign(Object.assign({}, state), {
                followedPatients: [].concat(_toConsumableArray(state.followedPatients), [action.payload.patient])
              });
            }

          case _follow_list_actions__WEBPACK_IMPORTED_MODULE_0__.FollowListActionType.removeFollowedPatient:
            {
              return Object.assign(Object.assign({}, state), {
                followedPatients: state.followedPatients.filter(function (_ref2) {
                  var code = _ref2.code;
                  return code !== action.payload.code;
                })
              });
            }

          default:
            return state;
        }
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map