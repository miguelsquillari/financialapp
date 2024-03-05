import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarcotizacionService {

  private urlBase = "https://api.bluelytics.com.ar/v2/latest";

  constructor(private http: HttpClient) { }


 public getCotizacion(): Observable<any>{
    return this.http.get(this.urlBase);
 }

}
