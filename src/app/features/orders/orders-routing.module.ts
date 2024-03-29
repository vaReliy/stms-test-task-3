import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    data: { title: 'stms.menu.orders' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
