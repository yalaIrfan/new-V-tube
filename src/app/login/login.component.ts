import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  rForm: FormGroup;
  ngOnInit() {
    this.rForm = this.fb.group({

      'email': [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(50)
      ])],
      'password': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ])]
    });
  }
  onSubmit(user) {
    console.log(user)
  }
}
