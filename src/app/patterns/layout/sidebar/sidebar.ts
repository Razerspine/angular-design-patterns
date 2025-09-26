import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MENU_CONFIG} from '@core/configs/menu';
import {Button} from 'primeng/button';
import {LayoutService} from '@core/services/layout.service';
import {TranslocoPipe} from '@ngneat/transloco';
import {Ripple} from 'primeng/ripple';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, Menu, Button, TranslocoPipe, Ripple, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  protected readonly items: MenuItem[] = MENU_CONFIG;
  layoutService = inject(LayoutService);

  toggleMenu(): void {
    this.layoutService.toggleMenu();
  }
}
