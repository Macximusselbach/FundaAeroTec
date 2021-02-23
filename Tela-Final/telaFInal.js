const nome = window.sessionStorage.getItem("nome");
const poltrona = window.sessionStorage.getItem("assento");
const contatoEmergencia = window.sessionStorage.getItem("nomeEmergencia");
const localizador = window.sessionStorage.getItem("localizador");

document.getElementById("nomeUsuario").innerText = nome + ", uma boa viagem!";

document.getElementById("txtPoltrona").innerText = "Não esqueça! Sua poltrona é a";
document.getElementById("poltrona").innerText = poltrona;

document.getElementById("contatoEmergencia").innerText = "Caso de algo errado em sua viagem, fique tranquilo! Avisaremos o(a) " + contatoEmergencia + "!";

document.getElementById("localizador").innerText = "Localizador " + localizador;

window.setInterval(() => { window.location.href = "../Tela-Inicial/TelaInicial.html" }, 10 * 1000);