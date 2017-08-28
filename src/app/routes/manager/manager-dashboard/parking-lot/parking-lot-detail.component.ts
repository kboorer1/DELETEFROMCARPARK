import { Component, Input } from '@angular/core';
import { ParkingLot } from '../../../../models/parking-lot';

@Component({
    selector: 'parking-lot-detail',
    templateUrl: './parking-lot-detail.component.html',
})

export class ParkingLotDetailComponent {
    @Input() parkingLot: ParkingLot;
}