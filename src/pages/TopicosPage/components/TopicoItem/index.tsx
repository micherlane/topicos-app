import { Topico } from "../../../../models/Topico"
import { TopicoItemAvaliacao } from "../TopicoItemAvaliacao";
import { TopicoItemCitacao } from "../TopicoItemCitacao";
import style from './style.module.css';

interface TopicoItemProps{
    topico: Topico;
}

export function TopicoItem({ topico }: TopicoItemProps){
    return (
        <div className={style.topicoItem}> 
            <TopicoItemCitacao topico={topico}/>
            <TopicoItemAvaliacao topico={topico}/>
        </div>
    )
}