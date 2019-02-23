import { Injectable } from '@angular/core';
import { BaseUrlService } from '../baseUrl/base-url.service';
import {Http} from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class SearchService {
 allMedicines:any;
 allMedicals:any;
 medicine=[{name:'pandol',companyName:'gsk'},
            {name:'postan',companyName:'gsk'},
            {name:'pectus',companyName:'gsk'},
            {name:'lefloacks',companyName:'gsk'},
            {name:'soaks',companyName:'gsk'}]
  constructor( private url: BaseUrlService, private http: Http) {
    this.allMedicines=this.http.get(url.baseUrl+'/api/allMedicines');
    this.allMedicals=this.http.get(url.baseUrl+'/api/allMedicals');
   }
   search(searchTerm){
    
   }
}
