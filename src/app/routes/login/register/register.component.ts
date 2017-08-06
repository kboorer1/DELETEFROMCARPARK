import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    user: any = {
        FirstName: null,
        LastName: null
    };

    loading = 0;
}