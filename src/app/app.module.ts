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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {PessoaService} from "./pessoas/pessoa.service";
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      LancamentosModule,
      PessoasModule,
      CoreModule,

      ToastyModule.forRoot(),
      ConfirmDialogModule,

      HttpClientModule,
      BrowserAnimationsModule,
      BrowserModule,

      AppRoutingModule

    ],
  providers: [
    LancamentoService,
    PessoaService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
