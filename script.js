
$(document).ready(function(){
  $('.zoom').hover(function() {
      $(this).addClass('transition');
  }, function() {
      $(this).removeClass('transition');
  });
});

document.getElementById('contacto').onclick = function(){
  var contacto = document.getElementById('formulario')
  if(contacto.style.display == 'none'){
    contacto.style.display = 'block';  
  }else{
    contacto.style.display = 'none';  

  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById("nombre").value;
  if(usuario.length == 0) {
    alert('No has escrito nada en el usuario.');
    return;
  }
  var correo = document.getElementById("Email").value;
  if (correo.length == 0) {
    alert('No ha escrito su correo.');
    return;
  }
  var mensaje = document.getElementById("Mensaje").value;
  if (mensaje.length < 6) {
    alert('Ingrese un mensaje más largo');
    return;
  }
  this.submit();
  console.log("Mensaje enviado.");
  alert("Mensaje enviado");
  document.getElementById('formulario'.style.display ='none');  
}