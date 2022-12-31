import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(module => module.UsersModule),
    data: {
      title: 'Users',
      status: false
    }
  },
  {
    path: 'users',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
