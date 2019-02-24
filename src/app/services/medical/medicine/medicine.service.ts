import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BaseUrlService } from '../../baseUrl/base-url.service'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MedicalMedicineService {

  constructor(
    private http: Http,
    private BaseUrlService: BaseUrlService
  ) { }
  postMedicine(medicine) {
    console.log(medicine);
    var api = this.BaseUrlService.getBase_Url() + '/api/medMedicine';
    return this.http.post(api, medicine)
      .pipe(map((response: Response) => response.json()))
  }
  getMedicine(medicineId){
    console.log(medicineId)
    var api = this.BaseUrlService.getBase_Url() + '/api/medMedicine/'+medicineId;
    return this.http.get(api)
    .pipe(map((response: Response) => response.json()))
  }
  getAllMedicine(MedicalStoreId){
    var api = this.BaseUrlService.getBase_Url() + '/api/medMedicine/'+MedicalStoreId;
    return this.http.get(api)
    .pipe(map((response: Response) => response.json()))
  }
  deleteMedicine(){
    
  }
  getmedicalStoresFromMedicinesId(medicineId){
    var medicalStoreId=0;
    var api = this.BaseUrlService.getBase_Url() + '/api/medMedicine/'+medicalStoreId+'/'+medicineId;
    return this.http.get(api)
    .pipe(map((response: Response) => response.json()))

  }

}
