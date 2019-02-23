import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.page.html',
  styleUrls: ['./medicine-list.page.scss'],
})
export class MedicineListPage implements OnInit {
  temp:any;
  items: string[];
  searching: any = false;
  medicines=[];
  searchControl: FormControl;
  constructor(private nav:NavController) { 
    this.searchControl=new FormControl();
  }

  ngOnInit() {
    this.getmedicines();  
  }

  getmedicines(){
    this.medicines=[
      { id:1,name:'Pectus sy',image:'../../assets/image/pharmacy.png',type:'syrup'},
      { id:2,name:'Rigix tab',image:'../../assets/image/pharmacy.png',type:'tablet'},
      { id:3,name:'Systane eye',image:'../../assets/image/pharmacy.png',type:'eye drops'},
      { id:4,name:'Panadol tab',image:'../../assets/image/pharmacy.png',type:'tablet'},
      { id:5,name:'Leflocks tab',image:'../../assets/image/pharmacy.png',type:'tablet'},
      { id:6,name:'Coughcol sy',image:'../../assets/image/pharmacy.png',type:'syrup'},
      { id:7,name:'Tootesyah sy',image:'../../assets/image/pharmacy.png',type:'syrup'},
      { id:8,name:'Banfsha shahtoot',image:'../../assets/image/pharmacy.png',type:'syrup'}
    ];
  }
  ionViewDidLoad() {
}
  filterItems(searchTerm){

    return this.medicines.filter((item) => {  
        return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });     

  }
  search(searchTerm){
    if(searchTerm!='')
    this.medicines=this.filterItems(searchTerm);
    else{
      this.getmedicines();
    }
  }

  openMedicine(mediId){}
  back(){
    this.nav.navigateBack("/view-medical");
  }
  

}
