import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

@Component({
  selector:'app-chat-input',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./chat-input.component.html',
  styleUrl:'./chat-input.component.css'
})
export class ChatInputComponent{

  message='';

  constructor(private chatService:ChatService){}

  send(){

    if(!this.message.trim()) return;

    this.chatService.sendMessage(this.message);

    this.message='';

  }

}