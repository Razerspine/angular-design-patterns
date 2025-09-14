import {Component, input, InputSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-patterns-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './patterns-list.html',
  styleUrl: './patterns-list.scss'
})
export class PatternsList {
  data: InputSignal<MenuItem[]> = input.required();
}
