/**
	weather.js
	날짜 : 20-01-07
	설명 : 날씨 부분 설정하는 js
 	navigator API
 */

const COORDS = 'coords';

// 좌표를 localStorage에 저장하는 메소드
function saveCoords(coordsObj)
{
	localStorage.setItem(COORDS,JSON.stringify(coordsObj));
} 

// 좌표 가져오는걸 성공했을 때 메소드
function handleGeoSuccess(position)
{
	const latitude = position.coords.latitude;	// 위도
	const longitude = position.coords.longitude;	// 경도
	
	// 객체로 만들기 (tip: key와 value의 이름이 같을 때 하나만 써도 가능
	const coordsObj = 
	{
		latitude,
		longitude
	} 
	
	saveCoords(coordsObj);
}

function handleGeoError()
{
	console.log("cant access");
}

function askForCoords()
{
	navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);

}

// 위치 로드하는 메소드
function loadCoords()
{
	// 기존의 위치가 있는지 확인
	const loadedCoords = localStorage.getItem(COORDS);

	if(loadedCoords == null)
	{
		askForCoords();
	}else
	{
		
	}
}


function init()
{
	loadCoords();
}

init();