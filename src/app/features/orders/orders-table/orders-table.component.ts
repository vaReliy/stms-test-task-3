import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Order } from '../../../shared/models/order.model'

@Component({
  selector: 'st-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersTableComponent implements OnInit {
  @Input() data: Order[]

  @Output() add = new EventEmitter<Order>()

  displayedColumns = [
    'add',
    'orderNum',
    'orderName',
    'status',
    'creator',
    'patient',
    'creationDate',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
