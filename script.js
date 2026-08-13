// ⚡ Make your page interactive here.

let clicks = 0;

const button = document.getElementById("magic-btn");
const counter = document.getElementById("counter");

button.addEventListener("click", () => {
  clicks = clicks + 1;
  counter.textContent = "You clicked " + clicks + " times.";
  console.log("Button clicked!", clicks);
});