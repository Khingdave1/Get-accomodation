    // Access DOM elemnts //
const myImage = document.getElementById('pix');
const headContent = document.getElementById('header_cont');
const menu = document.getElementById('menu');


    // Modify DOM elemnts //
// apartment slide //
const imageArray = ['apartm1.jpg', 'apartm2.jpg'];
var imageIndex = 0;
function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}
setInterval(changeImage, 2000); /* image timer */


// menu toggle //
menu.addEventListener('click', function(){
    headContent.classList.toggle('open-menu');
});

