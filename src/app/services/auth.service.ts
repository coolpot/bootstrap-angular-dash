import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              ) { }


  login(data) {
    return this.http.post(environment.api +  '/login', data);
  }

  register(data) {
    return this.http.post(environment.api +  '/register', data);
  }

  user() {
    return this.http.get(environment.api +  '/user');
  }

  updateInfo(data) {
    return this.http.put(environment.api +  '/users/info', data);
  }

  updatePassword(data) {
    return this.http.put(environment.api +  '/users/password', data);
  }
}
