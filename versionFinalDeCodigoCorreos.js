function enviarCorreo(destinatario, asunto, mensaje) {

    if (!destinatario || !asunto || !mensaje) {
        console.error("Faltan parámetros requeridos.");
        return;
    }

    GmailApp.sendEmail(destinatario, asunto, mensaje);
}

function enviarCorreosAutomáticos() {

    var destinatarios = ["destinatario1@example.com", "destinatario2@example.com"];
    var asuntos = ["Asunto del correo 1", "Asunto del correo 2"];
    var mensajes = ["Mensaje del correo 1", "Mensaje del correo 2"];

    for (var i = 0; i < destinatarios.length; i++) {
        enviarCorreo(destinatarios[i], asuntos[i], mensajes[i]);
    }
}

// Caso de prueba
function pruebaEnvioCorreo() {
    var destinatario = "smash1409x@gmail.com";
    var asunto = "Prueba de correo automático a travez de google apps script para pweb2";
    var mensaje = "Este es un correo de prueba enviado desde google apps script para verificar su funcionalidad";

    enviarCorreo(destinatario, asunto, mensaje);
}

pruebaEnvioCorreo();
