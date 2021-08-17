import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { contact } from '../contact';

@Component({
  selector: 'app-signup-login-portfolio',
  templateUrl: './signup-login-portfolio.component.html',
  styleUrls: ['./signup-login-portfolio.component.css']
})
export class SignupLoginPortfolioComponent implements OnInit {
  loginRef = new FormGroup({
    fname : new FormControl("",[Validators.required]),
    lname : new FormControl("",[Validators.required]),
    username : new FormControl("",[Validators.required]),
    pass: new FormControl("", [Validators.required])
  })

  loginRef2 = new FormGroup({
    username1 : new FormControl("",[Validators.required]),
    pass1: new FormControl("", [Validators.required])
  })

  loginRef3 = new FormGroup({
    contactname : new FormControl("",[Validators.required]),
    phoneno: new FormControl("", [Validators.required])
  })

  msg:string=""
  flag1:boolean=true;
  flag2:boolean=false;
  flag3:boolean=false;
  Uname:any= ""
  Pword:any= ""
  contactName:string=""
  phoneNo:any=""

  Contacts: Array<contact>= new Array()

  constructor() {
      }

   saveData(){
    let login3 = this.loginRef3.value
    this.contactName=login3.contactname
    this.phoneNo=login3.phoneno
    let con = new contact(this.contactName, this.phoneNo)
    this.Contacts.push(con);


   }

  ngOnInit(): void {
  }

  
  Register(){
      this.flag1=false;
      this.flag2=true;
      this.flag3=false;
      let login1 = this.loginRef.value
      this.Uname =login1.username
      this.Pword =login1.pass
      console.log(this.Uname)
  }

  checkUser(){
      let login2 = this.loginRef2.value
      //let login2 = this.loginRef.value
      console.log(login2);
     if(login2.username1==this.Uname && login2.pass1 ==this.Pword){
       console.log(login2.username1)
      this.msg ="Successfully Login!"
      this.flag1=false;
      this.flag2=false;
      this.flag3=true;
    }else{
    this.msg= "Failure try once again"
    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
    console.log(login2.username1)
    }
    this.loginRef.reset();
   }

   signup(){
    this.flag1=true;
    this.flag2=false;
    this.flag3=false;

   }

   login(){
    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
 }


}


