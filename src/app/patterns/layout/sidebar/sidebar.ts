import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MENU_CONFIG} from '@core/configs/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, Menu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  protected readonly items: MenuItem[] = MENU_CONFIG;
}
