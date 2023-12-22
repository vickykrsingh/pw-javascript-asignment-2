// 25. Move the Image

// The objective is to write a JavaScript program that enables an image to move according to the direction 
// specified by the arrow keys. The program must be able to recognize and respond to the input from the arrow 
// keys, and accordingly, update the position of the image on the screen. The program should be able to handle 
// the movement of the image in all directions, including up, down, left, and right, in a smooth and responsive 
// manner. Have a look at the event key codes before starting the project

var image = document.getElementById('movingImage');
        var step = 10; // Adjust the step size as needed

        // Initial position of the image
        var positionX = 0;
        var positionY = 0;

        // Function to update the position of the image
        function updatePosition() {
            image.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';
        }

        // Event listener for arrow key presses
        window.addEventListener('keydown', function (event) {
            switch (event.key) {
                case 'ArrowUp':
                    positionY -= step;
                    break;
                case 'ArrowDown':
                    positionY += step;
                    break;
                case 'ArrowLeft':
                    positionX -= step;
                    break;
                case 'ArrowRight':
                    positionX += step;
                    break;
            }

            // Update the position of the image
            updatePosition();
        });