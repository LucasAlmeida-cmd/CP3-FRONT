if (!localStorage.getItem("base-dados")) {
    let listaUsuarios = [
        { emailUsuario: "arthur@email.com", nomeUsuario: "Arthur", senhaUsuario: "554848" },
        { emailUsuario: "lucas@email.com", nomeUsuario: "Lucas", senhaUsuario: "557569" },
        { emailUsuario: "victor@email.com", nomeUsuario: "Victor", senhaUsuario: "558856" },
        { nomeUsuario: "9027908", senhaUsuario: "017972b8d104efcf41a8f034d3" },
    ];
    localStorage.setItem("base-dados", JSON.stringify(listaUsuarios));
}

function validaCampos(input1, input2) {
    let listaUsuarios = JSON.parse(localStorage.getItem("base-dados"));
    const elMsg = document.querySelector(".mensagem");

    for (let x = 0; x < listaUsuarios.length; x++) {
        if (listaUsuarios[x].emailUsuario === input1.value && listaUsuarios[x].senhaUsuario === input2.value) {
            localStorage.setItem("usuario-logado", JSON.stringify(listaUsuarios[x]));

            const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
            sessionStorage.setItem("token", tokenUser);

            elMsg.innerText = "Login bem-sucedido! Redirecionando...";
            elMsg.style.color = "green";

            setTimeout(() => {
                elMsg.innerText = "";
                window.location.href = "../index.html";
            }, 3000);
            return false;
        }
    }

    elMsg.innerText = "Nome de usuário ou senha incorretos!";
    elMsg.style.color = "red";

    setTimeout(() => {
        elMsg.innerText = "";
    }, 3000);

    return false;
}

const alteraVisao = (inputSenha) => {
    if (inputSenha.type === "password") {
        inputSenha.setAttribute("type", "text");
    } else {
        inputSenha.setAttribute("type", "password");
    }
}

let iconEye = document.querySelector("i");
iconEye.addEventListener('click', function () {
    let inputSenha = document.querySelector("#idSenha");
    if (this.className === "fa-regular fa-eye-slash") {
        this.setAttribute("class", "fa-regular fa-eye");
        alteraVisao(inputSenha);
    } else {
        this.setAttribute("class", "fa-regular fa-eye-slash");
        alteraVisao(inputSenha);
    }
});
