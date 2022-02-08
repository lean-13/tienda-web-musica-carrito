formulario = [];

$(document).ready(function () {

    var modalConfirmacion = $('#modalConfirmacion');
    var templateNombre = $('.confirmacionNombreFormulario');
    

    $('#formulario').submit(function(e) { 
        e.preventDefault();
        var nombreCompleto = $('#nombreCompleto').val();
        var email = $('#email').val();
        var numeroTelefono = $('#numeroTelefono').val();
        var campoTexto = $('#campoTexto').val();

        formulario.push(nombreCompleto, email, numeroTelefono, campoTexto)
        confirmacionFormulario();
    });
    
    const confirmacionFormulario = () => {
        $(templateNombre).text(formulario[0])
        modalConfirmacion.show();
        cerrarConfirmacionFormulario();
    }

    const cerrarConfirmacionFormulario = () => {
        $(modalConfirmacion).on('click', () => {
            modalConfirmacion.hide();
        })
    }
});
