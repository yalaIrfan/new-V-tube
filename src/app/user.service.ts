import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  private _register = "/api/users/register";

  constructor(private http: HttpClient) { }

  registerUser(user) {
    console.log('in servec ', JSON.stringify(user));
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.post(this._register, user, { headers }).map((res: Response) => {

    });
  }

}
