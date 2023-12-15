import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@lib/services';
import { ThemeService } from '@lib/services/theme';
import { LayoutHorizontalComponent } from './lib/components/layouts/layout-horizontal/layout-horizontal.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, LayoutHorizontalComponent],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    isAuthenticated$ = this._authService.isAuthenticated$;

    constructor(private _authService: AuthService, private _themeService: ThemeService) {}

    ngOnInit(): void {
        this._themeService.init();
    }
}
