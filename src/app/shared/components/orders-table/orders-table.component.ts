import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../models/order.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'st-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersTableComponent {
  @Input() data: Order[];

  @Input() isLoading$: Observable<boolean>;

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
}
