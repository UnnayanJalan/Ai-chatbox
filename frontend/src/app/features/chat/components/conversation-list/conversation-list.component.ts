import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conversation-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent {

  conversations = [
    {
      id: 1,
      title: 'HR Policy Questions',
      updatedAt: 'Today'
    },
    {
      id: 2,
      title: 'Employee Handbook',
      updatedAt: 'Yesterday'
    },
    {
      id: 3,
      title: 'Sales Report Analysis',
      updatedAt: '2 days ago'
    }
  ];

}