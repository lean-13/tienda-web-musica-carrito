
// icono carrito
const iconoCarrito = document.querySelector('.iconoCarritoCompra');

document.addEventListener('DOMContentLoaded', () => {
    iconoCarritoCompra()
});

let carritoInfo = parseInt(localStorage.getItem("carrito").length);

const iconoCarritoCompra = () => {
    iconoCarrito.innerHTML = ''
    if (carritoInfo <= 2){
        iconoCarrito.innerHTML = 'shopping_cart'
    }
    else {
        iconoCarrito.innerHTML = 'shopping_cart_checkout'
    }
}
