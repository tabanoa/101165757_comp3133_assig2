import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    this.loggedIn = username == 'test' && password == 'test';
    console.log(username, password);
    localStorage.setItem('loggedIn', this.loggedIn ? 'true' : 'false');
    return of(this.loggedIn).pipe(
      delay(500),
      tap((res) => {
        console.log('authed?:', res);
      })
    );
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }

  isValid(): boolean {
    let data = localStorage.getItem('loggedIn');

    if (data != null && data == 'true') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    return this.loggedIn;
  }
}