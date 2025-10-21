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
// [^\s@] -> Texto sin espacio
function valida_form() {
    var regExp = new RegExp("[^\s@]+@+[^\s@]+\.+[^\s@]+$"); // Con fallos ( hay que solucionar)
    // Rescatamos las partes ( nodos ) necesarios.
    var parrafoOk = document.getElementById("ok"); //Escritura
    var parrafoError = document.getElementById("error"); //Escritura
    //Aplico la validacion ( $inputValue me da el valor del "email") y miro con el $writeNode si es valido o no ( rudimentario )
    if (regExp.test($inputValue("email"))) {
        $writeNode("ok", "Email valido");
        $writeNode("error", "");
    }
    else {
        $writeNode("ok", "");
        $writeNode("error", "Email no valido");
    }
}
// Helpers ( comunes para todo el boletin.SIEMPRE EMPIEZAN POR DOLAR) (AQUI PILLAN EL VALOR DEL INPUT Y EL WRITE NODE ESCRIBE EL MENSAJE )
function $inputValue(id) {
    var input = document.getElementById(id); // Lectura0
    var result = "";
    if (input) {
        result = input.value; // Aqui leo el valor
    }
    return result;
}
function $writeNode(id, msg) {
    var nodo = document.getElementById(id); //Escritura
    if (nodo) {
        nodo.textContent = msg;
    }
}
