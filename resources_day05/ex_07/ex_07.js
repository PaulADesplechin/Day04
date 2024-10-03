document.addEventListener('DOMContentLoaded', function() {
    const cartButton = document.getElementById('addToCart');
    let buttonElements = document.getElementsByClassName('cart-btn');
    
    for(var i = 0; i < buttonElements.length; i++){
        buttonElements[i].innerText = "CHANGE COLOR"; // Change the content
    }

    cartButton.addEventListener('click', function() {
        generateRandomBackground();
    });

    function generateRandomBackground(){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let randomColor = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.background = randomColor;
    }

});
