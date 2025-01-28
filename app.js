// El prinlet amigos = [];

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

document.querySelector(".button-add").addEventListener("click", agregarAmigo);

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
}

document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
