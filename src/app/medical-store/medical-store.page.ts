import { Component, OnInit } from '@angular/core';
//custom services
import { AuthService } from '../services/authentication/auth.service'
import {MedicalStoreService} from '../services/medical/MedicalStore/medical-store.service'
@Component({
  selector: 'app-medical-store',
  templateUrl: './medical-store.page.html',
  styleUrls: ['./medical-store.page.scss'],
})
export class MedicalStorePage implements OnInit {
  loggedIn;
  UserRole;
  MedicalStoreId;

  editMode: boolean;
  showMode: boolean;
  medicalStore:any= {};

  constructor(
    private AuthService: AuthService,
    private MedicalStoreService:MedicalStoreService,
  ) 
  {
    this.showMode = true;
    this.editMode = false;
  }
  ionViewWillEnter() {
    console.log('ion view Will Enter')
    this.getMedicalStore();
    this.AuthService.loggedIn().subscribe(token => {
      this.loggedIn = token;
      this.UserRole = this.AuthService.chkRole();
      console.log(this.UserRole, "medical id ", this.MedicalStoreId);
    })
   
  }
  ngOnInit() {
   

  }

  async getMedicalStore() {
    this.MedicalStoreId = this.AuthService.chkId();
    console.log('medicalStoreId',this.MedicalStoreId);
    this.MedicalStoreService.getMedicalStore(this.MedicalStoreId).subscribe(data=>{
      console.log('medical store',data);
      if(data.length>0){
        console.log('in if condition')
        this.medicalStore=data[0];
      }
      
    })
  }
  
  saveMedicalStore(){
    this.medicalStore.medicalStoreId=this.MedicalStoreId;
    console.log('medical Store before update',this.medicalStore);
    this.MedicalStoreService.updateMedicalStore(this.medicalStore).subscribe(data=>{
      console.log(data);
     
    })
    this.showMode=true;
    this.editMode=false;
  }

  edit() {
    console.log('in edit func')
    this.showMode = false;
    this.editMode = true;
  }
}
