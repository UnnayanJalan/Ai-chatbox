import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../../shared/components/search-box/search-box.component';
import { DashboardDataService } from '../../../../data/services/dashboard-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private readonly dashboardDataService: DashboardDataService) {}

  get themeLabel(): string {
    return this.dashboardDataService.themeMode() === 'dark' ? '☀︎' : '☾';
  }

  toggleTheme(): void {
    this.dashboardDataService.toggleTheme();
  }
}
