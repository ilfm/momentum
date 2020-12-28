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
const toDos = [];

function paintToDo(text)
{
	const toDoList = document.querySelector(".js-toDoList");
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;
	
	delBtn.innerHTML ='&#10006;';
	span.innerText = text;
	li.appendChild(span);
	li.appendChild(delBtn);
	// 삭제를 위한 id
	li.id = newId;
	toDoList.appendChild(li);
	
	// 삭제를 위해서 고유의 id를 가져야하기 때문에 객체로 만든다.
	const toDoObj ={		
		text : text
		,id  : newId
	}
	
	toDos.push(toDoObj);
	
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
	const loadedToDos = localStorage.getItem(TODOS_LS);
	
	if(loadedToDos != null)
	{
		
	}
}

function init()
{
	loadToDos();
	
	toDoForm.addEventListener("submit",handleSubmit);
}

init();