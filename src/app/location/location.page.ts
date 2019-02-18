import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  back(){
    this.nav.navigateBack('/view-medical');
  }
  calculateAndDisplayRoute(){}

}
