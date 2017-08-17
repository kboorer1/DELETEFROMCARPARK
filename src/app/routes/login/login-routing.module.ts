import { NgModule, OnInit }             from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { AuthGuard } from '../../api/auth-guard/auth-guard.service';
import { LoginFormComponent } from './login-form/login-form.component'; 
import { RegisterComponent } from './register/register.component'; 
const loginRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'guest', redirectTo: '/guest', pathMatch: 'full'},
  { path: 'manager', redirectTo: '/manager', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forChild(loginRoutes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule implements OnInit { 
  ngOnInit() {
    console.log('routing module');
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/