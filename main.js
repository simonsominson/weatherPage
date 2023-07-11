//REVERSE CODE//
// API = 36a453f41137cbbf3752dd9a4daa58c3//
// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=36a453f41137cbbf3752dd9a4daa58c3`)
const cityName = document.querySelector(".city");
const imgDayCity = document.querySelector(".img-city");
const temperatureToday = document.querySelector(".temperature-today");
const stateToday = document.querySelector(".state-today");
const yearNow = document.querySelector(".year");
const dayNow = document.querySelector(".day");
const hourNow = document.querySelector(".hour");
const statPressure = document.querySelector(".statPressure");
const statHumidity = document.querySelector(".statHumidity");
const statWind = document.querySelector(".statWind");
const statVisibility = document.querySelector(".statVisibility");
const containerDays = document.querySelector(".container-days");
const divStateDay = document.querySelector(".state-day");
const iconImg = document.querySelector(".icon img");
const fetchData = position => {
const { latitude, longitude } = position.coords;
fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=36a453f41137cbbf3752dd9a4daa58c3`)
    .then(response => response.json())
    .then(data => setWeatherData(data)) 
fetch (`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${latitude}&lon=${longitude}&appid=36a453f41137cbbf3752dd9a4daa58c3`)
    .then (resp => resp.json())
    .then (dataa => setDaysData(dataa))   
}

const setWeatherData = data => {    
    let nameCity = data.name;
    let temperatureC = data.main.temp;
    let iconNow = data.weather[0].icon;
    let date = getDate();       
    let pressureNow = data.main.pressure;
    let humidityNow = data.main.humidity;
    let windNow = data.wind.speed;
    let visibilityNow = data.visibility;
    let stateNow = data.weather[0].main;
    let conditionNow = data.weather[0].description;
    updateDetails(nameCity, temperatureC, iconNow, pressureNow, humidityNow, visibilityNow, windNow, conditionNow);
   
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
const getDateHour = () => {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`
}
function updateDetails(nameCity, temperatureC, iconNow, pressureNow, humidityNow, visibilityNow, windNow, stateNow, conditionNow) {

   
   
    cityName.innerText = nameCity;
    const iconSrc = `img/${iconNow}@2x.png`;
    iconImg.setAttribute("src", iconSrc);
    temperatureToday.innerText = temperatureC + " C°";
    yearNow.innerText = getDate();
    hourNow.innerText = getDateHour() + " Hours";
    let currentDay = getDayName(new Date().getDay());
    statPressure.innerText = pressureNow + " mB";
    statHumidity.innerText = humidityNow + " %";
    statVisibility.innerText = visibilityNow + " Mts";
    statWind.innerText = windNow + " mPH";
    stateToday.innerText = stateNow;  
}


// GET NAME DAY //
function getDayName () {
let getName = new Date();
switch (getName.getDay()) {
    case 0:
        dayNow.innerText = "Sunday";
        dayOne.innerText = "Monday";
        dayTwo.innerText = "Tuesday";
        dayThree.innerText = "Wednesday";
        dayFour.innerText = "Thursday";
        dayFive.innerText = "Friday";
        break;
    case 1:
        dayNow.innerText = "Monday";
        dayOne.innerText = "Tuesday";
        dayTwo.innerText = "Wednesday";
        dayThree.innerText = "Thursday";
        dayFour.innerText = "Friday";
        dayFive.innerText = "Saturday";
        break;
    case 2:
        dayNow.innerText = "Tuesday";
        dayOne.innerText = "Wednesday";
        dayTwo.innerText = "Thursday";
        dayThree.innerText = "Friday";
        dayFour.innerText = "Saturday";
        dayFive.innerText = "Sunday";
        break;
    case 3:
        dayNow.innerText = "Wednesday";
        dayOne.innerText = "Thursday";
        dayTwo.innerText = "Friday";
        dayThree.innerText = "Saturday";
        dayFour.innerText = "Sunday";
        dayFive.innerText = "Monday";
        break;
    case 4:
        dayNow.innerText = "Thursday";
        dayOne.innerText = "Friday";
        dayTwo.innerText = "Saturday";
        dayThree.innerText = "Sunday";
        dayFour.innerText = "Monday";
        dayFive.innerText = "Tuesday";
        break;
    case 5:
        dayNow.innerText = "Friday";
        dayOne.innerText = "Saturday";
        dayTwo.innerText = "Sunday";
        dayThree.innerText = "Monday";
        dayFour.innerText = "Tuesday";
        dayFive.innerText = "Wednesday";
        break;
    case 6:
        dayNow.innerText = "Saturday";
        dayOne.innerText = "Sunday";
        dayTwo.innerText = "Monday";
        dayThree.innerText = "Tuesday";
        dayFour.innerText = "Wednesday";
        dayFive.innerText = "Thursday";
        break;
    
}
}

// FORECAST DAYS// 

const dayOne = document.querySelector(".dayOne");
const tempMaxCardOne = document.querySelector(".tempmaxone");
const tempMinCardOne = document.querySelector(".tempminone");
const iconImgOne = document.querySelector(".iconOne img");

const dayTwo = document.querySelector(".dayTwo");
const tempMaxCardTwo = document.querySelector(".tempmaxtwo");
const tempMinCardTwo = document.querySelector(".tempmintwo");
const iconImgTwo = document.querySelector(".iconTwo img");

const dayThree = document.querySelector(".dayThree");
const tempMaxCardThree = document.querySelector(".tempmaxthree");
const tempMinCardThree = document.querySelector(".tempminthree");
const iconImgThree = document.querySelector(".iconThree img");

const dayFour = document.querySelector(".dayFour");
const tempMaxCardFour = document.querySelector(".tempmaxfour");
const tempMinCardFour = document.querySelector(".tempminfour");
const iconImgFour = document.querySelector(".iconFour img");

const dayFive = document.querySelector(".dayFive");
const tempMaxCardFive = document.querySelector(".tempmaxfive");
const tempMinCardFive = document.querySelector(".tempminfive");
const iconImgFive = document.querySelector(".iconFive img");

const setDaysData = data => {
   
    //DAY ONE//
    let tempMinOne = data.list[2].main.temp_min;
    let tempMaxOne = data.list[7].main.temp_max;
    let iconOne = data.list[5].weather[0].icon;
    
    updateDetailsDayOne(tempMaxOne, tempMinOne, iconOne);
    //DAY ONE//


    //DAY TWO //
    let tempMinTwo = data.list[10].main.temp_min;
    let tempMaxTwo = data.list[15].main.temp_max;
    let iconTwo = data.list[15].weather[0].icon;
    updateDetailsDayTwo(tempMaxTwo, tempMinTwo, iconTwo);
    

    //DAY THREE//
    let tempMinThree = data.list[18].main.temp_min;
    let tempMaxThree = data.list[23].main.temp_max;
    let iconThree = data.list[23].weather[0].icon;   
    updateDetailsDayThree(tempMaxThree, tempMinThree, iconThree);

    // DAY FOUR //
    let tempMinFour = data.list[26].main.temp_min;
    let tempMaxFour = data.list[31].main.temp_max;
    let iconFour = data.list[31].weather[0].icon;
    updateDetailsDayFour(tempMaxFour, tempMinFour, iconFour);

    // DAY FIVE //
    let tempMinFive = data.list[34].main.temp_min;
    let tempMaxFive = data.list[39].main.temp_max;
    let iconFive = data.list[39].weather[0].icon;
    updateDetailsDayFive(tempMaxFive, tempMinFive, iconFive);
}

const days = () => {
    let dateOne = new Date();
    return `${dateOne.getDate() + 1}`
}

function updateDetailsDayOne(tempMaxOne, tempMinOne, iconOne) {
    const iconOneSrc = `img/${iconOne}@2x.png`;
    iconImgOne.setAttribute("src", iconOneSrc);
   tempMaxCardOne.innerText = tempMaxOne + "°C";
   tempMinCardOne.innerText = tempMinOne + "°C";
}

function updateDetailsDayTwo(tempMaxTwo, tempMinTwo, iconTwo) {
    const iconTwoSrc = `img/${iconTwo}@2x.png`;
    iconImgTwo.setAttribute("src", iconTwoSrc);
   tempMaxCardTwo.innerText = tempMaxTwo + "°C";
   tempMinCardTwo.innerText = tempMinTwo + "°C";
}

function updateDetailsDayThree(tempMaxThree, tempMinThree, iconThree) {
    const iconThreeSrc = `img/${iconThree}@2x.png`;
    iconImgThree.setAttribute("src", iconThreeSrc);
   tempMaxCardThree.innerText = tempMaxThree + "°C";
   tempMinCardThree.innerText = tempMinThree + "°C";
}


function updateDetailsDayFour(tempMaxFour, tempMinFour, iconFour) {
    const iconFourSrc = `img/${iconFour}@2x.png`;
    iconImgFour.setAttribute("src", iconFourSrc);
   tempMaxCardFour.innerText = tempMaxFour + "°C";
   tempMinCardFour.innerText = tempMinFour + "°C";
}


function updateDetailsDayFive(tempMaxFive, tempMinFive, iconFive) {
    const iconFiveSrc = `img/${iconFive}@2x.png`;
    iconImgFive.setAttribute("src", iconFiveSrc);
   tempMaxCardFive.innerText = tempMaxFive + "°C";
   tempMinCardFive.innerText = tempMinFive + "°C";
}




let onLoad = () => {
   if(navigator.geolocation.getCurrentPosition(fetchData, setDaysData)){

   } else  {
    alert("Please, you need to active Location.");
   }
}


