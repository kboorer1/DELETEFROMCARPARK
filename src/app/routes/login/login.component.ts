import { Component, OnInit } from '@angular/core';
import { TestService } from '../../api/test.service';
import { Configuration } from '../../app.constants'; 

@Component({
  template: `<router-outlet></router-outlet>`,
  providers: [TestService, Configuration]
})
export class LoginComponent implements OnInit {
  title = 'MAJOR PROJECT!';
  resp: any;

  constructor( private testService: TestService) {}

  ngOnInit() {
    console.log('ng on in it');
    this.testService.getTests().subscribe( resp => {
      console.log(resp);
      this.resp = resp;
    })
  }
}