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
  public cantItemsXPage :number=10;
  public cantPages :number=0;

  private strip(bandName: string) {
    return bandName;
  }


  ngOnInit(): void {
    /*this.criptoList$ = this.cripsoService.getCoinList().pipe(
      map( (data)=>{
        data.sort(a,b) => {
          return a.value < b.value ?  -1 : 1;
        }
      });
      return data;

      )
    );
*/
   this.cripsoServiceSubs = this.cripsoService.getCoinList().subscribe(
       (data:coin[]) =>{  this.dataCoin = data,
       this.cantPages = Math.ceil(this.dataCoin!.length/this.cantItemsXPage);
       this.dataCoin.sort((a, b) => a.name.localeCompare(b.name));
       this.cantItems = this.dataCoin.length;
      }

   );
   //this.dataCoin = this.dataCoin.sort((a, b) => a.name.localeCompare(b.name));

  }

  public searchCoin(event:any){
    const filterValue = event.target.value.toLowerCase();

    if(filterValue == ""){
      this.dataCoin = this.cantItems > 0? this.dataCoin : [];
    }else{
      this.dataCoin = this.dataCoin!.filter(item => item.name.toLowerCase().includes(filterValue))
    }
    this.cantItems = this.dataCoin.length;
    //this.pageChanged(1);
  }




}



