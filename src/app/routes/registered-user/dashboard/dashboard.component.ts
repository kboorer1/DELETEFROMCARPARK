import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

@Component({
    selector: 'registered-user-dashboard',
    templateUrl: './dashboard.component.html'
})

export class RegisteredUserDashboardComponent {
  loading = 0;
  extendTicketModal = new EventEmitter<string|MaterializeAction>();
  modalActions = new EventEmitter<string|MaterializeAction>();
    openModal() {
      this.modalActions.emit({action:"modal",params:['open']});
    }
    closeModal() {
      this.modalActions.emit({action:"modal",params:['close']});
    }

  constructor() { }
 
  extendTicket() {
    console.log('open modal');
    this.extendTicketModal.emit({action: 'modal', params: ['open'] });
  }

  cancelExtendTicketModal() {
    this.extendTicketModal.emit({action: 'modal', params: ['close'] });
  }

  saveExtendTicketModal() {
    this.extendTicketModal.emit({action: 'modal', params: ['close'] });
  }
}

