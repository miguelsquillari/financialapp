import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { coin } from '../../model/coin';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  private  baseUrl = "https://api.coingecko.com/api/v3/";
  private keyApi = "CG-2TAFX6t9Ua3m2gcBV25HEbD9";

  private http:HttpClient = inject(HttpClient);

  constructor() { }


  public  getCoinList():Observable<coin[]>{
    let header = new HttpHeaders().set("x-cg-demo-api-key", this.keyApi)
    return this.http.get<coin[]>("" + this.baseUrl +"coins/list",{headers:header});
  }


}
