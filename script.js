var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {  
    showSlides(slideIndex += n);
}
		  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}    
	  
var xDown = null;
var yDown = null;
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);
document.addEventListener('keydown', handleKeyDown, false);

function handleTouchStart(event) {
    xDown = event.touches[0].clientX;
    yDown = event.touches[0].clientY;
};

function handleTouchMove(event) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = event.touches[0].clientX;
    var yUp = event.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { 
        if (xDiff > 0) {
            plusSlides(1);
        } else {
            plusSlides(-1);
        }
    }
    
    xDown = null;
    yDown = null;
};

function handleTouchEnd(event) {
    xDown = null;
    yDown = null;
};

function handleKeyDown(event) {
    if (document.fullscreenElement) {
        if (event.keyCode === 37 || event.keyCode === 39) {
            event.preventDefault(); // Prevent arrow keys from working in fullscreen mode
        }
    } else {
        if (event.keyCode === 37) {
            plusSlides(-1); // Left arrow key
        }
        else if (event.keyCode === 39) {
            plusSlides(1); // Right arrow key
        }
    }
}


function toggleFullScreen(img) {
    if (!document.fullscreenElement) {
        img.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}