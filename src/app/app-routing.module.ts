import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './content/auth/auth.component';
import { AuthGuard } from './theme/guards/auth.guard';

const routes: Routes = [  {
  path: '',
  // canActivate: [AuthGuard],
  component: AuthComponent,
  children: [
    {
      path: '',
      redirectTo: 'components/users',
      pathMatch: 'full'
    },
    {
      path: 'components',
      loadChildren: () => import('./content/components/components.module').then(module => module.ComponentsModule)
    }
  ]
},
{
  path: '',
  // component: AuthComponent,
  children: [
    {
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
    },
    {
      path: 'auth',
      loadChildren: () => import('./content/auth/auth.module').then(module => module.AuthModule),
    },
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
