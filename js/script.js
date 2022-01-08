// mensajes

let autor = console.log ("El autor de esta pagina es Goñi Leandro");

alert("Bienvenido a Music House")

let terminos = " ";
while (terminos != "y") {
    terminos = prompt ("Ingrese Y para aceptar terminios y condiciones")
};
alert("Gracias por aceptar terminos y condiciones");
// dolar
const DOLAR = 104;
// productos
let guitarra = 329;
let piano = 474;
let bateria = 949;
let producto = 0;
let productos = parseInt(prompt("elija el producto que quiere consultar. guitarra = 1, piano = 2, bateria = 3"));
switch (productos) {
    case 1:
        producto = guitarra;
        alert("GUITARRA CRIOLLA CLÁSICA LA ALPUJARRA 80. precio" + " " + producto + " " + "dolares")
        conversionPesos()
        break;
    case 2:
        producto = piano;
        alert("PIANO ELÉCTRICO ARTESIA PERFORMER. precio" + " " + producto + " " + "dolares")
        conversionPesos()
        break;
    case 3:
        producto = bateria;
        alert("BATERIA MAPEX PRODIGY. precio" + " " + producto + " " + "dolares")
        conversionPesos()
        break;
    default:
        alert("opcion no valida")
        break;
}
function conversionPesos(precioProducto,precioDolar) {
    precioDolar = "n";
    precioDolar = prompt ("Para convertir el precio a pesos ingrese: y")
    if ((precioDolar == "y") || (precioDolar == "Y")) {
        precioProducto = DOLAR * producto;
        alert(precioProducto + " " + "pesos argentinos")
    }
    precioDolar == "n";
}
// agregar cuotas
// usar funcion para cuotas y agregarlo en cada case
 




    
