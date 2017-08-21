import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './routes/login/login.component';
import { GuestComponent } from './routes/guest/guest.component';
import { ManagerComponent } from './routes/manager/manager.component';
 const routes: Routes = [ 
   { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
    { path: 'login', component: LoginComponent},
    { path: 'guest', component: GuestComponent},
    { path: 'register', component: ManagerComponent }
 ]

 @NgModule({
   imports: [RouterModule.forRoot(routes) ],
   exports: [RouterModule]
 })
 export class AppRoutingModule{}
 // export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/