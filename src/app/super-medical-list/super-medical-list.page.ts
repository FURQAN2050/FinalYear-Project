import { Component, OnInit } from '@angular/core';
import {MedicalStoreService} from '../services/medical/MedicalStore/medical-store.service'
@Component({
  selector: 'app-super-medical-list',
  templateUrl: './super-medical-list.page.html',
  styleUrls: ['./super-medical-list.page.scss'],
})
export class SuperMedicalListPage implements OnInit {
  medicalStores: any;

  constructor(public MedicalStoreService:MedicalStoreService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getAllMedicalStores();
  }
  getAllMedicalStores(){
    this.MedicalStoreService.getAllMedicalStore().subscribe(medicalStores=>{
      this.medicalStores=medicalStores;
      console.log(this.medicalStores);
    })
  }

}
