const previewImage = document.getElementsByClassName('preview-image');
const fullsizeImage = document.getElementsByClassName('full-image');
const fullGalleryBackground = document.getElementById('full-gallery-background');
let clickedImage = 0;

for (let i=0; i < previewImage.length; i++) {
    previewImage[i].addEventListener('click', function() {
        clickedImage = i;
        openGallery(clickedImage);
    });
}

function openGallery(i) {
    fullGalleryBackground.style.display = 'block';
    showImages(i);
}

function closeGallery() {
    fullGalleryBackground.style.display = 'none';
}

function plusSlide(n) {
    showImages(clickedImage += n);
}

function showImages(n) {
    if (clickedImage > fullsizeImage.length) clickedImage = 0;
    if(n < 1) clickedImage = fullsizeImage.length;
    for (let i = 0; i < fullsizeImage.length; i++) {
        fullsizeImage[i].style.display = "none";
      }
      fullsizeImage[n-1].style.display = 'block';
}