

const whiteBtn = document.querySelector(".white");
const blackBtn = document.querySelector(".black");
const body = document.body;

whiteBtn.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  body.style.color = "black"; // чтобы текст был видно
});

blackBtn.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  body.style.color = "white"; // чтобы текст был видно
});
