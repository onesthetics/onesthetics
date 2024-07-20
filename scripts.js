// script.js
document.getElementById("title").onclick = function() {
    document.getElementById("myModal").style.display = "block";
    showSlides(slideIndex);
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var slideIndex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block"; 
}

document.querySelector('.prev').addEventListener('click', function() {
    showSlides(slideIndex -= 1);
});

document.querySelector('.next').addEventListener('click', function() {
    showSlides(slideIndex += 1);
});
