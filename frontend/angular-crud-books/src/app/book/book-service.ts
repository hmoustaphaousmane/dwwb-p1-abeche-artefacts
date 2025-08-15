import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { BookInterface } from './book-interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'http://localhost:8000';

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/books').pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }

  create(book: BookInterface): Observable<any> {
    return this.httpClient.post(
      this.baseUrl + '/books',
      JSON.stringify(book),
      this.httpOption)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => error);
        })
      );
  }
}
