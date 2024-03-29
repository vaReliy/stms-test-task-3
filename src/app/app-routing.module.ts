import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patients',
    pathMatch: 'full'
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./features/patients/patients.module').then(m => m.PatientsModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'follow-list',
    loadChildren: () =>
      import('./features/follow-list/follow-list.module').then(m => m.FollowListModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: '**',
    redirectTo: 'patients'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
