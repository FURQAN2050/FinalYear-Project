import { Component, OnInit } from '@angular/core';
import {SignupapprovalService} from '../services/super/signupapproval/signupapproval.service'
import {SignupService} from '../services/signup/signup.service'
@Component({
  selector: 'app-super-med-req-ap',
  templateUrl: './super-med-req-ap.page.html',
  styleUrls: ['./super-med-req-ap.page.scss'],
})
export class SuperMedReqApPage implements OnInit {
  approvals=[];
  constructor(
    public SignupapprovalService:SignupapprovalService,
    public SignupService:SignupService,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    console.log('ion view will enter called');
    this.getAllApprovals();
  }

  getAllApprovals(){
    this.SignupapprovalService.getAllSignupApprovals().subscribe(approvals=>{
      console.log(approvals);
      this.approvals=approvals;
    })
  }

  approvedMedical(approvedUser){
    console.log("approved user",approvedUser);
    var user={
      "email":approvedUser.email,
      "password":approvedUser.password,
      "role":2
    }
    this.SignupService.UserSignup(user).subscribe(result=>{
      // alert('signup successfull')
      this.deleteApproval(approvedUser)
      alert("user approved "+result);
    },err=>{
      alert("user not approved");
    })
  }
  
  deleteApproval(deleteUser){
    console.log(deleteUser)
    this.SignupapprovalService.deleteSignupApproval(deleteUser._id).subscribe(results=>{
      console.log("request Deleted SuccessFully");
      this.getAllApprovals();
    },err=>{
      console.log("request not Deleted");
    })
  }


}
