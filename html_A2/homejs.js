const image = document.getElementById('hire');
let position = 0;
let direction = 1;

setInterval(() => {
  position += 1 * direction;

  if (position >= 75 || position <= 0) {
    direction *= -1;
  }

  image.style.top = position + 'px';
}, 30);

///

var image1 = document.getElementById("rope");
var images = [
  "srcs/jump_rope.png", 
  "srcs/running_shoes.jpg", 
  "srcs/sport-bra.jpeg",
  "srcs/yoga_mat.jpg",
  "srcs/tennis_racket.jpg"]; 
var currentIndex = 0;

function changeImage() {
  image1.classList.add("fade-out"); 
  setTimeout(function() {
    image1.setAttribute('src', images[currentIndex]);
    image1.classList.remove("fade-out"); 
    image1.classList.add("fade-in"); 
    setTimeout(function() {
      image1.classList.remove("fade-in"); 
    }, 500); 
    currentIndex = (currentIndex + 1) % images.length;
  }, 500); 
}

setInterval(changeImage, 3000);