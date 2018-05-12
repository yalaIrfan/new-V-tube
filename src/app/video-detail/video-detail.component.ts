import {Input,Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  //inputs:['video']
  outputs:['updateVideoEvent','deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {
  @Input() video :Video;
  vid:Video;

  private updateVideoEvent =new EventEmitter();
  private deleteVideoEvent =new EventEmitter();
  

  constructor() {     
  }

  ngOnInit() {

    if(this.video){
      
      this.vid = Object.assign({},this.video);
    }

  }

  ngOnChanges(){
    this.vid = Object.assign({},this.video);
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.vid);
  }

  deleteVideo(){
    this.deleteVideoEvent.emit(this.vid);
  }

}
