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
        preguntaCuotas()
        break;
    case 2:
        producto = piano;
        alert("PIANO ELÉCTRICO ARTESIA PERFORMER. precio" + " " + producto + " " + "dolares")
        conversionPesos()
        preguntaCuotas()
        break;
    case 3:
        producto = bateria;
        alert("BATERIA MAPEX PRODIGY. precio" + " " + producto + " " + "dolares")
        conversionPesos()
        preguntaCuotas()
        break;
    default:
        alert("opcion no valida")
        break;
}
// cambio de moneda
function conversionPesos(precioProducto,precioDolar) {
    precioDolar = "n";
    precioDolar = prompt ("Para convertir el precio a pesos ingrese: y")
    if ((precioDolar == "y") || (precioDolar == "Y")) {
        precioProducto = DOLAR * producto;
        alert(precioProducto + " " + "pesos argentinos")
    }
    precioDolar == "n";
}
// cuotas
function preguntaCuotas(calcularCuotas) {
    calcularCuotas = prompt("Para calcular cuotas ingrese: y")
    if ((calcularCuotas == "y") || (calcularCuotas == "Y")) {
        seleccionCuotas()
    }
}
function seleccionCuotas(cuotas) {
    cuotas = prompt("desea cuotas en dolares o pesos?")
    if ((cuotas == "dolares") || (cuotas == "dolar")) {
        cuotasDolar()
    }
    else if ((cuotas == "pesos") || (cuotas == "peso")) {
        cuotasPesos()
    }
}
function cuotasDolar(calcularCuotas,cuotas) {
    cuotas = prompt("cuantas cuotas desea?")
    calcularCuotas = producto / cuotas;
    alert(cuotas + " " +"cuotas de" + " " + calcularCuotas + " " + "dolares");
}
function cuotasPesos(calcularCuotas,cuotas,precioProducto) {
    precioProducto = DOLAR * producto;
    cuotas = prompt("cuantas cuotas desea?")
    calcularCuotas = precioProducto / cuotas;
    alert(cuotas + " " +"cuotas de" + " " + calcularCuotas + " " + "pesos");
}
 




    
