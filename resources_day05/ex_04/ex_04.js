document.addEventListener('DOMContentLoaded', function() {
    var textElements = document.querySelectorAll('p');
    var finalParagraph = textElements[textElements.length - 1];
    var addedParagraph = document.createElement('p');

    addedParagraph.textContent = 'Now featuring a headphone jack!';
    finalParagraph.insertAdjacentElement('afterend', addedParagraph);
});
