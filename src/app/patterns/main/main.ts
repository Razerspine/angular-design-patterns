import { Component } from '@angular/core';
import {ButtonDirective, ButtonLabel} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    ButtonDirective,
    RouterLink,
    ButtonLabel
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
}
