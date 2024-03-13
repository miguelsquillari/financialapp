import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { StockSearchComponent } from './components/stocks/stock-search/stock-search.component';
import { MenuComponent } from './components/main/menu/menu.component';
import { DirCurrencyFormatterDirective } from './directives/dir-currency-formatter.directive';
import { DolarblueEvolutionComponent } from './components/dolar/dolarblue-evelution/dolarblue-evolution.component';
import { DolarcotizacionComponent } from './components/dolar/dolarcotizacion/dolarcotizacion.component';
import { CotizacionCriptoComponent } from './components/cripto/cotizacion-cripto/cotizacion-cripto.component';
import { HomeComponent } from './components/home/home.component';
import { CriptoListComponent } from './components/cripto/cripto-list/cripto-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StockSearchComponent,
    MenuComponent,
    DirCurrencyFormatterDirective,
    DolarblueEvolutionComponent,
    DolarcotizacionComponent,
    CotizacionCriptoComponent,
    HomeComponent, CriptoListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
