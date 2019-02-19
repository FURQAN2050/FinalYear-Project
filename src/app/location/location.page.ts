import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { google } from '@google/maps';
declare var google: any;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  bool:boolean;
  locate:string;
  currentLocation:any;
  dest:any;
  map: any;
  mapOptions: any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: any = 'AIzaSyBU-uwSo3LB7X8NYEqLA6EEGDmTOTHxLMg';
  constructor(private geolocation: Geolocation) {
    this.bool=false;
    this.locate="Find"
    /*load google map script dynamically */
    const script = document.createElement('script');
    script.id = 'googleMap';
    if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=';
    }
    document.head.appendChild(script);

    /*Get Current location*/
    this.geolocation.getCurrentPosition().then((position) =>  {
      this.location.lat = position.coords.latitude;
      this.location.lng = position.coords.longitude;
      this.currentLocation= new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    });
    /*Map options*/
    this.mapOptions = {
      center: this.location,
      zoom: 21,
      mapTypeControl: false
    };
    setTimeout(() => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
      /*Marker Options*/
      this.markerOptions.position = this.location;
      this.markerOptions.map = this.map;
      this.markerOptions.title = 'My Location';
      this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000);
   }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.initMap();
    this.geolocation.getCurrentPosition()
    .then(pos=>{
      this.currentLocation=new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
    }).catch(err=>{
      console.log(err);
    })
    console.log('ionViewDidLoad LocationPage');
  }
  calculateAndDisplayRoute(){
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: this.currentLocation
    });
    directionsDisplay.setMap(map);

     directionsService.route({
        origin: this.currentLocation,
        destination: this.dest,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
  }
  initMap(){
    let coords=new google.maps.LatLng(45,100);
    let mapOptions : google.maps.MapOptions={
    center:coords,zoom:21,mapTypeId:google.maps.MapTypeId.ROADMAP 
    }
    this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions)
    // let marker :google.maps.Marker=new google.maps.Marker({
    // }) 
    
  }
  find(){
    if (this.bool){
      this.locate="Find"
      this.bool=false;
      this.calculateAndDisplayRoute();
    }
    else{
      this.locate="Get Direction"
      this.bool=true
      
    }
  }
}
