let card = document.querySelector(".card");
let button = document.getElementById("button");
let cross = document.querySelector(".ri-close-fill");


button.addEventListener("click", () => {
    card.style.transform = "translateY(0)";
});

cross.addEventListener("click", () => {
    card.style.transform = "translateY(-620px)";
});
