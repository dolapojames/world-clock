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

updateTime();
setInterval(updateTime, 1000);
