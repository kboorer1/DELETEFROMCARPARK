import { Component, OnInit } from '@angular/core';
import { TestService } from '../../api/test.service';
import { Configuration } from '../../app.constants'; 

@Component({
  selector: 'manager',  
  providers: [TestService, Configuration]
})
export class ManagerComponent implements OnInit {
  title = 'MAJOR PROJECT!';
  resp: any;

  constructor( private testService: TestService) {}

  ngOnInit() { 
      console.log('manager component');
  }
}