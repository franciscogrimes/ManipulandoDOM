// Primeiro item
function alteraCor() {
    const title = document.getElementById("paragrafo-ctn");
    title.style.backgroundColor = "red";
}
function voltaCor(){
    const title = document.getElementById("paragrafo-ctn");
    title.style.backgroundColor = "white";
}

// Segundo item
function alteraTxt(){
    const paragrafo = document.querySelector(".paragrafo-ctn")
    paragrafo.textContent = "Texto trocado!"
}

// Terceiro item
function adicionaItem(){
    const id = document.getElementById('list-ctn');
    const ul = document.createElement('ul');
    id.appendChild(ul);
    
    for (let index = 0; index < 3; index++) {
        const li = document.createElement('li');
        li.textContent = index;
        
        ul.appendChild(li);
    }
}
// Quarto item
function removeFilho(){
    const id = document.getElementById('list-ctn');
    const ul = id.querySelector('ul');
    if (ul) {
        id.removeChild(ul)
    }
}

// Quinto item
function alteraEstilo(){
    const allClass = document.querySelectorAll(".btn-ex")

    allClass.forEach(elemento =>{
        elemento.style.color = 'red';
        elemento.style.fontSize = '16px';
        elemento.style.backgroundColor = '#ffffff'
    })

}

// Sexto item

function addRemoveCass(){
    const btn = document.getElementsByTagName('button')[0]
    const parag = document.getElementsByTagName('p')[0];
    
    btn.addEventListener('click', function(){
    if(parag.classList.contains('newClass')==='true'){
        parag.removeAttribute('class')
        console.log('Removi o class')
    }
    })
}
function addAtributo(){
    const attr = document.getElementById('addAttr');
    
    if(attr.hasAttribute('href')){
        attr.removeAttribute('href');
    } else {
        const add = document.createAttribute('href');
        add.value = 'https://github.com/';
        attr.setAttributeNode(add);
    }
}

// }
// function removeAtributo(){
