export class Autor {
    id: string;
    nome: string;
    cidade: string;
    pais: string;

    constructor(id: string, nome: string, cidade: string, pais: string){
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
        this.pais = pais;
    }

    public static fromJSON(json: any): Autor {
        return new Autor(
          json.id,
          json.nome,
          json.cidade,
          json.pais
        );
    }
}