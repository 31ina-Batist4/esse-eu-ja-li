import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from './../model/response';
import { baseURL } from './../model/baseurl';
import { User } from './../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseURL}users`).pipe(take(1));
  }

  getUser(id: number) {
    return this.http.get<User>(baseURL + 'users/' + id).pipe(take(1));
  }

  patchPontos(pontos: number, id: number) {
    return this.http.patch<User>(baseURL + 'users/' + id, pontos).pipe(take(1));
  }

  getLivrosLidos(id: number) {
    return this.http
      .patch<User>(baseURL + 'users/' + id, {
        observer: 'body',
      })
      .pipe(take(1));
  }

  patchUser(id: number, user: any): Observable<any> {
    return this.http
      .patch<Response>(baseURL + 'users/' + id, user)
      .pipe(take(1));
  }

}
