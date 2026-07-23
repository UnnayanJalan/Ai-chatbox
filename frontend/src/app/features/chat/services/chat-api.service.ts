import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ChatRequest,ChatResponse } from '../models/message.model';

@Injectable({
  providedIn:'root'
})
export class ChatApiService{

  private api=`${environment.apiUrl}/chat`;

  constructor(private http:HttpClient){}

  sendMessage(request:ChatRequest):Observable<ChatResponse>{
    return this.http.post<ChatResponse>(this.api,request);
  }

}