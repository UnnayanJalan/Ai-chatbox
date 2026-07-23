import { Routes } from '@angular/router';

import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AnalyticsComponent } from './features/analytics/analytics.component';
import { KnowledgeBaseComponent } from './features/knowledge-base/knowledge-base.component';
import { WidgetConfigComponent } from './features/widget-config/widget-config.component';
import { SettingsComponent } from './features/settings/settings.component';
import { ApiKeysComponent } from './features/api-keys/api-keys.component';
import { AiModeComponent } from './features/ai-mode/ai-mode.component';
import { authGuard } from './features/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'widget-config', component: WidgetConfigComponent },
      { path: 'knowledge-base', component: KnowledgeBaseComponent },
      { path: 'ai-models', component: AiModeComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'api-keys', component: ApiKeysComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];