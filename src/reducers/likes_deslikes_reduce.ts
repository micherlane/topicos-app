import { Topico } from "../models/Topico";

export interface State {
    topico: Topico,
    porcentagemLikes: number;
}

export enum ActionType {
    LIKE,
    DESLIKE
}

type LikeAdd = {
    type: ActionType.LIKE,
    payload: {
        topico: Topico
    }
}

type DeslikeAdd = {
    type: ActionType.DESLIKE,
    payload: {
        topico: Topico
    }
}

type Action = LikeAdd | DeslikeAdd;


export const calcularPorcentagemLikes = (topico: Topico) => {
    const total = topico.like + topico.deslike;
    const porcentagem = topico.like / total * 100;
    return porcentagem;
}


export function reducer(state: State, action: Action): State {
    switch (action.type) {
      case ActionType.LIKE:{
        const topico = {...state.topico, like: state.topico.like + 1,} 
  
        return {
          ...state,
          topico,
          porcentagemLikes: calcularPorcentagemLikes(topico),
        };
      }

  
      case ActionType.DESLIKE:{
        const topico =  {...state.topico, deslike: state.topico.deslike + 1,}
        
        return {
          ...state,
          topico,
          porcentagemLikes: calcularPorcentagemLikes(topico),
        };
      }

      default:{
        return state;
      }
    }
  }
  


