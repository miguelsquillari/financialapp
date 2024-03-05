import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarCotizacionService {

  private dolarApi:string = 'https://dolarapi.com/v1/dolares';

  constructor(private http:HttpClient) { }


  public getDolarcotizacion(): Observable<any>{
    return this.http.get(this.dolarApi);
  }

}
