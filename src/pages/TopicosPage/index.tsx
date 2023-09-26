import { Topico } from "../../models/Topico";
import { ulid } from "ulidx";
import { Autor } from "../../models/Autor";
import { TopicoLista } from "./components/TopicosLista";

export function TopicosPage(){
    const topicos = [
        new Topico(
                ulid(),
                "Java é a melhor linguagem",
                new Autor(ulid(), 'Osiris', 'teresina', 'brasil'),
                new Date,
                ['java'],
                true,
        ),
        new Topico(
                ulid(),
                "Java é a melhor linguagem",
                new Autor(ulid(), 'Osiris', 'teresina', 'brasil'),
                new Date,
                ['java'],
                true,
         ),
    ];


    return (
        <>
           <TopicoLista topicos={topicos}/>
        </>
    );
}