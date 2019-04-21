import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminTabsPage } from './admin-tabs/admin-tabs.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardPageModule'
          }
        ]
      },

      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: './admin-user/admin-user.module#AdminUserPageModule'
          }
        ]
      },

      {
        path: 'post',
        children: [
          {
            path: '',
            loadChildren: './admin-post/admin-post.module#AdminPostPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  declarations: [AdminTabsPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
