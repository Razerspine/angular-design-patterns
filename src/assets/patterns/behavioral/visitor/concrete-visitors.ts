import {Visitor} from './visitor.interface';
import {Book, Movie} from './elements';

export class PriceVisitor implements Visitor {
  visitBook(book: Book): void {
    console.log(`Book "${book.title}" costs $${book.price}`);
  }

  visitMovie(movie: Movie): void {
    console.log(`Movie "${movie.title}" has no price, rating: ${movie.rating}`);
  }
}

export class RatingVisitor implements Visitor {
  visitBook(book: Book): void {
    console.log(`Book "${book.title}" has no rating, price: $${book.price}`);
  }

  visitMovie(movie: Movie): void {
    console.log(`Movie "${movie.title}" rating is ${movie.rating}/10`);
  }
}
