import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lot } from '../../../models/lot';
import { LotService } from './lot-service';

@Component({
    selector: 'managerdashboard',
    templateUrl: './manager-dashboard.component.html',
    providers: [LotService]
})

export class ManagerDashboardComponent implements OnInit {
  loading = 0;
  lots: Lot[];

  constructor(private lotService: LotService) { }

  getLots(): void {
    this.lotService.getLots().then(lots =>
      this.lots = lots);
  }

  ngOnInit() {
    console.log('dashboard');
    this.getLots();
  }
}


