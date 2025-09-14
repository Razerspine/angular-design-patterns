import {Character} from './character';

export class CharacterFactory {
  private characters: Map<string, Character> = new Map();

  getCharacter(symbol: string, font: string): Character {
    const key = `${symbol}_${font}`;
    if (!this.characters.has(key)) {
      this.characters.set(key, new Character(symbol, font));
    }
    return this.characters.get(key)!;
  }

  getCount(): number {
    return this.characters.size;
  }
}
