
// Intento colores por ejercicio
let colores = [
    "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#E3BAFF", "#FFB3E6", "#FFD6E0", "#D6FFD6", "#FFF5BA",
    "#C7CEEA", "#F6EAC2", "#F2C6DE", "#B5EAD7", "#E0BBE4", "#FEC8D8", "#FAE1DD", "#FCD5CE", "#FFDAC1", "#E2F0CB",
    "#FFB347", "#FDFD96", "#AEC6CF", "#77DD77", "#CFCFC4", "#F49AC2", "#CB99C9", "#B39EB5", "#FF6961", "#FFD1DC",
    "#FFCBF2", "#F3C4FB", "#ECBCFD", "#E5B3FE", "#D0BFFF", "#C8C2FF", "#B8C0FF", "#BBD0FF", "#A3C4F3", "#90DBF4"

];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function () {
    for (let i = 0; i < ejercicios.length; i++) {
        let colorAleatorio = Math.random() * colores.length;
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
}

// Ejercicio inventado por octavio. 

// Calcula la secuencia de fibonachi atendiendo a la formula

function calcular_fibonachi() {

    let num = Number(prompt("Introduce un numero: "));
    let resultado = fibonachi(num);

    console.log("El valor fib(" + num + ") es " + fibonachi(num));
}

function fibonachi(num) {
    let result;
    // Comprobamos casos base
    if (num === 0) {
        result = 0;
    } else if (num === 1) {
        result = 1;
    } else {
        // Aqui esta la llamada recursiva
        result = fibonachi(num - 1) + fibonachi(num - 2);
    }
}

function calcular_factorial(isRec) {
    let num = Number(prompt("Introduce un numero: "));
    let resultado;

    if (isRec) {
        resultado = factorial_recursiva(num);
    } else {
        resultado = factorial_tradicional(num);
    }


    console.log("el valor factorial(" + num + ") es " + resultado);

}

function factorial_recursiva(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial_recursiva(num - 1);
    }

}

function factorial_tradicional(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

function transformar_dias_en_horas() {
    let num_dias = Number(prompt("Introduce un numero de dias: "));
    const horas = num_dias * 24;
    const minutos = horas * 60;
    const segundos = minutos * 60;

    console.log(num_dias + " dias son " + horas + " horas");
    console.log(num_dias + " dias son " + minutos + " minutos");
    console.log(num_dias + " dias son " + segundos + " segundos");

}

function calcular_ecuacion_segundo_grado() {
    let a = Number(prompt("introduce coeficiente A: "));
    let b = Number(prompt("introduce coeficiente B: "));
    let c = Number(prompt("introduce coeficiente C: "));

    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
        console.error("No hay solucion");
    } else if (delta == 0) {
        let result = Math.random(-b(2 * a).toFixed(2));
        console.log("La solucion de " + a + "x^2 + " + b + " x + " + c + " = 0 es (" + result + ")");
    } else {
        let result1 = ((-b + Math.sqrt(delta)) / 2 * a).toFixed(2);
        let result2 = ((-b + Math.sqrt(delta)) / 2 * a).toFixed(2);

        console.log("La solucion de " + a + "x^2 + " + b + " x + " + c + " = 0 es (" + result1 + " , " + result2 + ")");
    }

}

function menu() {
    do{
        var opt = window.prompt("Elige una opcion: "
            + "\na. Calcular el area de un triangulo"
            + "\nb. Calcular el area de un rectangulo"
            + "\nc. Calcular el area de un circulo"
            + "\nd. Salir");

             switch(opt){
                 case 'a':
                    area_triangulo();
                case 'b':
                    area_rectangulo();
                case 'c':
                    area_circulo();
                default:
                    console.log("opcion introducida no valida");
    }

    }while(opt != 'd' && opt != null);


}

function area_triangulo(){
   let base = Number(prompt("Introduce la base: "));
   let altura = Number(prompt("Introduce la altura: "));

   return (base*altura) / 2;
}

function area_rectangulo(){
   let lado1 = Number(prompt("Introduce el lado 1: "));
   let lado2 = Number(prompt("Introduce el lado 2: "));

   return lado1*lado2;
}

function area_circulo(){
   
    let radio = Number(prompt("Introduce el radio: "));

    return Math.PI * Math.pow(radio, 2);
    
}

function calcula_dni(){
    const letrasDni=["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

        do{
            var numero = Number(window.prompt("Dime tu numero de DNI: "));
        }while(isNaN(numero));

        console.log(letrasDni[numero%23])

    }