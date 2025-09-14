import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {STRUCTURAL_MENU_CONFIG} from '@core/configs/menu';
import {PatternsList} from '@shared/patterns-list/patterns-list';

@Component({
  selector: 'app-structural-category',
  standalone: true,
  imports: [CommonModule, PatternsList],
  templateUrl: './structural-category.html',
  styleUrl: './structural-category.scss'
})
export class StructuralCategory {
  protected readonly items: MenuItem[] = STRUCTURAL_MENU_CONFIG;
}
