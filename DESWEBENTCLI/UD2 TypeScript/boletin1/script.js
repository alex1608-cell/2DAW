// Ejercicio 1
function horas() {
    // No existe 'date' primitivo
    var fecha = new Date();
    console.log("Hola es: " + fecha.getDate() + " / " + (fecha.getMonth() + 1) + " / " + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + " : " + fecha.getMinutes() + " : " + fecha.getMilliseconds());
    console.log("La hora anterior es: " + (fecha.getHours() - 1));
    console.log("La hora posterior es: " + (fecha.getHours() + 2));
}
// Ejercicio 2
function valida_form() {
    console.log("Validando formulario...");
    // // Otra forma de hacerlo
    // // let expReg : RegExp = \lo_que_sea\;
    var expReg = new RegExp("lo_que_sea");
    // let email = document.getElementById("email") as HTMLInputElement | null;
    // if (email && expReg.test(email.value)) {
    // }
    // Primero nos aseguramos que no es nulo ( porque no puedo almacenar un nulo en un HTMLInputElement)
    if (document.getElementById("email") != null) {
        var mensajeOk = document.createElement('span');
        var email = document.getElementById("email");
        if (email && expReg.test(email.value)) {
            mensajeOk.textContent = "Email correcto";
        }
        else {
            mensajeOk.textContent = "Email incorrecto";
        }
    }
}
