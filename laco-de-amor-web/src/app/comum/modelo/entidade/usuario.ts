import { EntidadeId } from '../entidade-id';
import { Pessoa } from './pessoa';
import { Confirmacao } from '../dominio/confirmacao';

export class Usuario implements EntidadeId {

    public id: number;
    public login: string;
    public senha: string;
    public perfil: string;
    public pessoa: Pessoa;
    public ativo: Confirmacao;

}