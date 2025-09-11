import { CardBuilderAbstract } from './card-builder.abstract';

export class SimpleCardBuilder extends CardBuilderAbstract {
  setTitle(title: string): this {
    this.card.title = title;
    return this;
  }

  setDescription(description: string): this {
    this.card.description = description;
    return this;
  }

  setImage(url: string): this {
    this.card.image = url;
    return this;
  }

  setButton(label: string): this {
    this.card.button = label;
    return this;
  }
}
