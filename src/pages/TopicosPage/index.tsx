import { useEffect, useState } from "react";
import { TopicoLista } from "./components/TopicosLista";
import { fetchTodosTopicos } from "../../services/api";
import { Topico } from "../../models/Topico";

export function TopicosPage() {
    const [topicos, setTopicos] = useState([] as Topico[]);

    useEffect(() => {
        const requisicaoGetTopicos = async () => {
           
            const listaTopicos = await fetchTodosTopicos();
            setTopicos(listaTopicos);
            
        }

        requisicaoGetTopicos();
    }, [])


    return (
        <>
            {topicos.length != 0 ? <TopicoLista topicos={topicos} /> : <p>Nenhum tópico cadastrado.</p>}
        </>
    );
}