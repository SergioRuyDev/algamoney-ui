import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { CoreModule } from './core/core.module';
import { LancamentoService } from './lancamentos/lancamento.service';

import { ToastyModule } from 'ng2-toasty';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      HttpClientModule,
      LancamentosModule,
      PessoasModule,
      CoreModule,
      ToastyModule.forRoot(),

      BrowserAnimationsModule,
      BrowserModule,

      AppRoutingModule

    ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
