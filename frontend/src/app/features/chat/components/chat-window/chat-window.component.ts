import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector:'app-chat-window',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./chat-window.component.html',
  styleUrl:'./chat-window.component.css'
})
export class ChatWindowComponent{

  messages$=this.chatService.messages$;

  constructor(private chatService:ChatService){}

}