import { Component, OnInit } from '@angular/core';
import { IApiConfig } from '../apiconfig.entity';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers:[],
  viewProviders:[]
})
export class OrdersComponent implements OnInit {

  message? : string; 
  token ? : IApiConfig; 
  constructor(private logservice : LogService) { }

  ngOnInit(): void {
    this.message = this.logservice.getData("Orders "); 
    this.token = this.logservice.makingAnApiCall();
  }

}
