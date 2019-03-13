import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MedicineService} from '../services/super/medicine/medicine.service'
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
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
  words:any=[];
  constructor(
    public route:ActivatedRoute,
    private MedicineService:MedicineService,
    private speechRecognition: SpeechRecognition,

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
        console.log('update Medicine',result);
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

  getPermission(){
    // Check permission
this.speechRecognition.hasPermission()
.then((hasPermission: boolean) =>  {
  if(!hasPermission){
    this.speechRecognition.requestPermission();
    alert('request granted.');
  }

})

// // Request permissions
// this.speechRecognition.requestPermission()
// .then(
//   () => console.log('Granted'),
//   () => console.log('Denied')
// )

  }
  startListening() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
          alert('request granted.');
        }
      })
    // Check feature available
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available))
    // Start the recognition process
    this.speechRecognition.startListening()
      .subscribe(
        (matches: string[]) => {
          console.log(matches)
          this.words = matches;
          this.medicine.name=this.words[0]
        },
        (onerror) => console.log('error:', onerror)
      )
  }

}
