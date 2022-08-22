import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { apiToken } from './apiconfig.token';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogService } from './log.service';
import { configValue } from './values/mainapp.api.value';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:apiToken,useValue:configValue}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
