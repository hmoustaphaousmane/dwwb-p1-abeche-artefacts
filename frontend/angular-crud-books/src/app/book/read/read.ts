import { Component } from '@angular/core';
import { BookService } from '../book-service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookInterface } from '../book-interface';

@Component({
  selector: 'app-read',
  imports: [],
  templateUrl: './read.html',
  styleUrl: './read.css'
})
export class Read {
  id!: number;
  book!: BookInterface;

  constructor(public bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params);
    this.id = this.route.snapshot.params['bookId'];
    this.bookService.getSingle(this.id).subscribe((data: BookInterface) => {
      console.log(data);

      this.book = data;
    })
  }

}

