//referencia al boton de acceso del registro
function acceso(){
    location.href="formulario.html"
}
//referencia al boton de registro del registro
function registro(){
    location.href="formulario.html"
}
//referencia al boton de enviar del formulario
function enviar(){
    location.href="index.html"
}
//referencia al boton de volver a la pagina inicila 
function volver(){
    location.href="index.html"
}
function limpiarFormulario() {
    // Obtener referencia al formulario
    var formulario = document.getElementById("miFormulario");
    
    // Resetear el formulario
    formulario.reset();
} 
/*document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón por su ID
    var boton = document.getElementById('buttonenvio');

    // Añadir un Event Listener al botón para el evento 'click'
    boton.addEventListener('click', function() {
        // Mostrar la alerta cuando el botón es presionado
        alert('Si tu domicilio es dentro de San Nicolás su envío es gratis!!! Si no tendrá un costo de $800.');
    })
})*/
//me lleva a whatsaap
document.getElementById('whatsappButton').addEventListener('click', function() {
    const phoneNumber = '3364260626'; 
    const message = 'Hola, me gustaría obtener más información.'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}); 
// Me pregunta si quiero abandonar la pagina
window.addEventListener('beforeunload', function(event) {
    const message = '¿Estás seguro de que quieres salir?';
    event.preventDefault();  
    event.returnValue = message; 
    return message;
});
alert("¡¡¡Bienvenido/a a mi pagina!!!")
 