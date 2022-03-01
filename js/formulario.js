

$(document).ready(function () {

    let modalConfirmacion = $('#modalFormularioConfirmacion');
    let modalAnimation = $('.modal__formulario__confirmacion--animation');
    let templateNombre = $('.confirmacionNombreFormulario');
    
    formulario = [];

    $('#formulario').submit(function(e) { 
        e.preventDefault();
        let nombreCompleto = $('#nombreCompleto').val();
        let email = $('#email').val();
        let numeroTelefono = $('#numeroTelefono').val();
        let campoTexto = $('#campoTexto').val();

        formulario.push(nombreCompleto, email, numeroTelefono, campoTexto)
        confirmacionFormulario();
    });
    
    const confirmacionFormulario = () => {
        $(templateNombre).text(formulario[0])
        modalConfirmacion.fadeIn(800);
        modalAnimation.animate({top:'150px'},700);
        cerrarConfirmacionFormulario();
    }

    const cerrarConfirmacionFormulario = () => {
        $(modalConfirmacion).on('click', () => {
            modalConfirmacion.fadeOut(800);
            modalAnimation.animate({top:'-300px'},700);
        })
    }
});
