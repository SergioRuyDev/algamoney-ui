import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      LancamentosModule,
      PessoasModule,
      CoreModule,

      BrowserAnimationsModule,
      BrowserModule,

      AppRoutingModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
