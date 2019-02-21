import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BaseUrlService } from '../../baseUrl/base-url.service'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  constructor(
    private http: Http,
    private BaseUrlService: BaseUrlService
  ) { }
  postMedicine(medicine) {
    console.log(medicine);
    var api = this.BaseUrlService.getBase_Url() + '/api/medicine';
    return this.http.post(api, medicine)
      .pipe(map((response: Response) => response.json()))
  }
  updateMedicine(medicine) {
    console.log(medicine);
    var api = this.BaseUrlService.getBase_Url() + '/api/medicine';
    return this.http.put(api, medicine)
      .pipe(map((response: Response) => response.json()))
  }
  getMedicalStore(medicineId){
    console.log(medicineId)
    var api = this.BaseUrlService.getBase_Url() + '/api/medicine/'+medicineId;
    return this.http.get(api)
    .pipe(map((response: Response) => response.json()))
  }
  getAllMedicine(){
    var api = this.BaseUrlService.getBase_Url() + '/api/medicine';
    return this.http.get(api)
    .pipe(map((response: Response) => response.json()))
  }
  deleteMedicine(medicineId){
    var api = this.BaseUrlService.getBase_Url() + '/api/medicine/'+medicineId;
    return this.http.delete(api)
    .pipe(map((response: Response) => response.json()))
  }
}
