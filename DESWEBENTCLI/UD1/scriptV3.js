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

function contar() {
    let numero = Number(prompt("Dame un numero"));
    let cifras = 0;
    let contador = 0;

    if (isNaN(numero)) {
        console.error("El numero que has introducido no es valido");

    } else {
        cifras = Math.abs(numero);
    }

    while (cifras >= 1) {
        cifras = Math.floor(cifras / 10);
        contador++;
    }

    console.log("El numero de cifras es: " + contador);
}

function pintar() {
    let n = Number(prompt("Dime los puntos para el tamaño"));

    let triangulo = " ";

    for (let i = 1; i <= n; i++) {
        triangulo += "\n";
        triangulo += ' '.repeat(n - i);
        triangulo += '* '.repeat(i);
    }
    console.log(triangulo);
}

/*

    // Otra opcion

    //Pintamos espacios
         for(let j = 0; j < n - i; j++){
                triangulo += " ";
            }

    //Pintamos asteriscos
        for(let k = 0; k < (2 * i - 1); k++){
            triangulo += "*";
         }
*/

function menu() {

    var numeros = [];
    do {
        var opt = window.prompt("Elige una opcion: "
            + "\na. Iniciar juego"
            + "\nb. Lanzar dado"
            + "\nc. Mostrar estadisticas de juego"
            + "\nd. Salir");
        switch (opt) {
            case 'a':
                meter_numeros();
                break;
            case 'b':
                calcular_max();
                break;
            case 'c':
                calcular_min();
                break;
            case 'd':
                salir();
                break;
            default:
                console.error("Valor no valido");

        }
    } while (opt.toLowerCase() != 'd' && opt != null)

}
function meter_numeros() {
    var numero = Number(prompt("Introduce el numero: "));
}


function salir() {
    console.log("Usted ha salido");
}

function es_bisiesto() {
    let ano = Number(prompt("Dime el año: "));

    if (isNaN(ano)) {
        console.error("Lo que has introducido no es un numero.");
    }
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log("El año es bisiesto");
    } else {
        console.log("El numero no es bisiesto");
    }
}

function nota() {
    let nota = Math.floor(Number(prompt("Dime la nota")));
    switch (true) {
        case nota < 5:
            console.log("Suspenso.");
            break;
        case nota < 6:
            console.log("Suficiente.");
            break;
        case nota < 7:
            console.log("Bien.");
            break;
        case nota < 9:
            console.log("Notable.");
            break;
        case nota <= 10:
            console.log("Sobresaliente.");
            break;
        default:
            console.error("Numero no permitido");
            break;
    }
}

// Recursivo

function suma(){
    if(n <= 0){
        return 0;
    }else{
        return n + suma(n - 1);
    }
    
}

var palabras = "abcdefghijklmñopqrstuvwxyz";
var caracteres = "123456789()/=*#?";

function contraseña(fuerte){
    let caracteres_disponibles;
    let contraseña = "";
    let longitud = Number(prompt("Introduce longitud de la contraseña"));

    // Si es fuerte o debil
    if(fuerte){
        caracteres_disponibles = palabras + caracteres;
    }else{
        caracteres_disponibles = palabras;
    }

    for(let i = 0; i < longitud; i++){
        let indice_aleatorio = Math.floor(Math.random() * caracteres_disponibles.length());
        contraseña = contraseña + caracteres_disponibles.charAt(indice_aleatorio);
    }
    console.log(" La contraseña generada es: " +  contraseña);
    return contraseña;

}