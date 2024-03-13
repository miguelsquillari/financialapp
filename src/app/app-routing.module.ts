import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockSearchComponent } from './components/stocks/stock-search/stock-search.component';
import { DolarblueEvolutionComponent } from './components/dolar/dolarblue-evelution/dolarblue-evolution.component';
import { DolarcotizacionComponent } from './components/dolar/dolarcotizacion/dolarcotizacion.component';
import { CotizacionCriptoComponent } from './components/cripto/cotizacion-cripto/cotizacion-cripto.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'stocks' , component: StockSearchComponent},
  {path:'evolution', component: DolarblueEvolutionComponent},
  {path:'dolarcotizacion', component: DolarcotizacionComponent},
  {path: 'criptocotizacion', component: CotizacionCriptoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
