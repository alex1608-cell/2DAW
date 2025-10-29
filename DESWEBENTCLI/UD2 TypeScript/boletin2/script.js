function cambiar_titulo() {
    var titulo = prompt("Introduce un nuevo titulo:");
    console.log(titulo);
    var nodoTitulo = document.getElementById("titulo");
    nodoTitulo.textContent = titulo;
}
function cambiar_fondo() {
    //Diferentes tipos para rescatar el body
    // Por defecto, el DOM ya tiene un atributo que representa el body
    var body = document.body;
    // //Otra forma
    // let body2 : HTMLBodyElement = document.getElementById("cuerpo") as HTMLBodyElement;
    // //Tercera forma
    // let body3 : HTMLBodyElement = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}
function analiza_edad() {
    var input = document.getElementById("edad");
    var edad = Number(input.value);
    console.log(edad);
    //Creamos lista "ol"
    var lista = document.getElementById("creacion");
    // Cambiar el estilo de letra a oscura
    lista.style.fontWeight = "bold";
    //Color en verde
    lista.style.color = "green";
    lista.type = "a";
    //Contenido html anidado dentro de un elemento
    lista.innerHTML = "";
    //Creamos lista para poner mayor o menos ( primer hijo )
    var mayorMenor = document.createElement("li");
    //Comprobar la edad con ternario
    mayorMenor.textContent = edad > 18 ? "Eres mayor" : "Eres menor";
    //Calcular pay e impar
    var parImpar = document.createElement("li");
    parImpar.textContent = edad % 2 == 0 ? "Es par" : "Es impar";
    //Calcular divisores edad
    // Los divisores se inician vacio
    var divisores = "";
    //Calcular divisores con un for
    for (var i = 1; i < edad; i++) {
        if (edad % i == 0) {
            divisores += i + ", ";
        }
    }
    //Creamos en el DOM la lista de divisores
    var listDivisores = document.createElement("li");
    //Pintamos en esa lista los divisores
    listDivisores.textContent = divisores;
    //Clasificar edad
    var randoEdad = ""; // No puede ser undefined ( o es nulo o es vacio )
    switch (true) {
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
    var edadTexto = document.createElement("li");
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
function miapp() {
    var promp = prompt("Dime tu nombre de usuario");
    var nodoParrafo = document.getElementById("saludo");
    nodoParrafo.textContent = "Hola " + promp;
    var opcion = document.getElementById("value");
    var valor = opcion.value;
    console.log(valor);
}
