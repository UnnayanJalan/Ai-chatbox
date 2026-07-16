import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MetricCardModel {
  title: string;
  value: string;
  change: string;
  icon: string;
  accent: string;
}

export interface UploadItemModel {
  name: string;
  size: string;
  time: string;
  type: string;
}

export interface ActivityItemModel {
  question: string;
  user: string;
  time: string;
  status: 'Healthy' | 'Review' | 'Warning';
}

export interface StatusItemModel {
  label: string;
  status: 'Healthy' | 'Warning';
  detail: string;
}

export interface DailyQueryPoint {
  day: string;
  value: number;
}

export interface SourceShareModel {
  label: string;
  value: number;
  color: string;
}

export interface TopDocumentModel {
  name: string;
  percent: number;
}

@Injectable({ providedIn: 'root' })
export class DashboardDataService {
  private readonly metricsSubject = new BehaviorSubject<MetricCardModel[]>([
    { title: 'Documents', value: '1,248', change: '+12 this week', icon: '📄', accent: '#2dd4bf' },
    { title: 'Total Queries', value: '48.2K', change: '+8.4% weekly', icon: '💬', accent: '#34d399' },
    { title: 'Vector Embeddings', value: '842K', change: '+24 today', icon: '🧠', accent: '#22c55e' },
    { title: 'Active Models', value: '6', change: '2 online', icon: '⚙️', accent: '#14b8a6' }
  ]);

  private readonly uploadsSubject = new BehaviorSubject<UploadItemModel[]>([
    { name: 'customer-feedback.pdf', size: '3.2 MB', time: '14m ago', type: 'PDF' },
    { name: 'policy-qa.json', size: '720 KB', time: '31m ago', type: 'JSON' },
    { name: 'support-tips.md', size: '184 KB', time: '1h ago', type: 'Markdown' }
  ]);

  private readonly activitySubject = new BehaviorSubject<ActivityItemModel[]>([
    { question: 'How do I reset my API credentials?', user: 'Mina', time: '8m ago', status: 'Healthy' },
    { question: 'Summarize my last 30 days of support tickets.', user: 'Jordan', time: '17m ago', status: 'Review' },
    { question: 'What documents are indexed for finance?', user: 'Lila', time: '42m ago', status: 'Warning' }
  ]);

  private readonly statusSubject = new BehaviorSubject<StatusItemModel[]>([
    { label: 'API Server', status: 'Healthy', detail: 'Latency 132ms' },
    { label: 'Vector DB', status: 'Healthy', detail: '7.9M chunks synced' },
    { label: 'Model Gateway', status: 'Warning', detail: '1 retry pending' }
  ]);

  private readonly chartSubject = new BehaviorSubject<DailyQueryPoint[]>([
    { day: 'Mon', value: 320 },
    { day: 'Tue', value: 440 },
    { day: 'Wed', value: 390 },
    { day: 'Thu', value: 520 },
    { day: 'Fri', value: 610 },
    { day: 'Sat', value: 700 },
    { day: 'Sun', value: 680 }
  ]);

  private readonly sourceSubject = new BehaviorSubject<SourceShareModel[]>([
    { label: 'Web App', value: 42, color: '#2dd4bf' },
    { label: 'Slack', value: 24, color: '#34d399' },
    { label: 'Mobile', value: 18, color: '#14b8a6' },
    { label: 'Email', value: 16, color: '#0f766e' }
  ]);

  private readonly documentsSubject = new BehaviorSubject<TopDocumentModel[]>([
    { name: 'Finance Policies', percent: 86 },
    { name: 'Support Runbooks', percent: 72 },
    { name: 'Product Docs', percent: 64 }
  ]);

  readonly metrics = this.metricsSubject.asObservable();
  readonly uploads = this.uploadsSubject.asObservable();
  readonly activity = this.activitySubject.asObservable();
  readonly systemStatus = this.statusSubject.asObservable();
  readonly dailyQueries = this.chartSubject.asObservable();
  readonly sourceShares = this.sourceSubject.asObservable();
  readonly topDocuments = this.documentsSubject.asObservable();

  readonly themeMode = signal<'dark' | 'light'>('dark');

  toggleTheme(): void {
    this.themeMode.set(this.themeMode() === 'dark' ? 'light' : 'dark');
  }
}
