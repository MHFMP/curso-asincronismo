//Callback

function suma(valUno, valDos){
    return valUno + valDos;
}

function calc (num1, num2, callback){
    return callback(num1, num2);

}

console.log(calc(2,2,suma));

//Set timeout

setTimeout( (num1, num2, resultado) => {
    console.log("Hello World")

    num1 = 43, num2 = 20;

    resultado = num1 + num2;

    console.log(resultado);
}, 2000)

function saludo(nombre){
    console.log(`Hola ${nombre}`);
}

setTimeout(saludo, 2000, "mateo");