function nextPage() {
    window.location.href = "../Tela-Assentos/TelaAssentos.html";
};

function limiteNumeros(e) {
    let valor = e.target;

    if (valor.length <= 11) {
        return;
    }
    valor.value = valor.value.substr(0, 11);
}

document.getElementById("cpf").addEventListener("input", limiteNumeros);
document.getElementById("telefone").addEventListener("input", limiteNumeros);
document.getElementById("telefoneEmergencia").addEventListener("input", limiteNumeros);

document.getElementById("btn-continuar").addEventListener("click", () => {
    const cpf = document.getElementById("cpf").value;
    const nomeCompleto = document.getElementById("nomeCompleto").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const telefone = document.getElementById("telefone").value;
    const nomeEmergencia = document.getElementById("nomeEmergencia").value;
    const telefoneEmergencia = document.getElementById("telefoneEmergencia").value;

    console.log(dataNascimento);
    if (cpf.length < 11) {
        document.getElementById("txtUsuario").innerText = "CPF inválido!"
    } else if (nomeCompleto.length < 10) {
        document.getElementById("txtUsuario").innerText = "Por favor, informe seu nome e o sobrenome!"
    } else if (dataNascimento.length < 5) {
        document.getElementById("txtUsuario").innerText = "Por favor, informe sua data de nascimento!"
    } else if (telefone.length < 11) {
        document.getElementById("txtUsuario").innerText = "Número de telefone inválido!"
    } else if (nomeEmergencia.length < 10) {
        document.getElementById("txtUsuario").innerText = "Por favor, informe o nome e o sobrenome do contato de emergência!"
    } else if (telefoneEmergencia.length < 11) {
        document.getElementById("txtUsuario").innerText = "Número de telefone para emergências inválido!"
    } else {
        window.sessionStorage.setItem("cpf", cpf);
        window.sessionStorage.setItem("nome", nomeCompleto);
        window.sessionStorage.setItem("dataNascimento", dataNascimento);
        window.sessionStorage.setItem("telefone", telefone);
        // window.sessionStorage.setItem("sexo", sexo);
        window.sessionStorage.setItem("nomeEmergencia", nomeEmergencia);
        window.sessionStorage.setItem("telefoneEmergencia", telefoneEmergencia);

        nextPage();
    }
});
