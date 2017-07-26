import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
 import { TestService } from './api/test.service'; 
 import { Configuration } from './app.constants';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TestService, Configuration],
  bootstrap: [AppComponent], 
  exports: [Configuration]
})
export class AppModule { }
