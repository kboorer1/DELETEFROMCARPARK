// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'; 
import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';   
import { GuestDashboardComponent } from '../guest/guest-dashboard/guest-dashboard.component'; 
import { GuestRoutingModule } from '../guest/guest-routing.module';
@NgModule({
  declarations: [   
      GuestDashboardComponent
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AngularFontAwesomeModule,
    GuestRoutingModule
  ],
  providers: [TestService,
            { provide: SessionService,
              useFactory: sessionFactory,
              deps: [XHRBackend, RequestOptions, UrlService, LoginCoordinator ]}],  
})
export class GuestModule implements OnInit{}