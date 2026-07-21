import {ChangeDetectionStrategy,Component,Input,} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AuthCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
}