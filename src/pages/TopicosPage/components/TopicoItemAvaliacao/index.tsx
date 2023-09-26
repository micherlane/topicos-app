import { useState } from "react";
import { Topico } from "../../../../models/Topico";
interface TopicoItemAvaliacaoProps{
    topico: Topico;
}

export function TopicoItemAvaliacao({topico}: TopicoItemAvaliacaoProps){
    const [likes, setLikes] = useState(topico.like);
    const [deslikes, setDeslike] = useState(topico.deslike);
    
    const handleDarLike = () => {
        const like = topico.darLike();
        console.log(topico);
        setLikes(like);
    }

    const handleDarDeslike = () => {
        const deslike = topico.darDeslike();
        setDeslike(deslike);
    }

    return (
        <div>
            <p>{likes}</p>
            <button onClick={handleDarLike}>Like</button>
            <div>Barra de saldo</div>
            <p>{deslikes}</p>
            <button onClick={handleDarDeslike}>Deslike</button>
        </div>
    )
}