import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { LogService } from '../log.service';
import { apiToken } from '../apiconfig.token';
import { configValue } from '../values/customers.api.value';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers:[{
    provide:apiToken,useValue:configValue
  }]
})
export class CustomersModule { }
