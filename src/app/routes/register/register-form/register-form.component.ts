import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, AlertService } from '../../../api/index';
import { User } from '../../../models';
@Component({
    selector:'register-form',
    templateUrl: './register-form.component.html'
})

export class RegisterFormComponent {
    model: any = {};
    user = new User ();

    loading = 0; // loading variable to disable button when call is made to server
    validate = false; //variable used for validating 

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private alertService: AlertService) {}
    
    registerUser() {
        this.loading ++;
        this.userService.create(this.user)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading --;
                }); 
    }
}