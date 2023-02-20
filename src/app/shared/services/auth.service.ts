import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { UserAuth } from '../model/userAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth = false;
 userEmail = '';
  userLogger = new EventEmitter<boolean>();
private readonly API = 'http://localhost:3000/'
  constructor(private router: Router, private http: HttpClient) { }

  auth(user: UserAuth){
    if(user.email === 'elinabatista@gmail.com' &&
       user.password === 'Ln!12345' ) {
        this.userEmail = user.email;
      this.userAuth = true;
      this.userLogger.emit(true);
      this.router.navigate(['/'])
    } else {
      this.userAuth = false;
      this.userLogger.emit(false);
    }
  }
  getUser(id: string) {
   return this.http.get(this.API + 'users/'+ id).pipe(take(1));
  }

}
