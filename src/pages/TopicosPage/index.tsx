import { useEffect, useState } from "react";
import { Topico } from "../../models/Topico";
import { TopicoLista } from "./components/TopicosLista";
import { api } from "../../services/api";

export function TopicosPage() {
    const [topicos, setTopicos] = useState([]);

    useEffect(() => {
        const requisicaoGetTopicos = async () => {
            try {
                const dados = await api.get('/topicos');
                const listaTopicos = dados.data.map((json: any) => {
                    return Topico.fromJSON(json);
                });

                setTopicos(listaTopicos);
            } catch (error) {
                console.log(error);
            }
        }

        requisicaoGetTopicos();
    }, [])


    return (
        <>
            <TopicoLista topicos={topicos} />
        </>
    );
}