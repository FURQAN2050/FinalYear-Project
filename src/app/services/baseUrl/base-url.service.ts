import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
baseUrl="http://localhost:3000"
  constructor() { }
  
  public getBase_Url(){
  return this.baseUrl;
  }
}
