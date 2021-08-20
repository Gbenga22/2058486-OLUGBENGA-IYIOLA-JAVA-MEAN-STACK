import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { examPlatform } from './examplatform.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamplatformService {

  constructor(public http:HttpClient) { }

 loadExam():Observable<examPlatform[]>{
   return this.http.get<examPlatform[]>("/assets/onlineexam.json");
 }


}
