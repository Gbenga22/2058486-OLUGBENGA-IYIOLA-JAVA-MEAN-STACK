
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tasklist } from '../taskdetails';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
  })



export class TaskComponent implements OnInit {
  loginRef = new FormGroup({
    id : new FormControl("",[Validators.required]),
    name : new FormControl("",[Validators.required]),
    task : new FormControl("",[Validators.required]),
    date: new FormControl("", [Validators.required])
  })

 
  ID:any= ""
  NAME:string= ""
  TASK:string=""
  DATE:any=""

  Tasks: Array<tasklist>= new Array()

  constructor() {
      }

   addTask(){
    let TaskInfo= this.loginRef.value
    this.ID=TaskInfo.id
    this.NAME=TaskInfo.name
    this.TASK=TaskInfo.task
    this.DATE=TaskInfo.date

    let con = new tasklist(this.ID, this.NAME, this.TASK, this.DATE)
    this.Tasks.push(con);


   }

  ngOnInit(): void {
  }

  
 
}


