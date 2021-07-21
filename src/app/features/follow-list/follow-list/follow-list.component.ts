import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Order } from '../../../shared/models/order.model'
import { OrdersService } from '../../../services/orders.service'

@Component({
  selector: 'st-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowListComponent implements OnInit {
  orderList: Order[] = []

  constructor(private readonly ordersService: OrdersService) {}

  ngOnInit(): void {
    this.orderList = this.ordersService.getFollowedOrderList()
  }

  onUnfollowOrder(order: Order): void {
    this.ordersService.removeFollowedItem(order)
  }
}
