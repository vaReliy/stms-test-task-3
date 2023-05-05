import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest } from 'rxjs';
import { switchMap, map, tap, catchError } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { OrdersService } from '../../../services/orders.service';
import { Order } from '../../../shared/models/order.model';
import { Store, select } from '@ngrx/store';
import { FollowListState } from 'app/features/follow-list/follow.list.reducers';
import { AddFollowListOrderAction } from 'app/features/follow-list/follow-list.actions';
import { selectFollowedOrders } from 'app/features/follow-list/follow-list.selectors';

@Component({
  selector: 'st-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  orderList$: Observable<Order[]>;

  followedOrders$: Observable<Order[]> = this.store$.pipe(select(selectFollowedOrders));

  refresh$ = new Subject();

  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly store$: Store<FollowListState>,
    private readonly ordersService: OrdersService
    ) {}

  ngOnInit() {
    this.orderList$ = this.refresh$.pipe(
      tap(() => this.isLoading$.next(true)),
      switchMap(() => combineLatest([
        this.ordersService.getOrderList(),
        this.followedOrders$
      ])),
      map(([orderList, followedOrders]) => orderList.map(order => ({
          ...order,
          isFollowup: followedOrders.find(fo => fo.orderNum === order.orderNum)?.isFollowup
        }))),
      catchError(() => {
        // todo: do error handle
        this.isLoading$.next(false);
        return [];
      }),
      tap(() => this.isLoading$.next(false))
    );
  }

  onRefresh(): void {
    this.refresh$.next({});
  }

  onFollowOrder(order: Order): void {
    this.store$.dispatch(new AddFollowListOrderAction({
      order: {
        ...order,
        isFollowup: true
      }
    }));
  }
}
