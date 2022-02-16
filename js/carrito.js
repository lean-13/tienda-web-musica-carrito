

const vaciarCarrito = document.getElementById('botonVaciarCarrito')

vaciarCarrito.addEventListener('click', () => {
    carrito = {};
    pintarCarrito();
})