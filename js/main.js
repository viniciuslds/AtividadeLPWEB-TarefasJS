var botao = document.querySelector('#salvar');

botao.addEventListener('click', function(event){
    var pendentes = document.querySelector('#pendentes');
    var completas = document.querySelector('#completas');

    var li = document.createElement('li');
    var inputTexto = document.querySelector('#nova-tarefa');

    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'tarefas';


    var botaoDelete = document.createElement('button');
    botaoDelete.textContent = 'Remover';
    botaoDelete.addEventListener('click', function(){
        pendentes.removeChild(botaoDelete.parentElement);
    });

    var botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.addEventListener('click', function(){
        var edit = botaoEditar.parentElement.childNodes[1].textContent;
        inputTexto.value = edit;
        pendentes.removeChild(botaoEditar.parentElement);

    });


    checkBox.addEventListener('change', function(event){
        console.log('chek')
        completas.appendChild(checkBox.parentElement);
        checkBox.parentElement.childNodes[2].remove();
        checkBox.parentElement.childNodes[2].remove();
        

        

    });


    li.appendChild(checkBox);
    li.append(inputTexto.value);
    li.appendChild(botaoEditar)
    li.appendChild(botaoDelete);
    pendentes.appendChild(li);
    inputTexto.value = '';



});