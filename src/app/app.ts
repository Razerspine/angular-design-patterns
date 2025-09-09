import {Component} from '@angular/core';
import {Toast} from 'primeng/toast';
import {Wrapper} from '@patterns/layout/wrapper/wrapper';

@Component({
  selector: 'app-root',
  imports: [Toast, Wrapper],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
