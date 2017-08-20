// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  
// import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'; 
import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';   
import { GuestDashboardComponent } from '../guest/guest-dashboard/guest-dashboard.component'; 
import { GuestRoutingModule } from '../guest/guest-routing.module';
//import { AppModule} from '../../app.module';
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
    GuestRoutingModule,
  //  AppModule,
  ],
  providers: [TestService,]
           
})
export class GuestModule {}