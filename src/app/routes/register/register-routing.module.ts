import { NgModule, OnInit, ModuleWithProviders }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../api/index';
import { RegisterFormComponent } from './register-form/register-form.component';
const registerRoutes: Routes = [ 
      { path: 'register', component: RegisterFormComponent } 
];

@NgModule({
  imports: [ RouterModule.forChild(registerRoutes) ],
  exports: [ RouterModule ]
})
export class RegisterRoutingModule implements OnInit { 
  ngOnInit() {
    console.log('routing module');
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/