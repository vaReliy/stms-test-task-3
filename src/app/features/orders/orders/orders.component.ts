import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap, map, tap, catchError } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { OrdersService } from '../../../services/orders.service';
import { Order } from '../../../shared/models/order.model';

@Component({
  selector: 'st-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  orderList$: Observable<Order[]>;

  refresh$ = new Subject();

  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly ordersService: OrdersService) {}

  ngOnInit() {
    this.orderList$ = this.refresh$.pipe(
      tap(() => this.isLoading$.next(true)),
      switchMap(() => this.ordersService.getOrderList()),
      catchError(() => {
        // todo: do error handle
        this.isLoading$.next(false);
        return [];
      }),
      map((list: Order[]) =>
        list.map(order => this.ordersService.applyFollowed(order))
      ),
      tap(() => this.isLoading$.next(false))
    );
  }

  onRefresh(): void {
    this.refresh$.next({});
  }

  onFollowOrder(order: Order): void {
    this.ordersService.addFollowedItem(order);
  }
}
