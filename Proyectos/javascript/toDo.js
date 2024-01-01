const toDo = document.querySelector(".lista");
const toDoAdd = document.getElementById("botonAdd");
const toDoInput = document.querySelector("#input");

const DocumentFragment = document.createDocumentFragment();
const toDoList = document.createElement("UL");
toDoList.classList.add("listaHecha");

toDoAdd.addEventListener("click", () => {
  if (toDoInput.value !== "") {
    const listElement = document.createElement("LI");
    const listTextElement = document.createElement("H4");
    const cotejo = document.createElement("INPUT");

    listElement.classList.add("listaHecha__item");
    cotejo.classList.add("listaHecha__item--cotejo");
    cotejo.setAttribute("type", "checkbox");

    listTextElement.innerHTML = toDoInput.value;
    listElement.appendChild(listTextElement);
    listElement.appendChild(cotejo);
    toDoList.appendChild(listElement);
    toDoInput.value = "";

    cotejo.addEventListener("click", () => {
      if (cotejo.checked) {
        listTextElement.innerHTML = `<s>${listTextElement.innerHTML}</s>`;
      } else {
        listTextElement.innerHTML;
      }
    });
  }
});
DocumentFragment.appendChild(toDoList);
toDo.appendChild(DocumentFragment);
