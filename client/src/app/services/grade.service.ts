import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grade } from '../models/grade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private httpClient: HttpClient){}
  // tslint:disable-next-line: align
  getGrades(): Observable<Grade[]> {
     return this.httpClient.get<Grade[]>('https://localhost:5001/api/grades');
  }
}
