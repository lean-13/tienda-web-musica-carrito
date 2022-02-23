

const vaciar = document.getElementById('botonVaciarCarrito')
const reinicioPrecio = document.querySelector('.precio__total__numero');

const selectCuotas = document.querySelector('.imputSeleccionCuotas');

vaciar.addEventListener('click', () => {
    vaciarCarrito();
})

const vaciarCarrito = () => {
    carrito = {};
    pintarCarrito();
    reinicioPrecio.textContent = "$ " + "0000"
}


selectCuotas.addEventListener('change', (event) => {
    const cantidadCuotas = document.getElementById('infoNumeroCuotas');
    cantidadCuotas.textContent = "Cuotas: " + event.target.value;
    numeroCuotas = event.target.value;
})

function calcularPrecioCuotas() {
    let precioCuotas = precioProductoFinal / numeroCuotas;
    const infoPrecioCuotas = document.getElementById('infoPrecioCuotas')
    infoPrecioCuotas.textContent = "Cuotas de: $" + precioCuotas;
}
