import { useState } from "react";
import { Topico } from "../../../../models/Topico";
import { BarraProgresso } from "../BarraProgresso";
interface TopicoItemAvaliacaoProps{
    topico: Topico;
}

enum Tipo {
    UP,
    DOWN
}

export function TopicoItemAvaliacao({topico}: TopicoItemAvaliacaoProps){
    const [likes, setLikes] = useState(topico.like);
    const [deslikes, setDeslike] = useState(topico.deslike);
    const [porcentagemLike, setPorcentagemLike] = useState(0);

    // Adiciona likes ou deslikes com base no tipo informado;
    const handleLike = (tipo: Tipo) => {

        if(tipo === Tipo.UP){
            const like = topico.darLike();
            setLikes(like);
        } else {
            const deslike = topico.darDeslike();
            setDeslike(deslike);
        }
        

        atualizarBarraProgresso();
    }

    // Atualiza a barra de progresso com base na porcentagem
    const atualizarBarraProgresso = () => {
        const porcentagem = calcularPorcentagemLikes();
        setPorcentagemLike(porcentagem);
    }

    const calcularPorcentagemLikes = () => {
        const total = topico.like + topico.deslike;
        const porcentagem = topico.like / total * 100;

        return porcentagem;
    }

    return (
        <div>
            <p>{likes}</p>
            <button onClick={() => handleLike(Tipo.UP)}>Like</button>
            <BarraProgresso porcentagem={porcentagemLike}/>
            <p>{deslikes}</p>
            <button onClick={() => handleLike(Tipo.DOWN)}>Deslike</button>
        </div>
    )
}