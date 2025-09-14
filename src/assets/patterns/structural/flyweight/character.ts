export class Character {
  constructor(public readonly symbol: string, public readonly font: string) {
  }

  display(position: number): string {
    return `Char "${this.symbol}" with font "${this.font}" at position ${position}`;
  }
}
