function updateTime() {
  let laElement = document.querySelector("#los-angeles");
  let laDateElement = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  laDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  laTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
