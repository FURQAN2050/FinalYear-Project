import { Component, OnInit,ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { google } from '@google/maps';
// declare var google : any;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild("map") mapElement;
  map :any;
  start :any;
  end:any;
  lat:any ;
  long:any;
  currentlocation:any;
  constructor(
    public geolocation:Geolocation
  ) { }
  ionViewDidLoad() {
    
  }
  calculateAndDisplayRoute() {
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
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
}
  ngOnInit() {
    this.initMap();
    this.geolocation.getCurrentPosition()
    .then(pos=>{
      this.lat=pos.coords.latitude;
      this.long=pos.coords.longitude;
      this.currentlocation=new google.maps.LatLng(this.lat,this.long);
      console.log('current postion',this.lat,this.long);
    }).catch(err=>{
      console.log(err);
    })
    console.log('ionViewDidLoad LocationPage');
  }
  initMap(){
    let coords=new google.maps.LatLng(-34.397,150.644);
    let mapOptions : google.maps.MapOptions={
    center:coords,zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP 
    }
    this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions)
    let marker :google.maps.Marker=new google.maps.Marker({
    }) 
    
    }
}
