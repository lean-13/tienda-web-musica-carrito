
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


function mostrarCompra() {
    const infoCompra = document.getElementById("modalCompraInfo");
    const htmlInfoCompra = document.createElement("p")
    htmlInfoCompra.textContent = carrito.toString();
    infoCompra.appendChild(htmlInfoCompra)
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