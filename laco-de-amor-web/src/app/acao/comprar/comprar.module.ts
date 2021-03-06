import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprarRoutingModule } from './comprar-routing.module';
import { ComprarComponent } from './comprar.component';
import { ListResolve } from './list/list.resolve';
import { FormResolve } from './form/form.resolve';
import { FormNovoResolve } from './form/form-novo.resolve';
import { FiltroResolve } from './filtro/filtro.resolve';
import { ComprarCrudService } from './comprar.service';
import { ComprarFormService } from './comprar-form.service';
import { UnidadeMedidaModule } from '../../cadastro/unidade-medida/unidade-medida.module';
import { EventoTipoModule } from '../../cadastro/evento-tipo/evento-tipo.module';
import { ProdutoModeloModule } from '../../cadastro/produto-modelo/produto-modelo.module';
import { PessoaModule } from '../../cadastro/pessoa/pessoa.module';
import { EventoPessoaFuncaoModule } from '../evento-pessoa-funcao/evento-pessoa-funcao.module';
import { CotarModule } from '../cotar/cotar.module';


@NgModule({
  declarations: [ComprarComponent],
  imports: [
    CommonModule,
    ComprarRoutingModule,
    UnidadeMedidaModule,
    EventoTipoModule,
    ProdutoModeloModule,
    PessoaModule,
    EventoPessoaFuncaoModule,
    CotarModule,
  ],
  providers: [
    ComprarCrudService,
    ComprarFormService,
    ListResolve,
    FormResolve,
    FormNovoResolve,
    FiltroResolve
  ]
})
export class ComprarModule { }
