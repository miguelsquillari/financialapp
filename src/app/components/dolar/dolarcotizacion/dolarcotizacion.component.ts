import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { DolarCotizacionService } from '../../../services/dolarapi/dolar-cotizacion.service';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-dolarcotizacion',
  templateUrl: './dolarcotizacion.component.html',
  styleUrl: './dolarcotizacion.component.css'
})
export class DolarcotizacionComponent implements OnDestroy, OnInit{

  public apiDolar$!:Observable<any>;

  constructor(private dolarApi:DolarCotizacionService){

  }
  ngOnInit(): void {
    this.getcotizacionDolar();
  }


  protected getcotizacionDolar(): void{
    this.apiDolar$ =  this.dolarApi.getDolarcotizacion()
    .pipe(
      map(data=>{
          return data.map((item:any) =>
              {
                if (item.casa == 'contadoconliqui') item.casa = 'CCL';
                return item;
              }

            )
      }
     )
    );
  }


  ngOnDestroy(): void {


  }

}
