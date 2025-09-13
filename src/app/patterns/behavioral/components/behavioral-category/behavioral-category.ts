import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {BEHAVIORAL_MENU_CONFIG} from '@core/configs/menu';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'app-behavioral-category',
  standalone: true,
  imports: [CommonModule, Menu],
  templateUrl: './behavioral-category.html',
  styleUrl: './behavioral-category.scss'
})
export class BehavioralCategory {
  protected readonly items: MenuItem[] = BEHAVIORAL_MENU_CONFIG;
}
