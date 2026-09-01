type Vinculo =
  | 'aluno'
  | 'professor'
  | 'convidado';

export interface Pessoa {
  id: number;
  nome: string;
  curso: string;
  email: string;
  telefone?: string;   // opcional
  ativo: boolean;
  vinculo: Vinculo;
}
