/**
 * todo.js
 * 날짜 : 20-12-26
 * 설명 : 투두리스트 js
 * 
 * 	appendChild()
 *  createElement()
 *  forEach()
 *  filter()
 */

const toDoForm = document.querySelector(".js-toDoForm")
,     toDoInput = toDoForm.querySelector("input")
,     toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];
//const toDos = [];

//	deleteToDo()
//	: 화면에서 toDo를 지우는 메소드
function deleteToDo(event)
{
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	
	const cleanToDo = toDos.filter(function(toDo)
	{
		// toDo가 뭔지 의문
		//console.log(toDo);
		return toDo.id !== parseInt(li.id); 
	});
	toDos = cleanToDo;
	saveToDos();
}

//	saveToDos()
//	: toDo를 localStorage에 저장하는 메소드
function saveToDos()
{
	localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
// localStorage는 javascript data는 string만 저장 가능하다 

//	paintToDo()
//	: toDo를 화면에 표시하고 array에 담는 메소드
function paintToDo(text)
{
	const toDoList = document.querySelector(".js-toDoList");
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;
	
	delBtn.innerHTML ='&#10006;';
	delBtn.addEventListener("click",deleteToDo);
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	
	// 삭제를 위한 id, localStorage 저장을 위해
	li.id = newId;
	toDoList.appendChild(li);
	
	// 삭제를 위해서 고유의 id를 가져야하기 때문에 객체로 만든다.
	const toDoObj ={		
		text : text
		,id  : newId
	}
	toDos.push(toDoObj);
	saveToDos(toDoObj);
	
	
	// toDoList 입력 후 input text 지우기 
	toDoInput.value="";
	
}

//	handleSubmit()
//  : submit 이벤트 시 호출되는 메소드
function handleSubmit(event)
{
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
}

//	loadToDos()
//	: localStotage에서 toDo들을 가져오는 메소드
function loadToDos()
{
	const loadedToDos = localStorage.getItem(TODOS_LS);
	
	if(loadedToDos != null)
	{
		// console.log(loadedToDos); string 형태	
		const parsedToDos = JSON.parse(loadedToDos);
		console.log(parsedToDos);
		parsedToDos.forEach(function(toDo){
			paintToDo(toDo.text);
		});
	}
}

function init()
{
	loadToDos();
	
	toDoForm.addEventListener("submit",handleSubmit);
}

init();

/*
	filter()
	filter - 배열 요소 하나하나 콜백함수에 지정된 조건에 맞는 요소를 새롭게 반환한다.


*/