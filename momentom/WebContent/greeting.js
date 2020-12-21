/**
 * greeting.js
 * - 날짜 : 20.12.21
 * - 설명 : 사용자 이름 저장하는 js
 */

const form = document.querySelector(".js-form");
const input = document.querySelector("input");
//	1.querySelector 는
//	해당하는 요소의 첫번째 Element를 반환한다.
//	https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector
	
//	2.querySelectorAll은
//	지정된 셀렉터 그룹에 일치하는 ElementList → NodeList를 반환한다.

function loadName()
{
	
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


*/