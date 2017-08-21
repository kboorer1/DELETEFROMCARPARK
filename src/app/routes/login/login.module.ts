import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';   

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'; 
import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';  
import { LoginFormComponent } from './login-form/login-form.component';
import { loginRouting } from './login-routing.module'; 
import { RegisterModule} from '../register/register.module'; 
import { GuestModule } from '../guest/guest.module';
import { ManagerModule } from '../manager/manager.module';
import { LoginComponent } from './login.component';
@NgModule({
  declarations: [   
    LoginFormComponent, 
    LoginComponent 
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule, 
    loginRouting,
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