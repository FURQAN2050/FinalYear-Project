import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
baseUrl="https://aqueous-crag-99203.herokuapp.com"
// baseUrl="http://localhost:3000"
constructor() { }
  
  public getBase_Url(){
  return this.baseUrl;
  }
}
