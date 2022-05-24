const numInt = [
    /* indice 0 */14, 
    /* indice 1 */45, 
    /* indice 2 */78, 
    /* indice 3 */96, 
    /* indice 4 */56, 
    /* indice 5 */85, 
    /* indice 6 */102, 
    /* indice 7 */145, 
    /* indice 8 */231, 
    /* indice 9 */641, 
    /* indice 10 */15, 
    /* indice 11 */2, 
    /* indice 12 */26]
let somma = 0;
console.log(numInt)

for (i = 0; i < numInt.length; i++){
    if (i % 2 === 1){
        somma = somma + numInt[i];
    } 
}

console.log(somma);