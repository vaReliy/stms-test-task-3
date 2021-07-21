import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { Order } from '../shared/models/order.model'

@Injectable({
  providedIn: 'root',
})
export class OrdersRepo {
  constructor(private readonly http: HttpClient) {
  }

  getList(): Observable<Order[]> {
    const url = `${environment.apiUrl}/v2/79fb05cb`

    return this.http.get<{ order: Order[] }>(url).pipe(map(({order}) => order))
  }
}
