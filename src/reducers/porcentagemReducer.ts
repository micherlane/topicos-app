export interface PorcentagemState {
    porcentagemLikes: number;
}

export enum ActionTypePorcentagem {
    CHANGED
}

type PorcentagemChanged = {
    type: ActionTypePorcentagem.CHANGED,
    payload: {
        like: number,
        deslike: number,
    }
}

type ActionPorcentagem =  PorcentagemChanged;

export const calcularPorcentagemLikes = (like: number, deslike: number) => {
    const total = like + deslike;
    const porcentagem = like / total * 100;
    return porcentagem;
}

export function reducerPorcentagem(state: PorcentagemState, action: ActionPorcentagem){
    switch (action.type){
        case ActionTypePorcentagem.CHANGED: {
            const {like, deslike} = action.payload;

            const porcentagemLikes = calcularPorcentagemLikes(like, deslike);

            return {
                ...state,
                porcentagemLikes
            }
        }

        default: {
            throw Error("Ação inválida");
        }
    }
    
}