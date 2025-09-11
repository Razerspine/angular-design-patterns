import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Button} from 'primeng/button';
import {LayoutService} from '@core/services/layout.service';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TranslocoService} from '@ngneat/transloco';
import {Select} from 'primeng/select';

type LanguageType = {
  label: string;
  value: string;
}

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, Button, RouterLink, FormsModule, Select],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class Topbar {
  private transLoco = inject(TranslocoService);
  layoutService = inject(LayoutService);
  selectedLang: string = 'en';
  languages: LanguageType[] = [
    {
      label: 'EN',
      value: 'en'
    },
    {
      label: 'UK',
      value: 'uk'
    }
  ];

  toggleMenu(): void {
    this.layoutService.toggleMenu();
  }

  onChange(): void {
    this.transLoco.setActiveLang(this.selectedLang);
  }
}
