import { Topico } from "../../../../models/Topico"
import { TopicoItemAvaliacao } from "../TopicoItemAvaliacao";
import { TopicoItemCitacao } from "../TopicoItemCitacao";

interface TopicoItemProps{
    topico: Topico;
}

export function TopicoItem({ topico }: TopicoItemProps){
    return (
        <div>
            <TopicoItemCitacao topico={topico}/>
            <TopicoItemAvaliacao topico={topico}/>
        </div>
    )
}