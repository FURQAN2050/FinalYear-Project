import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { FindMedicineFilterPageModule } from './find-medicine-filter/find-medicine-filter.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    FindMedicineFilterPageModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SpeechRecognition,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
