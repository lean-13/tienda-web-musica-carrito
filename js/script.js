
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

// productos
const GUITARRA = new Product("GUITARRA CRIOLLA CLÁSICA","ALPUJARRA","329");
const PIANO = new Product("PIANO ELÉCTRICO","ARTESIA","474");

// array carrito
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
    salirCarrito();

}

function salirCarrito(){
    if (catalogo = true) {
        let catalogoSalir = prompt("Para salir del catalogo ingrese:" + "\n" + "salir")
        if (catalogoSalir == "salir") {
            catalogo = false;
        }
    }
}

let productoCarrito;
function agregarCarrito() {
    let agregarProducto = prompt("Deseas agregar el producto al carrito?" + "\n" + "ingrese y para agregar").toLowerCase();
    while (agregarProducto == "y") {
        let catalogoCarrito = prompt("elija el producto que quiere agregar:"+ "\n" + "Guitarra" + "\n" + "Piano" + "\n" + "Bateria").toLowerCase();
        switch (catalogoCarrito) {
            case "guitarra":
                productoCarrito = "Piano";
                break;
            case "piano":
                productoCarrito = "Guitarra criolla";
                break;
            default:
                alert("Producto no valido");
                break;
        }
        carrito.push(productoCarrito);
        alert(productoCarrito + " agregado al carrito con exito");
        agregarProducto = prompt("Desea agregar otro producto al carrito?" + "\n" + "ingrese y para agregar")
    }
}

function verCarrito() {
    let ver = prompt("Desea ver el carrito?" + "\n" + " Ingrese y para ir al carrito").toLowerCase();
    if (ver == "y") {
        alert("Su carrito contiene:" + "\n" + carrito.toString());
    }
}
