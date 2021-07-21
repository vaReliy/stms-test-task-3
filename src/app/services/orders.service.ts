import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { OrdersRepo } from '../repositories/orders-repo.service'
import { Order } from '../shared/models/order.model'
import { AbstractFollowedService } from './abstract-followed.service'

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends AbstractFollowedService<Order> {
  constructor(private readonly orderRepo: OrdersRepo) {
    super()
  }

  getOrderList(): Observable<Order[]> {
    return this.orderRepo.getList()
  }

  addFollowedItem(order: Order): void {
    order.isFollowup = true
    this.followedList.set(order.orderNum, order)
  }

  removeFollowedItem(order: Order): void {
    if (this.followedList.has(order.orderNum)) {
      this.followedList.delete(order.orderNum)
      order.isFollowup = false
    }
  }
}
