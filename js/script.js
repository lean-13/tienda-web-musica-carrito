/*
// iva
const IVA = 1.21;
// envio gratis
const ENVIOGRATIS = 40;

// productos
class Producto{

    constructor(nombre,marca,precio){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }

    calcularEnvio(){
        if (this.precio > ENVIOGRATIS) {
            this.envio = 0;
        }
        else {
            this.envio = 800;
        }
    }
    sumaIva(){
        this.precio = this.precio * IVA;
    }

    mostrarProducto(){
        alert("Producto: " + this.nombre + "\n" + "Marca: " + this.marca + "\n" + "Precio: " + this.precio + " Dolares" + "\n" + "Envio: " + this.envio + " pesos");
    }
}

// productos
const GUITARRA = new Producto("GUITARRA CRIOLLA CLÁSICA","ALPUJARRA","329");
const PIANO = new Producto("PIANO ELÉCTRICO","ARTESIA","474");

// array carrito

let productoCarrito = " ";
let numeroPosicionProducto;
const carrito = [];

function agregarCarrito() {
    productoCarrito = "GUITARRA CRIOLLA CLÁSICA";
    carrito.push("\n" + productoCarrito);
    posicionProducto();
    alert(numeroPosicionProducto + "-" + productoCarrito + " agregado al carrito con exito");
}

// contar productos
function posicionProducto() {
    for (let index = 0; index < carrito.length; index++) {
        numeroPosicionProducto = index + 1;
    }
}
*/


let modalAbrir = document.querySelectorAll(".botonCompra")[0];
let modalCerrar = document.querySelectorAll(".botonCerrar")[0];
let modalCompra = document.querySelectorAll(".modalCompra")[0];

modalAbrir.addEventListener("click", function(e) {
    e.preventDefault();
    modalCompra.style.opacity = "1";
    modalCompra.style.visibility = "visible";
});

modalCerrar.addEventListener("click", function() {
    modalCompra.style.opacity = "0";
    modalCompra.style.visibility = "hidden";
})