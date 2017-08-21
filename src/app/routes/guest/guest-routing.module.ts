import { NgModule, OnInit, ModuleWithProviders }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../api/index';
import { GuestComponent } from './';
import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
const guestRoutes: Routes = [
  { path: '', component: GuestComponent,
    children: [
      { path: 'guest', component: GuestDashboardComponent }
    ]}
];

export const guestRouting: ModuleWithProviders = RouterModule.forChild(guestRoutes);


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/