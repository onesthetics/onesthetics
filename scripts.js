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


// admin area


const correctPin = '2718'; // Replace with your desired PIN

function authenticate() {
    const pinInput = document.getElementById('pin-input').value;
    if (pinInput === correctPin) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('admin-section').style.display = 'block';
    } else {
        alert('Incorrect PIN');
    }
}

document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productImage = document.getElementById('product-image').value;
    const productTitle = document.getElementById('product-title').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = document.getElementById('product-price').value;

    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const img = document.createElement('img');
    img.src = productImage;
    img.alt = productTitle;

    const h2 = document.createElement('h2');
    h2.textContent = productTitle;

    const pDescription = document.createElement('p');
    pDescription.textContent = productDescription;

    const pPrice = document.createElement('p');
    pPrice.className = 'price';
    pPrice.textContent = `$${productPrice}`;

    productCard.appendChild(img);
    productCard.appendChild(h2);
    productCard.appendChild(pDescription);
    productCard.appendChild(pPrice);

    document.getElementById('product-container').appendChild(productCard);

    // Clear form
    document.getElementById('product-form').reset();
});

