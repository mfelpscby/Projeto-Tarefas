var input = document.getElementById("taskInput");
var addBtn = document.getElementById("addTaskBtn");
var lista = document.getElementById("taskList");

function adicionarTarefa() {

    var textoTarefa = input.value.trim();
    if (textoTarefa === "") {
        alert("Digite uma tarefa antes de adicionar!");
        return;
    }
    var novaTarefa = document.createElement("li");
    novaTarefa.textContent = textoTarefa;
    var botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = "X";
    botaoExcluir.onclick = function() {
        novaTarefa.remove();
    };
    novaTarefa.appendChild(botaoExcluir);
    lista.appendChild(novaTarefa);
    input.value = "";
}

addBtn.onclick = adicionarTarefa;