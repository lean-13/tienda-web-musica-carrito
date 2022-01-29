
const items = document.getElementById('carrito');
const elementProducto = document.getElementById('producto__x').content;

// productos
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch('../data/dataProductos.json');
        const data = await res.json();
    } catch (error) {
        console.log(Error);
    }
}

// array carrito

let productoCarrito = " ";
let precio = 34000;
const IVA = 1.21;
let numeroPosicionProducto;
let numeroCuotas = 1;
let precioProductoFinal;
const carrito = [];

function agregarCarrito() {
    productoCarrito = "Guitarra Criolla Clasica";
    carrito.push("\n" + productoCarrito);
    precioFinal();
}

function precioFinal() {
    precioProductoFinal = precio * IVA * infoModal;
    const infoPrecioFinal = document.getElementById('infoPrecioFinal')
    infoPrecioFinal.textContent = "Precio: $" + precioProductoFinal;
}

// cuotas

const selectCuotas = document.querySelector('.selectCuotas');

selectCuotas.addEventListener('change', (event) => {
    const cantidadCuotas = document.getElementById('infoNumeroCuotas');
    infoNumeroCuotas.textContent = "Cuotas: " + event.target.value;
    numeroCuotas = event.target.value;
})

function calcularPrecioCuotas() {
    let precioCuotas = precioProductoFinal / numeroCuotas;
    const infoPrecioCuotas = document.getElementById('infoPrecioCuotas')
    infoPrecioCuotas.textContent = "Cuotas de: $" + precioCuotas;
}

const MAX = 9;
let infoModal = 1;
function mostrarCompra() {
    if (infoModal === 1) {
        const infoCompra = document.getElementById("infoProductoComprado");
        infoProductoComprado.textContent = "Producto: " + carrito.toString();
        infoModal = infoModal + 1;
    }
    else if (infoModal >= 2) {
        const numeroProductos = document.getElementById("infoNumeroComprado");
        infoNumeroComprado.textContent ="Cantidad: " + infoModal;
        if (infoModal < MAX) {
            infoModal = infoModal + 1;
        }
    }
}   

let modalAbrir = document.querySelectorAll(".botonCompra")[0];
let modalCerrar = document.querySelectorAll(".botonCerrar")[0];
let modalCompra = document.querySelectorAll(".modalCompra")[0];

modalAbrir.addEventListener("click", function(e) {
    e.preventDefault();
    modalCompra.style.opacity = "1";
    modalCompra.style.visibility = "visible";
    agregarCarrito();
    calcularPrecioCuotas()
    mostrarCompra();
});

modalCerrar.addEventListener("click", function() {
    modalCompra.style.opacity = "0";
    modalCompra.style.visibility = "hidden";
})