import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  
  private baseUrl = 'http://localhost:9004/payment/';

 

  createpayment(user: object): Observable<object> {



    return this.http.post(`${this.baseUrl}`+'addpayment', user);



  }

}
