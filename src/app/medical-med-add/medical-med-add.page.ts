import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';
import { MedicineService } from '../services/super/medicine/medicine.service'
import {MedicalMedicineService } from '../services/medical/medicine/medicine.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-medical-med-add',
  templateUrl: './medical-med-add.page.html',
  styleUrls: ['./medical-med-add.page.scss'],
})
export class MedicalMedAddPage implements OnInit {
  medicalStoreId;
  medicines;
  searchTerm: string = '';
  constructor(
    private AuthService: AuthService,
    public MedicineService: MedicineService,
    public Router: Router,
    public MedicalMedicineService:MedicalMedicineService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter called');
    this.getMedicines();
    this.medicalStoreId = this.AuthService.chkId();
  }

  getMedicines() {
    this.MedicineService.getAllMedicine().subscribe(medicines => {
      this.medicines = medicines;
      console.log(this.medicines);
    })
  }
  addMedicine(medicine) {
    var med = {
      medicineId: medicine._id,
      medicalStoreId:this.medicalStoreId
    }
    this.MedicalMedicineService.postMedicine(med).subscribe(res=>{
      console.log(res);
      if(res.alreadyAdded){ //this already added variable is saved on db
        alert(res.alreadyAdded);
      }
      else{
        alert('medicine added succesfully');
      }
      
    })
  }
  filterItems() {
    return this.medicines.filter((item) => {
      return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  searchMedicine() {
    if (this.searchTerm != '') {
      this.medicines = this.filterItems();
    }
    else {
      this.getMedicines();
    }

  }
}
