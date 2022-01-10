// mensajes

let autor = console.log ("El autor de esta pagina es Goñi Leandro");

alert("Bienvenido a Music House")

let terminos;
while (terminos != "y") {
    terminos = prompt ("Ingrese Y para aceptar terminios y condiciones").toLowerCase()
};
alert("Gracias por aceptar terminos y condiciones");
// dolar
const DOLAR = 104;
// productos
let guitarra = 329;
let piano = 474;
let bateria = 949;
let producto;
let catalogoProductos = prompt("elija el producto que quiere consultar. Guitarra, Piano, Bateria").toLowerCase();
switch (catalogoProductos) {
    case "guitarra":
        producto = guitarra;
        alert("GUITARRA CRIOLLA CLÁSICA LA ALPUJARRA 80. precio" + " " + producto + " " + "dolares")
        conversionPesos()
        preguntaCuotas()
        break;
    case "piano":
        producto = piano;
        alert("PIANO ELÉCTRICO ARTESIA PERFORMER. precio" + " " + producto + " " + "dolares")
        conversionPesos()
        preguntaCuotas()
        break;
    case "bateria":
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
function conversionPesos() {
    let precioDolar = prompt ("Para convertir el precio a pesos ingrese: y").toLowerCase()
    if (precioDolar == "y") {
        precioProducto = DOLAR * producto;
        alert(precioProducto + " " + "pesos argentinos")
    }
}
// cuotas
function preguntaCuotas() {
    let preguntaCuotas = prompt("Para calcular cuotas ingrese: y").toLowerCase()
    if (preguntaCuotas == "y") {
        seleccionCuotas()
    }
}
function seleccionCuotas() {
    let cuotas = prompt("desea cuotas en dolares o pesos?")
    if ((cuotas == "dolares") || (cuotas == "dolar")) {
        cuotasDolar()
    }
    else if ((cuotas == "pesos") || (cuotas == "peso")) {
        cuotasPesos()
    }
}
function cuotasDolar() {
    let cuotas = prompt("cuantas cuotas desea?")
    let calcularCuotas = producto / cuotas;
    alert(cuotas + " " +"cuotas de" + " " + calcularCuotas + " " + "dolares");
}
function cuotasPesos() {
    let precioProducto = DOLAR * producto;
    let cuotas = parseInt(prompt("cuantas cuotas desea?"))
    let calcularCuotas = precioProducto / cuotas;
    alert(cuotas + " " +"cuotas de" + " " + calcularCuotas + " " + "pesos");
}
 




    
