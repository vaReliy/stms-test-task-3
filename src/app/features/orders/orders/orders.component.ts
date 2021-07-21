import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core"
import { Observable, Subject } from 'rxjs'
import { switchMap } from 'rxjs/operators'

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module"
import { OrdersService } from '../../../services/orders.service'
import { Order } from '../../../shared/models/order.model'

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

  constructor(private readonly ordersService: OrdersService) {}

  ngOnInit() {
    this.orderList$ = this.refresh$.pipe(
      switchMap(() => this.ordersService.getOrderList())
    )
  }

  onRefresh(): void {
    this.refresh$.next({})
  }

  onFollowOrder(order: Order): void {
    this.ordersService.addFollowedItem(order)
  }
}
