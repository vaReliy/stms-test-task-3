import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"
import { combineLatest, Observable, Subject } from 'rxjs'
import { startWith, switchMap } from 'rxjs/operators'

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module"
import { Order } from '../../../shared/models/order.model'
import { OrdersService } from './orders.service'

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS

  orderList$: Observable<Order[]>

  refresh$ = new Subject()

  filter$ = new Subject() // todo filter (bonus)

  constructor(private readonly ordersService: OrdersService) {
  }

  ngOnInit() {
    this.orderList$ = combineLatest([
      this.refresh$,
      this.filter$.pipe(startWith({})),
    ]).pipe(
      switchMap(() => this.ordersService.getOrderList())
    )
  }

  onRefresh(): void {
    this.refresh$.next({})
  }

  onAddOrder(order: Order): void {
    // todo: add order
    console.log('todo: add order', order.orderNum) // fixme
  }
}
