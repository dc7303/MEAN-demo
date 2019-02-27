import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NODE_URL } from '../constants/urls';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
  params: new HttpParams()
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  userFindAll(): Observable<object> {
    return this.http.get<Observable<object>>(`${NODE_URL}/auth/userAll`, httpOptions);
  }

  userDelete(userId: string): any {
    const options = httpOptions;
    options.params = options.params.set('userId', userId);
    const result = this.http.get(`${NODE_URL}/auth/userDelete`,  options);
    console.log(result);
    return result

  }
}
