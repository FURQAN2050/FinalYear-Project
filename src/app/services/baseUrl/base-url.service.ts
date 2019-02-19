import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
baseUrl="https://aqueous-crag-99203.herokuapp.com"
  constructor() { }
  
  public getBase_Url(){
  return this.baseUrl;
  }
}
