import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
const element = document.querySelector("body");
element.onclick = function () {
  element.innerHTML =
    "<article class='message'>Neshto1</article><article class='message'>Neshto1</article><article class='message'>Neshto1</article><article class='message'>Neshto1</article><article class='message'>Neshto1</article>";
};
