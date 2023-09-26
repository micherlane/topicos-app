import { Topico } from "../../../../models/Topico"

interface TopicoItemProps{
    topico: Topico;
}

export function TopicoItem({ topico }: TopicoItemProps){
    return (
        <div>
            <div>
                <p>{topico.descricao}</p>
                <p>{topico.autor.nome}</p>
            </div>
            <div>
            <p>{topico.like}</p>
                <div>Barra de saldo</div>
                <p>{topico.deslike}</p>
            </div>
        </div>
    )
}