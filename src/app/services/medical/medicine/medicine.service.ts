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
  // updateMedicine(medicine) {
  //   console.log(medicine);
  //   var api = this.BaseUrlService.getBase_Url() + '/api/medMidicine';
  //   return this.http.put(api, medicine)
  //     .pipe(map((response: Response) => response.json()))
  // }
  getMedicine(medicineId){
    console.log(medicineId)
    var api = this.BaseUrlService.getBase_Url() + '/api/medMidicine/'+medicineId;
    return this.http.get(api)
    .pipe(map((response: Response) => response.json()))
  }
  getAllMedicine(){
    var api = this.BaseUrlService.getBase_Url() + '/api/medMidicine';
    return this.http.get(api)
    .pipe(map((response: Response) => response.json()))
  }
  deleteMedicine(){
    
  }

}
