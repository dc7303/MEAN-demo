import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../interface/userInfo';
import { NODE_URL } from '../../constants/urls';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  signIn(user: User): Observable<any> {
    return this.http.post<any>(`${NODE_URL}/auth/signIn`, user);
  }

  signUp(user: User): Observable<any> {
    return this.http.post<any>(`${NODE_URL}/auth/signUp`, user, {responseType: 'json'});
  }
}
