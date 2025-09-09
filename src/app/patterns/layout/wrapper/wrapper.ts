import {Component, inject} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {Sidebar} from "@patterns/layout/sidebar/sidebar";
import {Topbar} from "@patterns/layout/topbar/topbar";
import {LayoutService} from '@core/services/layout.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-wrapper',
  imports: [
    RouterOutlet,
    Sidebar,
    Topbar,
    NgClass
  ],
  templateUrl: './wrapper.html',
  styleUrl: './wrapper.scss'
})
export class Wrapper {
  layoutService = inject(LayoutService);

  toggleMenu(): void {
    this.layoutService.toggleMenu();
  }
}
