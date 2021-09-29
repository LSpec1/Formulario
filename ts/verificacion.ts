import jquery=require('jquery');

const $:JQueryStatic=jquery;

//verificar checkbox
function validarCheckBox(box:string) {
  var casillas = document.getElementById(box)?.children;
  var i = 0;
  var almenos_uno = false;
  //recorrido dentro de los hijos de box
  
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
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
      form.classList.add('was-validated')
    }, false)
  })
})();