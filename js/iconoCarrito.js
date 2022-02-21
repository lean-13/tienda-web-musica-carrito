$(document).ready(function () {
  // icono carrito
    let iconoCarrito = $('.iconoCarritoCompra');

    $('DOMContentLoaded', () => {
        iconoCarritoCompra()
    });

    let carritoInfo = parseInt(localStorage.getItem("carrito").length);
    const iconoCarritoCompra = () => {
        if (carritoInfo <= 2){
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

