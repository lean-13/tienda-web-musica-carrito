
// icono carrito
const iconoCarrito = document.querySelector('.iconoCarritoCompra');

document.addEventListener('DOMContentLoaded', () => {
    iconoCarritoCompra()
});


let carritoInfo = parseInt(localStorage.getItem("carrito").length);
console.log(carritoInfo)
const iconoCarritoCompra = () => {
    iconoCarrito.innerHTML = ''
    if (carritoInfo <= 2){
        iconoCarrito.innerHTML = 'shopping_cart'
    }
    else {
        iconoCarrito.innerHTML = 'shopping_cart_checkout'
    }
}
/*
let carritoInfo =  JSON.parse(localStorage.carrito);
console.log(carritoInfo)

const iconoCarritoCompra = () => {
    iconoCarrito.innerHTML = ''
    if (Object.keys(carrito).length === 0){
        iconoCarrito.innerHTML = 'shopping_cart'
    }
    else {
        iconoCarrito.innerHTML = 'shopping_cart_checkout'
    }
}
*/