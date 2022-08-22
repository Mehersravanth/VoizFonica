import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static getUserList() {
    throw new Error('Method not implemented.');
  }
 private baseUrl1 = 'http://localhost:8999/email/send/';
  private baseUrl = 'http://localhost:8999/regs/';


  constructor(private http:HttpClient) { }
  getUserList(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}`+'getservice');  

  }
   
  createUser(user: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'addservice', user);

  }
  SendMail(from:any,subject:any,body:any): Observable<any> {

    return this.http.get(`${this.baseUrl1}${from}/${subject}/${body}`); //will change ...As Per ordermanagement }
  
  }
}