// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'; 
import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';   
import { ManagerDashboardComponent } from '../manager/manager-dashboard/manager-dashboard.component'; 
import { ManagerRoutingModule } from '../manager/manager-routing.module';
import { LotDetailComponent } from './manager-dashboard/lot-detail.component';

@NgModule({
  declarations: [   
      ManagerDashboardComponent,
      LotDetailComponent
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AngularFontAwesomeModule,
    ManagerRoutingModule
  ],
  providers: [TestService],  
})
export class ManagerModule implements OnInit{
  ngOnInit() {
      console.log('manager module');
  }
}