const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário
    // Aqui você pode adicionar o código para processar os dados do formulário, como enviar para um servidor ou realizar outras ações
    console.log('Formulário enviado!');
});