const btn = document.getElementById('btn')
btn.addEventListener('click', function(e) {
    e.preventDefault();
});



function addTarefa(){
    const list = document.getElementById('list-ctn')
    
    const valueLI = document.getElementById('atv-txt').value
    const ul = document.createElement('ul')
    const li = document.createElement('li')

    list.appendChild(ul)
    ul.appendChild(li)
    li.textContent = valueLI

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = valueLI;

    // Adiciona o elemento de input ao elemento li
    li.insertBefore(input, li.firstChild);

    if(li === checked){
        ul.removeChild(li.value)
    }

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