import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import {BaseUrlService}  from '../baseUrl/base-url.service'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:Http,
    private  BaseUrlService:BaseUrlService
    ) { }

  Userlogin(user){    
    console.log("enter in  UserLoginFunction");    
    console.log(user);  
    var api=this.BaseUrlService.getBase_Url()+'/api/account/login';
    console.log(' login api',api);
    return this.http.post(api, user) 
             .pipe(map((response: Response) =>response.json()))              
  }  
}
