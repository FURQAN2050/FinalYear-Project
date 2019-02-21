import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/super/medicine/medicine.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-super-med-list',
  templateUrl: './super-med-list.page.html',
  styleUrls: ['./super-med-list.page.scss'],
})
export class SuperMedListPage implements OnInit {
  medicines;
  searchTerm: string = ''; 
  constructor(
    public MedicineService: MedicineService,
    public Router: Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter called');
    this.getMedicines();

  }
  getMedicines() {
    this.MedicineService.getAllMedicine().subscribe(medicines => {
      this.medicines=medicines;
      console.log(this.medicines);
    })
  }
  addMedicine() {
    this.Router.navigateByUrl('/super-med-update/')
  }
  updateMedicine(medicine) {
    console.log(medicine);
    this.Router.navigateByUrl('/super-med-update/'+medicine._id)
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


}
