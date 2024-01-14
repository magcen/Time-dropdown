function showSelectedCity(event) {
  if (event.target.value === "london") {
    alert("hello");
  }
  if (event.target.value === "rome") {
    alert("ciao");
  }
  if (event.target.value === "warsaw") {
    alert("cześć");
  }
}

let citySelect = document.querySelector("#cities");
console.log(citySelect.value);
citySelect.addEventListener("change", showSelectedCity);
