import { Component } from '@angular/core';
import { EvolutionService } from '../../../services/bluelytics/dolar-evolucion/evolution.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dolarblue-evelution',
  templateUrl: './dolarblue-evelution.component.html',
  styleUrl: './dolarblue-evelution.component.css'
})
export class DolarblueEvolutionComponent {

  constructor(private dbEvo:EvolutionService){
    this.getEvolutionDolarBlue();
  }


  /**
   * Paginar los resultados ...
   */
  public getEvolutionDolarBlue():void{
    this.dbEvo.getEvolutionBlueDolar().subscribe({
      next:(data:any) => {
          console.log("Data received", data);
        },
        error: e =>{
          console.log("Error Data", e);
        },
        complete:  () =>
          console.log("Finaliza" )
      });
  }


}
