// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'; 
import { TestService } from '../../api/test.service';
import { CommonModule } from '@angular/common';   
import { RegisterFormComponent } from './register-form/register-form.component'; 
import { RegisterRoutingModule } from './register-routing.module';
//import { AppModule} from '../../app.module';
@NgModule({
  declarations: [   
      RegisterFormComponent
  ],
  imports: [  
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AngularFontAwesomeModule,
    RegisterRoutingModule,
  //  AppModule,
  ],
  providers: [TestService,]
           
})
export class RegisterModule {}