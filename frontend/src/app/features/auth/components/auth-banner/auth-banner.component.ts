import {ChangeDetectionStrategy,Component,Input} from '@angular/core';

@Component({
  selector: 'app-auth-banner',
  standalone: true,
  templateUrl: './auth-banner.component.html',
  styleUrls: ['./auth-banner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBannerComponent {
  @Input() title = 'AI CHAT';
  @Input() subtitle = 'Secure Access Portal';

  @Input()
  description =
    'Manage knowledge bases, vector databases, AI models, embeddings, analytics, and enterprise workflows from one powerful platform.';

  readonly version = 'v1.0.0';

  readonly features = [
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description:
        'Secure authentication with enterprise-grade protection.',
    },
    {
      icon: '🧠',
      title: 'AI Powered',
      description:
        'Manage models, embeddings and retrieval workflows.',
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description:
        'Track AI usage, conversations and system health.',
    },
  ];
}