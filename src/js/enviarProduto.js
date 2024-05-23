import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-form]");

async function handleSubmit(evento){
    evento.preventDefault();
    
    const titulo = document.querySelector("[data-titulo]").value;
    const price  = document.querySelector("[data-price]").value;
    const image  = document.querySelector("[data-image]").value;
    
    await conectaApi.postaProduto(titulo, price, image);
    alert("Envio concluído com sucesso!");

    mensagemVazia.style.display = "none";
    listaProdutos();
    
    // window.location.href = "../caminho-da-pagina.html"
}

formulario.addEventListener("submit", evento => handleSubmit(evento));

/**************************/

const botaoLimpar = document.querySelector(".btn-clear");

function limparInputs() {
    const tituloInput = document.querySelector("[data-titulo]");
    const priceInput = document.querySelector("[data-price]");
    const imageInput = document.querySelector("[data-image]");

    tituloInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
}

botaoLimpar.addEventListener("click", limparInputs);

/**************************/
