formulario = [];

$(document).ready(function () {

    var modalConfirmacion = $('#modalConfirmacion');
    var templateNombre = $('.confirmacionNombreFormulario');
    

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
        modalConfirmacion.fadeIn();
        cerrarConfirmacionFormulario();
    }

    const cerrarConfirmacionFormulario = () => {
        $(modalConfirmacion).on('click', () => {
            modalConfirmacion.fadeOut();
        })
    }
});
