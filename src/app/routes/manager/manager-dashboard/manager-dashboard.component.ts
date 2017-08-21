import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingLot } from '../../../models/parking-lot';
import { ParkingLotService } from './parking-lot-service';

@Component({
    selector: 'managerdashboard',
    templateUrl: './manager-dashboard.component.html',
    providers: [ParkingLotService]
})

export class ManagerDashboardComponent implements OnInit {
  loading = 0;
  parkingLots: ParkingLot[];
  selectedParkingLot: ParkingLot;

  constructor(private parkingLotService: ParkingLotService) { }

  getParkingLots(): void {
    this.parkingLotService.getParkingLots().then(parkingLots =>
      this.parkingLots = parkingLots);
  }

  onSelect(parkingLot: ParkingLot): void {
    this.selectedParkingLot = parkingLot;
  }

  ngOnInit() {
    console.log('dashboard');
    this.getParkingLots();
  }
}


