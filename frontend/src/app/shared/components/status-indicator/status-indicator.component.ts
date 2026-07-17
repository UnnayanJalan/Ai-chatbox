import { Component, input } from '@angular/core';

@Component({
  selector: 'app-status-indicator',
  standalone: true,
  template: `
    <span class="status-pill" [class.healthy]="status() === 'Healthy'" [class.warning]="status() === 'Warning'">
      <span class="dot"></span>
      {{ status() }}
    </span>
  `,
  styles: [
    `:host { display: inline-block; }`,
    `.status-pill { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.35rem 0.6rem; border-radius: 999px; font-size: 0.8rem; font-weight: 700; color: var(--text-strong, #ecfdf5); background: var(--pill-bg, rgba(255,255,255,0.07)); }`,
    `.dot { width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; }`,
    `.healthy .dot { background: #22c55e; }`,
    `.warning .dot { background: #f59e0b; }`
  ]
})
export class StatusIndicatorComponent {
  status = input.required<'Healthy' | 'Review' | 'Warning'>();
}
