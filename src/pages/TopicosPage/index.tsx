import { Topico } from "../../models/Topico";
import { ulid } from "ulidx";
import { Autor } from "../../models/Autor";
import { TopicoLista } from "./components/TopicosLista";

export function TopicosPage() {
    const topicos = [
        new Topico(
            ulid(),
            "Não faça aos outros o que não quer que façam a você.",
            new Autor(ulid(), 'Confucio', 'Pequim', 'China'),
            new Date,
            ['java'],
            true,
        ),
        new Topico(
            ulid(),
            "Todos podem até dizer que Java é extremamente verboso, mas ele ainda é amplamente utilizado.",
            new Autor(ulid(), 'Anônimo', 'Privado', 'Privado'),
            new Date,
            ['java'],
            true,
        ),
        new Topico(
            ulid(),
            "O amigo acima não sabe do que está falando. O melhor é javascript.",
            new Autor(ulid(), 'Sem Noção', 'Privado', 'Privado'),
            new Date,
            ['java'],
            true,
        ),
        new Topico(
            ulid(),
            "A equipe SoLaMente informa que isto é lamentável, pois apenas uma mente sozinha foi capaz de fazer. Viva 'Só lamente!', viva 'Sol a mente!', viva 'Sola mente!', 'Solo la mente!', 'Solamente!'",
            new Autor(ulid(), 'SoLaMente', 'teresina', 'brasil'),
            new Date,
            ['java'],
            true,
        ),
    ];


    return (
        <>
            <TopicoLista topicos={topicos} />
        </>
    );
}