let input = document.getElementById('input');
let btn = document.getElementById('btn');
let lists = document.querySelector('.lists');

btn.onclick = addToDo;

function addToDo(){
  if(input.value == ""){
    alert("Please enter somenthing ");
  }else{
    let newEl = document.createElement("li");
    newEl.innerHTML = `<span>${input.value}</span> 
    <i class = "fa-solid fa-pen-to-square pencil"></i>
    <i class = "fa-regular fa-square-check tick"></i>
    <i class = "fa-regular fa-square-check cross"></i>`;
    input.value="";
    lists.appendChild(newEl);

    newEl.querySelector(".tick").addEventListener('click', () => {
      newEl.classList.toggle("done");
    })

    newEl.querySelector(".cross").addEventListener('click', () => {
      newEl.remove();
    })

    newEl.querySelector(".pencil").addEventListener('click', () => {
      let textNode = newEl.firstChild;
      textNode.contentEditable = true;
      textNode.focous();
    })
  }
}














// let todoList = [];
// displayItems();

// function addTodo(){
//   let inputElement = document.querySelector("#todo-input");
//   let todoItem = inputElement.value;
//   todoList.push(todoItem);
//   inputElement.value='';

//   displayItems();
// }

// function displayItems(){
//   let containerElement = document.querySelector(".todo-container");
//   let newHtml = '';


//   for(let i = 0; i < todoList.length; i++){
//     newHtml += `
//     <div>
//     <span>${todoList[i]}</span>
//     <button onclick = "todoList.splice(${i},1);displayItems();">Delete</button>
//      </div>
//      `;
//   }
//   containerElement.innerHTML = newHtml;
// }