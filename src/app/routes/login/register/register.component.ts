import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    user: any = {
        FirstName: null,
        LastName: null
    };

    loading = 0; // loading variable to disable button when call is made to server
    validate = false; //variable used for validating 

    constructor(private route: ActivatedRoute,
                private router: Router) {}
    
}