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

function loadToDos()
{
	const toDos = localStorage.getItem(TODOS_LS);
	
}

function init()
{
	loadToDos();
}

init();