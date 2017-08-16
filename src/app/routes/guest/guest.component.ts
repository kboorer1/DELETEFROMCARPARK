import { Component, OnInit } from '@angular/core';
import { TestService } from '../../api/test.service';
import { Configuration } from '../../app.constants'; 

@Component({
  selector: 'guest',  
  providers: [TestService, Configuration]
})
export class GuestComponent implements OnInit {
  title = 'MAJOR PROJECT!';
  resp: any;

  constructor( private testService: TestService) {}

  ngOnInit() { 
      console.log('guest component');
  }
}