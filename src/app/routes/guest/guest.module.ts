import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';   
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
    GuestRoutingModule, 
  ],
  providers: [TestService,]
           
})
export class GuestModule {}