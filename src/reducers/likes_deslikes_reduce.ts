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
      case ActionType.LIKE:

        return {
          ...state,
          topico: {
              ...state.topico,
              like: state.topico.like + 1,
          },
          porcentagemLikes: calcularPorcentagemLikes({
            ...state.topico,
            like: state.topico.like + 1,
          }),
        };
  
      case ActionType.DESLIKE:
        return {
          ...state,
          topico: {
            ...state.topico,
            deslike: state.topico.deslike + 1,
          },
          porcentagemLikes: calcularPorcentagemLikes({
            ...state.topico,
            deslike: state.topico.deslike + 1,
          }),
        };
  
      default:
        return state;
    }
  }
  


