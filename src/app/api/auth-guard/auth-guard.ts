import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('auth guard');
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            console.log("should go to guest");
            this.router.navigate(['/guest'], {queryParams: { returnUrl: state.url }});
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        console.log('navigate to login');
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}