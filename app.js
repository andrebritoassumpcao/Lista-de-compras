// ****** Selecione os itens **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// editar
let editElement;
let editFlag = false;
let editID = "";
// ****** Eventos Listados **********
// enviar
form.addEventListener("submit", addItem);
// limpar itens
clearBtn.addEventListener("click",clearItems);
// ****** Funções **********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;

    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `  <p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`;
        // append child
        list.appendChild(element);
        // display alert
        displayAlert("item adicionado com sucesso!", "success");
        // show container
        container.classList.add("show-container");
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    } else if (value && editFlag) {
        console.log("editando");
    } else {
        displayAlert("por favor adicione um valor!", "danger");
    }
}
// alerta
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alerta
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
} // limpar itens
function clearItems(){
    const items = document.querySelectorAll(".grocery-item");

    if(items.length > 0){
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container")
    displayAlert("Lista vazia!", "danger");
}
// set back to default
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}
// ****** Banco de Dados **********
function addToLocalStorage(id,value){
    console.log("Adicionado ao banco de dados!")
}
// ****** Configurar Itens **********