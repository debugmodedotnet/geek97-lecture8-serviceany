import { Component, OnInit } from '@angular/core';
import { IApiConfig } from '../apiconfig.entity';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  message? : string; 
  token? : IApiConfig; 
  constructor(private logservice : LogService) { }

  ngOnInit(): void {

    this.message = this.logservice.getData("Customers "); 
    this.token = this.logservice.makingAnApiCall();
  }

}
