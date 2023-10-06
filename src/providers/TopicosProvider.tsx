import { ReactNode, useEffect, useState, useContext } from "react";
import { fetchTodosTopicos } from "../services/api";
import { Topico } from "../models/Topico";
import { TopicosContext } from "../contexts/TopicosContext";

interface TopicosProviderProps {
    children: ReactNode;
}

export function TopicosProvider({children}: TopicosProviderProps){
    const [topicos, setTopicos] = useState([] as Topico[]);


    useEffect(() => {
        const requisicaoGetTopicos = async () => {
            const listaTopicos = await fetchTodosTopicos();
            setTopicos(listaTopicos);        
        }

        requisicaoGetTopicos();
    }, []);

    return (
        <TopicosContext.Provider value={topicos}>
            {children}
        </TopicosContext.Provider>
    )

}

export function useTopico(){
    return useContext(TopicosContext);
}