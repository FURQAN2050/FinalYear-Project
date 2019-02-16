import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login/login.service'
import {AuthService} from '../services/authentication/auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private Router:Router,
    private LoginService:LoginService,
    private AuthService:AuthService
  ) { }

  ngOnInit() {
  }
  //usersignIn
  SigninUser(form){
    this.LoginService.Userlogin(form.value).subscribe(token=>{  
      this.AuthService.saveToken(token);
      var role=this.AuthService.chkRole();
      alert('user loggedIn');
      this.Router.navigateByUrl('/home')
    },err => this.logError(err))
}

//log error Function
logError(err: any) {    
    console.log('Youser Name or password is incorrect');
}

}
