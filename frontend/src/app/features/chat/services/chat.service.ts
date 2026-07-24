import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize } from 'rxjs';
import { ChatApiService } from './chat-api.service';
import { RagService } from './rag.service';
import { ChatMessage, ChatRequest } from '../models/message.model';
import { ChatMode } from '../models/chat-mode.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messagesSubject = new BehaviorSubject<ChatMessage[]>([]);
  readonly messages$ = this.messagesSubject.asObservable();

  private mode: ChatMode = 'chat';

  constructor(
    private chatApi: ChatApiService,
    private ragService: RagService
  ) {
    this.addAssistantMessage('👋 Hello! How can I help you today?');
  }

  get messages(): ChatMessage[] {
    return this.messagesSubject.value;
  }

  setMode(mode: ChatMode): void {
    this.mode = mode;
  }

  getMode(): ChatMode {
    return this.mode;
  }

  private setMessages(messages: ChatMessage[]): void {
    this.messagesSubject.next(messages);
  }

  sendMessage(message: string): void {
    if (!message.trim()) {
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: message,
      timestamp: new Date()
    };

    this.setMessages([
      ...this.messages,
      userMessage
    ]);

    const loadingId = crypto.randomUUID();

    this.setMessages([
      ...this.messages,
      {
        id: loadingId,
        role: 'assistant',
        content: 'Thinking...',
        loading: true,
        timestamp: new Date()
      }
    ]);

    const request: ChatRequest = {
      message
    };

    const api$ = this.mode === 'chat'
      ? this.chatApi.sendMessage(request)
      : this.ragService.ask(request);

    api$
      .pipe(
        finalize(() => {
          this.setMessages(
            this.messages.filter(message => message.id !== loadingId)
          );
        })
      )
      .subscribe({
        next: response => {
          this.addAssistantMessage(response.response);
        },
        error: error => {
          console.error(error);
          this.addAssistantMessage('Something went wrong.');
        }
      });
  }

  addAssistantMessage(message: string): void {
    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: message,
      timestamp: new Date()
    };

    this.setMessages([
      ...this.messages,
      assistantMessage
    ]);
  }

  clearChat(): void {
    this.setMessages([]);
    this.addAssistantMessage('👋 Hello! How can I help you today?');
  }
}