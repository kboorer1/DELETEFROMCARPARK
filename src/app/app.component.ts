import { Component, OnInit } from '@angular/core';
import { TestService } from './api/test.service';
import { Configuration } from './app.constants'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService, Configuration]
})
export class AppComponent implements OnInit {
  title = 'VERY MAJOR PROJECT!';
  resp: any;

  constructor( private testService: TestService) {}

  ngOnInit() {
    this.testService.getTests().subscribe( resp => {
      console.log(resp);
      this.resp = resp;
    })
  }


}
