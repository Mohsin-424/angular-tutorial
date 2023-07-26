import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpEventType,
} from '@angular/common/http';

import { tap } from 'rxjs/operators';


export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Outgoing Request');
    console.log(req.url);
    console.log(req.headers);

    return next.handle(req).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          // Fix: Accessed HttpEventType correctly
          console.log('Incoming Response');
          console.log(event.body);
        }
      })
    );
  }
}
