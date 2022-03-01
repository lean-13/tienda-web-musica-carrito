$(document).ready(function () {
    // icono carrito
    let iconoCarrito = $('.iconoCarritoCompra');

    let localCarritoVacio = localStorage['carrito'].length;

    $('DOMContentLoaded', () => {
        iconoCarritoCompra()
    });

    const iconoCarritoCompra = () => {
        if (localCarritoVacio <= 2){
            iconoCarrito.slideUp(300);
            $(iconoCarrito).text('shopping_cart');
            iconoCarrito.slideDown(500);
        }
        else {
            iconoCarrito.slideUp(300);
            $(iconoCarrito).text('shopping_cart_checkout');
            iconoCarrito.slideDown(500);
        }
    }
    
});

