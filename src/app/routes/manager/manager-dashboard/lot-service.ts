import { Injectable } from '@angular/core';

import { Lot } from '../../../models/lot';

@Injectable()
export class LotService {
    getLots(): Promise<Lot[]> {
        const LOTS: Lot[] = [
        { id: 1, location: 'uni plot 1', openTime: '7:00AM', closeTime: '8:00PM',
            cost: '3.00', lotName: 'Parking Lot 1' },
        { id: 2, location: 'Uni cool plot yay', openTime: '7:00AM', closeTime: '8:00PM',
            cost: '3.00', lotName: 'Parking Lot 2' },
        { id: 3, location: 'uni plot 3', openTime: '7:00AM', closeTime: '8:00PM',
            cost: '3.00', lotName: 'Parking Lot 3' }
        ];
        return Promise.resolve(LOTS);
    }  
}
