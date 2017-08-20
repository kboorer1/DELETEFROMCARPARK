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
import { RegisterModule} from '../register/register.module'; 
import { GuestModule } from '../guest/guest.module';
import { ManagerModule } from '../manager/manager.module';
@NgModule({
  declarations: [   
    LoginFormComponent, 
  //  RegisterComponent, 
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    LoginRoutingModule,
    AngularFontAwesomeModule,
    GuestModule,
    ManagerModule,
    RegisterModule,
    
  ],
  providers: [TestService],  
})
export class LoginModule implements OnInit{
  ngOnInit() {
      console.log('login module');
  }
}