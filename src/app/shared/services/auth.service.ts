import { User } from 'src/app/shared/model/user';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private autenticado: boolean = false;
  user: User;
  emailUser: string;
  userLogger = new EventEmitter<boolean>();
  private readonly API = 'http://localhost:3000/users';

  constructor(private router: Router, private http: HttpClient) {}

  auth(user: User): Observable<boolean> | boolean {
    if(user.email === 'elinabatista@gmail.com' &&
       user.password === 'Ln!12345') {
       this.autenticado = true;
       this.userLogger.emit(true);
       this.router.navigate(['/'])
       return true;
       } else {
          this.autenticado = false;
          this.userLogger.emit(false);
          return false;
      }
  }
  authUser() {
    return this.userLogger;
  }

  setId(id: string) {
    localStorage.setItem('id', id);
  }

  getUser() {
    const id = localStorage.getItem('id');
    if (id) {
      return id;
    }
    return null;
  }
}
