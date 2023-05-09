import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersRepo } from '../repositories/orders-repo.service';
import { Order } from '../shared/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private readonly orderRepo: OrdersRepo) {}

  getOrderList(): Observable<Order[]> {
    return this.orderRepo.getList();
  }
}
