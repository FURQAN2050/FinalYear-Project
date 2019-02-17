import { Component, OnInit } from '@angular/core';
import {SignupService} from '../services/signup/signup.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  role2:boolean; //medical store
  role3:boolean; //normal user  
  constructor(
    private SignupService:SignupService
  ) { 
    this.role2=false;
    this.role3=false;
  }

  ngOnInit() {
  }
  SignupUser(form){
    console.log(form.value);
    var user; 
    if(form.value.medical){
       user={
        "email":form.value.email,
        "password":form.value.password,
        "role":2
      }
    }
    else{
       user={
        "email":form.value.email,
        "password":form.value.password,
        "role":3
      }
    }

    this.SignupService.UserSignup(user).subscribe(data=>{
      alert('signup successfull')
    },err=>{
      alert("email is already in use");
    })
    

  }
  roleSelected(){
    console.log('in change function')
    if(this.role2){
      console.log('in role2 function')
      this.role2=true;
      this.role3=false
    }
   if(this.role3){
    console.log('in role3 function')
      this.role3=true;
      this.role2=false;
    }
    
    }
}
