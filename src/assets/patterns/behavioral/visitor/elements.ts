import {Visitable, Visitor} from './visitor.interface';

export class Book implements Visitable {
  constructor(public title: string, public price: number) {
  }

  accept(visitor: Visitor): void {
    visitor.visitBook(this);
  }
}

export class Movie implements Visitable {
  constructor(public title: string, public rating: number) {
  }

  accept(visitor: Visitor): void {
    visitor.visitMovie(this);
  }
}
