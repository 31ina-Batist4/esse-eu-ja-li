import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Livro } from './../model/livro'
import { baseURL } from './../model/baseurl';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livros: Livro[];

  constructor(private http: HttpClient) { }


getBook(): Observable<Livro[]>{
  return this.http.get<Livro[]>(`${baseURL}books`).pipe(take(1))
}

}
