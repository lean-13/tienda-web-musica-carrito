
alert("Bienvenido a Music House")

// aceptar terminos y condiciones
let terminos;
while (terminos != "y") {
    terminos = prompt ("Ingrese Y para aceptar terminios y condiciones").toLowerCase()
};
alert("Gracias por aceptar terminos y condiciones");
// iva
const IVA = 1.21;
// envio gratis
const ENVIOGRATIS = 40;

// productos
class Producto{

    constructor(nombre,marca,precio){
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

let productoCarrito;
let numeroPosicionProducto;
const carrito = [];

let catalogo = true;

while (catalogo) {
    // catalogo
    let seleccionProductos = prompt("elija el producto que quiere consultar:"+ "\n" + "Guitarra" + "\n" + "Piano" + "\n" + "Bateria").toLowerCase();
    switch (seleccionProductos) {
        case "guitarra":
            GUITARRA.calcularEnvio();
            GUITARRA.mostrarProducto();
            break;
        case "piano":
            PIANO.calcularEnvio();
            PIANO.mostrarProducto();
            break;
        default:
            alert("Producto no valido");
            break;
    }
    agregarCarrito();
    verCarrito();
    salirCatalogo();

}

function salirCatalogo(){
    if (catalogo = true) {
        let catalogoSalir = prompt("Para salir del catalogo ingrese:" + "\n" + "salir")
        if (catalogoSalir == "salir") {
            catalogo = false;
        }
    }
}

function agregarCarrito() {
    let agregarProducto = prompt("Deseas agregar un producto al carrito?" + "\n" + "ingrese y para agregar").toLowerCase();
    while (agregarProducto == "y") {
        let catalogoCarrito = prompt("elija el producto que quiere agregar:"+ "\n" + "Guitarra" + "\n" + "Piano" + "\n" + "Bateria").toLowerCase();
        switch (catalogoCarrito) {
            case "guitarra":
                productoCarrito = "GUITARRA CRIOLLA CLÁSICA";
                break;
            case "piano":
                productoCarrito = "PIANO ELÉCTRICO";
                break;
            default:
                alert("Producto no valido");
                break;
        }
        carrito.push("\n" + productoCarrito);
        posicionProducto();
        alert(numeroPosicionProducto + "-" + productoCarrito + " agregado al carrito con exito");
        agregarProducto = prompt("Desea agregar otro producto al carrito?" + "\n" + "ingrese y para agregar")
    }
}

function verCarrito() {
    let ver = prompt("Desea ver el carrito?" + "\n" + " Ingrese y para ir al carrito").toLowerCase();
    if ((ver == "y") && (carrito.length >= 1)){
        alert("Su carrito contiene:" + "\n" + carrito.toString() + "\n" +"Numero de productos: " + numeroPosicionProducto);
        preguntaBorradoCompra();
    }
    else if ((ver == "y") && (carrito.length === 0)){
        alert("Su carrito esta vacio")
    } 
}
function preguntaBorradoCompra() {
    let preguntaBorradoCompra = prompt("Desea comprar o vaciar el carrito?" + "\n" + "Opciones:" + "\n" +"Comprar" + "\n" + "Borrar" + "\n" + "salir").toLowerCase();
    switch (preguntaBorradoCompra) {
        case "comprar":
            compraCarrito();
            break;
        case "borrar":
            borrarCarrito();
            break;
        case "salir":
            alert("El carrito seguira disponible");
            break;
        default:
            alert("Opcion no disponible");
            break;
    }
}
function compraCarrito() {
    let compraCarrito = prompt("Esta seguro que desea comprar el carrito?" + "\n" + "Ingrese y para comprar").toLowerCase();
    if ((compraCarrito = "y")) {
        alert("Compra realizada con exito:" + "\n" + carrito.toString());
        carrito.length = 0;
    }
}
function borrarCarrito() {
    let borrarCarrito = prompt("Esta seguro que desea vaciar el carrito?" + "\n" + "Ingrese y para vaciar el carrito").toLowerCase();
    if ((borrarCarrito == "y")) {
        carrito.length = 0;
        alert("Carrito vaciado con exito")
    }
}
function posicionProducto() {
    for (let index = 0; index < carrito.length; index++) {
        numeroPosicionProducto = index + 1;
    }
}
