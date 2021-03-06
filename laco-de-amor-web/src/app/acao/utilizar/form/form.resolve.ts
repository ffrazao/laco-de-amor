import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';

import { Utilizar } from '../../../comum/modelo/entidade/utilizar';
import { UtilizarCrudService } from '../utilizar.service';
import { UnidadeMedidaCrudService } from '../../../cadastro/unidade-medida/unidade-medida.service';
import { EventoPessoaFuncaoCrudService } from '../../evento-pessoa-funcao/evento-pessoa-funcao.service';

@Injectable()
export class FormResolve implements Resolve<Utilizar> {

    constructor(
        private _service: UtilizarCrudService,
        private _unidadeMedidaService: UnidadeMedidaCrudService,
        private _eventoPessoaFuncaoService: EventoPessoaFuncaoCrudService,
    ) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): any {
        this._service.acao = 'Visualizar';
        this._eventoPessoaFuncaoService.filtro.codigo = 'PARCEIRO';
        return {
            principal: this._service.restore(route.params.id),
            apoio: [
                {unidadeMedidaList: this._unidadeMedidaService.filtrar()},
                {eventoPessoaFuncao: this._eventoPessoaFuncaoService.filtrar()}
            ]
        };
    }

}
