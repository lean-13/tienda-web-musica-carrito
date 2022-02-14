
// datos btc
const BTC = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=ars';

document.addEventListener('DOMContentLoaded', () => {
    getData();
});

const getData = () => {
    try {
    return fetch(BTC);
    }
    catch(error){
        console.log(error)
    }
}
// leer API coingecko
getData()
.then((response) => response.json())
.then(function (data) {
    const precioProducto = document.querySelector('.precioProducto').textContent;
    let precioBtc = data.bitcoin.ars;
    let precioFinalBtc =  precioProducto / precioBtc;
    producto.querySelector('.precioProductoBtc').textContent = "Btc: $ " + precioFinalBtc;
})
