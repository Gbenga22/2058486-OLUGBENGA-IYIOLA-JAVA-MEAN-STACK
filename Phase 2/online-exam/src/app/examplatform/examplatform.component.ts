import { Component, OnInit } from '@angular/core';
import {ExamplatformService} from '../examplatform.service';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-examplatform',
  templateUrl: './examplatform.component.html',
  styleUrls: ['./examplatform.component.css']
})
export class ExamplatformComponent implements OnInit {
  myForm:FormGroup;
  allQuestions?:any= [];
 
  allAnswers?:any=[];
  msg:string=""
  constructor(public httpClient: HttpClient , public form:FormBuilder) {  this.myForm=form.group({});}

  ngOnInit() {
    this.httpClient.get("assets/onlineexam.json").subscribe(data =>{
      console.log(data);
      this.allQuestions = data;
  })

}

  submit(examRef:NgForm){
      let answer = examRef.value;
      let flag=0;
      let i=0;
      for(let ll of this.allQuestions){
          if (Object.values(answer)[i]==ll.correctAns){
          flag++}  i++
        
  }
        
  if(flag>=7){
    this.msg =flag+"/10" +"Passed!"
  }else{
    this.msg= flag+"/10" +"Failed"
  }
   console.log(flag);
  }
}
 

  
  



