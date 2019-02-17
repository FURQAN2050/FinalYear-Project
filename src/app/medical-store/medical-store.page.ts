import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentication/auth.service'
@Component({
  selector: 'app-medical-store',
  templateUrl: './medical-store.page.html',
  styleUrls: ['./medical-store.page.scss'],
})
export class MedicalStorePage implements OnInit {
  loggedIn;
  UserRole;
  MedicalId;
  
  editMode:boolean;
  showMode:boolean;
  medicalStore:any;
  
  constructor(
    private AuthService:AuthService
  ) { 
    this.showMode=true;
    this.editMode=false;
    
  }
ionViewDidEnter(){
  this.AuthService.loggedIn().subscribe(token=>{
    this.loggedIn=token;
    this.UserRole=this.AuthService.chkRole();
    this.MedicalId=this.AuthService.chkId();
    console.log(this.UserRole,"medical id ",this.MedicalId);
  })
}
  ngOnInit() {
   
  }
  edit(){
    console.log('in edit func')
    this.showMode=false;
    this.editMode=true;
  }
}
