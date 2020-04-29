import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authSvc:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this method
    let newHeaders=req.headers;
    if (this.authSvc.token){
      newHeaders=newHeaders.append('Authorization',this.authSvc.token);
      const authReq=req.clone({headers: newHeaders});
      return next.handle(authReq);
    }
    return next.handle(req);
}
}
