import { Component, OnInit } from '@angular/core';
import { IApiConfig } from '../apiconfig.entity';
import { LogService } from '../log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message? : string ; 
  token? : IApiConfig; 
  constructor(private logservice : LogService) { }

  ngOnInit(): void {

    this.message = this.logservice.getData("Home "); 
    this.token = this.logservice.makingAnApiCall();

  }

}
