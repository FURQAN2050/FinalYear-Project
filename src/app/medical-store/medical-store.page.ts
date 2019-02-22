import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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
  userRole;
  MedicalStoreId;

  editMode: boolean;
  showMode: boolean;
  medicalStore:any= {};

  constructor(
    private AuthService: AuthService,
    private MedicalStoreService:MedicalStoreService,
    public geolocation: Geolocation
  ) 
  {
    this.showMode = true;
    this.editMode = false;
  }
  ionViewWillEnter() {
    console.log('ion view Will Enter')
    this.getMedicalStore();
    this.AuthService.authenticateduser().subscribe(token=>{
      this.loggedIn=this.AuthService.loggedIn();
      this.userRole=this.AuthService.chkRole();
      console.log('this.role',this.userRole)
    })
    this.loggedIn=this.AuthService.loggedIn();
      this.userRole=this.AuthService.chkRole();
    console.log("user loggedIn ",this.loggedIn)
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
  
  setLocation(){
    console.log('medical store location')
    this.geolocation.getCurrentPosition()
      .then(pos => {
        this.medicalStore.lat = pos.coords.latitude;
        this.medicalStore.long = pos.coords.longitude;
        console.log('current postion', this.medicalStore);
        alert('Current Location Set');
      }).catch(err => {
        console.log(err);
        alert('Location Not Set');
      })
  }
}
