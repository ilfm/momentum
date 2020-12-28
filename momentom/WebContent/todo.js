/**
 * todo.js
 * 날짜 : 20-12-26
 * 설명 : 투두리스트 js
 * 
 * 	appendChild()
 *  createElement()
 */

const toDoForm = document.querySelector(".js-toDoForm")
,     toDoInput = toDoForm.querySelector("input")
,     toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

function paintToDo(text)
{
	const toDoList = document.querySelector(".js-toDoList");
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	
	delBtn.innerHTML ='&#10006;';
	span.innerText = text;
	li.appendChild(span);
	li.appendChild(delBtn);
	toDoList.appendChild(li);
	
	// toDoList 입력 후 input text 지우기 
	toDoInput.value="";
	
}

function handleSubmit(event)
{
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
}

function loadToDos()
{
	const toDos = localStorage.getItem(TODOS_LS);
	
	if(toDos != null)
	{
		
	}
}

function init()
{
	loadToDos();
	
	toDoForm.addEventListener("submit",handleSubmit);
}

init();