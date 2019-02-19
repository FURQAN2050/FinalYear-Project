import { Component, OnInit,ViewChild } from '@angular/core';
// import { google } from '@google/maps';
// declare var google : any;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  // @ViewChild("map") mapElement;
  // map :any;
  constructor() { }

  ngOnInit() {
    this.initMap()
  }
  initMap(){
    // let coords=new google.maps.LatLng(45,100);
    // let mapOptions : google.maps.MapOptions={
    // center:coords,zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP 
    // }
    // this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions)
    // let marker :google.maps.Marker=new google.maps.Marker({
    // }) 
    
    }
}
