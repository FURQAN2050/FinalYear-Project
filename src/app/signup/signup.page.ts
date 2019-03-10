import { Component, OnInit } from '@angular/core';
import {SignupService} from '../services/signup/signup.service'
import { Router } from '@angular/router';
import {SignupapprovalService} from '../services/super/signupapproval/signupapproval.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  role2:boolean; //medical store
  role3:boolean; //normal user
  email:any='';
  password:any='';  
  constructor(
    private SignupService:SignupService,
    private Router:Router,
    public SignupapprovalService:SignupapprovalService,
  ) { 
    
  }
  ionViewWillEnter(){
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
      this.SignupapprovalService.chkEmailExist(user).subscribe(res=>{
        console.log(res)
        if(res.length>0){
          console.log('in if condition');
          alert('email already exist');
        }
        else{
          this.SignupapprovalService.postApproval(user).subscribe(results=>{
            alert('request compeleted successfully');
            this.Router.navigateByUrl('/home');
          },err=>{
            console.log(err);
          })
        }
      })
    }
    else{
       user={
        "email":form.value.email,
        "password":form.value.password,
        "role":3
      }
      this.SignupService.UserSignup(user).subscribe(data=>{
        this.Router.navigateByUrl('/login');
      },err=>{
        alert("email is already in use");
      })
    }

    
    

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
