import { Component, Input } from '@angular/core';
import { Lot } from '../../../models/lot';

@Component({
    selector: 'lot-detail',
    templateUrl: './lot-detail.component.html',
})

export class LotDetailComponent {
    @Input() lot: Lot;
}