import { Topico } from "../../../../models/Topico";
import { useTopico } from "../../../../providers/TopicosProvider";
import { TopicoItem } from "../TopicoItem";
import style from './style.module.css';



export function TopicoLista(){

    const topicos = useTopico();
    
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