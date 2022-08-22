import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 



  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9002/contact/';

 

  createcontact(user: object): Observable<object> {



    return this.http.post(`${this.baseUrl}`+'addcontact', user);



  }

}
