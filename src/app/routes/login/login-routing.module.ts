import { NgModule, OnInit, ModuleWithProviders }             from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { AuthGuard } from '../../api/index';
import { LoginFormComponent } from './login-form/login-form.component'; 
import { ManagerComponent } from '../manager/manager.component';
import { LoginComponent } from './login.component';
const loginRoutes: Routes = [
  { path: '', component: LoginComponent,
     children: [
       { path: 'login', component: LoginFormComponent}
     ]} 
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/