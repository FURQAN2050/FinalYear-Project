import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BaseUrlService } from '../../baseUrl/base-url.service'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SignupapprovalService {

  constructor(
    private http: Http,
    private BaseUrlService: BaseUrlService
  ) { }
  public postApproval(user) {
    console.log(user);
    var api = this.BaseUrlService.getBase_Url() + '/api/signupapproval';
    return this.http.post(api, user)
      .pipe(map((response: Response) => response.json()))
  }
  public chkEmailExist(user) {
    console.log(user);
    var api = this.BaseUrlService.getBase_Url() + '/api/user';
    return this.http.post(api, user)
      .pipe(map((response: Response) => response.json()))
  }
  // updateMedicine(medicine) {
  //   console.log(medicine);
  //   var api = this.BaseUrlService.getBase_Url() + '/api/medicine';
  //   return this.http.put(api, medicine)
  //     .pipe(map((response: Response) => response.json()))
  // }
  // getMedicine(medicineId){
  //   console.log(medicineId)
  //   var api = this.BaseUrlService.getBase_Url() + '/api/medicine/'+medicineId;
  //   return this.http.get(api)
  //   .pipe(map((response: Response) => response.json()))
  // }
  public getAllSignupApprovals(){
    var api = this.BaseUrlService.getBase_Url() + '/api/signupapproval';
    return this.http.get(api)
    .pipe(map((response: Response) => response.json()))
  }
  public deleteSignupApproval(signupApprovalId){
    var api = this.BaseUrlService.getBase_Url() + '/api/signupapproval/'+signupApprovalId;
    return this.http.delete(api)
    .pipe(map((response: Response) => response.json()))
  }


}
