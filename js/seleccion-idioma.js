
$(document).ready(function () {
    // seleccion de idioma español o ingles
    let seleccion = $('#modalSeleccionIdioma');
    let modal = $('.modal--animation')
    const seleccionIdioma = () => {
        mostrarModal();
        $(".es").on("click",() => {
            localStorage.setItem("idioma","es");
            cerrarSeleccionIdioma()
        })    
        $(".en").on("click",() => {
            localStorage.setItem("idioma","en");
            cerrarSeleccionIdioma();
        })
    }

    const mostrarModal = () => {
        seleccion.fadeIn(800);
        modal.animate({top:'120px'},700)
    }
    const cerrarSeleccionIdioma = ()=>{
        seleccion.fadeOut(800);
        modal.animate({top:'-450px'},700);
    }
    const idioma = localStorage.getItem("idioma");

    if (idioma ===  null) {
        seleccionIdioma();
    }
    else {
        console.log(`idioma: ${idioma}`);
        $(seleccion).fadeOut(0);
    }


});

