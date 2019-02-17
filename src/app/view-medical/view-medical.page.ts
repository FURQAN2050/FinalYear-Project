import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-view-medical',
  templateUrl: './view-medical.page.html',
  styleUrls: ['./view-medical.page.scss'],
})
export class ViewMedicalPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  location(storeId){
    this.nav.navigateBack('/location');
  }
  viewMedicines(storeId){
    this.nav.navigateBack('/medicine-list');
  }
  back(){
    this.nav.navigateBack('/home');
  }
}
