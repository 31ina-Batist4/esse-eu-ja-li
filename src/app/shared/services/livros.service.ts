import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Livro } from './../model/livro'
import { baseURL } from './../model/baseurl';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livros: Livro[];

  constructor(private http: HttpClient) { }

getBooks(): Observable<Livro[]>{
  return this.http.get<Livro[]>(`${baseURL}books`).pipe(take(1));
}
getBook(id: string): Observable<Livro>{
  return this.http.get<Livro>(`${baseURL}books/${id}`).pipe(take(1));
}
getOne(): Observable<Livro[]>{
  return this.http.get<Livro[]>(`${baseURL}books`).pipe(take(1));
}
getBookId(): Observable<string[] | any> {
  return this.getBooks().pipe(map(books => books.map(book => book.id)))
  .pipe(take(1));
}

}
