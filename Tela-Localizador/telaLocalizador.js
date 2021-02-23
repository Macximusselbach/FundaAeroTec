
function nextPage() {
    window.location.href = "../Tela-Dados-Pessoais/TelaDadosPessoais.html";
};

const localizadores = ["A75HB2", "B56T23", "2MJ03J", "3LQ7RZ", "BNS981", "MJ765S", "BN78JH",
    "EUAN82", "28SN96"]

document.getElementById("btnContinuar").addEventListener("click", () => {
    const localizador = document.getElementById("localizador").value;

    for (let i = 0; i < localizadores.length; i++) {

        if (localizador.length === 6) {
            if (localizador === localizadores[i]) {
                window.sessionStorage.setItem("localizador", localizador);
                nextPage();
            } else {
                document.getElementById("txtUsuario").innerText = "Localizador não encontrado!"
            }
        } else {
            document.getElementById("txtUsuario").innerText = "Localizador inválido!"
        }
    }
});

