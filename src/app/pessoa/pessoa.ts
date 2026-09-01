import { Component } from '@angular/core';
import { Pessoa as PessoaModel } from './pessoa.model';
import { validarPessoa } from './pessoa.validacao';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class Pessoa {
  pessoas: PessoaModel[] = [
    { id: 1, nome: 'Ana Souza',
      curso: 'Eng. Computação',
      email: 'ana@exemplo.com',
      vinculo: 'aluno', ativo: true },

    { id: 2, nome: 'Bruno Lima',
      curso: 'Eng. Computação',
      email: 'bruno@exemplo.com',
      vinculo: 'professor', ativo: true },

      { id: 3, nome: 'Daniel Gomes',
      curso: 'ADS',
      email: 'daniel@exemplo.com',
      vinculo: 'aluno', ativo: true },

    { id: 4, nome: 'Carla Dias',
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