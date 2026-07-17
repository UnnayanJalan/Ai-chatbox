import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  template: `
    <button type="button" class="action-btn" [class.ghost]="variant() === 'ghost'" [class.primary]="variant() === 'primary'" (click)="clicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: [
    `:host { display: inline-block; }`,
    `.action-btn { border: 0; border-radius: 999px; padding: 0.62rem 0.9rem; font-weight: 600; transition: all 0.2s ease-in-out; }`,
    `.primary { background: linear-gradient(135deg, #14b8a6, #2dd4bf); color: #04110d; }`,
    `.ghost { background: var(--button-ghost, rgba(255,255,255,0.06)); color: var(--text-strong, #e7f4ef); }`,
    `.action-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 16px rgba(0,0,0,0.16); }`
  ]
})
export class ActionButtonComponent {
  label = input.required<string>();
  variant = input<'primary' | 'ghost'>('ghost');
  readonly clicked = output<void>();
}
