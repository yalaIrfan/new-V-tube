import {Input,Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  //inputs:['video']
})
export class VideoDetailComponent implements OnInit {
  @Input() video :Video;
  vid:Video;

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

}
