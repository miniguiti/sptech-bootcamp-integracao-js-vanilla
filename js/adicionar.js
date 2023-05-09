async function cadastrarDica(){
    const tituloDigitado = document.getElementById("titulo_id").value;
    const autorDigitado = document.getElementById("autor_id").value;
    const descricaoDigitada = document.getElementById("descricao_id").value;
    const urlDigitada = document.getElementById("url_id").value;

    const dadosDica = {
        "titulo": tituloDigitado,
        "autor": autorDigitado,
        "descricao": descricaoDigitada,
        "urlImagem": urlDigitada
    }


    const respostaCadastro = await fetch("https://6435cb4f83a30bc9ad6a2721.mockapi.io/dicas", {
        method: "POST",
        body: JSON.stringify(dadosDica),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });

    if(respostaCadastro.status == 201){
        window.location.href = "dicas.html";
    }else{
        alert("Ocorreu um erro ao cadastrar")
    }

}