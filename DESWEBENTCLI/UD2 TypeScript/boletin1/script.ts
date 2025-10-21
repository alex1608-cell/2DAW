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


// Helpers ( comunes para todo el boletin.SIEMPRE EMPIEZAN POR DOLAR) (AQUI PILLAN EL VALOR DEL INPUT Y EL WRITE NODE ESCRIBE EL MENSAJE )

function $inputValue(id: string) : string{
    
    const input = document.getElementById(id) as HTMLInputElement; // Lectura0
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

 