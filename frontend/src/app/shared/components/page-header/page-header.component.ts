import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  template: `
    <section class="page-header">
      <div>
        <p class="eyebrow">{{ eyebrow() }}</p>
        <h2>{{ title() }}</h2>
        <p class="subtitle">{{ subtitle() }}</p>
      </div>
      <div class="actions">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; }`,
    `.page-header { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.15rem 1.2rem; background: var(--panel-bg, rgba(7, 22, 19, 0.9)); border: 1px solid var(--panel-border, rgba(46, 204, 113, 0.16)); border-radius: 24px; box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2); margin-bottom: 1rem; }`,
    `.eyebrow { margin: 0 0 0.28rem; text-transform: uppercase; letter-spacing: 0.18em; color: var(--accent, #66e0c1); font-size: 0.72rem; font-weight: 700; }`,
    `h2 { margin: 0; color: var(--text-strong, #f2fff8); font-size: 1.15rem; }`,
    `.subtitle { margin: 0.25rem 0 0; color: var(--text-muted, #9ebfae); max-width: 650px; }`,
    `.actions { display: flex; gap: 0.6rem; flex-wrap: wrap; }`
  ]
})
export class PageHeaderComponent {
  eyebrow = input.required<string>();
  title = input.required<string>();
  subtitle = input.required<string>();
}
