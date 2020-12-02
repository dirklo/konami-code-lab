const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;
function init() {
document.body.addEventListener("keydown", (event) => {
  console.log(`${event.key}`);
  if (event.key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("Hurray");
    }
  } else {
    index = 0;
  }
}) 
}

