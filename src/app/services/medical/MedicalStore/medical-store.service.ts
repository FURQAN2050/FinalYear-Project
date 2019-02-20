import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BaseUrlService } from '../../baseUrl/base-url.service'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicalStoreService {

  constructor(
    private http: Http,
    private BaseUrlService: BaseUrlService
  ) { }
  updateMedicalStore(medicalStore) {
    console.log(medicalStore);
    var api = this.BaseUrlService.getBase_Url() + '/api/medicalstore';
    return this.http.put(api, medicalStore)
      .pipe(map((response: Response) => response.json()))
  }
  getMedicalStore(medicalStoreId){
    console.log(medicalStoreId)
    var api = this.BaseUrlService.getBase_Url() + '/api/medicalstore/'+medicalStoreId;
    return this.http.get(api)
    .pipe(map((response: Response) => response.json()))
  }
}
