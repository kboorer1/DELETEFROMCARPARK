import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingLot } from '../../../models/parking-lot';
import { ParkingLotService } from './parking-lot-service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
    selector: 'managerdashboard',
    templateUrl: './manager-dashboard.component.html',
    providers: [ParkingLotService]
})

export class ManagerDashboardComponent implements OnInit {
  loading = 0;
  parkingLots: ParkingLot[];
  selectedParkingLot: ParkingLot;
  modalActions = new EventEmitter<string|MaterializeAction>();
    openModal() {
      this.modalActions.emit({action:"modal",params:['open']});
    }
    closeModal() {
      this.modalActions.emit({action:"modal",params:['close']});
    }

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

