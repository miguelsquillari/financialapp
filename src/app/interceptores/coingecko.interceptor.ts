import { HttpInterceptorFn } from '@angular/common/http';

export const coingeckoInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
