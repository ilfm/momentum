/**
 * todo.js
 * 날짜 : 20-12-26
 * 설명 : 투두리스트 js
 * 
 */

const toDoForm = document.querySelector(".js-toDoForm")
,     toDoInput = toDoForm.querySelector("input")
,     toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

function paintToDo(text)
{
	console.log(text)
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
	
	toDoForm.eventListener("submit",handleSubmit)
}

init();