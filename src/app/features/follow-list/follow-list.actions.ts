import { Action } from '@ngrx/store';
import { Order } from '../../shared/models/order.model';
import { Patient } from '../../shared/models/patient.model';

export enum FollowListActionType {
    addFollowedOrder = '[FollowList] add followed order',
    removeFollowedOrder = '[FollowList] remove followed order',
    addFollowedPatient = '[FollowList] add followed patient',
    removeFollowedPatient = '[FollowList] remove followed patient',
};

export class AddFollowListOrderAction implements Action {
    readonly type = FollowListActionType.addFollowedOrder;

    constructor(public payload: {
        order: Order;
    }) {}
}

export class RemoveFollowListOrderAction implements Action {
    readonly type = FollowListActionType.removeFollowedOrder;

    constructor(public payload: {
        orderNum: number;
    }) {}
}

export class AddFollowListPatientAction implements Action {
    readonly type = FollowListActionType.addFollowedPatient;

    constructor(public payload: {
        patient: Patient;
    }) {}
}


export class RemoveFollowListPatientAction implements Action {
    readonly type = FollowListActionType.removeFollowedPatient;

    constructor(public payload: {
        code: number;
    }) {}
}

export type FollowListAction =
    AddFollowListOrderAction
  | RemoveFollowListOrderAction
  | AddFollowListPatientAction
  | RemoveFollowListPatientAction;
