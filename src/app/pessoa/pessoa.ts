import { Component } from '@angular/core';
import { Pessoa as PessoaModel } from './pessoa.model';
import { validarPessoa } from './pessoa.validacao';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class Pessoa {
 pessoa = new Pessoa();

  pessoas: PessoaModel[] = [
    { id: 1, nome: '',
      curso: 'Eng. Computação',
      email: 'ana@exemplo.com',
      vinculo: 'aluno', ativo: true },

    { id: 2, nome: 'Brena Barreto',
      curso: 'Eng. Computação',
      email: 'brunoexemplo.com',
      vinculo: 'professor', ativo: true },

      { id: 3, nome: 'Gileno Costa',
      curso: 'ADS',
      email: 'daniel@exemplo.com',
      vinculo: 'aluno', ativo: true },

    { id: 4, nome: 'Karoline Dias',
      curso: 'ADS',
      email: 'carla@exemplo.com',
      vinculo: 'convidado', ativo: true },

      { id: 5, nome: 'Eduardo 123',
      curso: 'Medicina',
      email: 'eduardoexemplo.com',
      vinculo: 'aluno', ativo: true }
  ];

  resultados = this.pessoas.map(pessoa => ({
  pessoa,
  erros: validarPessoa(pessoa)
}));
}