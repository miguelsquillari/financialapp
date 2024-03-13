import { Component, OnInit, inject } from '@angular/core';

import { DolarCotizacionService } from '../../services/dolarapi/dolar-cotizacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  private cotizacionDolar = inject(DolarCotizacionService);
  public dolarOficialXVar:number = 0;
  public dolarOficial:number = 0;


  public dolarBlueXVar:number = 0;
  public dolarBlue:number = 0;

  public dolarCriptoXVar:number = 0;
  public dolarCripto:number = 0;

  public mercadoXVar:number = 0;
  public mercadoValor:number = 0;


  ngOnInit(): void {
    this.cotizacionDolar.getDolarcotizacion().subscribe(
        (data:any)=>{
          this.dolarBlue = data[1].venta;
          this.dolarOficial = data[0].venta;

    }
    );
  }







}
