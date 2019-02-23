import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';
import { MedicalMedicineService } from '../services/medical/medicine/medicine.service'
import { MedicineService } from '../services/super/medicine/medicine.service'
@Component({
  selector: 'app-medical-med-list',
  templateUrl: './medical-med-list.page.html',
  styleUrls: ['./medical-med-list.page.scss'],
})
export class MedicalMedListPage implements OnInit {
  medicalStoreId;
  medicines: any = [];
  searchTerm: string = ''; 
  constructor(
    private AuthService: AuthService,
    private superMedicineService: MedicineService,
    private MedicalMedicineService: MedicalMedicineService,
  ) {
    this.medicines = []
  }

  ngOnInit() {
  }
  ionViewWillEnter() { //start before page active
    console.log('ion view Will Enter Called');
    this.medicalStoreId = this.AuthService.chkId();
    this.getMedicalStoreMedicine();
  }
  getMedicalStoreMedicine() {
    this.medicines=[];
    this.MedicalMedicineService.getAllMedicine(this.medicalStoreId).subscribe(medicines => {
      if (medicines != []) {
        for (var i = 0; i < medicines.length; i++) {
          let medicineId = medicines[i].medicineId;
          this.superMedicineService.getMedicine(medicineId).subscribe(medicine => {
            this.medicines.push(medicine);
            console.log(this.medicines)
          })
        }
      }

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
      this.getMedicalStoreMedicine(); 
    } 
 
} 


}
