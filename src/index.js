function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  londonDateElement.innerHTML = moment().format("MMMM D YYYY");
  londonTimeElement.innerHTML = moment
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");

  //New York
  let newyorkElement = document.querySelector("#new-york");
  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");

  newyorkDateElement.innerHTML = moment().format("MMMM D YYYY");
  newyorkTimeElement.innerHTML = moment
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
         </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement = addEventListener("change", updateCity);
