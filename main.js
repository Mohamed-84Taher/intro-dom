var title = document.querySelector("#title");
var username = document.getElementById("name");
var fields = document.querySelectorAll(".field");
var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
var plus = document.querySelectorAll(".btn-plus");
var minus = document.querySelectorAll(".btn-minus");
var quantity = document.querySelectorAll(".quantity");

function handleAlert() {
  if (username.value) {
    alert("Hello from " + username.value);
  }
}

// event listenner
username.addEventListener("input", function () {
  content.innerText = username.value;
});
btn.addEventListener("click", handleAlert);

// increment
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    //   quantity.innerText = Number(quantity.innerText) + 1;
    quantity[i].innerText++;
  });
  // decrement
  minus[i].addEventListener("click", function () {
    //   quantity.innerText = Number(quantity.innerText) + 1;
    if (quantity[i].innerText > 0) {
      quantity[i].innerText--;
    }
  });
}
