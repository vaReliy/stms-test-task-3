import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { combineLatest, Observable, Subject } from 'rxjs'
import { filter, map, startWith } from 'rxjs/operators'
import { OrdersService } from '../../../services/orders.service'
import { PatientService } from '../../../services/patient.service'
import { Order } from '../../../shared/models/order.model'
import { Patient } from '../../../shared/models/patient.model'

type FilterData = {
  filterBy: 'fullName' | 'orderName',
  query: string
}

@Component({
  selector: 'st-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: ['./follow-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowListComponent implements OnInit {
  orderList$: Observable<Order[]>

  patientsList$: Observable<Patient[]> // todo

  filter$ = new Subject<FilterData>()

  constructor(
    private readonly ordersService: OrdersService,
    private readonly patientService: PatientService,
  ) {
  }

  ngOnInit(): void {
    this.orderList$ = combineLatest([
      this.filter$.pipe(startWith({filterBy: 'orderName', query: ''})),
      this.ordersService.getFollowedList()
    ]).pipe(
      map(([filter, list]) => ({filter, list})),
      filter(({filter, list}) => filter.filterBy === 'orderName'),
      map(({filter, list}) => list.filter((item) => filter.query ? item[filter.filterBy].toLowerCase().includes(filter.query.toLowerCase()) : true))
    )

    this.patientsList$ = combineLatest([
      this.filter$.pipe(startWith({filterBy: 'fullName', query: ''})),
      this.patientService.getFollowedList()
    ]).pipe(
      map(([filter, list]) => ({filter, list})),
      filter(({filter, list}) => filter.filterBy === 'fullName'),
      map(({filter, list}) => list.filter((item) => filter.query ? item[filter.filterBy].toLowerCase().includes(filter.query.toLowerCase()) : true))
    )
  }

  onUnfollowOrder(order: Order): void {
    this.ordersService.removeFollowedItem(order)
  }

  onUnfollowPatient(patient: Patient): void {
    this.patientService.removeFollowedItem(patient)
  }

  onFilterChange(filter: FilterData): void {
    this.filter$.next(filter)
  }
}
