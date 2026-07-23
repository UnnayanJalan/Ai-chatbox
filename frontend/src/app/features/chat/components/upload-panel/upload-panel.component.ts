import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { UploadService } from '../../services/upload.service';

@Component({
  selector:'app-upload-panel',
  standalone:true,
 imports:[CommonModule],
  templateUrl:'./upload-panel.component.html',
  styleUrls:['./upload-panel.component.css']
})
export class UploadPanelComponent{

  uploading=false;
  progress=0;
  uploadedFile='';

  constructor(private uploadService:UploadService){}

  onFileSelected(event:Event){
    const input=event.target as HTMLInputElement;

    if(!input.files?.length){
      return;
    }

    const file=input.files[0];

    this.uploading=true;
    this.progress=0;

    this.uploadService.upload(file).subscribe({
      next:event=>{
        if(event.type===HttpEventType.UploadProgress && event.total){
          this.progress=Math.round(100*event.loaded/event.total);
        }

        if(event.type===HttpEventType.Response){
          this.uploadedFile=event.body?.filename ?? '';
          this.uploading=false;
        }
      },
      error:()=>{
        this.uploading=false;
      }
    });
  }

}