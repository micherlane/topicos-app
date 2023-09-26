export enum Tipo {
    UP,
    DOWN
}

export class Voto {
    id: string;
    topico_id: string;
    tipo: Tipo;
    created_at: Date;

    constructor(id: string, topico_id: string, tipo: Tipo, created_at: Date){
        this.id = id;
        this.topico_id = topico_id;
        this.tipo = tipo;
        this.created_at = created_at;
    }
}