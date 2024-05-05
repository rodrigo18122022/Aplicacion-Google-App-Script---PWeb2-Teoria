function enviarCorreo() {

    var destinatario = "smash1409x@gmail.com";
    var asunto = "Prueba de Google Apps script";
    var mensaje = "Este es una prueba enviada desde Google Apps Script. Para verificar que envie correctamente";
    
    GmailApp.sendEmail(destinatario, asunto, mensaje);
}
  