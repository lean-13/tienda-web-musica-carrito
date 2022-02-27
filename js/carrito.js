$(document).ready(function () {
    
// boton vaciar
let vaciar = $('#botonVaciarCarrito')
let reinicioPrecio = $('.precio__total__numero');
// modal compra
let modalExteriorCompra = $('.modalCompraExterior');
let modalCompra = $('.modalCompraCarrito')
// boton compra
let botonCompra = $('#botonAbrirModalCompra');
// boton confirmar
let botonConfirmarCompra = $('#botonComprarCarrito')
// boton cerrar modal
let botonCancelar = $('#botonCancelar');


// compra
$(botonCompra).on('click', () => {
    mostrarModalCompra();
})

const mostrarModalCompra = () => {
    modalExteriorCompra.fadeIn(800);
    modalCompra.animate({top:'60px'},700)
}

$(botonCancelar).on('click', () => {
    cerrarModalCompra();
})
const cerrarModalCompra = () => {
    modalExteriorCompra.fadeOut(800);
    modalCompra.animate({top:'-540px'},700)
}
// confirmacion compra
// vaciar carrito
$(vaciar).on('click', () => {
    vaciarCarrito();
})

const vaciarCarrito = () => {
    carrito = {};
    pintarCarrito();
    reinicioPrecio.textContent = "$ " + "0000"
}



});


