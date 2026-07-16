import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-config',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-card">
      <div class="hero-card">
        <div>
          <p class="eyebrow">Configuration</p>
          <h2>Widget Config</h2>
          <p class="hero-copy">Choose which dashboard surfaces remain visible and which are tucked away for a calmer workspace.</p>
        </div>
        <button type="button" class="primary-btn">Save Layout</button>
      </div>
      <div class="grid">
        <article class="panel" *ngFor="let widget of widgets">
          <div class="panel-title-row">
            <h3>{{ widget.name }}</h3>
            <span class="pill">{{ widget.status }}</span>
          </div>
          <p>{{ widget.description }}</p>
        </article>
      </div>
    </section>
  `,
  styles: [
    `:host { display: block; }`,
    `.page-card { display: flex; flex-direction: column; gap: 1rem; background: rgba(7, 22, 19, 0.9); border: 1px solid rgba(46, 204, 113, 0.16); border-radius: 24px; padding: 1.2rem; box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25); }`,
    `.hero-card { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.1rem 1.2rem; background: linear-gradient(120deg, rgba(13, 39, 33, 0.95), rgba(4, 18, 15, 0.92)); border: 1px solid rgba(46, 204, 113, 0.18); border-radius: 20px; }`,
    `.eyebrow { margin: 0 0 0.25rem; text-transform: uppercase; letter-spacing: 0.16em; color: #66e0c1; font-size: 0.72rem; }`,
    `h2, h3 { margin: 0; color: #f2fff8; }`,
    `.hero-copy { margin: 0.35rem 0 0; color: #9ebfae; max-width: 560px; }`,
    `.primary-btn { border: 0; background: linear-gradient(135deg, #14b8a6, #2dd4bf); color: #04110d; padding: 0.7rem 0.95rem; border-radius: 999px; font-weight: 700; }`,
    `.grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }`,
    `.panel { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 1rem; display: flex; flex-direction: column; gap: 0.55rem; }`,
    `.panel-title-row { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }`,
    `.pill { padding: 0.35rem 0.6rem; border-radius: 999px; background: rgba(45, 212, 191, 0.14); color: #98f1e7; font-size: 0.8rem; }`,
    `p { margin: 0; color: #9ebfae; }`,
    `@media (max-width: 780px) { .hero-card { flex-direction: column; align-items: flex-start; } .grid { grid-template-columns: 1fr; } }`
  ]
})
export class WidgetConfigComponent {
  readonly widgets = [
    { name: 'Metric Cards', description: 'Show or hide summary widgets', status: 'Visible' },
    { name: 'Activity Feed', description: 'Display recent chat telemetry', status: 'Visible' },
    { name: 'System Health', description: 'Monitor critical services', status: 'Collapsed' },
    { name: 'Knowledge Highlights', description: 'Surface recent documents', status: 'Visible' }
  ];
}
