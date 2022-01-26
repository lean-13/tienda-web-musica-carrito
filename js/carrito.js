// productos
class Producto{

    constructor(id,nombre,marca,precio){
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

}
// productos
const GUITARRA = new Producto(1,"GUITARRA CRIOLLA CLÁSICA","ALPUJARRA",329);
const PIANO = new Producto(2,"PIANO ELÉCTRICO","ARTESIA",474);

// array carrito

let numeroPosicionProducto;
class Carrito {
  
    constructor() {
            this.lista = [];
            }
    
    addCarrito() {
        
    }

    // borrar todo el carrito
    borrarCarrito() {
            carrito.length = 0;
            consolelog("Carrito vaciado con exito")
    }
    
    // contar productos
    posicionProducto() {
        for (let index = 0; index < carrito.length; index++) {
            numeroPosicionProducto = index + 1;
        }
    }
    
}

class productoCarrito {
    addItems(producto) {
        const itemCarrito = document.getElementById('carritoItems');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="producto__carrito--modificacion producto__carrito--size producto__carrito--color">
            <strong>Producto Name</strong>: ${producto.name}
            <strong>Producto Marca</strong>: ${producto.marca}
            <strong>Producto Precio</strong>: ${producto.precio}
        </div>
        `;
        carritoItems.appendChild(element);
    }
}

document.getElementById('boton1').addEventListener("click", function() {
    new producto = producto(GUITARRA);
    new productoCarrito = productoCarrito();
    producto.additems(producto);
    e.preventDefault();
});