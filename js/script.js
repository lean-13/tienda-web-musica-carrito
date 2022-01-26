
// iva
const IVA = 1.21;
// envio gratis
const ENVIOGRATIS = 40;


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



let modalAbrir = document.querySelectorAll(".botonCompra")[0];
let modalCerrar = document.querySelectorAll(".botonCerrar")[0];
let modalCompra = document.querySelectorAll(".modalCompra")[0];

modalAbrir.addEventListener("click", function(e) {
    agregarCarrito()
    e.preventDefault();
    modalCompra.style.opacity = "1";
    modalCompra.style.visibility = "visible";
});

modalCerrar.addEventListener("click", function() {
    modalCompra.style.opacity = "0";
    modalCompra.style.visibility = "hidden";
})