import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CREATIONAL_MENU_CONFIG} from '@core/configs/menu';
import {MenuItem} from 'primeng/api';
import {PatternsList} from '@shared/patterns-list/patterns-list';

@Component({
  selector: 'app-creational-category',
  standalone: true,
  imports: [CommonModule, PatternsList],
  templateUrl: './creational-category.html',
  styleUrl: './creational-category.scss'
})
export class CreationalCategory {
  protected readonly items: MenuItem[] = CREATIONAL_MENU_CONFIG;
}
