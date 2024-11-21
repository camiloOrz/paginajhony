// Loader Para la pagina web
window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
        const contenido = document.getElementById('contenido');
        contenido.style.display = 'block';
    }, 3000); 
});





document.getElementById("toggleCarrusel").addEventListener("click", function() {
    const carruselContent = document.querySelector(".container");
    carruselContent.classList.toggle("visible"); // Alterna la visibilidad del carrusel
});

