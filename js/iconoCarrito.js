
// icono carrito
const iconoCarrito = document.querySelector('.iconoCarritoCompra');

document.addEventListener('DOMContentLoaded', () => {
    iconoCarritoCompra()
});


const iconoCarritoCompra = () => {
    iconoCarrito.innerHTML = ''
    if (localStorage.getItem('carrito').length === 0){
        iconoCarrito.innerHTML = 'shopping_cart'
    }
    else {
        iconoCarrito.innerHTML = 'shopping_cart_checkout'
    }
}