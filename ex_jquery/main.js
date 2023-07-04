$(document).ready(function() {
    var formTarefa = $("#formTarefa");
    var inputTarefa = $("#inputTarefa");
    var listaTarefas = $("#listaTarefas");

    formTarefa.on("submit", function(event) {
        event.preventDefault();

        var tarefa = inputTarefa.val().trim();

        if (tarefa !== "") {
            var li = $("<li>").text(tarefa);
            listaTarefas.append(li);

            inputTarefa.val("");
        }
    });

    listaTarefas.on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});

