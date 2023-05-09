async function buscarDicas(){
    const resposta = await fetch("https://6435cb4f83a30bc9ad6a2721.mockapi.io/dicas");

    const dicasResposta = await resposta.json();
    console.log("Dicas: ", dicasResposta)

    const boxDicas = document.getElementById("box_dicas");

    boxDicas.innerHTML = dicasResposta.map(function(dica){
        // para cada dica, retorna um card
        return `<div class="card">
                    <img class="img-background" src="${dica.urlImagem}" alt="">
                    <div class="descricao">
                        <div class="icones">
                            <img src="../imagens/edit-icon.png" alt="" />
                            <img src="../imagens/delete-icon.png" alt="" />
                        </div>
                        <p> 
                            <strong>${dica.titulo}</strong>
                        </p>
                        <p>
                            ${dica.descricao}
                        </p>
                        <p>
                            <strong>Autor: </strong> ${dica.autor}
                        </p>
                    </div>
                </div>`;
    })
}

buscarDicas();