document.addEventListener('DOMContentLoaded', () => {
    // grab the element by it's id
    const bounceText = document.getElementById('bounceText');
    // initialize variables
    let posX = 0, posY = 0;
    let velocityX = 5, velocityY = 5;
    // taking into account width and height of screen for canvas position
    const maxX = window.innerWidth - bounceText.offsetWidth;
    const maxY = window.innerHeight - bounceText.offsetHeight;
    let updatedID;

    // Define an array of colors to cycle through
    const colors = ['blue', 'green', 'yellow', 'purple', 'orange'];
    let colorIndex = 0;

    function changeColor() {
        // Update the color index to cycle through the array
        colorIndex = (colorIndex + 1) % colors.length;
        bounceText.style.color = colors[colorIndex];
    }

    // function to bounce the element around the screen
    function updatePosition() {
        posX += velocityX;
        posY += velocityY;

        // adjusting velocity if bounced off left or right
        if (posX <= 0 || posX >= maxX) {
            velocityX = -velocityX * 1.1;
            console.log(velocityX);
            changeColor();
        }

        // adjusting velocity if bounced off top or bottom
        if (posY <= 0 || posY >= maxY) {
            velocityY = -velocityY * 1.1;
            console.log(velocityX);
            changeColor();
        }

        // adjust position of html element
        bounceText.style.left = `${posX}px`;
        bounceText.style.top = `${posY}px`;

        // updates position of text per frame
        updatedID = requestAnimationFrame(updatePosition);
    }

    // function call
    updatePosition();

    setTimeout(() => {
        cancelAnimationFrame(updatedID);
        console.log("done");
      }, 25000); 
});
