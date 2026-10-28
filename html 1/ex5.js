const animalImages = [
    "animal00.jpg",
    "animal01.jpg",
    "animal02.jpg",
    "animal03.jpg",
    "animal04.jpg",
    "animal05.jpg",
    "animal06.jpg",
    "animal07.jpg",
];

const animalImg = document.getElementById("animal-img");
const showBtn = document.getElementById("show-btn");

function showRandomAnimal() {
    const randomIndex = Math.floor(Math.random() * animalImages.length);
    const randomAnimal = animalImages[randomIndex];
    animalImg.src = randomAnimal;
}

showBtn.addEventListener("click", showRandomAnimal);