import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { google } from '@google/maps';
import { google } from '@google/maps';
declare var google: any;

import { MedicalStoreService } from '../services/medical/MedicalStore/medical-store.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  medicalStoreId;
  medicalStore: any;


  @ViewChild("map") mapElement;
  map: any;
  start: any;
  end: any;
  lat: any;
  long: any;
  currentlocation: any;
  findPosition:boolean;
  constructor(
    public geolocation: Geolocation,
    public route: ActivatedRoute,
    public MedicalStoreService: MedicalStoreService,


  ) { 
    this.findPosition=false;
    this.medicalStoreId = this.route.snapshot.paramMap.get('storeId');
    console.log(this.medicalStoreId);
  }
  ionViewDidLoad() { 
    this.getMedicalStore();
  }

  ngOnInit() {
    this.getMedicalStore();
    this.initMap();
    this.geolocation.getCurrentPosition()
      .then(pos => {
        this.lat = pos.coords.latitude;
        this.long = pos.coords.longitude;
        this.currentlocation = new google.maps.LatLng(this.lat, this.long);
        console.log('current postion', this.lat, this.long);
      }).catch(err => {
        console.log(err);
      })
  }

  initMap() {
    let coords = new google.maps.LatLng(-34.397, 150.644);
    let mapOptions: google.maps.MapOptions = {
      center: coords, zoom: 14, mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
    let marker: google.maps.Marker = new google.maps.Marker({
    })
  }
  calculateAndDisplayRoute() {
    this.end = new google.maps.LatLng(this.medicalStore.lat, this.medicalStore.long);
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: this.currentlocation
    });
    directionsDisplay.setMap(map);

    directionsService.route({
      origin: this.currentlocation,
      destination: this.end,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        alert('Directions request failed due to ' + status);
      }
    });
  }
  
  find(){
    // if(this.findPosition)
    // this.findPosition=false;
    // else
    // this.findPosition=true;

  }
  async getMedicalStore() {
    this.MedicalStoreService.getMedicalStore(this.medicalStoreId).subscribe(medicalStore => {
      this.medicalStore = medicalStore[0];
      console.log('medical Store',this.medicalStore);
    })
  }
}
