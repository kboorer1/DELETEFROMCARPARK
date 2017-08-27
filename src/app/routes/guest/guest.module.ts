// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';  
import { GuestComponent } from './guest.component';
import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component'; 
import { GuestRoutingModule } from './guest-routing.module';
@NgModule({
  declarations: [   
    GuestComponent,
    GuestDashboardComponent
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,
    GuestRoutingModule,
  ],
  providers: [TestService],  
})
export class GuestModule implements OnInit{
  ngOnInit() {
      console.log('login module');
  }
}