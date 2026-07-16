import { Component, input } from '@angular/core';
import { MetricCardModel } from '../../../data/services/dashboard-data.service';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  template: `
    <article class="metric-card">
      <div class="metric-icon" [style.background]="metric().accent + '19'" [style.color]="metric().accent">
        {{ metric().icon }}
      </div>
      <div class="metric-content">
        <p class="metric-title">{{ metric().title }}</p>
        <h3>{{ metric().value }}</h3>
        <span class="metric-change">{{ metric().change }}</span>
      </div>
    </article>
  `,
  styles: [
    `:host { display: block; }`,
    `.metric-card { background: rgba(7, 22, 19, 0.9); border: 1px solid rgba(46, 204, 113, 0.16); border-radius: 20px; padding: 1rem 1.1rem; display: flex; gap: 0.9rem; align-items: center; transition: all 0.2s ease-in-out; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); }`,
    `.metric-card:hover { transform: translateY(-2px); border-color: rgba(46, 204, 113, 0.4); box-shadow: 0 0 0 1px rgba(46, 204, 113, 0.25), 0 12px 28px rgba(0, 0, 0, 0.3); }`,
    `.metric-icon { width: 44px; height: 44px; border-radius: 14px; display: grid; place-items: center; font-size: 1.2rem; font-weight: 700; }`,
    `.metric-title { margin: 0 0 0.35rem; color: #8fada0; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.12em; }`,
    `h3 { margin: 0 0 0.25rem; font-size: 1.25rem; color: #f2fff8; }`,
    `.metric-change { color: #2dd4bf; font-size: 0.9rem; font-weight: 600; }`
  ]
})
export class MetricCardComponent {
  metric = input.required<MetricCardModel>();
}
