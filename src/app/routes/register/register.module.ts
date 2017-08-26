// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  

import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';  
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterRoutingModule } from './register-routing.module'; 
import { RegisterComponent } from './register.component'; 
@NgModule({
  declarations: [   
    RegisterFormComponent, 
    RegisterComponent, 
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,
    RegisterRoutingModule,
  ],
  providers: [TestService],  
})
export class RegisterModule implements OnInit{
  ngOnInit() {
      console.log('register module');
  }
}