import { Autor } from "./Autor";

export class Topico{
    id: string;
    descricao: string;
    autor: Autor;
    created_at: Date;
    tags: string[];
    active: boolean;
    like: number;
    deslike: number;

    constructor(id: string, descricao: string, autor: Autor, created_at: Date, tags: string[], active: boolean, like?: number, deslike?: number){
        this.id = id;
        this.descricao = descricao;
        this.autor = autor;
        this.created_at = created_at;
        this.tags = tags;
        this.active = active;
        like ? this.like = like: this.like = 0;
        deslike ? this.deslike = deslike : this.deslike = 0;
    }

    public darLike(): number {
        const likes = this.like += 1;
        return likes;
    }
    
    public darDeslike(): number {
        let deslikes = this.deslike += 1;
        return deslikes;
    }

    public static fromJSON(json: any): Topico {
        return new Topico(
          json.id,
          json.descricao,
          Autor.fromJSON(json.autor), // Convertendo o objeto Autor também
          new Date(json.created_at),
          json.tags,
          json.active,
          json.like,
          json.deslike
        );
    }
}