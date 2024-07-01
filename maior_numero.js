 const prompt  = require('prompt-sync')();

let numeros= prompt("digite um numero: ")

numeros=  numeros.split("")

let aux;
 
 for (let c = 0; c <numeros.lenght; c++) {
    for(let i= c+1; i<numeros.lenght; i++){
        if ( numeros[i] > numeros[c]){
            aux = numeros[c];
            numeros[c]=numeros [i]
            numeros[i]=aux
        }
    }
}
numeros=numeros.join("")
console.log("O maior numero feito com algarismos do numero digitado é: "+ numeros)

