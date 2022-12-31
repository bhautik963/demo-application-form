import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent
  },
  {
    path: 'view/:id',
    component: ViewUserComponent,
    data: {
      title: 'view',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
