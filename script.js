const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const lancamento = "30 nov 2023"

function countdown() {
    const dataLancamento = new Date(lancamento);
    const dataAtual = new Date();

    const totalSegundos = (dataLancamento - dataAtual) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    dia.innerHTML = formatoTempo(dias);
    hora.innerHTML = formatoTempo(horas);
    minuto.innerHTML = formatoTempo(minutos);
    segundo.innerHTML = formatoTempo(segundos);
}

function formatoTempo(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);

