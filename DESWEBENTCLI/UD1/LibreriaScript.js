// Ejercicio 1
function saludar() {
    var edad = window.prompt('Introduce tu edad');
    if (edad = 18) {
        console.log('Eres mayor de edad');
    } else {
        console.log('Eres menor de edad')
    }
}

// Ejercicio 2
function pintarRuta() {
    console.log("El acceso a la ruta C:\\\\usuario\\tarda 1´23'', algo considerado \"lento\" en la actualidad")
}

// Ejercicio 3
function pintarRutaV2() {

    var substrng1 = "El acceso a la ruta C:\\\\usuario\\tarda 1´23'' ";
    var substrng2 = ", algo considerado \"lento\" en la actualidad";

    console.log(substrng1 + substrng2);

}
// Ejercicio 4
function muestra_potencia() {
    var num = 2 * Math.pow(10, -9);
    console.log("El valor de la cuenta es: " + num);
}

// Ejercicio 5
function distintas_bases(num) {
    // Transforma numero a binario
    var numDecimal = num.toString(2);
    console.log("El numero en binario es: " + numDecimal);
}

// Ejercicio 6 y 7
function dividir_entre_cero(num) {
    var result = num / 0;
    var result2 = num + result;
    console.log("El resultado de dividir entre cero es: " + result2);
}

// Ejercicio 8
function numero_maximo() {
    var numMax = Number.MAX_VALUE;
    console.log("El numero maximo es: " + numMax);
}

// Ejercicio 10
function check_ambito_variable() {
    let prueba = 5;
    console.log("La variable prueba tiene como valor: " + prueba);
    {
        let prueba2 = 10;
        console.log("El valor de la variable prueba dentro del bloque es: " + prueba + " tambien dentro del bloque anidado");
        console.log("Ademas, si prueba 2 esta metido en el bloque anidado, tambien se puede ver que el valor de prueba2 es " + prueba2);
    }

    console.log("Si intentamos acceder a la variable" + prueba2 + "fuera del bloque anidado, nos dara error, ya que no se puede acceder a variables declaradas con let fuera de su bloque" + prueba2);
}

// Let tiene abmito de bloque, mientras que var tiene ambito de funcion.

// Ejercicio 11
function definir_y_mostrar_array() {
    let array = ["Alberto", "Juan", "Sofia"];

    /*for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
        */
    console.table(array);
}

// Ejercicio 12
function contar_y_temporizador() {
    let valor = 0;
    let timeInt = new Date();

    for (let i = 0; i < 1000; i++) {
        valor += 10;
    }

    let endTime = new Date();

    console.log("Valor: " + valor);
    console.log("El algoritmo ha tardado: " + ((endTime - timeInt) / 2000) + " segundos");
}

// Ejercicio 13
function mostrarError() {
    console.error("Error!: No se ha encontrado ningun valor");
}

// Ejercicio 14
function confirmar() { }

// Ejercicio 15
function ejercicio15() {
    let nombre = window.prompt("Introduce tu nombre");
    window.confirm(nombre + " , deseas aceptar o rechazar?");
    if (window.confirm == true) {
        window.alert("Has aceptado");
    } else {
        window.alert("Has rechazado");
    }
    console.log("FIN DEL PROGRAMA");
}

// Ejercicio 15 como lo ha entendido octavio

function pedir_datos() {

    let seguir = true;

    while (seguir) {

        let nombre = prompt("Introduzca tu nombre: ");

        console.log("Hola " + nombre);

        seguir = confirm("Desea continuar en el programa?"); // confirm devuelve el boolean ( true o false)

        console.log("Has decidido continuar");
    }
    console.log("Has finalizado el programa");
}

// Ejercicio 16

function ejercicio16() {


    let nombre = window.prompt("Dime tu nombre");
    let edad = window.prompt("Dime tu edad");
    let ciudad = window.prompt("Dime tu ciudad");
    let direccion = window.prompt("Dime tu direccion");
    let telefono = window.prompt("Dime tu telefono");


    if ((edad ** 5) == telefono || ciudad.toUpperCase === "Mairena del Alcor".toUpperCase) {
        window.alert("ENHORABUENA");
    } else {
        window.alert("FINALIZADO");
    }

}

// Ejercicio 16 otra forma
function datos_personales(){

    let edad = document.getElementById("edad").value;
    let nombre = document.getElementById("nombre").value;
    let ciudad = document.getElementById("ciudad").value;
    let doreccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;

    console.log("La informacion recogida es: " + edad + nombre + ciudad + direccion + telefono);

        if ((edad ** 5) == telefono || ciudad.toUpperCase === "Mairena del Alcor".toUpperCase) {
        window.alert("ENHORABUENA");
    } else {
        window.alert("FINALIZADO");
    }

}

// Ejercicio 17

function ejercicio17(){
    
    let numero = Math.abs(prompt("Introduce un numero: "));
    let cifras = 0;
    while(numero >= 1){
        cifras++;
        numero = Math.floor(numero / 10);
    }
    console.log("El numero tiene " + cifras + "cifras");

}


// Ejercicio 18

function edad(){
    let edad = Number(prompt("Introduce tu edad: "));
    switch(true){

        case edad >= 0 && edad <= 16:
            console.log("Eres un niño");
            break;
        case edad > 16 && edad <= 25:
            console.log("Eres un joven");
            break;
       case edad > 25 && edad <= 60:
            console.log("Eres un adulto");
            break;
        case edad > 60:
            console.log("Eres senior");
            break;
        default:
            console.error("Edad no valida");
    }
}

// Ejercicio 18 de otra forma

function edadDiferente(){
    let edad = document.getElementById("edad").value;

    switch(true){

        case edad >= 0 && edad <= 16:
            pintar_mensaje("Eres un niño", true);
            break;
        case edad > 16 && edad <= 25:
            pintar_mensaje("Eres un joven", true);
            break;
       case edad > 25 && edad <= 60:
            pintar_mensaje("Eres un adulto", true);
            break;
        case edad > 60:
            pintar_mensaje("Eres senior", true);
            break;
        default:
            pintar_mensaje("Edad no valida", false);
    }
}

function pintar_mensaje(mensaje, isOk){
    let aviso = document.getElementById("aviso");
    aviso.textContent = mensaje;

    if(isOk){
        aviso.style.color = "green";
    }else{
        aviso.style.color = "red";
    }
}

// Ejercicio 19

function acierta_aleatorio(){
   
    const aleat = Math.floor((Math.random() * 10) + 1);
    let intento = 0;

     alert("Se a calculado un numero aleatorio. ¿Eres capaz de acertarlo?.")

    do{
        intento ++;
       var valor_intento =  Number(prompt("Intento " + intento));

    }while(valor_intento != aleat);

    console.log("Enhorabuena! has acertado. El numero secreto era el " +  aleat)
    console.log("Has necesitafo " + intento + " intentos")
}

// Ejercicio 20

function multiplos(){
    let n = Number(prompt("Introduce un numero: "));
    let multiplos = 0;
    const max = 100;
    for( i = n + 1; i < max; i++ ){
        if(i % n == 0){
            multiplos ++;
            console.log("Multiplo encontrado " + i);
        }
    }
    console.log("El numero " + " tiene " + multiplos + " multiplos");
}