// 1) Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією.
// При зникненні фокуса - так само пропадає

let $input = document.querySelector("#input");
let $firstTaskDiv = document.querySelector("#firstTaskDiv");

let $div = document.createElement("div");
$div.style.display = "inline";
$div.textContent =
  "The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; " +
  "a wide variety of types of input data and control widgets are available, depending on the device and user agent. " +
  "The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations " +
  "of input types and attributes.";

$input.addEventListener("focus", function () {
  $firstTaskDiv.append($div);
});

$input.addEventListener("blur", function () {
  $div.remove();
});

// 2) На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання,
// при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https.
// Якщо протокол не вказано - додаємо

let link = null;

let $button1 = document.querySelector(".getLink");
let $button2 = document.querySelector(".goForwardLink");

$button1.addEventListener("click", function () {
  link = prompt("Введіть посилання: ");
});

$button2.addEventListener("click", function () {
  if (link === null || link.trim() === "") {
    console.log("Помилка в посиланні, спробуйте ще раз =(");
  } else if (link.startsWith("https://") || link.startsWith("http://")) {
    window.location.assign(link);
  } else {
    link = "http://" + link;
    window.location.assign(link);
  }
  console.log(link);
  link = null;
});

// 3) Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

let $div3 = document.querySelector("#thirdTaskDiv");

let table = document.createElement("table");
// table.style.border = "1px solid red";
let innerTable = "";
let num = 1;
for (let i = 0; i < 10; i++) {
  innerTable += "<tr>";
  for (let j = 0; j < 10; j++) {
    innerTable += `<td>${num++}</td>`;
  }
  innerTable += "</tr>";
}
table.innerHTML = innerTable;
$div3.append(table);

// 4) У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення з цієї папки отримане випадковим чином (Math.random)

let $div4 = document.querySelector("#fourthTaskDiv");
let $btnRandom = document.getElementById("randomNumber");
let p = null;
let image = null;

$btnRandom.addEventListener("click", function () {
  if (p !== null) {
    p.remove();
    image.remove();
  }
  let number = Math.floor(Math.random() * (10 - 1)) + 1;
  p = document.createElement("p");
  p.innerHTML = number;
  $div4.append(p);
  image = document.createElement("img");
  image.src = `../images/${number}.jpg`;
  image.style.width = "400px";
  image.style.height = "300px";
  $div4.append(image);
});
