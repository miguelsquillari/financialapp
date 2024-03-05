import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockSearchComponent } from './components/stocks/stock-search/stock-search.component';
import { DolarblueEvolutionComponent } from './components/dolar/dolarblue-evelution/dolarblue-evolution.component';
import { DolarcotizacionComponent } from './components/dolar/dolarcotizacion/dolarcotizacion.component';
import { CotizacionCriptoComponent } from './components/cripto/cotizacion-cripto/cotizacion-cripto.component';

const routes: Routes = [
    {path:'stocks' , component: StockSearchComponent},
    {path:'evolution', component: DolarblueEvolutionComponent},
    {path:'dolarcotizacion', component: DolarcotizacionComponent},
    {path: 'cripto', component: CotizacionCriptoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
