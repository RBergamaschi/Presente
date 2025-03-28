// === Carrossel ===
const fotos = document.querySelectorAll('.foto');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');
let fotoAtual = 0;

function mostrarFoto(index) {
    const fotos = document.querySelectorAll('.foto');
    fotos.forEach(foto => foto.classList.remove('ativa'));
    fotos[index].classList.add('ativa');
}
// Auto-avanço (opcional)
setInterval(() => {
    fotoAtual = (fotoAtual + 1) % fotos.length;
    mostrarFoto(fotoAtual);
}, 3000); // Muda a cada 3 segundos

// === Contador de Tempo (Horário de Brasília) ===
function atualizarContador() {
    const dataEvento = new Date('2024-09-28T00:00:00-03:00')
    const agora = new Date();
    
    // Ajusta para o fuso de Brasília (UTC-3)
    const offsetBrasilia = -3 * 60 * 60 * 1000;
    const agoraBrasilia = new Date(agora.getTime() + offsetBrasilia);
    
    const diferenca = agoraBrasilia - dataEvento;
    
    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    document.getElementById('tempoDecorrido').textContent = 
        `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador(); // Chama imediatamente