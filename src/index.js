function showSelectedCity(event) {
  let londonTime = moment()
    .tz("Europe/London")
    .format("[It is currently] dddd, MMMM D, YYYY, h:mm A [in Europe/London.]");
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format(
      "[It is currently] dddd, MMMM D, YYYY, h:mm A [in Australia/Sydney.]"
    );
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("[It is currently] dddd, MMMM D, YYYY, h:mm A [in Asia/Tokyo.]");
  if (event.target.value === "london") {
    alert(londonTime);
  }
  if (event.target.value === "sydney") {
    alert(sydneyTime);
  }
  if (event.target.value === "tokyo") {
    alert(tokyoTime);
  }
}

let citySelect = document.querySelector("#cities");
console.log(citySelect.value);
citySelect.addEventListener("change", showSelectedCity);
