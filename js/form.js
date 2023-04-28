const inputNome = document.getElementById('input-nome');
const inputEmail = document.getElementById('input-email');
const inputTipo = document.getElementById('input-tipo');
const inputData = document.getElementById('input-data');

const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const responsesList = {
        'nome': e.target.elements['nome'].value,
        'email': e.target.elements['email'].value,
        'tipo': e.target.elements['tipo'].value,
        'data': e.target.elements['date'].value,
    }
    console.log(responsesList.data)


    localStorage.setItem('register', JSON.stringify(responsesList));
    window.location.href = '../pages/meuingresso.html';
})