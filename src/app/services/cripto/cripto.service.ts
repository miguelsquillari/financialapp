import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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


  public getCoinPricebyId(idCoin:string){

    /*

    url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_vol=false&precision=6',

    ************************************************
    url: 'https://api.coingecko.com/api/v3/simple/price?
    ids=bitcoin&vs_currencies=usd&precision=5',
    */

    let header = new HttpHeaders().set("x-cg-demo-api-key", this.keyApi)
    let params = new HttpParams()
    .append("vs_currencies", "usd")
    .append("ids", "bitcoin")
    .append("precision","6");


    return this.http.get<coin[]>("" + this.baseUrl +"simple/price", {params:params, headers:header});

  }


  /**
   * https://docs.coingecko.com/v3.0.1/reference/coins-markets
   *
   */
  public getCoinsListwithMarketData(){

  }


}
