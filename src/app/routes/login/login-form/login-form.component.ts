import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { AlertService, AuthenticationService } from '../../../api/index';
import { User } from '../../../models'; 
@Component({
    moduleId: module.id,
    selector:'login-form',
    templateUrl: './login-form.component.html'
})

export class LoginFormComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    user: User;
    validate = false; //variable used for validating 
    invalidCredentials = false; // variable used to show if user's details were invalid
    loading = 0; // loading variable to disable button when call is made to server


    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private alertService: AlertService) { }

    ngOnInit() {
        //reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.user = new User();
    }

    login() {
        this.loading ++;
        console.log('model', this.model);
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log('data', data);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading --;
                });
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
        // this.loading ++;

        if (this.user.name === 'manager') {
            this.loginAsManager();
        }
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
        this.router.navigate(['/guest']);
    }

    loginAsManager() {
        if (this.loading > 0) {
            return;
        }
        this.router.navigate(['manager']);
    }

    loginAsRegisteredUser() {
        if (this.loading > 0) {
            return;
        }
        this.router.navigate(['/']);
    }
}