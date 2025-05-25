let currentIndex = 0 ;
const images = document.querySelectorAll('.slider img');

function showImage (index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex) ;
}

function prevImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}