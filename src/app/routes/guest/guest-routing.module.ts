import { NgModule, OnInit }             from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { AuthGuard } from '../../api/auth-guard/auth-guard.service';
import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
const guestRoutes: Routes = [
  { path: 'guest', component: GuestDashboardComponent },  
];

@NgModule({
  imports: [ RouterModule.forChild(guestRoutes) ],
  exports: [ RouterModule ]
})
export class GuestRoutingModule implements OnInit { 
  ngOnInit() {
    console.log('routing module');
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/