// Colorines para el css

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

// Variables globales

var iniciado = false;
var nombre;
var edad;
var puntos = 0;
var tiradas = 0;

var valorMaximo = 0;
var valorMinimo = 0;

const startTime = Date.now();



function menu() {
    do {
        var opt = window.prompt("Elige una opcion: "
            + "\na. Iniciar juego"
            + "\nb. Lanzar dado"
            + "\nc. Mostrar estadisticas de juego"
            + "\nd. Salir");

        switch (opt) {
            case 'a':
                console.log("Iniciando el juego...");
                iniciar_juego();
                iniciado = true;
                break;
            case 'b':
                if (!iniciado) {
                    console.error("Tienes que seleccionar primero la opcion a.");
                } else {
                    console.log("Lanzando dados...");
                    lanzar_dados();
                }
                break;
            case 'c':
                if (!iniciado) {
                    console.error("Tienes que seleccionar primero la opcion a.");
                } else {
                    console.log("Mostrando estadisticas...");
                    estadisticas();
                }

                break;
            case 'd':
                console.log("Usted a salido del juego.");
                salir();
            default:
                console.log("Usted a salido");
                

        }

    } while (opt != 'd' && opt != null);

}

function iniciar_juego() {
    nombre = window.prompt("Dime tu nombre: ");
    edad = Number(window.prompt("Dime tu edad: "));
}


function lanzar_dados() {
    var repeticiones = 0;
    

    do {
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;

        if(dado1 > dado2){
            valorMaximo = dado1;
            valorMinimo = dado2;
        }else{
            valorMinimo = dado1;
            valorMaximo = dado2;
        }
      // var dado2 = dado1;

        tiradas++;
        repeticiones++;

        var resultado = dado1 + dado2;
        puntos += resultado;

        console.log("El resultado del primer dado es : " + dado1);
        console.log("El resultado del segundo dado es : " + dado2);
        console.log("El jugador: " + nombre + " ha obtenido " + puntos + " puntos en esta tirada");

        
    }while (dado1 === dado2); 

    if(repeticiones > 3){
        console.log("Mas de 3 duplicados, has perdido.");
        puntos = 0;
    }
    

}

function estadisticas() {

    var media = puntos / tiradas;

    window.alert("Se ha tirado en total: " + tiradas);
    window.alert("La media de puntos es: " + media);
    window.alert("El valor maximo es: " + valorMaximo + " y el valor minimo es: " + valorMinimo);
    
}

function salir() {
  const tiempoEmpleado = Date.now() - startTime;
  const minutos = Math.floor(tiempoEmpleado / 60000); 
  console.log("Fin del juego. Has estado jugando:"  + minutos + tiempoEmpleado + " segundos");
}
