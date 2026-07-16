import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricCardComponent } from '../../shared/components/metric-card/metric-card.component';
import { ListCardComponent } from '../../shared/components/list-card/list-card.component';
import { StatusIndicatorComponent } from '../../shared/components/status-indicator/status-indicator.component';
import { DashboardDataService } from '../../data/services/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MetricCardComponent, ListCardComponent, StatusIndicatorComponent],
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent {
  readonly dashboardDataService = inject(DashboardDataService);

  readonly metrics$ = this.dashboardDataService.metrics;
  readonly uploads$ = this.dashboardDataService.uploads;
  readonly activity$ = this.dashboardDataService.activity;
  readonly systemStatus$ = this.dashboardDataService.systemStatus;
  readonly dailyQueries$ = this.dashboardDataService.dailyQueries;
  readonly sourceShares$ = this.dashboardDataService.sourceShares;
  readonly topDocuments$ = this.dashboardDataService.topDocuments;
}
