import { Topico } from "../../../../models/Topico";
import { TopicoItem } from "../TopicoItem";
import style from './style.module.css';

interface TopicoListaProps {
    topicos: Topico[];
}

export function TopicoLista({ topicos }: TopicoListaProps){
    return (
        <div className={style.topicoLista}>
            {
                topicos.map((topico:Topico) => {
                    return( 
                        <TopicoItem key={topico.id} topico={topico}/>
                    )
                })
            }
        </div>
    )
}