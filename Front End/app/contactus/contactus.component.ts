import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  FormData: FormGroup | any;
  constructor(private contactService: ContactService ,private http: HttpClient, private router: Router) { }
  contact: Contact = new Contact();

  form3 = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phnNumber: new FormControl('', [Validators.required]),
    feedback: new FormControl('', [Validators.required]),
   
  });

  get f() {
    return this.form3.controls;
  }

  
contacts()
{
    this.contact.firstname = this.f['firstname'].value;
    this.contact.lastname = this.f['lastname'].value;
    this.contact.email= this.f['email'].value;
    this.contact.phnNumber = this.f['phnNumber'].value;
    this.contact.feedback = this.f['feedback'].value;
  this.PostData();
}

PostData()
{
  console.log("post works")
                             
    this.contactService.createcontact(this.contact)
      .subscribe(data => console.log(data), error => console.log(error));
}

ngOnInit(): void {
}

}
