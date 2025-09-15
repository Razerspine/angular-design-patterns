import {Iterator} from './iterator.interface';

export class NameIterator implements Iterator<string> {
  private index = 0;

  constructor(private names: string[]) {
  }

  next(): string | null {
    return this.hasNext() ? this.names[this.index++] : null;
  }

  hasNext(): boolean {
    return this.index < this.names.length;
  }
}

export class NameCollection {
  private names: string[] = [];

  addName(name: string): void {
    this.names.push(name);
  }

  createIterator(): NameIterator {
    return new NameIterator(this.names);
  }
}
