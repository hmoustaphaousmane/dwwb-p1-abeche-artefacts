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

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/books').pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }

  create(book: BookInterface): Observable<any> {
    return this.httpClient
      .post(this.baseUrl + '/books', JSON.stringify(book), this.httpOption)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => error);
        })
      );
  }

  getSingle(id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/books/' + id).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }

  update(id: string, book: BookInterface): Observable<any> {
    return this.httpClient
      .put(this.baseUrl + '/books/' + id, JSON.stringify(book), this.httpOption)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => error);
        })
      );
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/books/' + id).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }
}
