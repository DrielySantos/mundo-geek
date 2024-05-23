import { conectaApi } from "./conectaApi.js";

 export async function deletarCard(id){
    try {
        const response = await conectaApi.deletarCard(id);
        if (!response.ok) {
          throw new Error(`Erro ao deletar produto: ${response.status}`);
        }
        // console.log(`Produto com ID ${id} deletado com sucesso!`);
      } catch (error) {
        console.error("Erro ao deletar produto:", error);
      }
}

