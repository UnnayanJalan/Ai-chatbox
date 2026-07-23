import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ChatWindowComponent } from '../components/chat-window/chat-window.component';
import { ChatInputComponent } from '../components/chat-input/chat-input.component';
import { ConversationListComponent } from '../components/conversation-list/conversation-list.component';
import { UploadPanelComponent } from '../components/upload-panel/upload-panel.component';

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [
    CommonModule,
    ConversationListComponent,
    ChatWindowComponent,
    ChatInputComponent,
    UploadPanelComponent,
  ],
  templateUrl: './ai-chat.component.html',
  styleUrl: './ai-chat.component.css',
})
export class AiChatComponent {}