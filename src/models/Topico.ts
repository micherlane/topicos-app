import { Autor } from "./Autor";

export class Topico{
    id: string;
    descricao: string;
    autor: Autor;
    created_at: Date;
    tags: string[];
    active: boolean;
    like: number = 0;
    deslike: number = 0;

    constructor(id: string, descricao: string, autor: Autor, created_at: Date, tags: string[], active: boolean){
        this.id = id;
        this.descricao = descricao;
        this.autor = autor;
        this.created_at = created_at;
        this.tags = tags;
        this.active = active;
    }

    public darLike(): number {
        const likes = this.like += 1;
        return likes;
    }
    
    public darDeslike(): number {
        let deslikes = this.deslike += 1;
        return deslikes;
    }
}