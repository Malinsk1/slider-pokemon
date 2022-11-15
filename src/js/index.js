const btnAvanced = document.getElementById("btn-avanced");
const btnGoBack = document.getElementById("btn-go-back");
const cards = document.querySelectorAll(".card");
let cardActual = 0;

function hiddenCardSelected() {
  const cardSelected = document.querySelector(".select");
  cardSelected.classList.remove("select");
}

function showCard(indexCard) {
  cards[indexCard].classList.add("select");
}

btnAvanced.addEventListener("click", function () {
  if (cardActual === cards.length - 1) return;

  hiddenCardSelected();

  cardActual++;
  showCard(cardActual);
});

btnGoBack.addEventListener("click", function () {
  if (cardActual === 0) return;

  hiddenCardSelected();

  cardActual--;
  showCard(cardActual);
});
