
const IVA = 1.21;

// producto carrito
const templateCarritoProducto = document.querySelector('#templateProducto').content;
const carritoItems = document.querySelector('.carritoItems');
const confirmacionCompra = document.querySelector('.carritoCompraFinal');
const fragment = document.createDocumentFragment();


// productos
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch('../../data/dataProductos.json');
        const data = await res.json();
    } catch (error) {
        console.log(Error);
    }
}

let carrito = {};


const addCartProductoButon = document.querySelectorAll('.botonCompra');
addCartProductoButon.forEach(addCartButon => {
    addCartButon.addEventListener('click', addCart);
})

function addCart(e) {
    const boton = e.target;
    const item = boton.closest('.productoItems');
    setCarrito(item);
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.botonCompra').id,
        img: objeto.querySelector('.imgProducto').src,
        nombre: objeto.querySelector('.tituloProducto').textContent,
        precio: objeto.querySelector('.precioProducto').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
    pintarCarrito();
}
const pintarCarrito = () => {
    Object.values(carrito).forEach(producto => {
        templateCarritoProducto.querySelector('.imgProductoCarrito').src = producto.img
        templateCarritoProducto.querySelector('.infoIdProductoCarrito').textContent = producto.cantidad
        templateCarritoProducto.querySelector('.infoProductoCarrito').textContent = producto.nombre
        templateCarritoProducto.querySelector('.precioProductoCarrito').textContent = producto.precio
        confirmacionCompra.querySelector('.precio__total__numero').textContent = producto.cantidad * producto.precio * IVA
        const clone = templateCarritoProducto.cloneNode(true)
        fragment.appendChild(clone)
    })
    carritoItems.appendChild(fragment)
}


/*

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
