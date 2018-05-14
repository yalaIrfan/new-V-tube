import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Video } from './video';

@Injectable()
export class VideoService {


  private _getUrl = "/api/videos";
  private _postUrl = "/api/video";
  private _putUrl = "/api/video/";
  private _deleteUrl = "/api/video/";
  
  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get(this._getUrl);
  }

  addVideo(video: Video) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post(this._postUrl, video, { headers });
  }

  updateVideo(video:Video){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.put(this._putUrl+video._id,video,{headers});
  }

  deleteVideo(video){
    return this.http.delete(this._deleteUrl+video._id);
  }
}
