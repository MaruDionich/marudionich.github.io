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
 