import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
 const routes: Routes = [ 
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'login', loadChildren: '/routes/login/login.module#LoginModule'},
   { path: 'guest', loadChildren: '/routes/guest/guest.module#GuestModule' },
   { path: 'register', loadChildren: '/routes/register/register.module#RegisterModule' }
 ]

@NgModule({
  imports: [ RouterModule.forRoot(routes,
      { enableTracing: true }
    )
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/