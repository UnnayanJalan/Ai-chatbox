import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  template: `
    <label class="search-box">
      <span class="icon">⌕</span>
      <input [placeholder]="placeholder()" [value]="value()" (input)="valueChange.emit($any($event.target).value)" />
    </label>
  `,
  styles: [
    `:host { display: block; }`,
    `.search-box { display: flex; align-items: center; gap: 0.6rem; padding: 0.7rem 0.95rem; border-radius: 999px; border: 1px solid var(--input-border, rgba(46, 204, 113, 0.16)); background: var(--input-bg, rgba(255,255,255,0.05)); color: var(--text-muted, #8aa597); min-width: 260px; }`,
    `.icon { font-size: 0.95rem; }`,
    `input { border: 0; outline: none; background: transparent; color: var(--text-strong, #f2fff8); width: 100%; }`
  ]
})
export class SearchBoxComponent {
  placeholder = input<string>('Search');
  value = input<string>('');
  readonly valueChange = output<string>();
}
