import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AiModeComponent } from './features/ai-mode/ai-mode.component';
import { AnalyticsComponent } from './features/analytics/analytics.component';
import { ApiKeysComponent } from './features/api-keys/api-keys.component';
import { KnowledgeBaseComponent } from './features/knowledge-base/knowledge-base.component';
import { SettingsComponent } from './features/settings/settings.component';
import { WidgetConfigComponent } from './features/widget-config/widget-config.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'widget-config', component: WidgetConfigComponent },
  { path: 'knowledge-base', component: KnowledgeBaseComponent },
  { path: 'ai-models', component: AiModeComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'api-keys', component: ApiKeysComponent },
  { path: 'settings', component: SettingsComponent }
];
