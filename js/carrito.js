$(document).ready(function () {
    
// boton vaciar
let vaciar = $('#botonVaciarCarrito')
let reinicioPrecio = $('.precio__total__numero');
// modal compra
let modalExteriorCompra = $('.modalCompraExterior');
let modalCompra = $('.modalCompraCarrito')
// boton compra
let botonCompra = $('#botonAbrirModalCompra');
// boton cerrar modal
let botonCancelar = $('#botonCancelar');
// modal confirmacion
let modalExteriorConfirmacion = $('.modalConfirmacionExterior');
let modalConfirmacion = $('.modalConfirmacion');

// compra
$(botonCompra).on('click', () => {
    if (localStorage['carrito'].length > 2) {
        mostrarModalCompra();
    }
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
    modalCompra.animate({top:'-540px'},800)
}
// confirmacion compra

$('#datosDePago').submit(function(e) { 
    e.preventDefault();
    vaciarCarrito();
    vaciarFormulario();
    mostrarModalConfirmacion();
});
const mostrarModalConfirmacion = () => {
    cerrarModalCompra();
    modalExteriorConfirmacion.fadeIn(800);
    modalConfirmacion.animate({top:'80px'},800)
}

$(modalExteriorConfirmacion).on('click', () => {
    cerrarModalConfirmacion();
})

const cerrarModalConfirmacion = () => {
    modalExteriorConfirmacion.fadeOut(800);
    modalConfirmacion.animate({top:'670px'},800)
}
// vaciar carrito
$(vaciar).on('click', () => {
    vaciarCarrito();
})

const vaciarCarrito = () => {
    carrito = {};
    pintarCarrito();
    reinicioPrecio.textContent = "$ " + "0000"
}

const vaciarFormulario = () => {
    document.getElementById("pagoFormulario").reset();
}


});


