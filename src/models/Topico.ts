import { Autor } from "./Autor";

export class Topico{
    id: string;
    descricao: string;
    autor: Autor;
    created_at: Date;
    tags: string[];
    active: boolean;

    constructor(id: string, descricao: string, autor: Autor, created_at: Date, tags: string[], active: boolean){
        this.id = id;
        this.descricao = descricao;
        this.autor = autor;
        this.created_at = created_at;
        this.tags = tags;
        this.active = active;
    }
}