const btn = document.getElementById('btn')
btn.addEventListener('click', function(e) {
    e.preventDefault();
});



function addTarefa(){
    const list = document.getElementById('list-ctn')
    
    const valueLI = document.getElementById('atv-txt').value
    const ul = document.createElement('ul')
    const li = document.createElement('li')

    // Adiciona todos os elemento a uma lista 
    list.appendChild(ul)
    ul.appendChild(li)
    li.textContent = valueLI

    // Adiciona um input na página do tipo checkbox
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = valueLI;

    // Adiciona o elemento de input ao elemento li
    li.insertBefore(input, li.firstChild);

    // Evenque será feito pelo usuário
    input.addEventListener('change', function() {

        // Verifica se o input está marcado
        if (input.checked) {
            // Remove o elemento <li> da lista
            ul.removeChild(li);
        }
    });

}
// function addTarefa(){
//     const valueLI = document.getElementById('atv-txt').value
//     const ul = document.createElement('ul')
//     const li = document.createElement('li')

//     list.appendChild(ul)
//     ul.appendChild(li)
//     li.textContent = valueLI

//     const input = document.createAttribute('input')
//     input.type = 'radio'
//     input.value = valueLI
// }

// function addTarefa(){
//     const ul = document.createElement('ul')
//     const li = document.createElement('li')

//     list.appendChild(ul)
//     ul.appendChild(li)
//     li.textContent = valueLI
// }