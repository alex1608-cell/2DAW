// Ejercicio 1

function horas(): void {

    // No existe 'date' primitivo
    let fecha: Date = new Date();
    console.log("Hola es: " + fecha.getDate() + " / " + (fecha.getMonth() + 1) + " / " + fecha.getFullYear())

    console.log("Son las: " + fecha.getHours() + " : " + fecha.getMinutes() + " : " + fecha.getMilliseconds());

    console.log("La hora anterior es: " + (fecha.getHours() - 1));
    console.log("La hora posterior es: " + (fecha.getHours() + 2));
}


// Ejercicio 2

// [^\s@] -> Texto sin espacio

function valida_form(){

    const regExp = new RegExp("[^\s@]+@+[^\s@]+\.+[^\s@]+$"); // Con fallos ( hay que solucionar)

    // Rescatamos las partes ( nodos ) necesarios.
    const parrafoOk = document.getElementById("ok") as HTMLElement; //Escritura

    const parrafoError = document.getElementById("error") as HTMLElement; //Escritura


    //Aplico la validacion ( $inputValue me da el valor del "email") y miro con el $writeNode si es valido o no ( rudimentario )
    if(regExp.test($inputValue("email"))){
        
       $writeNode("ok", "Email valido");
       $writeNode("error", "");

    }else{
        $writeNode("ok", "");
        $writeNode("error", "Email no valido");
    }
}

//Ejercicio 3

function ej3(){
   let ventanaNueva =  window.open("https:www.google.es", "miVentana");

   ventanaNueva?.document.write("HOLA");
}

//NO SE PUEDE HACER

// Actividad 4 Y 5

function redirect_to() : any{

    const url = $inputValue("url");
    const regExp = new RegExp("^https:\/\/");

    if(regExp.test(url)){
        window.location.href = url;
    }else{
        $writeNode("error2", "Introduzca url valida porfis")
        setTimeout(() => $writeNode("error2", ""), 5000);
    }
    
}


// Helpers ( comunes para todo el boletin.SIEMPRE EMPIEZAN POR DOLAR) (AQUI PILLAN EL VALOR DEL INPUT Y EL WRITE NODE ESCRIBE EL MENSAJE )

function $inputValue(id: string) : string{
    
    const input = document.getElementById(id) as HTMLInputElement; // Lectura

    let result = "";
    
    if(input){
        result = input.value; // Aqui leo el valor
    }
    return result;
}

function $writeNode(id: string, msg: string) : void{
  
    const nodo = document.getElementById(id) as HTMLElement; //Escritura

    if(nodo){
        nodo.textContent = msg
    }
    
}

// Funciones flecha

function suma1 (a: number, b: number) : number{
    const result = a + b;
    return result;
}

const suma2 = (a: number, b: number) => a+b; // Funcion flecha

suma1(5,5);
suma2(1,2);


// funciones pre-definidas de Js de flechas-> filter, reduce, foreach, map

// 1.-- Filter(recibe y aplica una condicion)
const arrayPrueba = [2,4,5,6,8,10];

// Forma antigua
const arrayMayorCinco = [];

for(let i = 1; i < arrayPrueba.length; i++){
    if(arrayPrueba[i] > 5){
        arrayMayorCinco.push(arrayPrueba[i]);
    }
}

// Forma mejor y mas moderna del filter

const arrayMayorCinco2 = arrayPrueba.filter(data => data > 5);

console.log(arrayMayorCinco);
console.log(arrayMayorCinco2);

//2.-- Map
const arrayDoble = [];

for(let i = 0; i < arrayPrueba.length; i++){
    arrayDoble.push(arrayPrueba[i] * 2);
}

// Mejor y mas simple

const arrayDoble2 = arrayPrueba.map(data => data*2);

console.log(arrayDoble);
console.log(arrayDoble2);

// 2.a.-- Combo entre filter y map ( filtrado y transformacion)
const arrayMayorCincoYDoble = arrayPrueba
.filter(data => data > 5)
.map(data => data*2)


//3.-- Resume ( resumen )
//Originalmente

let total1 = 0;
for(let i = 0; i < arrayPrueba.length; i++){
    total1 += arrayPrueba[i];
}

//Forma mas moderna( si no se pone nada al final, por defecto es 0)
const total2 = arrayPrueba.reduce((acc, data) => acc + data, 0);

console.log(total1);
console.log(total2);

// 4.--  Foreach
for(let i = 1; i < arrayPrueba.length; i++){
    console.log("Este es el elemento " + (i + 1) + ": " + arrayPrueba[i]);
}

// const arrayPrueba.forEach((data, i) => console.log("Este es el elemento " + (i + 1) + ": " + data));

//5.-- Some
console.log(arrayPrueba.some(data => data > 8));

//6.-- Every
console.log(arrayPrueba.every(data => data > 0));


// Funcion propia donde recibe por parametros una funcion

function resuelve_suma(callback : ( a:number, b:number) => number, a:number, b:number) : number{
    console.log("Aqui todavia no he calculado la suma");
    const suma = callback(a,b);
    console.log("Aqui ya se ha calculado y es. " + suma);
    return suma;
}
console.log(resuelve_suma(a,b)=> a/b, 10, 5);
 