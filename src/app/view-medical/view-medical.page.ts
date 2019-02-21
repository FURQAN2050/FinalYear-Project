import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
//cutsom services
import { MedicalStoreService } from '../services/medical/MedicalStore/medical-store.service';
@Component({
  selector: 'app-view-medical',
  templateUrl: './view-medical.page.html',
  styleUrls: ['./view-medical.page.scss'],
})
export class ViewMedicalPage implements OnInit {
  medicalStoreId
  medicalStore: any={};
  constructor(
    private nav: NavController,
    public route: ActivatedRoute,
    public MedicalStoreService: MedicalStoreService,

  ) {
    this.medicalStoreId = this.route.snapshot.paramMap.get('storeId');
    console.log(this.medicalStoreId);
  }
  ionViewWillEnter(){
    this.getMedicalStore();
  }
  ionViewDidLoad(){
    this.getMedicalStore();
  }

  ngOnInit() {
    this.getMedicalStore();

  }
  location(storeId) {
    
     this.nav.navigateBack('/location/'+this.medicalStoreId);
  }
  viewMedicines(storeId) {
    this.nav.navigateBack('/medicine-list');
  }
  back() {
    this.nav.navigateBack('/home');
  }
  async getMedicalStore() {
    this.MedicalStoreService.getMedicalStore(this.medicalStoreId).subscribe(medicalStore => {
      this.medicalStore = medicalStore[0];
      console.log('medical Store',this.medicalStore);
    })
  }
}
