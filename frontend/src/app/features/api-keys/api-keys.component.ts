import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-keys',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-card">
      <div class="hero-card">
        <div>
          <p class="eyebrow">Security</p>
          <h2>API Keys</h2>
          <p class="hero-copy">Review the application credentials that power integrations, retrieval services, and internal admin flows.</p>
        </div>
        <button type="button" class="primary-btn">Generate Key</button>
      </div>
      <div class="list">
        <article class="item" *ngFor="let key of keys">
          <div>
            <h3>{{ key.name }}</h3>
            <p>{{ key.description }}</p>
          </div>
          <div class="meta-block">
            <span class="pill">{{ key.status }}</span>
            <span class="mono">{{ key.updated }}</span>
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
    `h2, h3 { margin: 0; color: #f2fff8; }`,
    `.hero-copy { margin: 0.35rem 0 0; color: #9ebfae; max-width: 560px; }`,
    `.primary-btn { border: 0; background: linear-gradient(135deg, #14b8a6, #2dd4bf); color: #04110d; padding: 0.7rem 0.95rem; border-radius: 999px; font-weight: 700; }`,
    `.list { display: flex; flex-direction: column; gap: 0.75rem; }`,
    `.item { display: flex; justify-content: space-between; align-items: center; gap: 1rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 0.9rem 1rem; }`,
    `p { margin: 0.2rem 0 0; color: #9ebfae; }`,
    `.meta-block { display: flex; flex-direction: column; align-items: flex-end; gap: 0.25rem; }`,
    `.pill { padding: 0.35rem 0.6rem; border-radius: 999px; background: rgba(45, 212, 191, 0.14); color: #98f1e7; font-size: 0.8rem; }`,
    `.mono { color: #86a895; font-size: 0.8rem; }`,
    `@media (max-width: 780px) { .hero-card, .item { flex-direction: column; align-items: flex-start; } .meta-block { align-items: flex-start; } }`
  ]
})
export class ApiKeysComponent {
  readonly keys = [
    { name: 'Admin Key', description: 'Used for internal administration', status: 'Active', updated: 'Rotated 2 days ago' },
    { name: 'RAG Key', description: 'Used for retrieval workflows', status: 'Rotating', updated: 'Next rotation in 4 days' }
  ];
}
