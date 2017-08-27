// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  

import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';  
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module'; 
import { RegisterComponent } from '../register/register.component'; 
import { GuestModule } from '../guest/guest.module';
import { ManagerModule } from '../manager/manager.module';
import { RegisterModule } from '../register/register.module';
@NgModule({
  declarations: [   
    LoginFormComponent,  
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
    RegisterModule,
    GuestModule,
    ManagerModule
  ],
  providers: [TestService],  
})
export class LoginModule implements OnInit{
  ngOnInit() {
      console.log('login module');
  }
}
