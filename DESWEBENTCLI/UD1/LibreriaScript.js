// Ejercicio 1
function saludar(){
    var edad = window.prompt('Introduce tu edad');
    if(edad = 18){
        console.log('Eres mayor de edad');
    }else{
        console.log('Eres menor de edad')
    }
   } 

   // Ejercicio 2
   function pintarRuta(){
    console.log("El acceso a la ruta C:\\\\usuario\\tarda 1´23'', algo considerado \"lento\" en la actualidad")
   }

   // Ejercicio 3
   function pintarRutaV2(){

    var substrng1 = "El acceso a la ruta C:\\\\usuario\\tarda 1´23'' ";
    var substrng2 = ", algo considerado \"lento\" en la actualidad";

    console.log(substrng1 + substrng2);

   }
    // Ejercicio 4
    function muestra_potencia(){
        var num = 2* Math.pow(10,-9);
        console.log("El valor de la cuenta es: " + num);
    }

    // Ejercicio 5
    function distintas_bases(num){
        // Transforma numero a binario
        var numDecimal = num.toString(2);
        console.log("El numero en binario es: " + numDecimal);
    }