const btn = document.getElementById('btn')
btn.addEventListener('click', function(e) {
    e.preventDefault();
});

const taskList = document.getElementById('list-container')

function addTarefa(){
    const list = document.getElementById('list-container')
    
    const valueLI = document.getElementById('atv-txt').value
    let li = document.createElement('li')

    // Adiciona todos os elemento a uma lista 
    list.appendChild(li)
    li.innerHTML = `<input type= "checkbox" /><span>${valueLI}</span><button>Excluir</button>`

}

taskList.addEventListener('click', (e)=> {
    if(e.target.tagName === 'BUTTON'){
    const lista = e.target.parentElement
    taskList.removeChild(lista)}
}
)
// function addTarefa(){
//     const list = document.getElementById('list-ctn')
    
//     const valueLI = document.getElementById('atv-txt').value
//     const ul = document.createElement('ul')
//     const li = document.createElement('li')

//     // Adiciona todos os elemento a uma lista 
//     list.appendChild(ul)
//     ul.appendChild(li)
//     li.textContent = valueLI

//     // Adiciona um input na página do tipo checkbox
//     const input = document.createElement('input');
//     input.type = 'checkbox';
//     input.value = valueLI;

//     // Adiciona o elemento de input ao elemento li
//     li.insertBefore(input, li.firstChild);

//     // Evenque será feito pelo usuário
//     input.addEventListener('change', function() {

//         // Verifica se o input está marcado
//         if (input.checked) {
//             // Remove o elemento <li> da lista
//             ul.removeChild(li);
//         }
//     });

// }
