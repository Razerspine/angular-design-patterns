import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {BEHAVIORAL_MENU_CONFIG} from '@core/configs/menu';
import {PatternsList} from '@shared/patterns-list/patterns-list';

@Component({
  selector: 'app-behavioral-category',
  standalone: true,
  imports: [CommonModule, PatternsList],
  templateUrl: './behavioral-category.html',
  styleUrl: './behavioral-category.scss'
})
export class BehavioralCategory {
  protected readonly items: MenuItem[] = BEHAVIORAL_MENU_CONFIG;
}
