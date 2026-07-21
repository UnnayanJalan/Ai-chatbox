import {ChangeDetectionStrategy,Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthBannerComponent } from '../auth-banner/auth-banner.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    CommonModule,
    AuthBannerComponent
  ],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {}