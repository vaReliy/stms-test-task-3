import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { FollowListRoutingModule } from './follow-list-routing.module';
import { FollowListComponent } from './follow-list/follow-list.component';
import { FilterComponent } from './filter/filter.component';
import { StoreModule } from '@ngrx/store';
import { featureFollowListNode, followListReducer } from './follow.list.reducers';


@NgModule({
  declarations: [FollowListComponent, FilterComponent],
  imports: [
    CommonModule,
    FollowListRoutingModule,
    TranslateModule,
    SharedModule,
    StoreModule.forFeature(featureFollowListNode, followListReducer)
  ]
})
export class FollowListModule {
}
