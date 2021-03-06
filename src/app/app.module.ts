import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
 import { TestService } from './api/test.service'; 
 import { Configuration } from './app.constants';
 import { LoginNavBarComponent } from './components/login-nav-bar/login-nav-bar.component';
import { LoginModule } from './routes/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent } from './api/auth-guard/alert.component';
import { AuthGuard, AlertService, AuthenticationService, UserService, fakeBackendProvider } from './api/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
@NgModule({
  declarations: [
     AppComponent, 
     LoginNavBarComponent,
     AlertComponent
  ],
  imports: [
    LoginModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
              TestService, 
              Configuration,
              AuthGuard,
              AlertService,
              AuthenticationService,
              UserService,

              // providers used to create fake backend
              fakeBackendProvider,
              MockBackend,
              BaseRequestOptions
            ],
  bootstrap: [AppComponent],
})
export class AppModule { }