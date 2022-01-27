
// array carrito

let productoCarrito = " ";
let numeroPosicionProducto;
const carrito = [];

function agregarCarrito() {
    productoCarrito = "GUITARRA CRIOLLA CLÁSICA";
    carrito.push("\n" + productoCarrito);
    posicionProducto();
}

// contar productos
function posicionProducto() {
    for (let index = 0; index < carrito.length; index++) {
        numeroPosicionProducto = index + 1;
    }
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