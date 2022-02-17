

const vaciarCarrito = document.getElementById('botonVaciarCarrito')
const reinicionPrecio = document.querySelector('.precio__total__numero');
vaciarCarrito.addEventListener('click', () => {
    carrito = {};
    pintarCarrito();
    reinicionPrecio.textContent = "$ " + "0000"
})