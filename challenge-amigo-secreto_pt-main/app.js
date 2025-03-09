const listaAmigos = document.getElementById("listaAmigos");
const inputAmigo = document.getElementById("amigo");
const resultado = document.getElementById("resultado");

function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }
    
    // Criar um novo item na lista
    const li = document.createElement("li");
    li.textContent = nomeAmigo;
    listaAmigos.appendChild(li);

    // Exibir aviso
    alert(`${nomeAmigo} foi adicionado à lista!`);

    // Limpar o campo de entrada
    inputAmigo.value = "";
    inputAmigo.focus();
}

function sortearAmigo() {
    const amigos = Array.from(listaAmigos.children).map(li => li.textContent);
    
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione nomes antes de sortear.");
        return;
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<p>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong>! 🎊</p>`;
}
