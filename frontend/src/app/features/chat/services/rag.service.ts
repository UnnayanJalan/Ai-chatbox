import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ChatRequest,ChatResponse } from '../models/message.model';

@Injectable({
  providedIn:'root'
})
export class RagService{

  private api=`${environment.apiUrl}/rag/ask`;

  constructor(private http:HttpClient){}

  ask(request:ChatRequest):Observable<ChatResponse>{
    return this.http.post<ChatResponse>(this.api,request);
  }

}