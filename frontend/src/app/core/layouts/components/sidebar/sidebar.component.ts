import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  readonly items: SidebarItem[] = [
    { label: 'Dashboard', icon: '◉', route: '/dashboard', active: true },
    { label: 'AI Chat', icon: '🤖', route: '/chat', active: true },
    { label: 'Widget Config', icon: '▣', route: '/widget-config' },
    { label: 'Knowledge Base', icon: '◌', route: '/knowledge-base' },
    { label: 'AI Models', icon: '⚡', route: '/ai-models' },
    { label: 'Analytics', icon: '◔', route: '/analytics' },
    { label: 'API Keys', icon: '⛨', route: '/api-keys' },
    { label: 'Settings', icon: '⚙', route: '/settings' }
  ];
}
