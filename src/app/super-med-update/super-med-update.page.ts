import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MedicineService} from '../services/super/medicine/medicine.service'
@Component({
  selector: 'app-super-med-update',
  templateUrl: './super-med-update.page.html',
  styleUrls: ['./super-med-update.page.scss'],
})
export class SuperMedUpdatePage implements OnInit {
  medicineId;
  medicine:any={};
  showMode:boolean;
  editMode:boolean;
  newMode:boolean; 
  constructor(
    public route:ActivatedRoute,
    private MedicineService:MedicineService,

  ) { 
    this.showMode=true;
    this.editMode=false;
    this.newMode=false;
  }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    console.log('ion View Will Enter Called');
    this.medicineId = this.route.snapshot.paramMap.get('medId');// medicine id
    if(this.medicineId){
      this.getMedicine();
    }
    else{
      this.showMode=false;
      this.newMode=true;
    }

  }
  async getMedicine(){
    this.MedicineService.getMedicine(this.medicineId).subscribe(medicine=>{
      console.log('medicine',medicine);
      this.medicine=medicine;
    })

  }
  edit(){
    this.showMode=false;
    this.editMode=true;
  }
  save(){
    if(this.newMode){
      this.MedicineService.postMedicine(this.medicine).subscribe(result=>{
        console.log(result);
        this.showMode=true;
        this.editMode=false;
        this.newMode=false;  
      },err=>{
        alert('Medicine Not Added');
      })
    }
    else if(this.editMode){
      this.MedicineService.updateMedicine(this.medicine).subscribe(result=>{
        console.log('update MEdicine',result);
        this.showMode=true;
        this.editMode=false;
        this.newMode=false;  
      },err=>{
        alert('Medicine Not Added');
      })


      // this.showMode=true;
      // this.editMode=false;
      // this.newMode=false;
    }



  }

}
