// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll(".button");
let dark = document.querySelector(".btn");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

dark.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("body-dark");
  buttons.forEach((button) => {
    button.classList.toggle("button-dark");
  });
  document.querySelector(".container").classList.toggle("container-dark");
});
