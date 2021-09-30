//imprimir datos personales
let formulario:any = document.getElementById("formulario");
formulario.addEventListener("submit", function(event:any){
  let nombre:any = document.getElementById("nombre");
  let rut:any = document.getElementById("rut");
  let correo:any = document.getElementById("email");
  let telefono:any = document.getElementById("telefono");
  console.log(nombre.value);
  console.log(rut.value);
  console.log(correo.value);
  console.log(telefono.value);
});

//imprimir checkboxes
formulario.addEventListener("submit", function(event:any){
  
});