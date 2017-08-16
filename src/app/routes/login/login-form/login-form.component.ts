import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

import { User } from '../../../models'; 
@Component({
    selector:'login-form',
    templateUrl: './login-form.component.html'
})

export class LoginFormComponent implements OnInit {
    user: User;
    validate = false; //variable used for validating 
    invalidCredentials = false; // variable used to show if user's details were invalid
    loading = 0; // loading variable to disable button when call is made to server


    constructor(private route: ActivatedRoute,
                private router: Router) { 
                }

    ngOnInit() {
        this.user = new User();
    }
    /* when the user presses the login button does validation.
        sends data to server. Server returns if details are correct
        or incorrect. Goes to according methods */
    logUserIn() {
        if (this.loading > 0) {
            return;
        }
        if (!this.user.name || !this.user.password) {
            this.invalidLogin();
            return;
        }
        this.validate = false;
        this.invalidCredentials = false;
        this.loading ++;
        // call to server then in subscribe if a vaild user go to the successful login method
        // if not a valid user go to invalid login method
    }

    invalidLogin() {
        this.validate = true;
        this.invalidCredentials = true;
    }

    forgotPassword() {
        if(this.loading > 0) {
            return;
        }
    }

    registerUser() {
        if (this.loading > 0) {
            return;
        }
        this.router.navigate(['/register']);
    }

    continueAsGuest() {
        if (this.loading > 0) {
            return;
        }
    }
}