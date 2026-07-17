import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list-card',
  standalone: true,
  template: `
    <section class="list-card">
      <div class="list-header">
        <h4>{{ title() }}</h4>
        <button type="button">View All</button>
      </div>
      <div class="list-body">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; }`,
    `.list-card { background: var(--panel-bg, rgba(7, 22, 19, 0.9)); border: 1px solid var(--panel-border, rgba(46, 204, 113, 0.16)); border-radius: 22px; padding: 1rem 1.1rem; box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16); transition: all 0.2s ease-in-out; }`,
    `.list-card:hover { transform: translateY(-2px); border-color: rgba(46, 204, 113, 0.4); box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25); }`,
    `.list-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.95rem; }`,
    `h4 { margin: 0; color: var(--text-strong, #f2fff8); font-size: 1rem; }`,
    `button { border: 0; background: rgba(45, 212, 191, 0.12); color: var(--accent, #98f1e7); padding: 0.45rem 0.7rem; border-radius: 999px; }`
  ]
})
export class ListCardComponent {
  title = input.required<string>();
}
