import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticateService } from 'src/app/auth/service/authenticate.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private authenticateService:AuthenticateService) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.authenticateService.getToken();
    return next.handle(httpRequest.clone({ setHeaders: { Authorization: `${jwt}`  } }));
  }
}
