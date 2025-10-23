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
//Ejercicio 3
function ej3() {
    var ventanaNueva = window.open("https:www.google.es", "miVentana");
    ventanaNueva === null || ventanaNueva === void 0 ? void 0 : ventanaNueva.document.write("HOLA");
}
//NO SE PUEDE HACER
// Actividad 4 Y 5
function redirect_to() {
    var url = $inputValue("url");
    var regExp = new RegExp("^https:\/\/");
    if (regExp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error2", "Introduzca url valida porfis");
        setTimeout(function () { return $writeNode("error2", ""); }, 5000);
    }
}
// Helpers ( comunes para todo el boletin.SIEMPRE EMPIEZAN POR DOLAR) (AQUI PILLAN EL VALOR DEL INPUT Y EL WRITE NODE ESCRIBE EL MENSAJE )
function $inputValue(id) {
    var input = document.getElementById(id); // Lectura
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
// Funciones flecha
function suma1(a, b) {
    var result = a + b;
    return result;
}
var suma2 = function (a, b) { a + b; }; // Funcion flecha
suma1(5, 5);
suma2(1, 2);
// funciones pre-definidas de Js de flechas-> filter, reduce, foreach, map
// 1.-- Filter(recibe y aplica una condicion)
var arrayPrueba = [2, 4, 5, 6, 8, 10];
// Forma antigua
var arrayMayorCinco = [];
for (var i = 1; i < arrayPrueba.length; i++) {
    if (arrayPrueba[i] > 5) {
        arrayMayorCinco.push(arrayPrueba[i]);
    }
}
// Forma mejor y mas moderna del filter
var arrayMayorCinco2 = arrayPrueba.filter(function (data) { data > 5; });
console.log(arrayMayorCinco);
console.log(arrayMayorCinco2);
//2.-- Map
var arrayDoble = [];
for (var i = 0; i < arrayPrueba.length; i++) {
    arrayDoble.push(arrayPrueba[i] * 2);
}
// Mejor y mas simple
var arrayDoble2 = arrayPrueba.map(function (data) { data * 2; });
console.log(arrayDoble);
console.log(arrayDoble2);
// 2.a.-- Combo entre filter y map ( filtrado y transformacion)
var arrayMayorCincoYDoble = arrayPrueba
    .filter(function (data) { return data > 5; })
    .map(function (data) { return data * 2; });
//3.-- Resume ( resumen )
//Originalmente
var total1 = 0;
for (var i = 0; i < arrayPrueba.length; i++) {
    total1 += arrayPrueba[i];
}
//Forma mas moderna( si no se pone nada al final, por defecto es 0)
var total2 = arrayPrueba.reduce(function (acc, data) { return acc + data; }, 0);
console.log(total1);
console.log(total2);
// 4.--  Foreach
for (var i = 1; i < arrayPrueba.length; i++) {
    console.log("Este es el elemento " + (i + 1) + ": " + arrayPrueba[i]);
}
// const arrayPrueba.forEach((data, i) => console.log("Este es el elemento " + (i + 1) + ": " + data));
//5.-- Some
console.log(arrayPrueba.some(function (data) { data > 8; }));
//6.-- Every
console.log(arrayPrueba.every(function (data) { data > 0; }));
// Funcion propia donde recibe por parametros una funcion
//Definir una función propia donde uno de sus parametros sea una función
function resuelve_operacion(callback, a, b) {
    console.log("Aqui todavia no he calculado la operacion");
    var result = callback(a, b);
    console.log("Aqui ya la he calculado y es: " + result);
    return result;
}
console.log(resuelve_operacion(function (a, b) { return (a / b); }, 10, 5));
// Ejercicio 13
function lee_elementos() {
    var lista = document.getElementById("lista-alumno");
}
