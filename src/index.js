function updateTime() {
  let laElement = document.querySelector("#los-angeles");
  if (laElement) {
    let laDateElement = laElement.querySelector(".date");
    let laTimeElement = laElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    laDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    laTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTZ = event.target.value;
  if (cityTZ === "current") {
    cityTZ = moment().tz.guess();
  }
  let cityName = cityTZ.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTZ);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = ` <div class="city" id= "los-angeles">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss[<small>]A[</small>]"
        )}</div>
      </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
