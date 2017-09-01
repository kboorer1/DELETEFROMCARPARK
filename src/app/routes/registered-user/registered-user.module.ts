import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';   

import { MaterializeModule } from "angular2-materialize";

import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';   
import { RegisteredUserDashboardComponent } from './dashboard/dashboard.component'; 
import { RegisteredUserRoutingModule } from './registered-user-routing.module';
import { RegisteredUserComponent } from './registered-user.component';
@NgModule({
  declarations: [   
    RegisteredUserComponent,
      RegisteredUserDashboardComponent,
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,
    RegisteredUserRoutingModule,
    MaterializeModule
  ],
  providers: [TestService],  
})
export class RegisteredUserModule {}