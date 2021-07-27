import { Injectable } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string;
  idt:string;

  constructor(private auth:AuthService) {this.getToken()}

  getToken(){
    this.auth.idTokenClaims$.subscribe(claims => {
      this.idt=claims.__raw;
    }  );
    
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let authReq = request;
    this.auth.idTokenClaims$.subscribe(claims => {
      this.idt=claims.__raw;
      
      
    })
    if(this.idt!= null)
      {
        authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY,`Bearer ${this.idt}` ) });
      }
    return next.handle(authReq);
  }
  
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];


