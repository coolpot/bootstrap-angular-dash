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
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(environment.api +  '/user', {
      headers: headers
    });
  }
}
