import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private route: Router) {

  }

  isAuth: string = '';
  ngOnInit() {

    this.isAuth = localStorage.getItem('auth');
    console.log(this.isAuth);
  }

  logout() {
    this.isAuth = '';
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
    this.route.navigate(['\home']);
  }

}
