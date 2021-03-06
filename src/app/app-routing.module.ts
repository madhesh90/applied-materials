import { FruitsComponent } from './fruits/fruits.component';
import { AppUserProfileComponent } from './app-user-profile/app-user-profile.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppUserListsComponent } from './app-user-lists/app-user-lists.component';
import { AppLoginComponent } from './app-login/app-login.component';

const routes: Routes = [
  { path: '', component: AppLoginComponent},
  { path: 'login', component: AppLoginComponent},
  { path: 'fruits', component: FruitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
