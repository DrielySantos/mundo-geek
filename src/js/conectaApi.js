async function listaProdutos(){
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function postaProduto(titulo, price, image){
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            price: price,
            image: image

        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletarCard(id){
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    });

    return conexao;
}

export const conectaApi ={
    listaProdutos,
    postaProduto,
    deletarCard
};