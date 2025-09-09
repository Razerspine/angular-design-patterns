import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MenuConfig} from '@core/configs/menu/menu-config';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, Menu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  items: MenuItem[] = MenuConfig;
}
