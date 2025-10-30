function cambiar_titulo(){
    let titulo : string = prompt("Introduce un nuevo titulo:") as string;
    console.log(titulo);

    let nodoTitulo : HTMLHeadingElement = document.getElementById("titulo") as HTMLHeadingElement;

    nodoTitulo.textContent = titulo;

}

function cambiar_fondo(){
    //Diferentes tipos para rescatar el body
    // Por defecto, el DOM ya tiene un atributo que representa el body
    let body : HTMLBodyElement = document.body as HTMLBodyElement;

    // //Otra forma
    // let body2 : HTMLBodyElement = document.getElementById("cuerpo") as HTMLBodyElement;

    // //Tercera forma
    // let body3 : HTMLBodyElement = document.getElementsByTagName("body")[0] as HTMLBodyElement;

    if(body.style.backgroundColor == "white"){

        body.style.backgroundColor = "black";
        body.style.color = "white";

    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
    

}

function analiza_edad(){
    let input : HTMLInputElement= document.getElementById("edad") as HTMLInputElement;
    let edad : number = Number(input.value);
    console.log(edad);
    
    //Creamos lista "ol"
    let lista = document.getElementById("creacion") as HTMLOListElement;

    // Cambiar el estilo de letra a oscura
    lista.style.fontWeight = "bold";

    //Color en verde
    lista.style.color = "green";
    lista.type = "a";

    //Contenido html anidado dentro de un elemento
    lista.innerHTML = "";

    //Creamos lista para poner mayor o menos ( primer hijo )
    let mayorMenor : HTMLLIElement = document.createElement("li") as HTMLLIElement;

    //Comprobar la edad con ternario
    mayorMenor.textContent = edad > 18? "Eres mayor" : "Eres menor"

    //Calcular pay e impar
    let parImpar : HTMLLIElement = document.createElement("li") as HTMLLIElement;
    
    parImpar.textContent = edad %2 == 0? "Es par" : "Es impar"

    //Calcular divisores edad

    // Los divisores se inician vacio
    let divisores : string = "";

    //Calcular divisores con un for
    for( let i = 1; i < edad; i++){
        if(edad % i == 0){
            divisores += i + ", ";
        }
    }

    //Creamos en el DOM la lista de divisores
    let listDivisores : HTMLLIElement = document.createElement("li") as HTMLLIElement;

    //Pintamos en esa lista los divisores
    listDivisores.textContent = divisores;


    //Clasificar edad
    let randoEdad = ""; // No puede ser undefined ( o es nulo o es vacio )
    switch(true){
        case edad >= 0 && edad < 15:
            randoEdad = "Niño";
            break;
        case edad >= 15 && edad < 30:
            randoEdad = "Joven";
            break;
        case edad >= 30 && edad < 60:
            randoEdad = "Adulto";
            break;
        case edad >= 60:
            randoEdad = "Mayor";
            break;
        default:
            console.error("Edad no valida");
    }

    let edadTexto : HTMLLIElement = document.createElement("li") as HTMLLIElement;
    edadTexto.textContent = randoEdad;




    // Añadir hijo a la lista "OL"
    lista.appendChild(mayorMenor);

    // Añadir hijo a la lista "OL"
    lista.appendChild(parImpar);
    
    // Añadir hijo a la lista "OL"
    lista.appendChild(listDivisores);
    
    // Añadir hijo a la lista "OL"
    lista.appendChild(edadTexto);
    

    // No hace falta si ya esta hecho en el html
    // // Se añade la lista al documento
    // document.body.appendChild(lista);
    
}

function miapp() : void{
    let promp : string = prompt("Dime tu nombre de usuario") as string;

    let nodoParrafo : HTMLParagraphElement = document.getElementById("saludo") as HTMLParagraphElement;
    
    let option : HTMLSelectElement = document.getElementById ("select") as HTMLSelectElement;
    
    nodoParrafo.textContent = "Hola " + promp;
    nodoParrafo.style.color = option.value;
}

function mostrarInfo(){
    console.log("El idioma del navegador es: " + navigator.language);
    console.log("Nombre navegador: " + navigator.userAgent);
    console.log("Ver si tiene cookies o no habilitadas: " + navigator.cookieEnabled);
    console.log("Tamaño alto de la pantalla: " + window.innerHeight);
    console.log("Tamaño ancho pantalla: " + window.innerWidth);
}

function redirec_to(){
    const url = $inputValue("url");
    const regExp = new RegExp("^https:\/\/");

    if(regExp.test(url)){
        window.location.href = url;
    }else{
        $writeNode("error", "La url no es valida");
    }
}

function IrAtras(){
    let atras : HTMLButtonElement = document.getElementById("atras") as HTMLButtonElement;

    window.history.back();
}


function adelante(){
    let adelante : HTMLButtonElement = document.getElementById("adelante") as HTMLButtonElement;

    window.history.forward();
}

function recargar(){
    let recargar : HTMLButtonElement = document.getElementById("recargar") as HTMLButtonElement;

    window.location.reload();
}

function reloj(){
    let reloj = document.getElementById("reloj") as HTMLParagraphElement;
    
    let now = new Date();

    let horas = now.getHours().toString();
    let minutos = now.getMinutes().toString();
    let segundos = now.getSeconds().toString();

    reloj.textContent = horas + ":" + minutos + ":" + segundos;
    // Otra opcion es let now = new Date().toLocaleTimeString();

}

window.onload = () => setInterval(reloj, 1000);

 































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