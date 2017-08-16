// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'; 
import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';  
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module'; 
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
import { GuestDashboardComponent } from '../guest/guest-dashboard/guestdashboard.component'; 
=======
import { RegisterComponent } from './register/register.component'; 
>>>>>>> parent of 665d24d3... Add guest dashboard page
@NgModule({
  declarations: [   
    LoginFormComponent, 
    RegisterComponent
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    LoginRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [TestService],  
})
export class LoginModule implements OnInit{
  ngOnInit() {
      console.log('login module');
  }
}