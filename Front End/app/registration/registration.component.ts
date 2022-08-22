import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({

  selector: 'app-registration',

  templateUrl: './registration.component.html',

  styleUrls: ['./registration.component.css']

})



export class RegistrationComponent implements OnInit {

  user: User = new User();
  users: any;
  form:any;
  
  constructor(private loginService: LoginService,private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      name:['', [Validators.required,Validators.minLength(5),]],
      email:['',[Validators.required,Validators.minLength(5),]],
      password:['', [Validators.required,Validators.minLength(5),]],
      phnNumber:['', [Validators.required,Validators.minLength(10),]],
      re_password:['', [Validators.required,Validators.minLength(5),]]
    });
   }
  
  
  
  get f() {
    return this.form.controls;

  }
  get name(){
    return this.form.get('name');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
  get phnNumber(){
    return this.form.get('phnNumber');
  }
  get re_password(){
    return this.form.get('password');
  }
  
  //for signup
  registration() {

    this.user.name = this.f['name'].value;
    this.user.password = this.f['password'].value;
    this.user.email= this.f['email'].value;
    this.user.re_password = this.f['re_password'].value;
    this.user.phnNumber = this.f['phnNumber'].value;
    alert("Successfully registered");
      this.postUser();
    
   

  }

  postUser() {     
    console.log("post works")
                             
    this.loginService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  ngOnInit(): void {
    
  }
  

}