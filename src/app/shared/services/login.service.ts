import { take } from 'rxjs';
import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../model/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  auth(user: User){
    return this.http.post(baseURL + 'users', user).pipe(take(1));
  }

  createUser(user: User) {
    return this.http.post(baseURL + 'users', user).pipe(take(1));
  }

}
