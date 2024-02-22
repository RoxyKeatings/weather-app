function search(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-input");

  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = searchInputElement.value;

  const apiKey = "89b05tfca20b16d5f5e3c646e1oa37db";

  function getTempValue(response) {
    console.log(response);

    let temp = document.querySelector(".current-temperature-value");

    temp.innerHTML = Math.round(response.data.temperature.current);
  }

  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTempValue);
}

function formatDate(date) {
  let minutes = date.getMinutes();

  let hours = date.getHours();

  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",

    "Monday",

    "Tuesday",

    "Wednesday",

    "Thursday",

    "Friday",

    "Saturday",
  ];

  let formattedDay = days[day];

  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");

let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
