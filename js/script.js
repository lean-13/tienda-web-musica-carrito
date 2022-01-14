
let autor = console.log ("El autor de esta pagina es Goñi Leandro");

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

// catalogo
let seleccionProductos = prompt("elija el producto que quiere consultar. Guitarra, Piano, Bateria").toLowerCase();
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
        alert("Producto no valido")
        break;
}

