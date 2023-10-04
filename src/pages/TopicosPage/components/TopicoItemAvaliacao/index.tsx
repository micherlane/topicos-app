import { useEffect, useState } from "react";
import { Topico } from "../../../../models/Topico";
import { BarraProgresso } from "../BarraProgresso";
import style from './style.module.css';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { putAtualizarTopico } from "../../../../services/api";

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

    useEffect(() => {
        atualizarBarraProgresso();
    }, []);

    // Adiciona likes ou deslikes com base no tipo informado;
    const handleLike = async (tipo: Tipo) => {

        if(tipo === Tipo.UP){
            const like = topico.darLike();
            setLikes(like);
        } else {
            const deslike = topico.darDeslike();
            setDeslike(deslike);
        }
        
        //api.put(`/topicos/${topico.id}`, topico);

        await putAtualizarTopico(topico);
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
        <div className={style.avaliacao}>
            <div className={style.dadosNumeros}>{likes}</div>
            <button onClick={() => handleLike(Tipo.UP)}><AiFillLike size={20}/></button>

            <BarraProgresso porcentagem={porcentagemLike}/>

            <button onClick={() => handleLike(Tipo.DOWN)}><AiFillDislike size={20}/></button>
            <div className={style.dadosNumeros}>{deslikes}</div>
        </div>
    )
}