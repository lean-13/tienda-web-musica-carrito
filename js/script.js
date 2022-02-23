
const IVA = 1.21;

// producto carrito
const templateCarritoProducto = document.querySelector('#templateProducto').content;
const carritoItems = document.querySelector('.carritoItems');
const confirmacionCompra = document.querySelector('.carritoCompraFinal');
const producto = document.querySelector('.productoItems');
const fragment = document.createDocumentFragment();
// sumar-restar productos
const botonSumar = document.querySelector('.botonSumarProducto');
const botonRestar = document.querySelector('.botonRestarProducto');

const dataProductos = '../../data/dataProductos.json'

// productos
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        pintarCarrito();
    }
});

const fetchData = async () => {
    try {
        // productos
        const res = await fetch(dataProductos);
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

carritoItems.addEventListener('click', e => {
    botonSumaResta(e);
})

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
    carritoItems.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarritoProducto.querySelector('.imgProductoCarrito').src = producto.img
        templateCarritoProducto.querySelector('.infoIdProductoCarrito').textContent = producto.cantidad
        templateCarritoProducto.querySelector('.infoProductoCarrito').textContent = producto.nombre
        templateCarritoProducto.querySelector('.precioProductoCarrito').textContent = producto.precio
        confirmacionCompra.querySelector('.precio__total__numero').textContent = "$" + producto.cantidad * producto.precio * IVA
        const clone = templateCarritoProducto.cloneNode(true)
        fragment.appendChild(clone)
    })
    carritoItems.appendChild(fragment)

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const botonSumaResta = e => {
    console.log(e.target)
    if(e.target.classList.contains('botonSumarProducto')) {
        console.log(carrito[e.target.id])
    }
}
