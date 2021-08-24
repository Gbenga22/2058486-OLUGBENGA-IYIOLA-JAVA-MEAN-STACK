import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ExamService} from '../exam.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Exam } from '../Exam.model';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  myForm:FormGroup;
  allQuestion:Array<Exam>=[];
  checkResult:boolean = false;
  msg:string=""

  constructor(public exam:ExamService, public form:FormBuilder ) { 
    this.myForm=form.group({});
  }

  ngOnInit(): void {
  this.exam.loadJsonData().subscribe(data=>this.allQuestion=data,
    error=>console.log(error),()=>console.log("completed"))
 
   this.allQuestion.forEach(q=> {
    this.myForm?.addControl(q.question,this.form.control(""));
})
}

submit(examRef:NgForm){
      let answer = examRef.value;
      let flag=0;
      let i=0;
      for(let ll of this.allQuestion){
          if (Object.values(answer)[i]==ll.correctAns){
          flag++}  i++
    }
  if(flag>=7){
    this.msg ="Result: " +flag+"/10: " +"Passed!";
    this.checkResult=true;
  }else{
    this.msg= "Result: " + flag+"/10: " +"Failed";
  }
   console.log(flag);
  }
}