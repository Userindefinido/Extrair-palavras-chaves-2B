import {PLAVRAS_RUINS} from "./palavrasruins";

const botaoMostraPalavra = document.querySelector ('#botao-palavrachave');

botaoMostraPalavras.addEventListener ('click' , mostraPalavrasChaves);

function mostraPalavrasChaves () {
    const texto = document.querySelector('entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavraChave = processaTexto (texto);

    campoResultado.textContent = palavraChave.join(",");
}