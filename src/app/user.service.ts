import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private _register = "/api/users/register";

  private _login = "/api/users/login";

  constructor(private http: HttpClient) { }

  registerUser(user) {
    console.log('in servec ', JSON.stringify(user));
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return  this.http.post(this._register, user, { headers });
  }

  login(user) :Observable<any>{
    console.log('in login ', JSON.stringify(user));
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return  this.http.post(this._login, user, { headers });
  }

}
