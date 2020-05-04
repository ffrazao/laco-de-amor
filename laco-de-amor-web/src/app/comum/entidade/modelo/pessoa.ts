import { EntidadeId } from '../entidade-id';
import { Parceiro } from './parceiro';
import { Fornecedor } from './fornecedor';
import { Cliente } from './cliente';
import { PessoaEndereco } from './pessoa-endereco';

export class Pessoa implements EntidadeId {

    public id: number;
    public nome: string;
    public cliente: Cliente;
    public fornecedor: Fornecedor;
    public parceiro: Parceiro;
    public tipo: string;
    public cpfCnpj: string;
    public email: string;
    public contato1: string;
    public contato2: string;
    public contato3: string;
    public enderecoList: PessoaEndereco[] = [];

}