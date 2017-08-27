import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';   

import { MaterializeModule } from "angular2-materialize";

import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';   
import { ManagerDashboardComponent } from '../manager/manager-dashboard/manager-dashboard.component'; 
import { ManagerRoutingModule } from '../manager/manager-routing.module';
import { ParkingLotDetailComponent } from './manager-dashboard/parking-lot-detail/parking-lot-detail.component';
import { ManagerComponent } from './manager.component';
@NgModule({
  declarations: [   
    ManagerComponent,
      ManagerDashboardComponent,
      ParkingLotDetailComponent
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,
    ManagerRoutingModule,
    MaterializeModule
  ],
  providers: [TestService],  
})
export class ManagerModule {}