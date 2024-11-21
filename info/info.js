// Loader Para la pagina web
window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
        const contenido = document.getElementById('contenido');
        contenido.style.display = 'block';
    }, 3000); 
});


// mapa

function iniciarMap(){
  
    var coord = {lat:4.623009337896679 ,lng: -75.7630088154036};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}