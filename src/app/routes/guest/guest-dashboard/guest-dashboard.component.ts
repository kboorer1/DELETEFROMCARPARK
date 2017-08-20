import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

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
