import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NODE_URL } from '../constants/urls';
import { Board } from '../interface/board';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  boardInsert(board: Board): Observable<any> {
    return this.http.post<any>(`${NODE_URL}/board/insert`, board);
  }
}
