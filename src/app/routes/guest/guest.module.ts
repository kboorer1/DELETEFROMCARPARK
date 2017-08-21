import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';   
import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';   
import { GuestDashboardComponent } from '../guest/guest-dashboard/guest-dashboard.component'; 
import { guestRouting } from '../guest/guest-routing.module'; 
import { GuestComponent } from './guest.component';
@NgModule({
  declarations: [   
    GuestComponent,
      GuestDashboardComponent
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,  
    guestRouting, 
  ],
  providers: [TestService,]
           
})
export class GuestModule {}