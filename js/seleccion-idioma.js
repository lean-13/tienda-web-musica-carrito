
$(document).ready(function () {
    // seleccion de idioma español o ingles
    let seleccion = $('#modalSeleccionIdioma');
    const seleccionIdioma = () => {
        $(".es").on("click",() => {
            localStorage.setItem("idioma","es");
            cerrarSeleccionIdioma()
        })    
        $(".en").on("click",() => {
            localStorage.setItem("idioma","en");
            cerrarSeleccionIdioma();
        })
    }

    const cerrarSeleccionIdioma = ()=>{
        seleccion.fadeOut();
    }
    const idioma = localStorage.getItem("idioma");

    if (idioma ===  null) {
        seleccionIdioma();
    }
    else {
        console.log(`idioma: ${idioma}`);
        $(seleccion).fadeOut();
    }


});

