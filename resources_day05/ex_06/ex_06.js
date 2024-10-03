document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementsByTagName('img');
  
    imageElement.addEventListener('mouseover', function() {
      alert("Pretty, isn't it?");
    });
    
    window.addEventListener("resize", (event) => {
        alert("Size matters");
    });
  });
  