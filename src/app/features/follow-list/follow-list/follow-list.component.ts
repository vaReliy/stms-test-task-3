import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { OrdersService } from '../../../services/orders.service'
import { PatientService } from '../../../services/patient.service'
import { Order } from '../../../shared/models/order.model'
import { Patient } from '../../../shared/models/patient.model'

@Component({
  selector: 'st-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowListComponent implements OnInit {
  orderList$: Observable<Order[]>

  patientsList$: Observable<Patient[]> // todo

  constructor(
    private readonly ordersService: OrdersService,
    private readonly patientService: PatientService,
  ) {
  }

  ngOnInit(): void {
    this.orderList$ = this.ordersService.getFollowedList()
    this.patientsList$ = this.patientService.getFollowedList()
  }

  onUnfollowOrder(order: Order): void {
    this.ordersService.removeFollowedItem(order)
  }

  onUnfollowPatient(patient: Patient): void {
    this.patientService.removeFollowedItem(patient)
  }
}
