import {  useReducer } from "react";
import { Topico } from "../../../../models/Topico";
import { BarraProgresso } from "../BarraProgresso";
import style from './style.module.css';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { putAtualizarTopico } from "../../../../services/api";
import { ActionType, State, topicoReducer } from "../../../../reducers/topicoReducer";
import {  ActionTypePorcentagem, calcularPorcentagemLikes, reducerPorcentagem } from "../../../../reducers/porcentagemReducer";

interface TopicoItemAvaliacaoProps{
    topico: Topico;
}


export function TopicoItemAvaliacao({topico}: TopicoItemAvaliacaoProps){

    const [topicoState, dispatchTopico] = useReducer(topicoReducer, { topico } as State);

    const initialStatePorcentagem = { porcentagemLikes: calcularPorcentagemLikes(topico.like, topico.deslike) };
    
    const [porcentagemLikesState, dispatchPorcentagemLikes] = useReducer(reducerPorcentagem, initialStatePorcentagem);


    const atualizarTopico = async (updatedTopico: Topico): Promise<boolean> => {
        try {
            await putAtualizarTopico(updatedTopico);
            return true;
        } catch (error) {
           return false;
        }
    }

    const desfazerAtualizacao = (type: ActionType, topico: Topico) => {
        const updatedLike = type === ActionType.LIKE ? topico.like - 1 : topico.like;
        const updatedDeslike = type === ActionType.DESLIKE ? topico.deslike - 1 : topico.deslike;

        dispatchTopico({
            type,
            payload: {
                topico: {
                    ...topicoState.topico,
                    like: updatedLike,
                    deslike: updatedDeslike,
                },
            },
        });

        dispatchPorcentagemLikes({
            type: ActionTypePorcentagem.CHANGED,
            payload: {
                like: updatedLike,
                deslike: updatedDeslike,
            }
        });
    }

    const handleLikeOrDeslike = async (type: ActionType) => {
        const updatedLike = type === ActionType.LIKE ? topicoState.topico.like + 1 : topicoState.topico.like;
        const updatedDeslike = type === ActionType.DESLIKE ? topicoState.topico.deslike + 1 : topicoState.topico.deslike;

        dispatchTopico({
            type,
            payload: {
                topico: {
                    ...topicoState.topico,
                    like: updatedLike,
                    deslike: updatedDeslike,
                },
            },
        });

        dispatchPorcentagemLikes({
            type: ActionTypePorcentagem.CHANGED,
            payload: {
                like: updatedLike,
                deslike: updatedDeslike,
            }
        });

        const updatedTopico = { ...topicoState.topico, like: updatedLike, deslike: updatedDeslike };
        const atualizouTopico = await atualizarTopico(updatedTopico);

        if (!atualizouTopico) {
            desfazerAtualizacao(type, updatedTopico);
        }
    }

    return (
        <div className={style.avaliacao}>
            <div className={style.dadosNumeros}>{topicoState.topico.like}</div>
            <button onClick={() => handleLikeOrDeslike(ActionType.LIKE)}><AiFillLike size={20}/></button>

            <BarraProgresso porcentagem={porcentagemLikesState.porcentagemLikes}/>

            <button onClick={() => handleLikeOrDeslike(ActionType.DESLIKE)}><AiFillDislike size={20}/></button>
            <div className={style.dadosNumeros}>{topicoState.topico.deslike}</div>
        </div>
    )
}