import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'; //helps in decoding
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
jwt_token:string;
jwt_decoder = new JwtHelperService();
private authSubject = new Subject();

  constructor() { }

  public saveToken(token){
    localStorage.removeItem('token');
    this.jwt_token=token;
    this.jwt_token=JSON.stringify(this.jwt_token);
    localStorage.setItem('token',this.jwt_token);
    this.authSubject.next(this.jwt_token);
    
  }
  
  public logOut(){
    localStorage.removeItem('token');
    this.jwt_token=null;
    console.log('clear token',localStorage);
  }
  
  public loggedIn(){
    return this.authSubject.asObservable();
    // this.jwt_token=localStorage.getItem('token');
    // if(this.jwt_token){
    //   return true;
    // }
    // else{
    //   return false;
    // }
  }

  public chkRole(){
    var decodedToken=this.decodeToken();
    if(this.decodeToken){ 
      console.log(decodedToken.role);     
      return decodedToken.role;
    }
  }
  public chkId(){
    var decodedToken=this.decodeToken();
    return decodedToken.sub;
  }
  
  private decodeToken(){
    this.jwt_token=localStorage.getItem('token');
    if(this.jwt_token){
      const decodedToken = this.jwt_decoder.decodeToken(this.jwt_token);
      console.log('decoded token',decodedToken)
      return decodedToken;
    }
    
  }

}
