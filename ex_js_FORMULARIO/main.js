const formulario = document.getElementById('meuFormulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 

        const campoA = document.getElementById('campoA');
        const campoB = document.getElementById('campoB');

        const valorA = Number(campoA.value);
        const valorB = Number(campoB.value);

        if (valorB <= valorA) {
            mensagem.textContent = 'O valor de B deve ser maior que o valor de A.';
            mensagem.style.color = 'red';
            mensagem.style.display = 'block';
        } else {
            mensagem.textContent = 'Formulário válido!';
            mensagem.style.color = 'green';
            mensagem.style.display = 'block';
        }
});