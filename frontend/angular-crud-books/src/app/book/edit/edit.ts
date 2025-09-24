import { Component } from '@angular/core';
import { BookInterface } from '../book-interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../book-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  id!: string;
  book!: BookInterface;
  form!: FormGroup;

  constructor(
    public bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['bookId'];
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      publicationYear: new FormControl('', [Validators.required]),
    });

    this.bookService.getSingle(this.id).subscribe((data: BookInterface) => {
      this.book = data;
      // console.log(data);

      this.form.patchValue({
        title: this.book.title,
        author: this.book.author,
        publicationYear: this.book.publicationYear,
      });
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) return;

    this.bookService.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('Bood update successfully');

      this.router.navigateByUrl('books/index');
    });
  }
}
