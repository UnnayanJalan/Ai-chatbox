import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-mode',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-card">
      <div class="hero-card">
        <div>
          <p class="eyebrow">AI Operations</p>
          <h2>AI Mode Control</h2>
          <p class="hero-copy">Balance retrieval depth, streaming responses, and routing rules from a single control surface.</p>
        </div>
        <button type="button" class="primary-btn">Run Diagnostics</button>
      </div>

      <div class="stats-grid">
        <article class="panel">
          <div class="panel-label">Active Mode</div>
          <div class="metric-value">Hybrid Retrieval + Reasoning</div>
          <div class="pill-row">
            <span class="pill">RAG enabled</span>
            <span class="pill">Streaming</span>
            <span class="pill">Context-aware</span>
          </div>
        </article>
        <article class="panel">
          <div class="panel-label">Model Routing</div>
          <div class="metric-value">OpenAI GPT-4.1 · Ollama Llama 3.2</div>
        </article>
      </div>

      <div class="panel wide">
        <div class="panel-label">Prompt Presets</div>
        <div class="preset-list">
          <div class="preset-item" *ngFor="let preset of presets">
            <div>
              <strong>{{ preset.name }}</strong>
              <p>{{ preset.description }}</p>
            </div>
            <span class="pill">{{ preset.tag }}</span>
          </div>
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
    `.panel { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; padding: 1rem; display: flex; flex-direction: column; gap: 0.65rem; }`,
    `.panel.wide { gap: 0.8rem; }`,
    `.panel-label { color: #66e0c1; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.16em; }`,
    `.metric-value { color: #f2fff8; font-size: 1rem; font-weight: 600; }`,
    `.pill-row { display: flex; gap: 0.5rem; flex-wrap: wrap; }`,
    `.pill { display: inline-block; padding: 0.35rem 0.6rem; border-radius: 999px; background: rgba(45, 212, 191, 0.14); color: #98f1e7; font-size: 0.8rem; }`,
    `.preset-list { display: flex; flex-direction: column; gap: 0.7rem; }`,
    `.preset-item { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 0.75rem 0.85rem; border-radius: 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); }`,
    `.preset-item strong { display: block; color: #f2fff8; }`,
    `.preset-item p { margin: 0.2rem 0 0; color: #9ebfae; }`,
    `@media (max-width: 780px) { .hero-card, .preset-item { flex-direction: column; align-items: flex-start; } .stats-grid { grid-template-columns: 1fr; } }`
  ]
})
export class AiModeComponent {
  readonly presets = [
    { name: 'Support Copilot', description: 'Concise, grounded help for internal teams', tag: 'Support' },
    { name: 'Compliance Reviewer', description: 'Checks policy wording before release', tag: 'Policy' },
    { name: 'Knowledge Explainer', description: 'Summarizes connected documents with citations', tag: 'Docs' }
  ];
}
