import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslocoPipe} from '@ngneat/transloco';

@Component({
  selector: 'app-main',
  imports: [
    RouterLink,
    TranslocoPipe,
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
}
