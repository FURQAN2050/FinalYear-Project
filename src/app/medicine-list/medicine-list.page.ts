import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.page.html',
  styleUrls: ['./medicine-list.page.scss'],
})
export class MedicineListPage implements OnInit {
  searchQuery: string = '';
  items: string[];
  searching: any = false;
  medicines=[];

  constructor(private nav:NavController) { }

  ngOnInit() {
    this.medicines=[
      { id:1,name:'pectus sy',image:'../../assets/image/pharmacy.png',type:'syrup'},
      { id:2,name:'rigix tab',image:'../../assets/image/pharmacy.png',type:'tablet'},
      { id:3,name:'systane eye',image:'../../assets/image/pharmacy.png',type:'eye drops'},
      { id:4,name:'panadol tab',image:'../../assets/image/pharmacy.png',type:'tablet'},
      { id:5,name:'leflocks tab',image:'../../assets/image/pharmacy.png',type:'tablet'},
      { id:6,name:'coughcol sy',image:'../../assets/image/pharmacy.png',type:'syrup'},
      { id:7,name:'tootesyah sy',image:'../../assets/image/pharmacy.png',type:'syrup'},
      { id:8,name:'banfsha shahtoot',image:'../../assets/image/pharmacy.png',type:'syrup'}
    ];
  }
  openMedicine(mediId){}
  back(){
    this.nav.navigateBack("/view-medical");
  }
  

}
