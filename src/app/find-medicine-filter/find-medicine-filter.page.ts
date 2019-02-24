import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentication/auth.service'
import { MedicineService } from '../services/super/medicine/medicine.service'
import { MedicalMedicineService } from '../services/medical/medicine/medicine.service'
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
    public AuthService:AuthService,
    public SuperMedicineService: MedicineService,
    public MedicalMedicineService: MedicalMedicineService,
  ) { }

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
findMedicalStore(medicine){

} 

}
