import { NgModule, OnInit , ModuleWithProviders}             from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { AuthGuard } from '../../api/index';
import { ManagerComponent } from './';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
const managerRoutes: Routes = [
  { path: '', component: ManagerComponent,
    children: [
      { path: 'manager', component: ManagerDashboardComponent }
    ]}  
];

export const managerRouting: ModuleWithProviders = RouterModule.forChild(managerRoutes);



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/