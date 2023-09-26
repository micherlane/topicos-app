import { Topico } from "../../../../models/Topico"
import style from './style.module.css';

interface TopicoItemCitacaoProps{
    topico: Topico;
}
export function TopicoItemCitacao({topico}: TopicoItemCitacaoProps){
    
    return (
        <div className={style.citacao}>
            <p className={style.descricao}>"{topico.descricao}"</p>
            <p>
               by <span className={style.nomeAutor}>{topico.autor.nome}</span>
            </p>
            
        </div>
    )
}