import {Card} from './card.model';

export abstract class CardBuilderAbstract {
  protected card: Card = {};

  abstract setTitle(title: string): this;

  abstract setDescription(description: string): this;

  abstract setImage(url: string): this;

  abstract setButton(label: string): this;

  build(): Card {
    return this.card;
  }
}
