import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './nav/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptiorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  /** HttpInterceptor interface 구현 메소드 */
  /** HttpHandler는 여러개의 interceptor가 존재할때 브릿지 역할을 해준다. */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = this.auth.getToken();

    /** reqeust headers에 Token 추가 */
    const cloneRequest = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    /** 원본 Request대신 clone한 Request 객체를 다음 미들웨어 체인으로 전달. 없는 경우 Observable을 반환하고 종료. */
    return next.handle(cloneRequest);
  }
}
