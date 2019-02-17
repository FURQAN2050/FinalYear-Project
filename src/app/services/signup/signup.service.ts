import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import {BaseUrlService}  from '../baseUrl/base-url.service'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http:Http,
    private  BaseUrlService:BaseUrlService
  ) { }

  public UserSignup(user){    
    console.log("enter in  signup");    
    console.log(user);  
    var api=this.BaseUrlService.getBase_Url()+'/api/account/signup';
    return this.http.post(api, user) 
             .pipe(map((response: Response) =>response.json()))              
  }  
}

