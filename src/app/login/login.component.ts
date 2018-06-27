import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],providers:[UserService]
})
export class LoginComponent implements OnInit {
  data:any;
  message:string='';
  auth:boolean=false;
  constructor(private fb: FormBuilder,private userService: UserService,public route:Router) { }
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
  login(user) {
    this.userService.login(user).subscribe((response) => {
      console.log('Response message', (response));
      this.message = 'Login successfully..!';
      this.auth=true;
      this.data=response;
      this.route.navigate(['/videos']);
      localStorage.setItem('auth','true');
      localStorage.setItem('token',response.token);
      this.rForm.reset();
    }, error => {
      this.rForm.reset();
      console.log('error while logging..!');
    });
  }
}
