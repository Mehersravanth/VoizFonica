import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { User } from '../user';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  user: User = new User();
  payment: Payment = new Payment();
  from = "mehersravanth06@gmail.com"
  subject = "Voizfonica Invoice"
  body = "Your payment has been successful.Thnanks for choosing Voizfonica"
  constructor(private paymentService: PaymentService,private loginService: LoginService) { }
  form3 = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    plan: new FormControl('', [Validators.required]),
    cnumber: new FormControl('', [Validators.required]),
   
  });

  get f() {
    return this.form3.controls;
  }

  
payments()
{
    this.payment.fname = this.f['fname'].value;
    this.payment.lname = this.f['lname'].value;
    this.payment.email= this.f['email'].value;
    this.payment.plan = this.f['plan'].value;
    this.payment.cnumber = this.f['cnumber'].value;
  this.PostData();
}
PostData()
{
  console.log("post works")
                             
    this.paymentService.createpayment(this.payment)
      .subscribe(data => console.log(data), error => console.log(error));
}




  ngOnInit(): void {
  }
  email = new FormGroup({

    emailsend: new FormControl('', [Validators.required]),

  });



  get f3() {

    return this.email.controls

  }



  sendmail() {

    this.user.emailsend = this.f3['emailsend'].value;

    this.mail()


  }

  mail() {

    this.loginService.SendMail(this.user.emailsend, this.subject, this.body)

      .subscribe(data => console.log(data), error => console.log(error));

    this.user = new User();

  }




}
