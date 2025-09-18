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

function contar_y_temporizador(){
    let valor = 0;
    let timeInt = new Date();

    for(let i = 0; i < 1000; i++){
        valor+= 10;
    }

    let endTime = new Date();

    console.log("Valor: " + valor);
    console.log("El algoritmo ha tardado: " + ((endTime - timeInt)/2000) + " segundos");
}