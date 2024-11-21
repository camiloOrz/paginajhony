// Loader Para la pagina web
window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
        const contenido = document.getElementById('contenido');
        contenido.style.display = 'block';
    }, 3000); 
});



// Botones de busqueda
document.getElementById("myButton").onclick = function() {
    window.location.href = 'https://www.velassanjorge.com/tienda/';
};