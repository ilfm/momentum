/** 
 	bg.js
 	날짜 : 20-01-06
 	설명 : 백그라운드 배경 설정 js
 	** 사용자가 직접 바꿀수는 없을까
 
 */

const body = document.querySelector("body");
const IMG_NUMBER = 2;

function paintImage(imgNumber)
{
	// image도 객체인가? → ㅇㅇ
	const image = new Image();
	image.src = `images/${imgNumber}.jpg`;
	
	body.appendChild(image);
	image.classList.add("bgImage");
}

function getRandom()
{
	const number = Math.floor(Math.random() * IMG_NUMBER) +1; 

	return number;
}

function init()
{
	const randomNumber = getRandom();
	paintImage(randomNumber);
	
}

init();