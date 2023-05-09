import { Order } from 'app/shared/models/order.model';
import { FollowListAction, FollowListActionType } from './follow-list.actions';
import { Patient } from 'app/shared/models/patient.model';

export const featureFollowListNode = 'followList';

export interface FollowListState {
    followedPatients: Patient[];
    followedOrders: Order[];
}

export const defaultFollowedListState: FollowListState = {
    followedPatients: [],
    followedOrders: [],
};

export const followListReducer = (state: FollowListState = defaultFollowedListState, action: FollowListAction) => {
    switch (action.type) {
        case FollowListActionType.addFollowedOrder: {
            return {
                ...state,
                followedOrders: [
                    ...state.followedOrders,
                    action.payload.order
                ]
            };
        };

        case FollowListActionType.removeFollowedOrder: {
            return {
                ...state,
                followedOrders: state.followedOrders
                  .filter(({orderNum}) => orderNum !== action.payload.orderNum)
            };
        }

        case FollowListActionType.addFollowedPatient: {
            return {
                ...state,
                followedPatients: [
                    ...state.followedPatients,
                    action.payload.patient
                ]
            };
        }

        case FollowListActionType.removeFollowedPatient: {
            return {
                ...state,
                followedPatients: state.followedPatients
                  .filter(({code}) => code !== action.payload.code)
            };
        }

        default: return state;
    }
};
