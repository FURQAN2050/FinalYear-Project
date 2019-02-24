import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {MedicalStoreService} from '../services/medical/MedicalStore/medical-store.service'
import {FindMedicineFilterPage} from '../find-medicine-filter/find-medicine-filter.page'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit() {
 
  }
  ionViewWillEnter(){
    console.log('ion view will enter called');
    this.getAllMedicals();
  }
  ionViewDidLoad(){
    console.log('ion view will didloadcalled');
    this.getAllMedicals();
  }
  searchQuery: string = '';
  items: string[];
  searching: any = false;
  medicalstores=[];

  constructor(
    private Router :Router,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private MedicalStoreService:MedicalStoreService,
    ) {
    this.initializeItems();
    
  }
  initializeItems() {
    this.medicalstores=[
      { id:1,name:'Alameen medical',image:'../../assets/image/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:2,name:'Junaid medica',image:'../../assets/image/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:3,name:'Time medicos',image:'../../assets/image/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:4,name:'Safdar Medical',image:'../../assets/image/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:5,name:'Safdar Medical',image:'../../assets/image/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:6,name:'Safdar Medical',image:'../../assets/image/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:7,name:'Safdar Medical',image:'../../assets/image/pharmacy.png',address:'r-266 pak kausar Town khi'},
      { id:8,name:'Safdar Medical',image:'../../assets/image/pharmacy.png',address:'r-266 pak kausar Town khi'}
    ];  
    
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;


    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  openMedical(store){
    console.log('medicalStore',store)
    this.Router.navigateByUrl('/view-medical/'+store.medicalStoreId)
  }
  getAllMedicals(){
    this.MedicalStoreService.getAllMedicalStore().subscribe(data=>{
      this.medicalstores=data;
      console.log('medical stores',this.medicalstores);
    })
  }
  async OpenFilterModal() {
    const modal = await this.modalController.create({
      component: FindMedicineFilterPage,
    });
    modal.onDidDismiss().then((d: any) => {
      if (d.data.contact) {
        // this.currentAd.tenant = d.data.contact;
      }
      else {
        // this.currentAd.tenant = null;
      }
    });
    return await modal.present();
  }
}
