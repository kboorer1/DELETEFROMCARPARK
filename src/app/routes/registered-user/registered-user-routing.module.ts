import { NgModule, OnInit , ModuleWithProviders}             from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { AuthGuard } from '../../api/index';
import { RegisteredUserComponent } from './registered-user.component';
import { RegisteredUserDashboardComponent } from './dashboard/dashboard.component';
const registeredUserRoutes: Routes = [ 
      { path: 'home', component: RegisteredUserDashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(registeredUserRoutes) ],
  exports: [ RouterModule ]
})
export class RegisteredUserRoutingModule  { }

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/