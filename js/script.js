
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

const addCartProductoButon = document.querySelectorAll('.botonCompra');
addCartProductoButon.forEach(addCartButon => {
    addCartButon.addEventListener('click', addCart);
})

function addCart(e) {
    const boton = event.target;
    const item = boton.closest('.productoItems');
    setCarrito(item);
}
const setCarrito = objeto => {
    console.log(objeto)
}

/*
const IVA = 1.21;
let numeroCuotas = 1;


function precioFinal() {
    precioProductoFinal = precio * IVA * infoModal;
    const infoPrecioFinal = document.getElementById('infoPrecioFinal')
    infoPrecioFinal.textContent = "Precio: $" + precioProductoFinal;
}

// cuotas

const selectCuotas = document.querySelector('.selectCuotas');

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

const MAX = 9;
let infoModal = 1;
function mostrarCompra() {
    if (infoModal === 1) {
        const infoCompra = document.getElementById("infoProductoComprado");
        infoCompra.textContent = "Producto: " + carrito.toString();
        infoModal = infoModal + 1;
    }
    else if (infoModal >= 2) {
        const numeroProductos = document.getElementById("infoNumeroComprado");
        numeroProductos.textContent ="Cantidad: " + infoModal;
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
    addCarrito();
    calcularPrecioCuotas();
    mostrarCompra();
});

modalCerrar.addEventListener("click", function() {
    modalCompra.style.opacity = "0";
    modalCompra.style.visibility = "hidden";
})

*/