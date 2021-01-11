/**
	weather.js
	날짜 : 20-01-07
	설명 : 날씨 부분 설정하는 js
 	navigator API
 */
const weather = document.querySelector(".js-weather");
const API_KEY = 'a4be3efc87b32a33825612f590f36091';
const COORDS = 'coords';
// 날씨를 가져오는 메소드
function getWeather(lat,lon)
{
	fetch(
	`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`		
	).then(function(response)
	{
		return response.json()
		
	}).then(function(json)
	{
		console.log(json);
		
	})
	
	
}

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
	getWeather(coordsObj.latitude,coordsObj.longitude);
	
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
		const parsedCoords = JSON.parse(loadedCoords);
		console.log(parsedCoords);
		getWeather(parsedCoords.latitude,parsedCoords.longitude);
	}
}


function init()
{
	loadCoords();
}

init();