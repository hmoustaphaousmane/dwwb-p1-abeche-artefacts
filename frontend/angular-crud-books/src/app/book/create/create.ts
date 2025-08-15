import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Component } from '@angular/core';
import { BookService } from '../book-service';
import { Router } from '@angular/router';
import { books } from '../books';

@Component({
  selector: 'app-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
  form!: FormGroup;

  constructor(public bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      publicationYear: new FormControl('', [Validators.required])
    })
  }

  get f() {
    return this.form.controls;
  }

  handleSubmit() {
    console.log(this.form.value);

    this.bookService.create(this.form.value).subscribe((res: any) => {
      console.log("Book added successfully.");

      this.router.navigateByUrl('book');
    })
  }
}
