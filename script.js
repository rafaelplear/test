const inicio = new Date("2026-02-12");

function atualizarContador() {

    const hoje = new Date();

    const diferenca = hoje - inicio;

    const anos = Math.floor(
        diferenca / (1000 * 60 * 60 * 24 * 365)
    );

    const meses = Math.floor(
        diferenca / (1000 * 60 * 60 * 24 * 30)
    ) % 12;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    ) % 30;

    const horas = Math.floor(
        diferenca / (1000 * 60 * 60)
    ) % 24;

    const minutos = Math.floor(
        diferenca / (1000 * 60)
    ) % 60;

    const segundos = Math.floor(
        diferenca / 1000
    ) % 60;

    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);

atualizarContador();

const revelarBtn = document.getElementById("revelarBtn");
const spotify = document.getElementById("spotify");

revelarBtn.addEventListener("click", () => {
    spotify.style.display = "block";
    revelarBtn.style.display = "none";
});