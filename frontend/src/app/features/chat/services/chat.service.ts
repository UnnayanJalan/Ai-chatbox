import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,finalize } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ChatMessage,ChatRequest,ChatResponse } from '../models/message.model';
import { ChatApiService } from './chat-api.service';

@Injectable({
  providedIn:'root'
})
export class ChatService{

  private api=`${environment.apiUrl}/chat`;

  private messagesSubject=new BehaviorSubject<ChatMessage[]>([]);
  messages$=this.messagesSubject.asObservable();

  constructor(
    private http:HttpClient,
    private chatApi:ChatApiService,
  ){
    this.addAssistantMessage('👋 Hello! How can I help you today?');
  }

  get messages(){
    return this.messagesSubject.value;
  }

  private setMessages(messages:ChatMessage[]){
    this.messagesSubject.next(messages);
  }

  sendMessage(message:string){

    if(!message.trim()) return;

    const userMessage:ChatMessage={
      id:crypto.randomUUID(),
      role:'user',
      content:message,
      timestamp:new Date()
    };

    this.setMessages([
      ...this.messages,
      userMessage
    ]);

    const loadingId=crypto.randomUUID();

    this.setMessages([
      ...this.messages,
      {
        id:loadingId,
        role:'assistant',
        content:'Thinking...',
        loading:true,
        timestamp:new Date()
      }
    ]);

    const request:ChatRequest={
      message
    };

    this.chatApi.sendMessage(request)
    .pipe(
      finalize(()=>{
        this.setMessages(
          this.messages.filter(x=>x.id!==loadingId)
        );
      })
    )
    .subscribe({
      next:(res)=>{
        this.addAssistantMessage(res.response);
      },
      error:()=>{
        this.addAssistantMessage('Something went wrong.');
      }
    });

  }

  addAssistantMessage(message:string){

    this.setMessages([
      ...this.messages,
      {
        id:crypto.randomUUID(),
        role:'assistant',
        content:message,
        timestamp:new Date()
      }
    ]);

  }

}