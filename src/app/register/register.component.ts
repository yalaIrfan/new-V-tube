import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  rForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      'name': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(35)
      ])],
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(50)
      ])],
      'password': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ])],
      'confPass': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(35)
      ])]
    });
  }
  onSubmit(user) {
    console.log(user)
  }

}
