import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './shared/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth: boolean=false;
  constructor(private route: Router, private storageService: StorageService) {
    this.storageService.watchStorage().subscribe((data) => {
      if(localStorage.getItem('auth')=='true'){
        this.isAuth = true;
      }
    });
  }


  ngOnInit() {

    //this.isAuth = localStorage.getItem('auth');
    console.log(this.isAuth);
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
    this.route.navigate(['\home']);
  }

}
