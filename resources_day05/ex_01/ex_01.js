function resetPrice() {
    let prixElement = document.getElementById("price");
    prixElement.textContent = '0 €';
}

window.onload = function(){
    resetPrice();
}

function rechargerPage() {
    location.reload();
}
