import { NgModule, OnInit }             from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { AuthGuard } from '../../api/index';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
const managerRoutes: Routes = [
  { path: 'manager', component: ManagerDashboardComponent },  
];

@NgModule({
  imports: [ RouterModule.forChild(managerRoutes) ],
  exports: [ RouterModule ]
})
export class ManagerRoutingModule implements OnInit { 
  ngOnInit() {
    console.log('routing module');
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/