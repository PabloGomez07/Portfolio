  //CODIGO JAVASCRIPT
        

 // Función para abrir la ventana emergente
        function abrirVentana() {
            document.getElementById("miVentana").style.display = "block";
        }

        // Función para cerrar la ventana emergente
        function cerrarVentana() {
            document.getElementById("miVentana").style.display = "none";
        }

// Asociar la función de abrirVentana al evento clic del botón
        document.getElementById("miProject").addEventListener("click", abrirVentana);

new Glider(document.querySelector('.glider'), {
      slidesToShow: 5,
      slidesToScroll: 5,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });