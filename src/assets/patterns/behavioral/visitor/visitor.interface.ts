export interface Visitor {
  visitBook(book: Book): void;

  visitMovie(movie: Movie): void;
}

export interface Visitable {
  accept(visitor: Visitor): void;
}

export class Book {
}

export class Movie {
}
