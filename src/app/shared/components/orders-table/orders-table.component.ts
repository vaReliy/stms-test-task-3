import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'st-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersTableComponent implements OnInit {
  @Input() data: Order[];

  @Input() actionType: 'add' | 'remove' = 'add';

  @Output() action = new EventEmitter<Order>();

  displayedColumns = [
    'action',
    'orderNum',
    'orderName',
    'status',
    'creator',
    'patient',
    'creationDate',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
