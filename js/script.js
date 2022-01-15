
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
class Product{

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

    mostrarProducto(){
        alert("Producto: " + this.nombre + "\n" + "Marca: " + this.marca + "\n" + "Precio: " + this.precio + " Dolares" + "\n" + "Envio: " + this.envio + " pesos");
    }
}

var productoCarrito;

// productos
const GUITARRA = new Product("GUITARRA CRIOLLA CLÁSICA","ALPUJARRA","329");
const PIANO = new Product("PIANO ELÉCTRICO","ARTESIA","474");


// array carrito
const carrito = [];

 // catalogo
let seleccionProductos = prompt("elija el producto que quiere consultar:"+ "\n" + "Guitarra" + "\n" + "Piano" + "\n" + "Bateria").toLowerCase();
switch (seleccionProductos) {
    case "guitarra":
        productoCarrito = "Guitarra";
        GUITARRA.calcularEnvio();
        GUITARRA.mostrarProducto();
        agregarCarrito()
        break;
    case "piano":
        productoCarrito = "Piano";
        PIANO.calcularEnvio();
        PIANO.mostrarProducto();
        agregarCarrito()
        break;
    default:
        alert("Producto no valido");
        break;
}
verCarrito();

function agregarCarrito() {
    let agregarProducto = prompt("Deseas agregar el producto al carrito?" + "\n" + "ingrese y para agregar").toLowerCase();
    if (agregarProducto == "y") {
        carrito.push(productoCarrito);
        alert(productoCarrito + " agregado al carrito con exito");
    }
    else {
        alert("Ningun producto fue agregado al carrito");
    }
}

function verCarrito() {
    let ver = prompt("desea ingresar al carrito?" + "\n" + " Ingrese y para ir al carrito").toLowerCase();
    if (ver == "y") {
        alert("Su carrito contiene:" + "\n" + productoCarrito)
    }
}
