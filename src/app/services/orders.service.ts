import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { OrdersRepo } from '../repositories/orders-repo.service'
import { Order } from '../shared/models/order.model'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private readonly orderRepo: OrdersRepo) {
  }

  private followedList = new Map<number, Order>()

  getOrderList(): Observable<Order[]> {
    return this.orderRepo.getList()
  }

  addFollowedItem(order: Order): void {
    this.followedList.set(order.orderNum, order)
  }

  removeFollowedItem(order: Order): void {
    if (this.followedList.has(order.orderNum)) {
      this.followedList.delete(order.orderNum)
      order.isFollowup = false
    }
  }

  getFollowedOrderList(): Order[] {
    return Array.from(this.followedList.values())
  }
}
