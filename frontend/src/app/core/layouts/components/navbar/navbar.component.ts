import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../../shared/components/search-box/search-box.component';
import { DashboardDataService } from '../../../../data/services/dashboard-data.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SearchBoxComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private readonly dashboardDataService: DashboardDataService,
    private authService: AuthService,
    private router: Router
  ) { }

  user$ = this.authService.currentUser$;

  get themeLabel(): string {
    return this.dashboardDataService.themeMode() === 'dark' ? '☀︎' : '☾';
  }

  toggleTheme(): void {
    this.dashboardDataService.toggleTheme();
  }

  logout(): void {
    const confirmed = confirm(
      'Are you sure you want to logout?'
    );

    if (!confirmed) {
      return;
    }
    this.authService.logout();
  }

  getInitials(name: string): string {

    return name
      .split(' ')
      .map(word => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  }
}
