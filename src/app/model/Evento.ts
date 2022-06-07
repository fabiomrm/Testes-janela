import { Postagem } from "./Postagem";

export class Evento {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  data: string;
  postagens: Postagem[];
}
