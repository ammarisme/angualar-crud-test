import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from './dashboard.component';
import {UsersComponent}      from './users/users.component';
import {UserDetailComponent}  from './users/user-modal/user-modal.component';
import {UserAddComponent} from './users/user-add/user-add.component';
import {UserUpdateComponent} from './user-update/user-update.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: UserDetailComponent},
  {path: 'update/:id', component: UserUpdateComponent},
  {path: 'users', component: UsersComponent},
  {path: 'add', component: UserAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}