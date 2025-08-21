import { Component } from '@angular/core';
import { BookService } from '../book-service';
import { BookInterface } from '../book-interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterLink],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  books: BookInterface[] = [];

  constructor(public bookService: BookService, private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
    this.bookService.getAll().subscribe((data: BookInterface[]) => {
      console.log('Data:::', data);
      this.books = data;
      console.log('Books:::', this.books);
    });
  }

  deleteBook(id: string) {
    this.bookService.delete(id).subscribe(() => {
      this.books = this.books.filter((book) => book._id !== id);
    });
  }
}
