import { Topico } from "../../../../models/Topico";
import { TopicoItem } from "../TopicoItem";

interface TopicoListaProps {
    topicos: Topico[];
}

export function TopicoLista({ topicos }: TopicoListaProps){
    return (
        <>
            {
                topicos.map((topico:Topico) => {
                    return( 
                        <TopicoItem key={topico.id} topico={topico}/>
                    )
                })
            }
        </>
    )
}