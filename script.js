import {PLAVRAS_RUINS} from "./palavrasruins";

const botaoMostraPalavra = document.querySelector ('#botao-palavrachave');

botaoMostraPalavras.addEventListener ('click' , mostraPalavrasChaves);

function mostraPalavrasChaves () {
    const texto = document.querySelector('entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavraChave = processaTexto (texto);

    campoResultado.textContent = palavraChave.join(",");
}

function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);

    for (let i in palavras) {
        palavras [i] =palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasRuins (palavras);

    const frequencias = contaFrequencia(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

    function ordenaPalavra (p1,p2) {
        return frequencias[p2] - frequencias[p1];
    }

    return ordenadas.slice(0, 10);
}

function contaFrequencia(palavras)