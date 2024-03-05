import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvolutionService {

  constructor(private http: HttpClient) { }


  public getEvolutionBlueDolar(): Observable<any>{
    return this.http.get('https://api.bluelytics.com.ar/v2/evolution.json');
  }
}
