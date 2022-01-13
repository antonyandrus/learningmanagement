import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorService implements HttpInterceptor {

  constructor(public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    return next.handle(req).pipe(
      catchError((error) => {
        let handled: boolean = false;
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error('Error Event');
          } else {
            console.log(`error status ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401:
                this.router.navigateByUrl("/login");
                handled = true;
                break;
              case 403:
                this.router.navigateByUrl("/login");
                handled = true;
                break;
            }
          }
        } else {
          console.log('other errors');
        }

        if (handled) {
          return of(error);
        } else {
          return throwError(error);
        }
      })
    )
  }
}
