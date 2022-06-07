import { Postagem } from "./Postagem";

export class Usuario {
  id: number;
  nome: string;
  idade: number;
  tipo: string;
  email: string;
  senha: string;
  habilidades: string;
  avaliacao: number;
  postagem: Postagem[];

}
