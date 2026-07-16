import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-knowledge-base',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-card">
      <div class="hero-card">
        <div>
          <p class="eyebrow">Knowledge</p>
          <h2>Knowledge Base</h2>
          <p class="hero-copy">Keep the knowledge layer fresh, indexed, and ready for retrieval workflows.</p>
        </div>
        <div class="hero-actions">
          <span class="summary-chip">3 sources indexed</span>
          <button type="button" class="primary-btn">Upload Source</button>
        </div>
      </div>
      <div class="list">
        <article class="item" *ngFor="let item of items">
          <div>
            <div class="title-row">
              <h3>{{ item.name }}</h3>
              <span class="dot"></span>
            </div>
            <p>{{ item.description }}</p>
          </div>
          <div class="meta-block">
            <span class="pill">{{ item.status }}</span>
            <span class="mono">{{ item.updated }}</span>
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
    `.hero-actions { display: flex; align-items: center; gap: 0.7rem; }`,
    `.summary-chip { padding: 0.38rem 0.7rem; border-radius: 999px; background: rgba(255,255,255,0.06); color: #bfe4d5; font-size: 0.83rem; }`,
    `.primary-btn { border: 0; background: linear-gradient(135deg, #14b8a6, #2dd4bf); color: #04110d; padding: 0.7rem 0.95rem; border-radius: 999px; font-weight: 700; }`,
    `.list { display: flex; flex-direction: column; gap: 0.75rem; }`,
    `.item { display: flex; justify-content: space-between; align-items: center; gap: 1rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 0.9rem 1rem; }`,
    `.title-row { display: flex; align-items: center; gap: 0.5rem; }`,
    `.dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #2dd4bf; box-shadow: 0 0 0 4px rgba(45, 212, 191, 0.16); }`,
    `p { margin: 0.2rem 0 0; color: #9ebfae; }`,
    `.meta-block { display: flex; flex-direction: column; align-items: flex-end; gap: 0.25rem; }`,
    `.pill { padding: 0.35rem 0.6rem; border-radius: 999px; background: rgba(45, 212, 191, 0.14); color: #98f1e7; font-size: 0.8rem; }`,
    `.mono { color: #86a895; font-size: 0.8rem; }`,
    `@media (max-width: 780px) { .hero-card, .item { flex-direction: column; align-items: flex-start; } .meta-block { align-items: flex-start; } }`
  ]
})
export class KnowledgeBaseComponent {
  readonly items = [
    { name: 'Finance Policies', description: 'Internal policy references for approvals', status: 'Indexed', updated: 'Updated 2h ago' },
    { name: 'Support Playbooks', description: 'Troubleshooting procedures', status: 'Synced', updated: 'Synced today' },
    { name: 'Product Docs', description: 'Latest release documentation', status: 'Queued', updated: 'Queued for review' }
  ];
}
