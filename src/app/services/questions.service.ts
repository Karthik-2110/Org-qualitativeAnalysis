import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getAllQuestions(){
    return this.http.get('https://api.npoint.io/c364925f3101043581c6')
  }

  getByGroupName(index :any):Observable<any>{

    return this.http.get(`https://api.npoint.io/c364925f3101043581c6/${index}`);
  }

}
