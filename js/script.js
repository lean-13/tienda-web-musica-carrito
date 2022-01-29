
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
let numeroPosicionProducto;

const carrito = [];

function agregarCarrito() {
    productoCarrito = "Guitarra Criolla Clasica";
    carrito.push("\n" + productoCarrito);
    posicionProducto();
}
// contar productos
function posicionProducto() {
    for (let index = 0; index < carrito.length; index++) {
        numeroPosicionProducto = index + 1;
    }
}

// cuotas
let productoPrecioCuotas = " ";
let numeroCuotas = 1;

const selectCuotas = document.querySelector('.selectCuotas');

selectCuotas.addEventListener('change', (event) => {
    const resultCuotas = document.getElementById('infoNumeroCuotas');
    console.log(event.target.value);
})

function precioCuotas() {
    let cuotas = precioProducto() /  numeroCuotas;
    infoNumeroCuotas.textContent ="Cantidad: " + numeroCuotas;
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
    mostrarCompra();
});

modalCerrar.addEventListener("click", function() {
    modalCompra.style.opacity = "0";
    modalCompra.style.visibility = "hidden";
})