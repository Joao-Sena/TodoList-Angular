import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,) { }

  login() {
    const url = 'http://localhost:5000/login/';

    return this.http.post(url, { "login":"letscode", "senha":"lets@123"});
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
