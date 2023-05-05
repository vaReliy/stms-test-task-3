/* eslint-disable @typescript-eslint/no-shadow */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { Order } from '../../../shared/models/order.model';
import { Patient } from '../../../shared/models/patient.model';
import { Store, select } from '@ngrx/store';
import { FollowListState } from '../follow.list.reducers';
import { selectFollowedOrders, selectFollowedPatients } from '../follow-list.selectors';
import { RemoveFollowListOrderAction, RemoveFollowListPatientAction } from '../follow-list.actions';

type FilterData = {
  filterBy: 'fullName' | 'orderName';
  query: string;
};

@Component({
  selector: 'st-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowListComponent implements OnInit {
  orderList$: Observable<Order[]>;
  patientList$: Observable<Patient[]>;

  followedOrders$: Observable<Order[]> = this.store$.pipe(select(selectFollowedOrders));

  followedPatients$: Observable<Patient[]> = this.store$.pipe(select(selectFollowedPatients));

  filter$ = new Subject<FilterData>();

  constructor(
    private readonly store$: Store<FollowListState>,
  ) {
  }

  ngOnInit(): void {
    const filterList = ({filter, list}) => list.filter(
      (item) => filter.query
      ? item[filter.filterBy].toLowerCase().includes(filter.query.toLowerCase())
      : true
    );

    this.orderList$ = combineLatest([
      this.filter$.pipe(startWith({filterBy: 'orderName', query: ''})),
      this.followedOrders$
    ]).pipe(
      map(([filter, list]) => ({filter, list})),
      filter(({filter, list}) => filter.filterBy === 'orderName' || !filter.query),
      map(filterList)
    );

    this.patientList$ = combineLatest([
      this.filter$.pipe(startWith({filterBy: 'fullName', query: ''})),
      this.followedPatients$
    ]).pipe(
      map(([filter, list]) => ({filter, list})),
      filter(({filter, list}) => filter.filterBy === 'fullName' || !filter.query),
      map(filterList)
    );
  }

  onUnfollowOrder(order: Order): void {
    this.store$.dispatch(new RemoveFollowListOrderAction({
      orderNum: order.orderNum
    }));
  }

  onUnfollowPatient(patient: Patient): void {
    this.store$.dispatch(new RemoveFollowListPatientAction({
      code: patient.code
    }));
  }

  onFilterChange(filter: FilterData): void {
    this.filter$.next(filter);
  }
}
