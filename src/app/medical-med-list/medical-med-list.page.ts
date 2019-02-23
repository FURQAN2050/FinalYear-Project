import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentication/auth.service';
import {MedicalMedicineService} from '../services/medical/medicine/medicine.service'
import {MedicineService} from '../services/super/medicine/medicine.service'
@Component({
  selector: 'app-medical-med-list',
  templateUrl: './medical-med-list.page.html',
  styleUrls: ['./medical-med-list.page.scss'],
})
export class MedicalMedListPage implements OnInit {
  medicalStoreId;
  constructor(
    private AuthService:AuthService,
    private MedicineService:MedicineService,
    private  MedicalMedicineService:MedicalMedicineService,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){ //start before page active
    console.log('ion view Will Enter Called');
    this.medicalStoreId=this.AuthService.chkId();
    console.log("medical StoreId",this.medicalStoreId);
  }

}
