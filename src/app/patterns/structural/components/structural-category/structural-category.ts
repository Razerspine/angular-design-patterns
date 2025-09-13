import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {STRUCTURAL_MENU_CONFIG} from '@core/configs/menu';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'app-structural-category',
  standalone: true,
  imports: [CommonModule, Menu],
  templateUrl: './structural-category.html',
  styleUrl: './structural-category.scss'
})
export class StructuralCategory {
  protected readonly items: MenuItem[] = STRUCTURAL_MENU_CONFIG;
}
