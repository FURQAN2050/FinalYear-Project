import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService}  from '../app/services/authentication/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  userRole;
  loggedIn;
  
  // public appPages = [
  //   {
  //     title: 'Home',
  //     url: '/home',
  //     icon: 'home'
  //   },
  //   {
  //     title: 'List',
  //     url: '/list',
  //     icon: 'list'
  //   },
  //   {
  //     title:'Login',
  //     url:'/login',
  //     icon:'log-in'

  //   },
  // ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private AuthService :AuthService,
    private Router :Router
  ) {
  
    this.initializeApp();
  }
  
  ionViewWillEnter(){
    console.log('ion view will enter called');

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.AuthService.loggedIn().subscribe(token=>{
        this.loggedIn=token;
        this.userRole=this.AuthService.chkRole();
        console.log('this.role',this.userRole)
      })
      console.log("user loggedIn ",this.loggedIn)
    });
  }
  logOut(){
    this.AuthService.logOut();
    this.loggedIn=null;
    this.userRole=null;
    this.Router.navigateByUrl('/home')
  }
}
