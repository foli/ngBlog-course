import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfilePage } from './user-profile.page';
import { UserUpdateComponent } from '../user-update/user-update.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserProfilePage, UserUpdateComponent],
  entryComponents: [UserUpdateComponent]
})
export class UserProfilePageModule {}
