import { Topico } from "../../../../models/Topico"

interface TopicoItemCitacaoProps{
    topico: Topico;
}
export function TopicoItemCitacao({topico}: TopicoItemCitacaoProps){
    
    return (
        <div>
            <p>{topico.descricao}</p>
            <p>{topico.autor.nome}</p>
        </div>
    )
}