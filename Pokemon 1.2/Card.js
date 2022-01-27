const card = document.getElementById("flip-card")
card.addEventListener("click",flipCard);
function flipCard() {
    card.classList.toggle("flipCard");    
}