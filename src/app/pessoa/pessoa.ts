import { Component } from '@angular/core';
import { Pessoa as PessoaModel }
  from './pessoa.model';

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
      vinculo: 'convidado', ativo: true }
  ];
}