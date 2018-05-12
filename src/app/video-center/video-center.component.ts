import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  constructor(private service:VideoService) { }

  // videos:Video[] = [
  //   {"_id":"1","title":"Title 1","url":"url 1","description":"descrion 1"},
  //   {"_id":"2","title":"Title 2","url":"url 2","description":"descrion 2"},
  //   {"_id":"3","title":"Title 3","url":"url 3","description":"descrion 3"},
  //   {"_id":"4","title":"Title 4","url":"url 4","description":"descrion 4"},
    
  // ];

  videos:Array<Video>;

  selVideo:Video;
  onSelectedVideo(video:any){
    this.selVideo=new Video();
    this.selVideo= video;
    console.log("Inside v center",this.selVideo);
  }

  
  ngOnInit() {
    this.service.getVideos().subscribe(data=>{
      this.videos=data as Video[];
    }
  ,error=>{
    console.error("error while fetcjhing list",error.message);
  })
  }

  ngOnChanges(){
    
  }

}
