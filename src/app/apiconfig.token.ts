import { InjectionToken } from "@angular/core";
import { IApiConfig } from "./apiconfig.entity";


 export const apiToken = 
 new InjectionToken<IApiConfig>("This token contains information of apiconfig");