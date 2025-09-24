
// Ejercicio inventado por octavio. 

// Calcula la secuencia de fibonachi atendiendo a la formula

function fibonachi() {

}

function colores() {
    let colores = [
        "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#E3BAFF", "#FFB3E6", "#FFD6E0", "#D6FFD6", "#FFF5BA",
        "#C7CEEA", "#F6EAC2", "#F2C6DE", "#B5EAD7", "#E0BBE4", "#FEC8D8", "#FAE1DD", "#FCD5CE", "#FFDAC1", "#E2F0CB",
        "#FFB347", "#FDFD96", "#AEC6CF", "#77DD77", "#CFCFC4", "#F49AC2", "#CB99C9", "#B39EB5", "#FF6961", "#FFD1DC",
        "#FFCBF2", "#F3C4FB", "#ECBCFD", "#E5B3FE", "#D0BFFF", "#C8C2FF", "#B8C0FF", "#BBD0FF", "#A3C4F3", "#90DBF4"

    ];

    let ejercicios = document.getElementsByClassName("ejercicio");

    window.onload = function() {
        for(let i = 0; i < ejercicios.length; i++){
            let colorAleatorio = Math.random() * colores.length;
            ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
        }
    }
};