"use strict";
//imprimir datos personales
var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
    var nombre = document.getElementById("nombre");
    var rut = document.getElementById("rut");
    var correo = document.getElementById("email");
    var telefono = document.getElementById("telefono");
    console.log(nombre.value);
    console.log(rut.value);
    console.log(correo.value);
    console.log(telefono.value);
});
//imprimir checkboxes
formulario.addEventListener("submit", function (event) {
});
