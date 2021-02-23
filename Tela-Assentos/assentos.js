function nextPage() {
    window.location.href = "../Tela-Final/TelaFinal.html";
}

let poltronaMarcada = null;

const assentos = document.getElementsByClassName("poltrona");

for (let i = 0; i < assentos.length; i++) {
    let poltronaAtual = assentos[i];

    poltronaAtual.addEventListener("click", function (e) {
        let selecionada = document.getElementsByClassName("assentoSelecionado");
        if (selecionada.length > 0) {
            selecionada[0].classList.remove("assentoSelecionado");
        }

        e.target.classList.add("assentoSelecionado");
        poltronaMarcada = e.target.innerText;

    });
};

document.getElementById("btnFinalizar").addEventListener("click", () => {
    if (poltronaMarcada === null || poltronaMarcada === "A2" || poltronaMarcada === "C3" || poltronaMarcada === "E1" || poltronaMarcada === "F3") {
        document.getElementById("txtUsuario").innerText = "Selecione o seu assento, clicando sobre a cadeira desejada!"
    } else {
        window.sessionStorage.setItem("assento", poltronaMarcada);
        nextPage();
    }


});
