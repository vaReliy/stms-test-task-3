import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FollowListState, featureFollowListNode } from './follow.list.reducers';

export const selectorFollowListFeature = createFeatureSelector<FollowListState>(featureFollowListNode);

export const selectFollowedOrders = createSelector(
    selectorFollowListFeature,
    (state: FollowListState) => state.followedOrders
);

export const selectFollowedPatients = createSelector(
    selectorFollowListFeature,
    (state: FollowListState) => state.followedPatients
);
