import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface UploadResponse{
  document_id:number;
  filename:string;
  message:string;
}

@Injectable({
  providedIn:'root'
})
export class UploadService{

  private api=`${environment.apiUrl}/documents/upload`;

  constructor(private http:HttpClient){}

  upload(file:File):Observable<HttpEvent<UploadResponse>>{
    const formData=new FormData();
    formData.append('file',file);

    return this.http.post<UploadResponse>(
      this.api,
      formData,
      {
        observe:'events',
        reportProgress:true
      }
    );
  }

}