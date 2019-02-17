import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchQuery: string = '';
  items: string[];
  searching: any = false;
  medicalstores=[];

  constructor(private Router :Router) {
    this.initializeItems();
    
  }
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
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
  openMedical(storeId){
    this.Router.navigateByUrl('/view-medical')
  }
}
