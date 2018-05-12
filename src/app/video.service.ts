import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 

import { Video } from './video';

@Injectable()
export class VideoService {


  private _getUrl="/api/videos";

  constructor(private http:HttpClient) { }

  getVideos(){
     return this.http.get(this._getUrl);
  }

}
