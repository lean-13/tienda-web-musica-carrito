formulario = [];

$(document).ready(function () {

    $('#formulario').submit(function(e) { 
        e.preventDefault();
        var nombreCompleto = $('#nombreCompleto').val();
        var email = $('#email').val();
        var numeroTelefono = $('#numeroTelefono').val();
        var campoTexto = $('#campoTexto').val();

        formulario.push(nombreCompleto, email, numeroTelefono, campoTexto)
    });
    
});
