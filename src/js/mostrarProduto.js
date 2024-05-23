import { conectaApi } from "./conectaApi.js";
import { deletarCard } from "./deletaProduto.js";

const lista = document.querySelector("[data-lista]");

const mensagemVazia = document.createElement("p");
mensagemVazia.textContent = "Nenhum produto cadastrado";
mensagemVazia.classList.add("mensagem-vazia");
lista.appendChild(mensagemVazia);

function constroiCard(titulo, price, image, id){
    const card = document.createElement("div")
    card.classList.add("card");

    card.setAttribute("data-id", id);

    card.innerHTML = `
        <div class="img">
            <img src="${image}" alt="${titulo}">
        </div>

        <div class="card-container__info">
            <p>${titulo}</p>
            <div class="card-container__value">
                <p>$${price}</p>
                <button class="delete-btn" data-id="${id}">
                <img class="lixeira" src="/src/imagens/icon-trash.png" alt="Ícone de delete">
            </div>
        </div>
    `
    const lixeira = card.querySelector(".delete-btn");
    lixeira.addEventListener("click", async () => {
        const confirmarExclusao = confirm("Tem certeza que deseja excluir esse produto?");

        if(confirmarExclusao){
            const id = card.getAttribute('data-id');
            card.remove();
            await deletarCard(id);

        }
    });

    return card;
}

async function listaProdutos(){
    const listaApi = await conectaApi.listaProdutos();

    if(listaApi.length === 0){
        mensagemVazia.style.display = "block";
    }else{
        mensagemVazia.style.display = "none";
    }

    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.price, elemento.image, elemento.id)
    ))
}

listaProdutos();