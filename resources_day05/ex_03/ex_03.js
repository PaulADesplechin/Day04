document.addEventListener('DOMContentLoaded', function() {
    var texteElements = document.querySelectorAll('p');
    var lastTexte = texteElements[texteElements.length - 1];
    var newTexte = document.createElement('p');

    newTexte.textContent = 'Now featuring a headphone jack!';
    lastTexte.insertAdjacentElement('afterend', nouveauTexte);
});
