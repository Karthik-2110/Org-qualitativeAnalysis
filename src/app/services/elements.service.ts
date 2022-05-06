import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor(private http: HttpClient) { }

  getAllElements(){
    return this.http.get('https://periodic-table-elements-info.herokuapp.com/elements')
  }

  getByNumber(id:any): Observable<any>{
    return this.http.get(`https://periodic-table-elements-info.herokuapp.com/element/atomicNumber/${id}`)
  }
}
