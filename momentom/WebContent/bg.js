/* 
 	bg.js
 	날짜 : 20-01-06
 	설명 : 백그라운드 배경 설정 js
 	** animation 아직
 
 */

const body = document.querySelector("body");
const IMG_NUMBER = 2;

function paintImage(imgNumber)
{
	// image도 객체인가?
	const image = new Image();
	image.src = `images/${imgNumber}.jpg`;
	image.classList.add("bgImage");
	body.appendChild(image);
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