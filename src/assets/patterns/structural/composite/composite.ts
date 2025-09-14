import {Component} from './component.interface';

export class Composite implements Component {
  private children: Component[] = [];

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    this.children = this.children.filter(c => c !== component);
  }

  operation(): string {
    return `Composite: [${this.children.map(c => c.operation()).join(', ')}]`;
  }
}
