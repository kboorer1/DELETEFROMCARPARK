import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
 import { TestService } from './api/test.service'; 
 import { Configuration } from './app.constants';
 import { DashboardComponent } from './routes/dashboard/dashboard.component';
 import { SideNavComponent } from './components/side-nav/side-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [TestService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
