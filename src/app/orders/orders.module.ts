import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { LogService } from '../log.service';
import { apiToken } from '../apiconfig.token';
import { configValue } from '../values/orders.api.value';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[
  {provide:apiToken,useValue:configValue}]
})
export class OrdersModule { }
