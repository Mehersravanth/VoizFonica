import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,) { }

  form2 = new FormGroup({
    name2: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),

  });


 

  title = 'codegenerator';
  date = new Date();
  codeGenerated = '';
  evtMsg: any;
  randomString() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    const stringLength = 10;
    let randomstring = '';
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    this.codeGenerated = randomstring;
    return 0;
  }



  ngOnInit(): void {
  }
  login() {

    this.http.get<any>("http://localhost:9001/regs/getservice").subscribe(res => {
      const use = res.find((a: any) => {
        return a.name === this.form2.value.name2 && a.password === this.form2.value.password2
      });
      if (use) {
        alert("successful")
        this.form2.reset();
        this.router.navigate(['home'])

      }
      else {
        alert("user not found")
      }

    })
  }
  
  get f() {
    return this.form2.controls;


  }
  toFormGroup(elements: any[]) {
    const group: any = {};
    elements.forEach(key => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

}
