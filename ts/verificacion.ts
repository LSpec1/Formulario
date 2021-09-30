import jquery=require('jquery');

const $:JQueryStatic=jquery;

function validar(box:string, advertencia:string){
  var alMenos_uno:Boolean = false;
  var inicio = 0;
  var final = 0;
  //determinar en que sitio estamos
  if (box == '.ck1') {
    inicio = 4;
    final = 15;
  } else if (box == '.ck2') {
    inicio = 16;
    final = 18;
  } else if (box == '.ck2') {
    inicio = 19;
    final = 21;
  } else if (box == '.ck2') {
    inicio = 22;
    final = 24;
  } else if (box == '.ck2') {
    inicio = 25;
    final = 29;
  } else if (box == '.ck2') {
    inicio = 29;
    final = 32;
  }

  //los 5 primeros corresponden a los datos personales
  for (let i = inicio; i <= final; i++) {
    var ck = document.getElementsByTagName("input")[i];
    //se verifica
    if(ck.checked) {
      alMenos_uno = true;
    }
  }

  //mensaje de advertencia
  var salida:boolean;
  const mensaje:any = document.getElementById(advertencia);
  if (alMenos_uno) {
      mensaje.style.display = 'none';
      salida = true;
  }
  else {
    console.log("No se ha seleccionado un checkbox!");
    mensaje.style.display = 'block';
    salida = false;
  }
  return salida;
}

function enviarFormulario (){
  //eliminar todo el body menos el titulo
  var formulario = document.getElementById("datos-personales");
  if (formulario) {
    formulario.style.display = "none";
  }
  //cambiar titulo
  var titulo = document.getElementById("titulo");
  if (titulo) {
    titulo.innerHTML = 'Datos enviados !';
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        var criterio = 0;
        //Validacion de cajas de texto
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else criterio++;
        //Validaciones propias
        if (!validar('.ck1','error1')) {
          event.preventDefault()
          event.stopPropagation()
        } else criterio++;
        if (!validar('.ck2','error2')) {
          event.preventDefault()
          event.stopPropagation()
        } else criterio++;
        if (!validar('.ck3','error3')) {
          event.preventDefault()
          event.stopPropagation()
        } else criterio++;
        if (!validar('.ck4','error4')) {
          event.preventDefault()
          event.stopPropagation()
        } else criterio++;
        if (!validar('.ck5','error5')) {
          event.preventDefault()
          event.stopPropagation()
        } else criterio++;
        if (!validar('.ck6','error6')) {
          event.preventDefault();
          event.stopPropagation();
        } else criterio++;
        if (criterio == 7) {
          enviarFormulario();
        }
      form.classList.add('was-validated');
    }, false)
  })
})();