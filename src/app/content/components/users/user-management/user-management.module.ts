import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { ViewUserComponent } from './view-user/view-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewUserComponent, ListUsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserManagementRoutingModule,
    FormsModule,
  ],
  providers: []
})
export class UserManagementModule { }
