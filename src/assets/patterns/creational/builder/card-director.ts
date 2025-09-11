import { SimpleCardBuilder } from './simple-card-builder';

export class CardDirector {
  constructor(private builder: SimpleCardBuilder) {}

  buildProductCard() {
    return this.builder
      .setTitle('Awesome Product')
      .setDescription('This product is built using the Builder Pattern.')
      .setImage('https://via.placeholder.com/150')
      .setButton('Buy Now')
      .build();
  }
}
