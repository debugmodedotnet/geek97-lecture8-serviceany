import { Inject, Injectable } from '@angular/core';
import { IApiConfig } from './apiconfig.entity';
import { apiToken } from './apiconfig.token';

console.log('I am part of final output bundle'); 
@Injectable({
  providedIn:'any'
})
export class LogService {


  static objCount = 0; 
  constructor(@Inject(apiToken) private token:IApiConfig) { 
    LogService.objCount = LogService.objCount + 1; 
    console.log('number of Logservice objects', LogService.objCount)
  }

  getData(name:string): string{
    return "hello " + name; 
  }

  makingAnApiCall(){
    // pass different values for that ApiConfig 
    return this.token; 
  }
}
