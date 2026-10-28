function moveImage() {
    var image = document.getElementById('moving-image');
    var position = 0; 
    var speed = 4; 

    function updatePosition() {
      position += speed;
      image.style.left = position + 'px';

      if (position >= window.innerWidth - image.width) {
        speed *= -1;
        image.style.transform = 'translateX(0) scaleX(-1)';
        
      }

      if (position <= 0) {
        speed *= -1; 
        image.style.transform = 'translateX(0) scaleY(1)';
    
      }
    }

    setInterval(updatePosition, 16); 
  }


  moveImage();