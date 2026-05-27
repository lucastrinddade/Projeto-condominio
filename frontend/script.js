const form = document.getElementById('formCondomino');
const lista = document.getElementById('lista');

async function carregarCondominos() {

    const response = await fetch('http://localhost:3000/condominos');
    const dados = await response.json();

    lista.innerHTML = '';

    dados.forEach(condomino => {

        const item = document.createElement('li');

        item.innerHTML = `
            <strong>${condomino.nome}</strong>
            - ${condomino.tipo}
            - ${condomino.quantidade_automoveis} carro(s)
        `;

        lista.appendChild(item);
    });
}

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const novoCondomino = {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        quantidade_automoveis: document.getElementById('automoveis').value,
        tipo: document.getElementById('tipo').value
    };

    await fetch('http://localhost:3000/condominos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoCondomino)
    });

    form.reset();

    carregarCondominos();
});

carregarCondominos();