import {Component} from './component.interface';

export class Leaf implements Component {
  constructor(private name: string) {
  }

  operation(): string {
    return `Leaf: ${this.name}`;
  }
}
