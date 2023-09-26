import { Topico } from "../../../../models/Topico";

interface TopicoItemAvaliacaoProps{
    topico: Topico;
}

export function TopicoItemAvaliacao({topico}: TopicoItemAvaliacaoProps){
    return (
        <div>
            <p>{topico.like}</p>
            <button>Like</button>
            <div>Barra de saldo</div>
            <p>{topico.deslike}</p>
            <button>Deslike</button>
        </div>
    )
}