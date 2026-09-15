const languageCards = document.querySelectorAll(".card");

languageCards.forEach((card) => {
    card.addEventListener("click", () => {
        languageCards.forEach((otherCard) => {
            otherCard.classList.remove("selected");
        });

        card.classList.add("selected");
    });
});console.log("Schatzsuche gestartet");
