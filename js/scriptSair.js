
      document.addEventListener("DOMContentLoaded", () => {
        const user = JSON.parse(localStorage.getItem("usuario-logado"));
        if (!user) {
          window.location.href = "../index.html";
        } else {
          document.getElementById(
            "welcome-message"
          ).innerText = `Olá, ${user.nomeUsuario}`;
        }

        document
          .getElementById("logout-button")
          .addEventListener("click", () => {
            localStorage.removeItem("usuario-logado");
            sessionStorage.removeItem("token");
            window.location.href = "../paginas/login.html";
          });
      });
      if (!sessionStorage.getItem("token")) {
        window.location.href = "./login.html";
      } 

     