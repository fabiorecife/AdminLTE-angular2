// user.service.ts
import { Injectable } from 'angular2/core';
//import { Http, Headers } from 'angular2/http';


@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(/*private http: Http*/) {
    //this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    /*
    return this.http
      .post(
        '/login',
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });
      */

/*
      var p = new Promise( function(resolve, reject) {
          localStorage.setItem('auth_token', JSON.stringify({ email, password }));
          this.loggedIn = true;
          resolve(true);
      } );
      */
      //localStorage.setItem('auth_token', JSON.stringify({ email, password }));
      this.loggedIn = true;
      return true;
  }

  logout() {
    //localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
