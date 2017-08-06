import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;
@Component({
    selector: 'login-nav-bar',
    templateUrl: './login-nav-bar.component.html',
    styleUrls: ['./login-nav-bar.component.css']
})

export class LoginNavBarComponent implements OnInit{

     constructor(private el:ElementRef){}
  ngOnInit() {
    jQuery(this.el.nativeElement).find('.button-collapse').sideNav();
  }
    buttonClicked(event) {
        console.log(event);
    }
}
