import {Component} from '@angular/core';
import {AbstractFactoryService} from './abstract-factory.service';

@Component({
  selector: 'app-abstract-factory-pattern',
  standalone: true,
  template: `
    <h2>Abstract Factory Example</h2>
    <button (click)="renderUI('light')">Render Light Theme</button>
    <button (click)="renderUI('dark')">Render Dark Theme</button>
  `
})
export class AbstractFactoryComponent {
  constructor(private factoryService: AbstractFactoryService) {
  }

  renderUI(theme: 'light' | 'dark') {
    const factory = this.factoryService.getFactory(theme);
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.render();
    checkbox.render();
  }
}
