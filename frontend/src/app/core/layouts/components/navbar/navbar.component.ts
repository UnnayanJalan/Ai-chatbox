import { Component } from '@angular/core';
import { DashboardDataService } from '../../../../data/services/dashboard-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private readonly dashboardDataService: DashboardDataService) {}

  toggleTheme(): void {
    this.dashboardDataService.toggleTheme();
  }
}
