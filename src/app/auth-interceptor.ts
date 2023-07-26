import { HttpInterceptor,
         HttpRequest  , 
         HttpHandler    
        } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any> , next : HttpHandler ) {

    console.log('Request is in its way');
        //  return Result

    return next.handle(req);

        
    }
    
}

