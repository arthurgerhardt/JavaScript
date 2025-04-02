// Lógica para adicionar convidados à lista
const botaoAdicionar = document.getElementById('adicionar');
const campoNome = document.getElementById('nome');
const listaConvidados = document.querySelector('.guest-list');

botaoAdicionar.addEventListener('click', () => {
    const nome = campoNome.value.trim();
    if (nome !== "") {
        const item = document.createElement('div');
        item.textContent = nome;
        listaConvidados.appendChild(item);
        campoNome.value = ""; // Limpa o campo de entrada
    }
});