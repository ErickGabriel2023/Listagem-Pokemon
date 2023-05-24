
const botaoAlterarTema = document.getElementById("botao_alterar_tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".botao_imagem");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivado = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
        
    if(modoEscuroEstaAtivado) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/moon.png");
    }
} )