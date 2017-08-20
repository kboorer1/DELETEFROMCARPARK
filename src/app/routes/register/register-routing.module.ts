import { NgModule, OnInit, ModuleWithProviders }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../api/index';
import { RegisterComponent } from './';
import { RegisterFormComponent } from './register-form/register-form.component';
const registerRoutes: Routes = [
  { path: '', component: RegisterComponent,
    children: [
      { path: 'register', component: RegisterFormComponent }
    ]}
];

export const RegisterRoutingModule: ModuleWithProviders = RouterModule.forChild(registerRoutes);


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/