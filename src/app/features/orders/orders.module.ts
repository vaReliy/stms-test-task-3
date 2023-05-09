import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, SharedModule, OrdersRoutingModule, MatTableModule],
})
export class OrdersModule {}
