import { Component, OnInit, inject } from '@angular/core';

import { DolarCotizacionService } from '../../services/dolarapi/dolar-cotizacion.service';
import { CriptoService } from '../../services/cripto/cripto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  private cotizacionDolar = inject(DolarCotizacionService);
  private coinPriceService = inject(CriptoService);

  public dolarOficialXVar:number = 0;
  public dolarOficial:number = 0;


  public dolarBlueXVar:number = 0;
  public dolarBlue:number = 0;

  public dolarCriptoXVar:number = 0;
  public valorCripto:number = 0;

  public mercadoXVar:number = 0;
  public mercadoValor:number = 0;


  ngOnInit(): void {
    this.cotizacionDolar.getDolarcotizacion().subscribe(
        (data:any)=>{
          this.dolarBlue = data[1].venta;
          this.dolarOficial = data[0].venta;
    });

    this.coinPriceService.getCoinPricebyId("").subscribe(
      (data: any) => {
          console.log(" - coins ", data.bitcoin.usd);
          this.valorCripto = data.bitcoin.usd;
      },
      error => {
         console.error('Error al cotizacion de criptomonedas', error);}
    );
  }







}
