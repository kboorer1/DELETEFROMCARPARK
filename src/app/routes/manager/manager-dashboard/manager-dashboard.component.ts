import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lot } from '../../../models/lot';

const LOTS: Lot[] = [
  { id: 1, location: 'uni plot 1', openTime: '7:00AM', closeTime: '8:00PM',
    cost: '3.00' },
  { id: 2, location: 'uni plot 2',
  openTime: '7:00AM', closeTime: '8:00PM', cost: '3.00' },
  { id: 3, location: 'uni plot 3',
  openTime: '7:00AM', closeTime: '8:00PM', cost: '3.00' }
];


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


