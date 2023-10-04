import {  useReducer } from "react";
import { Topico } from "../../../../models/Topico";
import { BarraProgresso } from "../BarraProgresso";
import style from './style.module.css';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { putAtualizarTopico } from "../../../../services/api";
import { ActionType, State, calcularPorcentagemLikes, reducer } from "../../../../reducers/likes_deslikes_reduce";

interface TopicoItemAvaliacaoProps{
    topico: Topico;
}


export function TopicoItemAvaliacao({topico}: TopicoItemAvaliacaoProps){

    const [state, dispatch] = useReducer(reducer, {
        topico,
        porcentagemLikes: calcularPorcentagemLikes(topico)
    } as State)

    const handleLike =  async () => {
        const updatedTopico = {
            ...state.topico,
            like: state.topico.like + 1,
        };
    
        dispatch({
            type: ActionType.LIKE,
            payload: {
                topico: updatedTopico,
            },
        });
    
        try {
            await putAtualizarTopico(updatedTopico);
        } catch (error) {
            dispatch({
                type: ActionType.LIKE,
                payload: {
                    topico: {
                        ...state.topico,
                        like: state.topico.like - 1, 
                    },
                },
            });
        }
    }


    const handleDeslike = async () => {
        const updatedTopico = {
            ...state.topico,
            deslike: state.topico.deslike + 1,
        };
        dispatch({
            type: ActionType.DESLIKE,
            payload:{
                topico: updatedTopico
            }
        });

        try {
            await putAtualizarTopico(updatedTopico);
        } catch (error) {
            dispatch({
                type: ActionType.DESLIKE,
                payload: {
                    topico: {
                        ...state.topico,
                        deslike: state.topico.deslike - 1, 
                    },
                },
            });
        }
    }    

    return (
        <div className={style.avaliacao}>
            <div className={style.dadosNumeros}>{state.topico.like}</div>
            <button onClick={handleLike}><AiFillLike size={20}/></button>

            <BarraProgresso porcentagem={state.porcentagemLikes}/>

            <button onClick={handleDeslike}><AiFillDislike size={20}/></button>
            <div className={style.dadosNumeros}>{state.topico.deslike}</div>
        </div>
    )
}