import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AuthService} from '../services/authentication/auth.service'
import { MedicineService } from '../services/super/medicine/medicine.service'
import { MedicalMedicineService } from '../services/medical/medicine/medicine.service'
import {MedicalStoreService} from '../services/medical/MedicalStore/medical-store.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-find-medicine-filter',
  templateUrl: './find-medicine-filter.page.html',
  styleUrls: ['./find-medicine-filter.page.scss'],
})
export class FindMedicineFilterPage implements OnInit {
  medicines: any;
  searchTerm: string = '';
  medicalStoreId; 

  constructor(
    public modalController: ModalController,
    public AuthService:AuthService,
    public SuperMedicineService: MedicineService,
    public MedicalMedicineService: MedicalMedicineService,
    private MedicalStoreService:MedicalStoreService,
  ) { }
medicalStores:any=[];
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getMedicines();
  }
  getMedicines() {
    this.SuperMedicineService.getAllMedicine().subscribe(medicines => {
      this.medicines=medicines;
      console.log(this.medicines);
    })
  }
  filterItems(){ 
    return this.medicines.filter((item) => { 
         return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1; 
    });      
  } 
  searchMedicine() {   
    // console.log(' function called'); 
    if(this.searchTerm!=''){ 
      this.medicines = this.filterItems(); 
      // console.log(this.medicines); 
    } 
    else{ 
      this.getMedicines(); 
    } 
}
modalDismiss(medicalStores) {
  this.modalController.dismiss({
    'medicalStores': medicalStores
  })
}
findMedicalStore(medicine){
  this.medicalStores=[];
  var medicineId=medicine._id;
  console.log('medcine',medicineId);
  this.MedicalMedicineService.getmedicalStoresFromMedicinesId(medicineId).subscribe((result:any)=>{
    console.log('results');
    if(result.length>0){
      for(var i=0;i<result.length;i++){
        this.MedicalStoreService.getMedicalStore(result[i].medicalStoreId).subscribe(data=>{
          this.medicalStores.push(data[0]);
        })
      }
      this.modalDismiss(this.medicalStores);
    }
    this.modalDismiss(this.medicalStores);
  })

} 

}
