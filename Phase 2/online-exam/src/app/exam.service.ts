import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Exam} from './Exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(public http:HttpClient) {}
    loadJsonData():Observable<Exam[]>{
      return this.http.get<Exam[]>("/assets/exam.json");
   }
}
