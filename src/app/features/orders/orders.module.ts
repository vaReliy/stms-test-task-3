import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MatTableModule } from '@angular/material/table'

import { SharedModule } from "../../shared/shared.module"
import { OrdersRoutingModule } from "./orders-routing.module"
import { OrdersTableComponent } from './orders-table/orders-table.component'

import { OrdersComponent } from "./orders/orders.component"
import { OrdersService } from './orders/orders.service'

@NgModule({
  declarations: [OrdersComponent, OrdersTableComponent],
  imports: [CommonModule, SharedModule, OrdersRoutingModule, MatTableModule],
  providers: [OrdersService],
})
export class OrdersModule {}
