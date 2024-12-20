import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const credentials = localStorage.getItem('credentials');
  
  if (credentials) {
    req = req.clone({
      setHeaders: {
        Authorization: `Basic ${credentials}`
      }
    });
  }
  
  return next(req);
};