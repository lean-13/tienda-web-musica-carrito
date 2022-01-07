// mensajes

let autor = console.log ("El autor de esta pagina es Goñi Leandro");

alert("Bienvenido a Music House")

let terminos = " ";
while (terminos != "y") {
    terminos = prompt ("Ingrese Y para aceptar terminios y condiciones")
};
alert("Gracias por aceptar terminos y condiciones");
// dolar
const DOLAR = 103.29;
let precioDolar = "n";
// productos
let precioProducto;
const guitarra = 329;
const piano = 474;
let productos = parseInt(prompt("elija el producto que quiere consultar. guitarra = 1, piano = 2, flauta = 3"));
switch (productos) {
    case 1:
        alert("GUITARRA CRIOLLA CLÁSICA LA ALPUJARRA 80. precio" + " " + guitarra + " " + "dolares")
        precioDolar = prompt ("Para convertir el precio a pesos ingrese y")
        if (precioDolar == "y") {
            precioProducto = DOLAR * guitarra;
            alert(precioProducto + " " + "pesos argentinos")
        }
        precioDolar == "n";
        break;
    case 2:
        alert("PIANO ELÉCTRICO ARTESIA PERFORMER. precio" + " " + piano + " " + "dolares")
        precioDolar = prompt ("Para convertir el precio a pesos ingrese y")
        if (precioDolar == "y") {
            precioProducto = DOLAR * piano;
            alert(precioProducto + " " + "pesos argentinos")
        }
        precioDolar == "n";
        break;
    default:
        alert("opcion no valida")
        break;
}
// agregar cuotas
 




    
