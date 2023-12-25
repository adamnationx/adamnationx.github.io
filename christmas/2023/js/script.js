let currentImageIndex = -1;
const images = document.querySelectorAll('.holidayImg');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const imgLabel = document.getElementById('imgLabel');

imgLabel.addEventListener('click', function() {
    currentImageIndex = 0;
    showImage();
});

images.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        currentImageIndex = index;
        showImage();
    });
});

function showImage() {
    if (currentImageIndex >= 0 && currentImageIndex < images.length) {
        lightboxImage.src = images[currentImageIndex].src;
        lightboxCaption.innerText = images[currentImageIndex].getAttribute('data-caption');
        lightboxOverlay.style.display = 'flex';
    }
}

document.getElementById('closeLightbox').addEventListener('click', function() {
    lightboxOverlay.style.display = 'none';
});

document.getElementById('prevArrow').addEventListener('click', function() {
    currentImageIndex = currentImageIndex > 0
        ? currentImageIndex - 1
        : images.length - 1;

    showImage();
});

document.getElementById('nextArrow').addEventListener('click', function() {
    currentImageIndex = currentImageIndex < images.length - 1
        ? currentImageIndex + 1
        : 0;

    showImage();
});
