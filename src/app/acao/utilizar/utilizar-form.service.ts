import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventoFormService } from '../evento/evento-form.service';
import { EventoProduto } from 'src/app/comum/entidade/modelo/evento-produto';
import { Utilizar } from 'src/app/comum/entidade/modelo/utilizar';
import { Evento } from 'src/app/comum/entidade/modelo/evento';
import { Produto } from 'src/app/comum/entidade/modelo/produto';

@Injectable()
export class UtilizarFormService extends EventoFormService {

  private _eventoPessoaFuncaoService;

  constructor(
    protected _formBuilder: FormBuilder,
  ) {
    super(_formBuilder);
  }

  public criarFormulario(entidade: Utilizar): FormGroup {
    let result = super.criarFormulario(entidade as Evento);
    result.controls.eventoPessoaList.clearValidators();
    result.controls.eventoPessoaList.updateValueAndValidity();

    result['produtoList'] = [];
    if (result.controls.eventoProdutoList.value) {
      result.controls.eventoProdutoList.value.forEach(ep => {
        this.adicionaProdutoList(result, ep.produto);
      });
    }

    return result;
  }

  public adicionaProdutoList(frm: FormGroup, prod: Produto) {
    if (!frm['produtoList']) {
      frm['produtoList'] = [];
    }
    let existe = false;
    for (let i = 0; i < frm['produtoList'].length; i++) {
      if (frm['produtoList'][i].produtoModelo.id === prod.produtoModelo.id) {
        existe = true;
        break;
      }
    }
    if (!existe) {
      frm['produtoList'].push(prod);
    }
  }

  public criarFormularioEventoProduto(entidade: EventoProduto, cotacao: boolean = false): FormGroup {
    let result = super.criarFormularioEventoProduto(entidade, true);
    result.controls.eventoPessoa.setValidators([Validators.required]);
    result.controls.valorUnitario.clearValidators();
    result.controls.valorTotal.clearValidators();
    result.controls.valorUnitario.updateValueAndValidity();
    result.controls.valorTotal.updateValueAndValidity();
    return result;
  }

}
