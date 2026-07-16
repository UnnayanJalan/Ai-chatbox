import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-card">
      <div class="hero-card">
        <div>
          <p class="eyebrow">Preferences</p>
          <h2>System Settings</h2>
          <p class="hero-copy">Adjust the platform controls that govern access, notification delivery, and tenant-level behavior.</p>
        </div>
        <button type="button" class="primary-btn">Save Changes</button>
      </div>
      <div class="grid">
        <article class="panel" *ngFor="let section of sections">
          <div class="panel-label">{{ section.title }}</div>
          <div class="metric-value">{{ section.value }}</div>
          <p>{{ section.detail }}</p>
          <div class="toggle-row">
            <span class="pill">{{ section.state }}</span>
            <span class="toggle"></span>
          </div>
        </article>
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
    `.grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }`,
    `.panel { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 1rem; display: flex; flex-direction: column; gap: 0.6rem; }`,
    `.panel-label { color: #66e0c1; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.16em; }`,
    `.metric-value { color: #f2fff8; font-size: 1rem; font-weight: 600; }`,
    `p { margin: 0; color: #9ebfae; }`,
    `.toggle-row { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: 0.3rem; }`,
    `.pill { padding: 0.35rem 0.6rem; border-radius: 999px; background: rgba(45, 212, 191, 0.14); color: #98f1e7; font-size: 0.8rem; }`,
    `.toggle { width: 38px; height: 22px; border-radius: 999px; background: rgba(255,255,255,0.16); position: relative; }`,
    `.toggle::after { content: ''; position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; border-radius: 50%; background: #f2fff8; }`,
    `@media (max-width: 780px) { .hero-card { flex-direction: column; align-items: flex-start; } .grid { grid-template-columns: 1fr; } }`
  ]
})
export class SettingsComponent {
  readonly sections = [
    { title: 'Security', value: 'JWT rotation enabled', detail: 'Short-lived tokens remain active for all privileged sessions.', state: 'Protected' },
    { title: 'Notifications', value: 'Weekly digest enabled', detail: 'Delivery summaries are sent every Monday at 09:00.', state: 'Active' }
  ];
}
