import { Component, OnInit  } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers:[ToastrService]
})
export class VideoCenterComponent implements OnInit {

  constructor(private service:VideoService,private toastr:ToastrService) {
    }

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

  onSaveNewVideo(video:Video){
    this.service.addVideo(video).subscribe(data=>{
      this.toastr.success('video insrted successfully..! ','Success');
      this.videos.push(data as Video);
      this.selVideo=data as Video;
    },err=>{
      this.toastr.error('Oops..! something went wrong.! ','Error');
      console.error("Error while inserting new video ",err.message);
    });
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

  onUpdateVideoEvent(video:any){
    this.service.updateVideo(video).subscribe(data=>{
      this.toastr.success('video updated successfully..! ','Success');
      this.videos.push(data as Video);
      this.selVideo=null;
    },err=>{
      this.toastr.error('Oops..! something went wrong.! ','Error');
    });
  }

  onDeleteVideoEvent(video:any){
    this.service.updateVideo(video).subscribe(data=>{
      this.toastr.success('video deleted successfully..! ','Success');
      let index = this.videos.indexOf(video);
      this.videos.splice(index,1);
      //this.videos.push(data as Video);
      this.selVideo=null;
    },err=>{
      this.toastr.error('Oops..! something went wrong.! ','Error');
    });
  }

}
