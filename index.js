//! 1 PRINCIPIO SOLID: Función ejecuta 1 y solo 1 cosa 
//! ECMASCRIPT: Encrgado de establecer las reglas para JAVASCRIPT (ES6)
//! Lenguaje de DEBIL TIPADO

function compareAndReturnGreater(number1,number2){
    // if(a>b){
    //     return a;
    // }else{
    //     if(b>a){
    //         return b
    //     }else{
    //         return 'these are equals'
    //     }
    // }

    //! A - example - master

    //! IF RESUMIDO: IF TERNARIO
    //! CONDICION ? accion1(if) : acction2 (else)
    return number1>number2 ?  number1 : ( number2>number1 ? number2 : 'are equals' );    

}

const greater =  compareAndReturnGreater(5,7);

alert( greater );