import jquery=require('jquery');

const $:JQueryStatic=jquery;

//verificar checkbox
function validarCheckBox() {
  function validarCheckBox() {
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
    if (alMenos_uno) {
        const mensaje:any = document.getElementById('.error1');
        mensaje.classList.add('activo');
    }
    else {
      const mensaje:any = document.querySelector('.error1');
      mensaje.classList.add('desactivado');
    }
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
        validarCheckBox();
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
      form.classList.add('was-validated')
    }, false)
  })
})();