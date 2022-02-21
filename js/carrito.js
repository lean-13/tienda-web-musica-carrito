

const vaciar = document.getElementById('botonVaciarCarrito')
const reinicionPrecio = document.querySelector('.precio__total__numero');
vaciar.addEventListener('click', () => {
    vaciarCarrito();
    iconoCarritoCompra()
})

const vaciarCarrito = () => {
    carrito = {};
    pintarCarrito();
    reinicionPrecio.textContent = "$ " + "0000"
}