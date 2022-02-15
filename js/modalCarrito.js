// modal carrito
$(document).ready(function () {
    let modalCarrito = $('.modalCarrito');
    let modalCarritoSeccion = $('.modalCarritoSeccion');
    let modalCarritoSeccionPrecio = $('.carritoCompraFinalPosition');
    let botonModal = $('.botonCompra');

    $(botonModal).on('click', () => {
        mostrarModalCarrito();
    })
    $('.modalCarrito').on('click', () => {
        cerrarModalCarrito();
    })
    const mostrarModalCarrito = () => {
        modalCarrito.fadeIn(800);
        modalCarritoSeccion.animate({top:'60px'},700)
        modalCarritoSeccionPrecio.animate({top:'510px'},700)
    }
    const cerrarModalCarrito = ()=>{
        modalCarrito.fadeOut(800);
        modalCarritoSeccion.animate({top:'-500px'},700);
        modalCarritoSeccionPrecio.animate({top:'-510px'},700);
    }
});