/**
 * greeting.js
 * - 날짜 : 20.12.21
 * - 설명 : 사용자 이름 저장하는 js
 */

const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");
//	1.querySelector 는
//	해당하는 요소의 첫번째 Element를 반환한다.
//	https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector
	
//	2.querySelectorAll은
//	지정된 셀렉터 그룹에 일치하는 ElementList → NodeList를 반환한다.

const USER_LS = "currentUser",
	  SHOWING_CN ="showing";


function handleSubmit(event)
{
	event.preventDefault();
	// 이벤트가 발생하게 되면 root에서 부터 document까지 버블링이 일어나게 된다
	// 그래서 기본값을 막아주기 위하여 event.preventDefault()를 실행한다.
}

function askForName()
{
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit",handleSubmit);
}


function paintGreeting(text)
{	
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${text}`;
}

function loadName()
{
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null)
	{
		askForName();
	}else
	{
		paintGreeting(currentUser);
	}
	
}
	
	
function init()
{
	loadName();
}

init();




/*
	
	○ localStorage 란?
	- WebStorage API로 일정시간 또는 영구적으로 값을
	  저장하고 싶은 경우에 사용할 수 있다.
	- 데이터를 사용자 로컬에 저장하는 방식
	- 저장, 덮어쓰기, 삭제 조작가능 
	
	1. localStorage.setItem(param,param)
	   - 데이터 추가하는 메소드	   
	2. localStorage.getItem(param,param)
       - 저장한 값을 얻어내는 메소드
    3. localStorage.removeItem(key)
       - localStorage 해당 키와 값 모두 삭제
    4. localStorage.clear()
       - localStorage 데이터 모두 삭제

	참고) sessionStorage는 같은 세션만 사용가능
	      localStorage는 세션이 끊겨도 사용가능
	      
	○ classList
	   - classList를 이용하면 클래스를 조작하는 다양한 메서드들을 쓸 수 있다.
	   
	   1. classList.add : 클래스를 필요에 따라 삽입한다.
	   2. classList.remove : 클래스를 필요에 따라 제거한다.


*/