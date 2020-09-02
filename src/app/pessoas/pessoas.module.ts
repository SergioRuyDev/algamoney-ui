import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import {PessoaGridComponent} from "./pessoa-grid/pessoa-grid.component";
import {PessoaPesquisaComponent} from "./pessoa-pesquisa/pessoa-pesquisa.component";



@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoaGridComponent,
    PessoaPesquisaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PessoasModule { }
