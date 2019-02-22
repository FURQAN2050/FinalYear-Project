import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/super/medicine/medicine.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-medical-med-add',
  templateUrl: './medical-med-add.page.html',
  styleUrls: ['./medical-med-add.page.scss'],
})
export class MedicalMedAddPage implements OnInit {

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
      this.medicines = medicines;
      console.log(this.medicines);
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
