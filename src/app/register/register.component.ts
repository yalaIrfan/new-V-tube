import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  rForm: FormGroup;
  message: String = '';
  constructor(private fb: FormBuilder, private userService: UserService) { }

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
    console.log('uyhjbjhbjhbjh ', user);
    this.userService.registerUser(user).subscribe((message) => {
      console.log('Registered.! message', JSON.stringify(message));
      this.message = 'Registered successfully..!';
      this.rForm.reset();
    }, error => {this.rForm.reset();
      console.log('error while registering..!');
    });
  }

}
