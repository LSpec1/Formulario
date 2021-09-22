import jquery=require('jquery');

const $:JQueryStatic=jquery;

//verificar checkbox
$(document).ready(function(){
  $(".check1").click(function(){
    var n = $( "input:checked" ).length;
    if($("input:checkbox").filter(":checked").length > 1){
      $(".error").show();
    } else {
      $(".error").hide();
    }
  })
});

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