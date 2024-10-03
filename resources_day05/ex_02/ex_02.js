document.addEventListener('DOMContentLoaded', function() {
    const texteElements = document.querySelectorAll('p');
    let compteur = 0;
    texteElements.forEach((element) => {
      element.textContent = compteur.toString();
      compteur++;
    });
});
