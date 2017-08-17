import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'managerdashboard',
    templateUrl: './manager-dashboard.component.html'
})

export class ManagerDashboardComponent implements OnInit {
  
  loading = 0;

  ngOnInit() {
    console.log('dashboard');
  }
}
