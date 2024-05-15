import { HttpInterceptorFn } from '@angular/common/http';
import { environment} from '../environment'

export const coingeckoInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.includes('coingecko')){
    let header_req = req.clone();
    header_req.headers.set("x-cg-demo-api-key", environment.coingeckoApiKey);
  }

  return next(req);
};
