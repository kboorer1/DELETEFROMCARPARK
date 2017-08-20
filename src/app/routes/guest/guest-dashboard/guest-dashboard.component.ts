import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//our root app component
import { NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'
import { MaterializeModule  } from 'angular2-materialize';
import { RouterModule, Router } from '@angular/router';



@Component({
    selector: 'guestdashboard',
    templateUrl: './guest-dashboard.component.html'
})

export class GuestDashboardComponent implements OnInit {
  loading = 0;

  ngOnInit() {
    console.log('dashboard');
  }
}
