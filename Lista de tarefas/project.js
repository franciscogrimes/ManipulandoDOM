function addTarefa(){
    const id = document.getElementById('list-ctn');
    const ul = document.createElement('ul');
    id.appendChild(ul);

    const li = document.createElement('li');
    li.textContent = index;
    
    ul.appendChild(li);
}

document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('addTarefa'); 
    botao.addEventListener('click', addTarefa);})