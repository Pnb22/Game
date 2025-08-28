// Gera número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativasRestantes = maxTentativas;

const input = document.getElementById('palpite');
const botao = document.getElementById('botaoChutar');
const mensagem = document.getElementById('mensagem');
const tentativas = document.getElementById('tentativas');

// Exibe tentativas restantes ao carregar
tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

botao.addEventListener('click', () => {
    const palpite = parseInt(input.value);

    // Validação do input
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Por favor, digite um número válido entre 1 e 100.";
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        mensagem.textContent = "🎉 Parabéns! Você acertou o número!";
        botao.disabled = true;
        input.disabled = true;
    } else if (tentativasRestantes === 0) {
        mensagem.textContent = `😢 Você perdeu! O número secreto era ${numeroSecreto}.`;
        botao.disabled = true;
        input.disabled = true;
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "🔼 O número secreto é maior!";
    } else {
        mensagem.textContent = "🔽 O número secreto é menor!";
    }

    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
    input.value = '';
    input.focus();
});

