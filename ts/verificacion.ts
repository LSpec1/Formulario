import jquery=require('jquery');

const $:JQueryStatic=jquery;

//verificar checkbox1
function validarCheckBox1() {
  var casilla1:any = document.getElementById('check1');
  var casilla2:any = document.getElementById('check2');
  var casilla3:any = document.getElementById('check3');
  var casilla4:any = document.getElementById('check4');
  var casilla5:any = document.getElementById('check5');
  var casilla6:any = document.getElementById('check6');
  var casilla7:any = document.getElementById('check7');
  var casilla8:any = document.getElementById('check8');
  var casilla9:any = document.getElementById('check9');
  var casilla10:any = document.getElementById('check10');
  var casilla11:any = document.getElementById('check11');
  var casilla12:any = document.getElementById('check12');
  var alMenos_uno = false;
  //verificacion
  if (casilla1.checked) {
      alMenos_uno = true;
  } else if (casilla2.checked) {
      alMenos_uno = true;
  } else if (casilla3.checked) {
      alMenos_uno = true;
  } else if (casilla4.checked) {
      alMenos_uno = true;
  } else if (casilla5.checked) {
      alMenos_uno = true;
  } else if (casilla6.checked) {
      alMenos_uno = true;
  } else if (casilla7.checked) {
      alMenos_uno = true;
  } else if (casilla8.checked) {
      alMenos_uno = true;
  } else if (casilla9.checked) {
      alMenos_uno = true;
  } else if (casilla10.checked) {
      alMenos_uno = true;
  } else if (casilla11.checked) {
      alMenos_uno = true;
  } else if (casilla12.checked) {
      alMenos_uno = true;
  } else {
      alMenos_uno = false;
  }
  //mensaje de advertencia
  var salida:boolean;
  const mensaje:any = document.getElementById('error1');
  if (alMenos_uno) {
      mensaje.style.display = 'none';
      salida = true;
  }
  else {
    console.log("No se ha seleccionado un checkbox !");
    mensaje.style.display = 'block';
    salida = false;
  }
  return salida;
}

//verificar radio
function validarRadio1(){
  var casilla13:any = document.getElementById('check13');
  var casilla14:any = document.getElementById('check14');
  var casilla15:any = document.getElementById('check15');
  var alMenos_uno:boolean = false;
  if (casilla13.checked) {
    alMenos_uno = true;
  } else if (casilla14.checked) {
    alMenos_uno = true;
  } else if (casilla15.checked) {
    alMenos_uno = true;
  } else {
    alMenos_uno = false;
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
        // Checklist
        if (!form.checkValidity() || !validarCheckBox1()) {
          event.preventDefault()
          event.stopPropagation()
        }
      form.classList.add('was-validated')
    }, false)
  })
})();