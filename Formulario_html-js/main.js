const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficioario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficioario.value}</b>`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficioario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = validaNome(e.target.value);

    if (!formValido) { //formValido === false
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-messagem').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});