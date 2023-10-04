import { Topico } from '../models/Topico';

const base_url =  "https://topicos-backend-json-server-hs8eqqmln-micherlane.vercel.app";

export async function fetchTodosTopicos(): Promise<Topico[]> {

    try {
        
        const response = await fetch(`${base_url}/topicos`);
    
        const data = await response.json();
    
        const listaTopicos = data.map((json: any) => {
            return Topico.fromJSON(json);
        });
    
        return listaTopicos;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function putAtualizarTopico(topico:Topico){
    const configuracoes = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topico),
    }


   try {
       await fetch(`${base_url}/topicos/${topico.id}`, configuracoes);
   } catch (erro) {
       console.log(erro);
   }

}