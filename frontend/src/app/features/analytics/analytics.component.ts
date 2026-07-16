import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-card">
      <div class="hero-card">
        <div>
          <p class="eyebrow">Performance</p>
          <h2>Analytics Overview</h2>
          <p class="hero-copy">Track the health of your deployment and the momentum of your retrieval experience.</p>
        </div>
        <button type="button" class="primary-btn">Export</button>
      </div>

      <div class="stats-grid">
        <article class="panel" *ngFor="let metric of metrics">
          <div class="panel-label">{{ metric.label }}</div>
          <div class="metric-value">{{ metric.value }}</div>
          <p>{{ metric.detail }}</p>
        </article>
      </div>

      <div class="panel wide">
        <div class="panel-label">Query Trend</div>
        <div class="chart-row">
          <div class="bar" *ngFor="let point of trend" [style.height.%]="point.value"></div>
        </div>
        <div class="axis-labels">
          <span *ngFor="let point of trend">{{ point.day }}</span>
        </div>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; }`,
    `.page-card { display: flex; flex-direction: column; gap: 1rem; background: rgba(7, 22, 19, 0.9); border: 1px solid rgba(46, 204, 113, 0.16); border-radius: 24px; padding: 1.2rem; box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25); }`,
    `.hero-card { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.1rem 1.2rem; background: linear-gradient(120deg, rgba(13, 39, 33, 0.95), rgba(4, 18, 15, 0.92)); border: 1px solid rgba(46, 204, 113, 0.18); border-radius: 20px; }`,
    `.eyebrow { margin: 0 0 0.25rem; text-transform: uppercase; letter-spacing: 0.16em; color: #66e0c1; font-size: 0.72rem; }`,
    `h2 { margin: 0; color: #f2fff8; font-size: 1.2rem; }`,
    `.hero-copy { margin: 0.35rem 0 0; color: #9ebfae; max-width: 560px; }`,
    `.primary-btn { border: 0; background: linear-gradient(135deg, #14b8a6, #2dd4bf); color: #04110d; padding: 0.7rem 0.95rem; border-radius: 999px; font-weight: 700; }`,
    `.stats-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }`,
    `.panel { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }`,
    `.panel.wide { gap: 0.8rem; }`,
    `.panel-label { color: #66e0c1; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.16em; }`,
    `.metric-value { color: #f2fff8; font-size: 1.1rem; font-weight: 700; }`,
    `p { margin: 0; color: #9ebfae; }`,
    `.chart-row { display: flex; align-items: flex-end; gap: 0.5rem; height: 130px; padding-top: 0.4rem; }`,
    `.bar { flex: 1; min-height: 24px; border-radius: 999px 999px 0 0; background: linear-gradient(180deg, #2dd4bf, #0f766e); }`,
    `.axis-labels { display: flex; justify-content: space-between; margin-top: 0.4rem; color: #8aa597; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.12em; }`,
    `@media (max-width: 780px) { .hero-card { flex-direction: column; align-items: flex-start; } .stats-grid { grid-template-columns: 1fr; } }`
  ]
})
export class AnalyticsComponent {
  readonly metrics = [
    { label: 'Query Volume', value: '+18.4%', detail: 'Up from last month' },
    { label: 'Resolution Rate', value: '91.2%', detail: 'Answered with confidence' }
  ];

  readonly trend = [
    { day: 'Mon', value: 46 },
    { day: 'Tue', value: 54 },
    { day: 'Wed', value: 62 },
    { day: 'Thu', value: 72 },
    { day: 'Fri', value: 88 }
  ];
}
