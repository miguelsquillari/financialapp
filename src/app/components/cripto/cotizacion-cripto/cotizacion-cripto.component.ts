import { Component, OnInit, inject } from '@angular/core';
import { CriptoService } from '../../../services/cripto/cripto.service';
import { Observable, Subscription, map } from 'rxjs';
import { coin } from '../../../model/coin';


@Component({
  selector: 'app-cotizacion-cripto',
  templateUrl: './cotizacion-cripto.component.html',
  styleUrl: './cotizacion-cripto.component.css'
})
export class CotizacionCriptoComponent implements OnInit{

  private cripsoService:CriptoService = inject(CriptoService);

  private cripsoServiceSubs:Subscription | undefined;
  public criptoList$:Observable<coin[]> | undefined;

  public cantItems:number = 0;

  public dataCoin!:coin[] ;
  public _dataCoin!:coin[] ;
  public cantItemsXPage :number=10;
  cantPages :number=0;
  public actPages :number=0;

  private strip(bandName: string) {
    return bandName;
  }


  ngOnInit(): void {
   this.cripsoServiceSubs = this.cripsoService.getCoinList()
   .subscribe(
       (data:coin[]) =>{
        this.dataCoin = data,
        this._dataCoin = data,
        this.cantPages = Math.ceil(this.dataCoin!.length/this.cantItemsXPage);
        this.dataCoin.sort((a, b) => a.name.localeCompare(b.name));
        this.cantItems = this.dataCoin.length;
      }
   );

  }


  public searchCoin(event:Event){
//    let filterValue = event.target.value.toLowerCase();
  let filterValue =  (event.target as HTMLInputElement).value.toLowerCase();

   // console.log("filter values: " , filterValue.length);
   /* console.log("filter values 2:" , filterValue);*/

    if(filterValue.length == 0 || filterValue == ""){
      this.dataCoin = this._dataCoin;
    }else{
      this.dataCoin = this.dataCoin!.filter(item => item.name.toLowerCase().includes(filterValue))
    }
    this.cantItems = this.dataCoin.length;
    //this.pageChanged(1);
  }

  prePage(){

  }


  nextPage(){

  }

}



