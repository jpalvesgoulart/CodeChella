const ingressoConteudo = document.querySelector('.meuingresso__descricao');
const responsesList = JSON.parse(localStorage.getItem('register'))

function constroiIngresso() {
    const nome = responsesList.nome
    const setor = responsesList.tipo

    ingressoConteudo.innerHTML = `
    <h4 class="meuingresso__nome">${nome}</h4>
    <p class="meuingresso__tipo">Ingresso Cortesia</p>
    <p class="meuingresso__setor">Setor: ${setor}</p>
    <p class="meuingresso__data">Data: 15/03</p>
    <p class="meu__ingresso__local">Local: São Paulo-SP</p>
`
}

constroiIngresso();

